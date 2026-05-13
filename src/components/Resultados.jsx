import React, { useState } from 'react'
import useAnimateIn from '../hooks/useAnimateIn'

const G = '#c9a84c'

const datos = [
  { periodo: 'Jul 2024', rentabilidad: 2.1, acumulado: 2.1 },
  { periodo: 'Ago 2024', rentabilidad: 1.8, acumulado: 3.9 },
  { periodo: 'Sep 2024', rentabilidad: 3.2, acumulado: 7.1 },
  { periodo: 'Oct 2024', rentabilidad: 2.4, acumulado: 9.5 },
  { periodo: 'Nov 2024', rentabilidad: 4.1, acumulado: 13.6 },
  { periodo: 'Dic 2024', rentabilidad: -1.2, acumulado: 12.4 },
  { periodo: 'Ene 2025', rentabilidad: -3.8, acumulado: 8.6 },
  { periodo: 'Feb 2025', rentabilidad: -0.9, acumulado: 7.7 },
  { periodo: 'Mar 2025', rentabilidad: -1.4, acumulado: 6.3 },
  { periodo: 'Abr 2025', rentabilidad: 8.2, acumulado: 14.5 },
  { periodo: 'May 2025', rentabilidad: 11.3, acumulado: 25.8 },
]

const posiciones = [
  { nombre: 'Novo-Nordisk', rentabilidad: 22.84, color: '#4ade80' },
  { nombre: 'IREN', rentabilidad: 19.95, color: '#4ade80' },
  { nombre: 'Amazon', rentabilidad: 19.94, color: '#4ade80' },
  { nombre: 'Oracle', rentabilidad: 18.72, color: '#4ade80' },
  { nombre: 'Xiaomi', rentabilidad: 18.55, color: '#4ade80' },
]

export default function Resultados() {
  const [tab, setTab] = useState('grafico')
  const titleRef = useAnimateIn(0)
  const contentRef = useAnimateIn(150)

  // SVG chart
  const W = 560, H = 160, PX = 10, PY = 10
  const maxV = Math.max(...datos.map(d => d.acumulado))
  const minV = Math.min(...datos.map(d => d.acumulado), 0)
  const range = maxV - minV || 1
  const tx = (i) => PX + (i / (datos.length - 1)) * (W - PX * 2)
  const ty = (v) => H - PY - ((v - minV) / range) * (H - PY * 2)
  const path = datos.map((d, i) => `${i === 0 ? 'M' : 'L'}${tx(i)},${ty(d.acumulado)}`).join(' ')
  const area = path + ` L${tx(datos.length-1)},${H-PY} L${PX},${H-PY} Z`
  const zeroY = ty(0)

  return (
    <section id="resultados" style={{ padding: '6rem 2.5rem', borderTop: '1px solid #1e1e1e' }}>
      <div ref={titleRef}>
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: G, marginBottom: '1rem' }}>Transparencia total</div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Mi cartera real</div>
        <p style={{ color: '#8a8a8a', fontSize: '1rem', maxWidth: 560, lineHeight: 1.8, marginBottom: '2rem' }}>
          Comparto la evolución real de mi propia cartera. Sin filtros, incluyendo los meses negativos. La transparencia es parte de mi forma de trabajar.
        </p>

        {/* Stats rápidos */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Rentabilidad total', val: '+25,83%', sub: 'desde julio 2024' },
            { label: 'Último año', val: '+20,93%', sub: 'jun 2024 – may 2025' },
            { label: 'Último mes', val: '+25,20%', sub: 'abril – mayo 2025' },
            { label: 'Posiciones activas', val: '5', sub: 'cartera diversificada' },
          ].map(s => (
            <div key={s.label} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '1rem', padding: '1.2rem 1.5rem', flex: '1', minWidth: 130 }}>
              <div style={{ fontSize: '0.72rem', color: '#8a8a8a', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>{s.label}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: G }}>{s.val}</div>
              <div style={{ fontSize: '0.72rem', color: '#555', marginTop: '0.2rem' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          {[['grafico', 'Evolución'], ['posiciones', 'Posiciones']].map(([key, label]) => (
            <button key={key} onClick={() => setTab(key)} style={{ padding: '0.5rem 1.2rem', borderRadius: '2rem', fontSize: '0.82rem', fontWeight: 500, border: tab === key ? `1px solid ${G}` : '1px solid #2a2a2a', background: tab === key ? 'rgba(201,168,76,0.1)' : 'transparent', color: tab === key ? G : '#8a8a8a', cursor: 'pointer', transition: 'all 0.2s' }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div ref={contentRef}>
        {tab === 'grafico' && (
          <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '1.5rem', padding: '2rem' }}>
            <div style={{ fontSize: '0.78rem', color: '#8a8a8a', marginBottom: '1.5rem' }}>Rentabilidad acumulada desde julio 2024</div>
            <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', overflow: 'visible' }}>
              <defs>
                <linearGradient id="rGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Línea cero */}
              <line x1={PX} y1={zeroY} x2={W-PX} y2={zeroY} stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4 3" />
              <path d={area} fill="url(#rGrad)" />
              <path d={path} fill="none" stroke={G} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {/* Puntos */}
              {datos.map((d, i) => (
                <circle key={i} cx={tx(i)} cy={ty(d.acumulado)} r="3" fill={d.acumulado >= 0 ? G : '#f87171'} />
              ))}
              {/* Labels eje X */}
              {datos.map((d, i) => {
                if (i % 2 !== 0) return null
                return <text key={i} x={tx(i)} y={H + 6} textAnchor="middle" fill="#444" fontSize="8">{d.periodo.split(' ')[0]}</text>
              })}
            </svg>
            {/* Tabla mensual */}
            <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '0.5rem' }}>
              {datos.map(d => (
                <div key={d.periodo} style={{ background: '#161616', borderRadius: '0.5rem', padding: '0.6rem 0.8rem' }}>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginBottom: '0.2rem' }}>{d.periodo}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: d.rentabilidad >= 0 ? '#4ade80' : '#f87171' }}>
                    {d.rentabilidad >= 0 ? '+' : ''}{d.rentabilidad}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'posiciones' && (
          <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '1.5rem', padding: '2rem' }}>
            <div style={{ fontSize: '0.78rem', color: '#8a8a8a', marginBottom: '1.5rem' }}>Rentabilidad por posición</div>
            {posiciones.map((p, i) => (
              <div key={p.nombre} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem 0', borderBottom: i < posiciones.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.9rem', flex: 1 }}>{p.nombre}</div>
                <div style={{ flex: 2 }}>
                  <div style={{ height: 4, background: '#1a1a1a', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(p.rentabilidad / 30) * 100}%`, background: `linear-gradient(to right, ${G}, #4ade80)`, borderRadius: 2, transition: 'width 1s ease' }} />
                  </div>
                </div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#4ade80', minWidth: 60, textAlign: 'right' }}>+{p.rentabilidad}%</div>
              </div>
            ))}
          </div>
        )}

        <p style={{ fontSize: '0.75rem', color: '#333', fontStyle: 'italic', marginTop: '1.5rem', lineHeight: 1.6 }}>
          Datos reales de la cartera personal de Eudald. La rentabilidad pasada no garantiza resultados futuros. Esta información tiene carácter educativo y no constituye asesoramiento financiero.
        </p>
      </div>
    </section>
  )
}
