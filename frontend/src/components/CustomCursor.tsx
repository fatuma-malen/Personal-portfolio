import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    const move = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      ring.style.transform = `translate3d(${x - 18}px, ${y - 18}px, 0)`
      dot.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`
    }

    const onDown = () => {
      ring.classList.add('cursor-down')
    }
    const onUp = () => {
      ring.classList.remove('cursor-down')
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden />
    </>
  )
}
