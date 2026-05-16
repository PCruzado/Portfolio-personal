import { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/* ──────────────────────────────────────────────────────────
   Icosahedron wireframe — the main sculptural element.
   Breathes slowly, reacts to mouse with a smooth tilt.
────────────────────────────────────────────────────────── */
function Icosahedron({ scrollProgress = 0 }) {
  const meshRef = useRef()
  const { mouse, size } = useThree()

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    // Slow breathing rotation
    meshRef.current.rotation.x = t * 0.04 + mouse.y * 0.15
    meshRef.current.rotation.y = t * 0.07 + mouse.x * 0.2

    // Scale up slightly as scroll increases
    const s = 1 + scrollProgress * 0.3
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, s, 0.04))

    // Drift upward on scroll
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      scrollProgress * 2,
      0.05
    )
  })

  return (
    <Float speed={0.5} rotationIntensity={0} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#c4c4cc"
          wireframe={true}
          transparent
          opacity={0.12}
        />
      </mesh>
      {/* Inner solid — barely visible */}
      <mesh>
        <icosahedronGeometry args={[1.58, 1]} />
        <meshStandardMaterial
          color="#18181c"
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

/* ──────────────────────────────────────────────────────────
   Particle field — dots orbiting in a ring.
────────────────────────────────────────────────────────── */
function Particles({ count = 200 }) {
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 2.2 + Math.random() * 1.2
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03
    pointsRef.current.rotation.x = clock.getElapsedTime() * 0.015
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#8a8a96"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

/* ──────────────────────────────────────────────────────────
   Scene3D — exported canvas component.
   Pass scrollProgress (0–1) from parent to animate on scroll.
────────────────────────────────────────────────────────── */
export default function Scene3D({ scrollProgress = 0, style = {} }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent', ...style }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]}  intensity={0.6} color="#f5f5f7" />
        <directionalLight position={[-5,-3,-5]} intensity={0.2} color="#c4b89a" />
        <Icosahedron scrollProgress={scrollProgress} />
        <Particles count={180} />
      </Suspense>
    </Canvas>
  )
}
