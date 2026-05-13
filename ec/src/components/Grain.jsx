import React, { useEffect, useRef } from 'react'

export default function Grain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const draw = () => {
      const W = window.innerWidth, H = window.innerHeight
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W; canvas.height = H
      }
      const imageData = ctx.createImageData(W, H)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() * 255
        data[i] = val; data[i+1] = val; data[i+2] = val
        data[i+3] = Math.random() * 18
      }
      ctx.putImageData(imageData, 0, 0)
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 999, opacity: 0.35,
        mixBlendMode: 'overlay',
      }}
    />
  )
}
