import React, { useState, useEffect } from 'react'

const G = '#c9a84c'
const WA = '34662558710'

export default function ExitPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (e.clientY <= 10 && !dismissed) setShow(true)
    }
    document.addEventListener('mouseleave', handler)
    return () => document.removeEventListener('mouseleave', handler)
  }, [dismissed])

  const close = () => { setShow(false); setDismissed(true) }

  if (!show) return null

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9998, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', backdropFilter: 'blur(8px)' }}
      onClick={close}>
      <div style={{ background: '#111', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '1.5rem', padding: '3rem', maxWidth: 480, width: '100%', position: 'relative', animation: 'fadeUp 0.4s ease' }}
        onClick={e => e.stopPropagation()}>
        <button onClick={close} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', color: '#555', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.8rem', lineHeight: 1.1 }}>
          Antes de irte...
        </div>
        <p style={{ color: '#8a8a8a', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          La sesión inicial es <strong style={{ color: '#fafaf8' }}>completamente gratuita</strong>. 20 minutos por WhatsApp donde te explico cómo lo haría yo con tu situación.
        </p>
        <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '1rem', padding: '1rem 1.2rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.82rem', color: '#8a8a8a', lineHeight: 1.7 }}>
            ✓ Sin compromiso<br />
            ✓ 20 minutos por WhatsApp<br />
            ✓ Te cuento cómo construiría tu cartera
          </div>
        </div>
        <button
          onClick={() => { window.open(`https://wa.me/${WA}?text=Hola%20Eudald%2C%20me%20gustar%C3%ADa%20reservar%20mi%20sesi%C3%B3n%20gratuita`, '_blank'); close() }}
          style={{ width: '100%', background: `linear-gradient(135deg, ${G}, #a8832a)`, color: '#0a0a0a', padding: '1rem', borderRadius: '2rem', fontSize: '0.95rem', fontWeight: 700, border: 'none', cursor: 'pointer', marginBottom: '0.8rem', transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
          💬 Reservar sesión gratuita →
        </button>
        <button onClick={close} style={{ width: '100%', background: 'transparent', border: 'none', color: '#555', fontSize: '0.82rem', cursor: 'pointer', padding: '0.5rem' }}>
          No me interesa por ahora
        </button>
      </div>
    </div>
  )
}
