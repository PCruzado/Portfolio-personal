import { useEffect, useRef } from 'react'

/**
 * useCursor — tracks mouse position and hover state.
 * Applies classes to cursor elements for mix-blend-mode magic.
 */
export function useCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    const wrap = wrapRef.current
    if (!dot || !ring || !wrap) return

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let animId

    const onMove = ({ clientX: x, clientY: y }) => {
      mx = x; my = y
      dot.style.left = x + 'px'
      dot.style.top  = y + 'px'
    }

    const lerp = (a, b, n) => a + (b - a) * n

    const tick = () => {
      rx = lerp(rx, mx, 0.1)
      ry = lerp(ry, my, 0.1)
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      animId = requestAnimationFrame(tick)
    }

    const onEnter = () => wrap.classList.add('cursor--hover')
    const onLeave = () => wrap.classList.remove('cursor--hover')

    window.addEventListener('mousemove', onMove)
    animId = requestAnimationFrame(tick)

    // Apply hover state to interactive elements
    const els = document.querySelectorAll('a, button, [data-cursor]')
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      els.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return { dotRef, ringRef, wrapRef }
}
