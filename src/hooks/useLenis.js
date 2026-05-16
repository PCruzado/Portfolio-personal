import { useEffect, useRef } from 'react'

/**
 * useLenis — initializes Lenis smooth scroll.
 * Returns the lenis instance so child components can subscribe.
 * We import Lenis dynamically to avoid SSR issues.
 */
export function useLenis() {
  const lenisRef = useRef(null)

  useEffect(() => {
    let lenis
    let animId

    const init = async () => {
      const { default: Lenis } = await import('lenis')

      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      })

      lenisRef.current = lenis

      function raf(time) {
        lenis.raf(time)
        animId = requestAnimationFrame(raf)
      }
      animId = requestAnimationFrame(raf)
    }

    init()

    return () => {
      cancelAnimationFrame(animId)
      if (lenis) lenis.destroy()
    }
  }, [])

  return lenisRef
}
