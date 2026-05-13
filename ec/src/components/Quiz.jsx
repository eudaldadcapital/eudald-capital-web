import React, { useState } from 'react'
import useAnimateIn from '../hooks/useAnimateIn'

const G = '#c9a84c'

const preguntas = [
  {
    q: '¿Cuánto capital tienes disponible para invertir?',
    opciones: ['1.000 – 2.500€', '2.500 – 5.000€', '+5.000€'],
  },
  {
    q: '¿Cuánto riesgo estás dispuesto a asumir?',
    opciones: ['Prefiero seguridad', 'Equilibrio riesgo/rentabilidad', 'Máxima rentabilidad posible'],
  },
  {
    q: '¿A qué plazo quieres invertir?',
    opciones: ['Menos de 3 años', '3 – 10 años', 'Más de 10 años'],
  },
]

const resultados = {
  '000': { plan: 'Plan Conservador', desc: 'Perfil defensivo. ETFs de renta fija y baja volatilidad para proteger tu capital.', emoji: '🛡️' },
  '001': { plan: 'Plan Conservador', desc: 'Buen punto de partida. Estrategia de largo plazo con baja exposición al riesgo.', emoji: '🛡️' },
  '010': { plan: 'Plan Moderado', desc: 'Perfil equilibrado. ETFs globales diversificados con crecimiento constante.', emoji: '⚖️' },
  '011': { plan: 'Plan Moderado', desc: 'Excelente combinación. Largo plazo con cartera equilibrada es la clave.', emoji: '⚖️' },
  '100': { plan: 'Plan Moderado', desc: 'Con más capital, el plan moderado maximiza tu rentabilidad con control del riesgo.', emoji: '⚖️' },
  '101': { plan: 'Plan Agresivo', desc: 'Capital sólido y visión larga. El plan agresivo puede multiplicar tu patrimonio.', emoji: '🚀' },
  '110': { plan: 'Plan Agresivo', desc: 'Perfil agresivo con capital para diversificar. ETFs de alto crecimiento.', emoji: '🚀' },
  '111': { plan: 'Plan Agresivo', desc: 'Perfil ideal para máximo crecimiento. Cartera orientada a rentabilidades del 12-18%.', emoji: '🚀' },
}

export default function Quiz() {
  const [paso, setPaso] = useState(0)
  const [respuestas, setRespuestas] = useState([])
  const [resultado, setResultado] = useState(null)
  const ref = useAnimateIn(0)

  const responder = (idx) => {
    const nuevas = [...respuestas, idx]
    if (paso < preguntas.length - 1) {
      setRespuestas(nuevas)
      setPaso(paso + 1)
    } else {
      const key = nuevas.join('')
      setResultado(resultados[key] || resultados['011'])
    }
  }

  const reset = () => { setPaso(0); setRespuestas([]); setResultado(null) }

  return (
    <section id="quiz" style={{ padding: '6rem 2.5rem', background: '#0d0d0d', borderTop: '1px solid #1e1e1e' }}>
      <div ref={ref}>
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: G, marginBottom: '1rem' }}>Descubre tu perfil</div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>¿Qué plan te encaja?</div>
        <p style={{ color: '#8a8a8a', fontSize: '1rem', maxWidth: 480, lineHeight: 1.8, marginBottom: '3rem' }}>3 preguntas rápidas para saber qué estrategia se adapta mejor a ti.</p>

        <div style={{ maxWidth: 600 }}>
          {!resultado ? (
            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '1.5rem', padding: '2.5rem' }}>
              {/* Progress */}
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '2rem' }}>
                {preguntas.map((_, i) => (
                  <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= paso ? G : '#2a2a2a', transition: 'background 0.3s' }} />
                ))}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#555', marginBottom: '1rem' }}>Pregunta {paso + 1} de {preguntas.length}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.4 }}>{preguntas[paso].q}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {preguntas[paso].opciones.map((op, i) => (
                  <button key={i} onClick={() => responder(i)} style={{ background: 'transparent', border: '1px solid #2a2a2a', borderRadius: '0.75rem', padding: '1rem 1.2rem', color: '#fafaf8', fontSize: '0.9rem', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = G; e.currentTarget.style.background = 'rgba(201,168,76,0.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.background = 'transparent' }}>
                    {op}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ background: '#111', border: `1px solid rgba(201,168,76,0.4)`, borderRadius: '1.5rem', padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{resultado.emoji}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: G, marginBottom: '0.8rem' }}>Tu plan: {resultado.plan}</div>
              <p style={{ color: '#8a8a8a', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>{resultado.desc}</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ background: `linear-gradient(135deg, ${G}, #a8832a)`, color: '#0a0a0a', padding: '0.9rem 2rem', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                  Reservar sesión gratuita →
                </button>
                <button onClick={reset} style={{ background: 'transparent', border: '1px solid #2a2a2a', color: '#8a8a8a', padding: '0.9rem 2rem', borderRadius: '2rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                  Repetir quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
