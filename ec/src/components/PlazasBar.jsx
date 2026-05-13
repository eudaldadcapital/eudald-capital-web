import React, { useEffect, useRef, useState } from 'react'

const G = '#c9a84c'

export default function PlazasBar() {
  const [visible, setVisible] = useState(false)
  const [width, setWidth] = useState(0)
  const ref = useRef(null)
  const plazasOcupadas = 8
  const plazasTotal = 10

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); setTimeout(() => setWidth((plazasOcupadas / plazasTotal) * 100), 200) }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ background: '#0d0d0d', borderTop: '1px solid #1e1e1e', borderBottom: '1px solid #1e1e1e', padding: '1.5rem 2.5rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} />
        <span style={{ fontSize: '0.82rem', color: '#8a8a8a' }}>Plazas disponibles este mes</span>
      </div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#555' }}>{plazasOcupadas} de {plazasTotal} plazas ocupadas</span>
          <span style={{ fontSize: '0.75rem', color: G, fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>Solo quedan {plazasTotal - plazasOcupadas}</span>
        </div>
        <div style={{ height: 6, background: '#1a1a1a', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${width}%`, background: `linear-gradient(to right, ${G}, #a8832a)`, borderRadius: 3, transition: 'width 1.2s ease' }} />
        </div>
      </div>
      <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ background: `linear-gradient(135deg, ${G}, #a8832a)`, color: '#0a0a0a', padding: '0.5rem 1.2rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 600, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
        Reservar plaza →
      </button>
    </div>
  )
}
