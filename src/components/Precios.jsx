import React, { useRef } from 'react'
import useAnimateIn from '../hooks/useAnimateIn'

const G = '#c9a84c'

const planes = [
  { name: 'Plan Conservador', range: '5–7% anual estimado', featured: false, emoji: '🛡️', desc: 'Ideal para empezar con calma y proteger tu capital.', prices: [{ c: '1.000 – 2.500€', p: '4€/mes' }, { c: '2.500 – 3.500€', p: '6€/mes' }, { c: '+3.500€', p: '8€/mes' }] },
  { name: 'Plan Moderado', range: '8–12% anual estimado', featured: true, emoji: '⚖️', desc: 'El equilibrio perfecto entre crecimiento y estabilidad.', prices: [{ c: '1.000 – 2.500€', p: '6€/mes' }, { c: '2.500 – 3.500€', p: '8€/mes' }, { c: '+3.500€', p: '11€/mes' }] },
  { name: 'Plan Agresivo', range: '12–18% anual estimado', featured: false, emoji: '🚀', desc: 'Para inversores con horizonte largo y mayor tolerancia al riesgo.', prices: [{ c: '1.000 – 2.500€', p: '10€/mes' }, { c: '2.500 – 3.500€', p: '13€/mes' }, { c: '+3.500€', p: '16€/mes' }] },
  { name: 'Plan Flexible', range: 'Solo pagas si ganas', featured: false, emoji: '🎯', desc: 'Sin cuota fija. Comisión solo sobre beneficios generados.', prices: [{ c: '1.500 – 3.000€', p: '25% beneficios' }, { c: '3.000 – 5.000€', p: '20% beneficios' }, { c: '+5.000€', p: '15% + 5€/mes' }] },
]

const includes = ['Diseño de cartera personalizada', 'Informe mensual completo', 'Explicación de cada movimiento', 'Acompañamiento por WhatsApp', 'Ajustes mensuales según el mercado', 'Recomendación de inversión mensual', 'Estrategia enfocada 100% en largo plazo']

const Row = ({ c, p, last }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.45rem 0', borderBottom: last ? 'none' : '1px solid #1a1a1a', fontSize: '0.82rem' }}>
    <span style={{ color: '#8a8a8a' }}>{c}</span>
    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>{p}</span>
  </div>
)

export default function Precios() {
  const titleRef = useAnimateIn(0)
  const inclRef = useAnimateIn(150)
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section id="precios" style={{ padding: '6rem 0 6rem' }}>
      <div style={{ padding: '0 2.5rem' }}>
        <div ref={titleRef}>
          <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: G, marginBottom: '1rem' }}>Planes y precios</div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>Elige tu plan</div>
          <p style={{ color: '#8a8a8a', fontSize: '1rem', maxWidth: 520, lineHeight: 1.8, marginBottom: '2rem' }}>Tu cuota se adapta a tu capital y objetivo. Siempre pagas mucho menos de lo que ganarías.</p>
          {/* Flechas carrusel */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
            {['←', '→'].map((arrow, i) => (
              <button key={arrow} onClick={() => scroll(i === 0 ? -1 : 1)} style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid #2a2a2a', background: 'transparent', color: '#8a8a8a', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = G; e.currentTarget.style.color = G }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#8a8a8a' }}>
                {arrow}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carrusel horizontal */}
      <div ref={scrollRef} style={{ display: 'flex', gap: '1.2rem', overflowX: 'auto', padding: '0 2.5rem 1.5rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`.scroll-hide::-webkit-scrollbar { display: none; }`}</style>
        {planes.map((plan, i) => (
          <div key={plan.name}
            style={{ background: '#111', border: plan.featured ? `1px solid rgba(201,168,76,0.45)` : '1px solid #1e1e1e', borderRadius: '1.5rem', padding: '2rem', minWidth: 260, flexShrink: 0, transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s', position: 'relative' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = plan.featured ? '0 20px 40px rgba(201,168,76,0.15)' : '0 20px 40px rgba(0,0,0,0.3)'; if (!plan.featured) e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; if (!plan.featured) e.currentTarget.style.borderColor = '#1e1e1e' }}>
            {plan.featured && <div style={{ background: `linear-gradient(135deg, ${G}, #a8832a)`, color: '#0a0a0a', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.8rem', borderRadius: '2rem', display: 'inline-block', marginBottom: '0.8rem', fontWeight: 700 }}>Más popular</div>}
            <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{plan.emoji}</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>{plan.name}</div>
            <div style={{ fontSize: '0.78rem', color: G, marginBottom: '0.6rem' }}>{plan.range}</div>
            <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.6, marginBottom: '1.2rem' }}>{plan.desc}</p>
            <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '1rem' }}>
              {plan.prices.map((r, i) => <Row key={i} c={r.c} p={r.p} last={i === plan.prices.length - 1} />)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 2.5rem' }}>
        <div ref={inclRef}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1rem', marginBottom: '1.2rem' }}>Incluido en todos los planes</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '0.5rem', marginBottom: '2rem' }}>
            {includes.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.6rem 0', fontSize: '0.87rem', color: '#8a8a8a' }}>
                <span style={{ color: G, flexShrink: 0 }}>✓</span>{item}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.77rem', color: '#444', fontStyle: 'italic', borderLeft: '2px solid #1e1e1e', paddingLeft: '1rem', lineHeight: 1.7 }}>
            Los porcentajes de rentabilidad mostrados son estimaciones basadas en escenarios proyectados. Toda inversión conlleva riesgo y no existe una rentabilidad exacta o garantizada.
          </p>
        </div>
      </div>
    </section>
  )
}
