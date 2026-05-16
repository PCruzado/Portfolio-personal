import { useRef, useState, useEffect } from 'react'

/**
 * useScrollProgress
 * Returns a 0-1 value representing how far through a ref element the user has scrolled.
 * @param {object} options
 *   offset {number} – start tracking when element is this many px from bottom of viewport
 */
export function useScrollProgress(options = {}) {
  const ref      = useRef(null)
  const [progress, setProgress] = useState(0)
  const { offset = 0 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect   = el.getBoundingClientRect()
      const vh     = window.innerHeight
      const start  = vh - offset           // element enters viewport
      const end    = -rect.height          // element fully passed
      const total  = start - end
      const current = start - rect.top
      setProgress(Math.min(1, Math.max(0, current / total)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return { ref, progress }
}

/**
 * useInView
 * Fires once when element enters viewport.
 */
export function useInView(options = {}) {
  const ref    = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold: options.threshold ?? 0.1, rootMargin: options.rootMargin ?? '0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, inView }
}
