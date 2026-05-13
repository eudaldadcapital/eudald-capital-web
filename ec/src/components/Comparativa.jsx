import React from 'react'
import useAnimateIn from '../hooks/useAnimateIn'

const G = '#c9a84c'

const datos = [
  { tipo: 'ETFs indexados', rentabilidad: '8–18%', riesgo: 'Medio', liquidez: 'Alta', comisiones: 'Muy bajas', recomendado: true },
  { tipo: 'Depósito bancario', rentabilidad: '2–3%', riesgo: 'Muy bajo', liquidez: 'Baja', comisiones: 'Ninguna', recomendado: false },
  { tipo: 'Inmobiliario', rentabilidad: '4–7%', riesgo: 'Medio-alto', liquidez: 'Muy baja', comisiones: 'Altas', recomendado: false },
  { tipo: 'Criptomonedas', rentabilidad: 'Variable', riesgo: 'Muy alto', liquidez: 'Alta', comisiones: 'Medias', recomendado: false },
  { tipo: 'Fondos gestión activa', rentabilidad: '5–10%', riesgo: 'Medio', liquidez: 'Media', comisiones: 'Altas', recomendado: false },
]

const cols = ['Tipo', 'Rentabilidad est.', 'Riesgo', 'Liquidez', 'Comisiones']

export default function Comparativa() {
  const ref = useAnimateIn(0)
  return (
    <section id="comparativa" style={{ padding: '6rem 2.5rem', borderTop: '1px solid #1e1e1e' }}>
      <div ref={ref}>
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: G, marginBottom: '1rem' }}>Educación financiera</div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>ETFs vs otras inversiones</div>
        <p style={{ color: '#8a8a8a', fontSize: '1rem', maxWidth: 520, lineHeight: 1.8, marginBottom: '3rem' }}>Comparo los principales vehículos de inversión para que entiendas por qué me decanto por los ETFs indexados.</p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
            <thead>
              <tr>
                {cols.map(c => (
                  <th key={c} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.72rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #1e1e1e' }}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {datos.map((d, i) => (
                <tr key={d.tipo} style={{ background: d.recomendado ? 'rgba(201,168,76,0.04)' : 'transparent', transition: 'background 0.2s' }}
                  onMouseEnter={e => !d.recomendado && (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                  onMouseLeave={e => !d.recomendado && (e.currentTarget.style.background = 'transparent')}>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    {d.recomendado && <span style={{ background: `linear-gradient(135deg,${G},#a8832a)`, color: '#0a0a0a', fontSize: '0.6rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '2rem', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>Mi elección</span>}
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: d.recomendado ? 700 : 400, fontSize: '0.9rem', color: d.recomendado ? '#fafaf8' : '#8a8a8a' }}>{d.tipo}</span>
                  </td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #1a1a1a', fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.88rem', color: d.recomendado ? G : '#8a8a8a' }}>{d.rentabilidad}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #1a1a1a', fontSize: '0.85rem', color: '#8a8a8a' }}>{d.riesgo}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #1a1a1a', fontSize: '0.85rem', color: '#8a8a8a' }}>{d.liquidez}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #1a1a1a', fontSize: '0.85rem', color: '#8a8a8a' }}>{d.comisiones}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.75rem', color: '#333', fontStyle: 'italic', marginTop: '1.5rem', lineHeight: 1.6 }}>
          Comparativa con fines educativos. Las rentabilidades son estimaciones históricas y no garantizan resultados futuros.
        </p>
      </div>
    </section>
  )
}
