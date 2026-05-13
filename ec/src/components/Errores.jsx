import React from 'react'
import useAnimateIn from '../hooks/useAnimateIn'

const G = '#c9a84c'

const errores = [
  { num: '01', error: 'Esperar el momento perfecto', solucion: 'No existe. El mejor momento para invertir es hoy. El tiempo en el mercado siempre supera al timing del mercado.' },
  { num: '02', error: 'Invertir sin diversificar', solucion: 'Un ETF global ya te da exposición a miles de empresas. No pongas todos los huevos en la misma cesta.' },
  { num: '03', error: 'Vender cuando cae el mercado', solucion: 'Las caídas son temporales. Los que vendieron en el crash de 2020 perdieron la mayor subida de la historia.' },
  { num: '04', error: 'No tener plan ni objetivo', solucion: 'Antes de invertir, define para qué y en cuánto tiempo. Eso determina qué estrategia usar.' },
  { num: '05', error: 'Invertir dinero que puedes necesitar', solucion: 'Primero un fondo de emergencia de 3-6 meses de gastos. Luego inviertes con lo que no vas a necesitar.' },
  { num: '06', error: 'Pagar comisiones altísimas', solucion: 'Un fondo activo con 1.5% de comisión puede costarte miles de euros a largo plazo. Los ETFs cobran 0.05-0.2%.' },
]

export default function Errores() {
  const ref = useAnimateIn(0)
  return (
    <section id="errores" style={{ padding: '6rem 2.5rem', background: '#0d0d0d', borderTop: '1px solid #1e1e1e' }}>
      <div ref={ref}>
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: G, marginBottom: '1rem' }}>Educación financiera</div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>Errores típicos del inversor novato</div>
        <p style={{ color: '#8a8a8a', fontSize: '1rem', maxWidth: 520, lineHeight: 1.8, marginBottom: '3rem' }}>Los errores que veo una y otra vez, y cómo evitarlos.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
          {errores.map(e => (
            <div key={e.num} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '1.2rem', padding: '1.8rem', transition: 'border-color 0.3s, transform 0.3s' }}
              onMouseEnter={el => { el.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; el.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={el => { el.currentTarget.style.borderColor = '#1e1e1e'; el.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: 'rgba(201,168,76,0.1)', marginBottom: '0.5rem' }}>{e.num}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                <span style={{ color: '#f87171', fontSize: '0.9rem' }}>✕</span>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#fafaf8' }}>{e.error}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#4ade80', fontSize: '0.9rem', flexShrink: 0, marginTop: '0.05rem' }}>✓</span>
                <p style={{ fontSize: '0.84rem', color: '#8a8a8a', lineHeight: 1.7 }}>{e.solucion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
