import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Scene3D from './Scene3D'
import { identity } from '../models/content.js'

/* ──────────────────────────────────────────────────────────
   RevealWord — splits text into words and staggers them in.
────────────────────────────────────────────────────────── */
function RevealText({ text, className, delay = 0, style = {} }) {
  const lines = text.split('\n')

  return (
    <span className={className} style={{ display: 'block', ...style }}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block', overflow: 'hidden', lineHeight: 1.0 }}>
          {line.split(' ').map((word, wi) => (
            <motion.span
              key={wi}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 1.1,
                delay: delay + li * 0.08 + wi * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: 'inline-block', marginRight: '0.22em' }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const containerRef = useRef(null)

  // Scroll within this section drives the parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

  // Parallax transforms
  const textY       = useTransform(smoothProgress, [0, 1], ['0%',  '30%'])
  const textOpacity = useTransform(smoothProgress, [0, 0.5], [1,    0   ])
  const sceneY      = useTransform(smoothProgress, [0, 1], ['0%', '15%'])
  const sceneScale  = useTransform(smoothProgress, [0, 1], [1,   1.15 ])

  // Raw number for the 3D scene
  const scrollRaw = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      id="top"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* 3D Scene — full background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          y: sceneY,
          scale: sceneScale,
        }}
        aria-hidden="true"
      >
        <Scene3D
          scrollProgress={0}
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Gradient vignette — bottom fade into ink */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% 60%, transparent 40%, var(--ink) 100%),
            linear-gradient(to bottom, transparent 50%, var(--ink) 100%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Text content */}
      <motion.div
        className="wrap"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingBottom: 'clamp(60px, 8vw, 120px)',
          paddingTop: '120px',
          y: textY,
          opacity: textOpacity,
        }}
      >
        {/* Label */}
        <motion.p
          className="t-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ marginBottom: '2rem' }}
        >
          Full-Stack Web Developer — Tucumán, Argentina
        </motion.p>

        {/* Main display title */}
        <h1 aria-label={(identity || {}).tagline || 'Arquitecto de experiencias web de extremo a extremo.'} style={{ marginBottom: '3rem' }}>
          <RevealText
            text={(identity || {}).tagline || 'Arquitecto de experiencias\nweb de extremo a extremo.'}
            className="t-display"
            delay={0.3}
          />
        </h1>

        {/* Bio line */}
        <motion.p
          className="t-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '460px', color: 'var(--stone)' }}
        >
          {(identity || {}).bio || 'Desarrollo aplicaciones web con foco en arquitectura limpia.'}
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '4rem',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '56px',
              background: 'linear-gradient(to bottom, var(--stone), transparent)',
              transformOrigin: 'top',
            }}
          />
          <span className="tag">{(identity || {}).availability || 'Disponible para proyectos'}</span>
          <span className="t-label" style={{ letterSpacing: '0.3em' }}>Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
