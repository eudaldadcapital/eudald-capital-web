import React, { useEffect, useState } from 'react'

const G = '#c9a84c'

const BASE_TICKERS = [
  { symbol: 'S&P 500', price: 5234.18, change: +0.82 },
  { symbol: 'MSCI World', price: 3721.44, change: +0.61 },
  { symbol: 'NASDAQ', price: 16420.55, change: +1.14 },
  { symbol: 'IBEX 35', price: 10842.30, change: -0.23 },
  { symbol: 'Euro Stoxx 50', price: 4987.12, change: +0.45 },
  { symbol: 'Vanguard FTSE', price: 112.34, change: +0.38 },
  { symbol: 'iShares Core', price: 87.91, change: +0.55 },
  { symbol: 'BTC/USD', price: 67420.00, change: +2.31 },
]

export default function Ticker() {
  const [tickers, setTickers] = useState(BASE_TICKERS)

  useEffect(() => {
    const interval = setInterval(() => {
      setTickers(prev => prev.map(t => ({
        ...t,
        price: +(t.price * (1 + (Math.random() - 0.499) * 0.001)).toFixed(2),
        change: +(t.change + (Math.random() - 0.5) * 0.05).toFixed(2),
      })))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const items = [...tickers, ...tickers]

  return (
    <div style={{ background: '#080808', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', overflow: 'hidden', position: 'relative', padding: '10px 0' }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #080808, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #080808, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{
        display: 'flex', gap: '2.5rem', alignItems: 'center',
        animation: 'tickerScroll 30s linear infinite',
        width: 'max-content',
      }}>
        {items.map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
            <span style={{ fontSize: '0.75rem', color: '#666', fontFamily: 'Syne, sans-serif', fontWeight: 600, letterSpacing: '0.04em' }}>{t.symbol}</span>
            <span style={{ fontSize: '0.78rem', color: '#aaa', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>{t.price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <span style={{ fontSize: '0.7rem', color: t.change >= 0 ? '#4ade80' : '#f87171', fontWeight: 600 }}>
              {t.change >= 0 ? '▲' : '▼'} {Math.abs(t.change).toFixed(2)}%
            </span>
            <span style={{ width: 1, height: 12, background: '#1e1e1e', display: 'inline-block' }} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
