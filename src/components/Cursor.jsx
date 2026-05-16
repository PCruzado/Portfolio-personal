import { useCursor } from '../hooks/useCursor'

export default function Cursor() {
  const { dotRef, ringRef, wrapRef } = useCursor()

  return (
    <div ref={wrapRef} className="cursor" aria-hidden="true">
      <div ref={dotRef}  className="cursor__dot" />
      <div ref={ringRef} className="cursor__ring" />
    </div>
  )
}
