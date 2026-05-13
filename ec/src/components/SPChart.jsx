import React, { useEffect, useRef, useState } from 'react'

const G = '#c9a84c'

// S&P 500 datos históricos aproximados (precio fin de año)
const historico = [
  { year: '2000', val: 1320 }, { year: '2001', val: 1148 }, { year: '2002', val: 880 },
  { year: '2003', val: 1111 }, { year: '2004', val: 1211 }, { year: '2005', val: 1248 },
  { year: '2006', val: 1418 }, { year: '2007', val: 1468 }, { year: '2008', val: 903 },
  { year: '2009', val: 1115 }, { year: '2010', val: 1258 }, { year: '2011', val: 1257 },
  { year: '2012', val: 1426 }, { year: '2013', val: 1848 }, { year: '2014', val: 2059 },
  { year: '2015', val: 2044 }, { year: '2016', val: 2239 }, { year: '2017', val: 2674 },
  { year: '2018', val: 2507 }, { year: '2019', val: 3231 }, { year: '2020', val: 3756 },
  { year: '2021', val: 4766 }, { year: '2022', val: 3840 }, { year: '2023', val: 4770 },
  { year: '2024', val: 5882 },
]

export default function SPChart() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true)
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let start = null
    const duration = 2000
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setProgress(p)
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [visible])

  const W = 600, H = 200, PX = 10, PY = 10
  const maxV = Math.max(...historico.map(d => d.val))
  const minV = Math.min(...historico.map(d => d.val))
  const range = maxV - minV
  const visibleCount = Math.floor(progress * historico.length)
  const visibleData = historico.slice(0, Math.max(visibleCount, 1))

  const tx = (i) => PX + (i / (historico.length - 1)) * (W - PX * 2)
  const ty = (v) => H - PY - ((v - minV) / range) * (H - PY * 2)

  const path = visibleData.map((d, i) => `${i === 0 ? 'M' : 'L'}${tx(historico.indexOf(d))},${ty(d.val)}`).join(' ')
  const area = path + ` L${tx(historico.indexOf(visibleData[visibleData.length-1]))},${H-PY} L${PX},${H-PY} Z`

  return (
    <section style={{ padding: '6rem 2.5rem', borderTop: '1px solid #1e1e1e' }} ref={ref}>
      <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: G, marginBottom: '1rem' }}>Evidencia histórica</div>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>El mercado siempre sube a largo plazo</div>
      <p style={{ color: '#8a8a8a', fontSize: '1rem', maxWidth: 520, lineHeight: 1.8, marginBottom: '3rem' }}>
        El S&P 500 ha subido desde 1.320 puntos en 2000 hasta 5.882 en 2024 — un <strong style={{ color: G }}>+346%</strong> incluyendo el crash del 2008 y el COVID.
      </p>
      <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '1.5rem', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontSize: '0.8rem', color: '#8a8a8a' }}>S&P 500 · 2000–2024</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[['2000', '1.320'], ['2024', '5.882'], ['+346%', 'Total']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: G }}>{val}</div>
                <div style={{ fontSize: '0.7rem', color: '#555' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', overflow: 'visible' }}>
          <defs>
            <linearGradient id="spGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
            </linearGradient>
          </defs>
          {visibleData.length > 1 && <path d={area} fill="url(#spGrad)" />}
          {visibleData.length > 1 && <path d={path} fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
          {historico.map((d, i) => {
            if (i % 4 !== 0) return null
            return <text key={i} x={tx(i)} y={H + 6} textAnchor="middle" fill="#444" fontSize="8">{d.year}</text>
          })}
          {/* Crash 2008 */}
          <text x={tx(8)} y={ty(903) - 8} textAnchor="middle" fill="#f87171" fontSize="7">Crisis 2008</text>
          {/* COVID */}
          <text x={tx(20)} y={ty(3756) - 8} textAnchor="middle" fill="#fb923c" fontSize="7">COVID</text>
        </svg>
      </div>
      <p style={{ fontSize: '0.75rem', color: '#333', fontStyle: 'italic', marginTop: '1.5rem', lineHeight: 1.6 }}>
        Datos históricos del índice S&P 500. La rentabilidad pasada no garantiza resultados futuros.
      </p>
    </section>
  )
}
