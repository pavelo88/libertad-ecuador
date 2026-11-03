'use client';
import { useEffect, useRef, useState } from 'react';

// Cifras reales del Plan Estonia (Plan Estonia, 159 págs.)
const stats = [
  { val: '2.68M',    label: 'Habitantes del DMQ',      icon: '👥' },
  { val: '32',       label: 'Programas',                icon: '📋' },
  { val: '6',        label: 'Ejes temáticos',           icon: '🏛️' },
  { val: '2.153',    label: 'Asentamientos informales', icon: '🏘️' },
  { val: '2,85%',    label: 'Agua residual tratada',    icon: '💧' },
  { val: '55%',      label: 'Aceras bajo norma',        icon: '🚶' },
  { val: '12,6%',    label: 'Déficit habitacional',     icon: '🏠' },
  { val: '9,4 m²',   label: 'Área verde por hab.',      icon: '🌿' },
  { val: '300',      label: 'Muertes viales en 2025',   icon: '🚦' },
  { val: '207',      label: 'Inundaciones en 2024',     icon: '🌊' },
  { val: '25%',      label: 'del VAB nacional',         icon: '💼' },
  { val: '1.041M',   label: 'Presupuesto 2026 (USD)',   icon: '📊' },
];

// Duplicamos para loop infinito
const allStats = [...stats, ...stats];

export default function AnimatedStatsDock() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Animación CSS pura — más suave que JS
  return (
    <div
      className="animated-stats-dock"
      style={{
        width: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(90deg, #07162e 0%, #0b1f3a 50%, #07162e 100%)',
        borderTop: '1px solid rgba(20,185,158,.18)',
        borderBottom: '1px solid rgba(20,185,158,.18)',
        padding: '.55rem 0',
        position: 'relative',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fades en los bordes */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: 60,
        background: 'linear-gradient(90deg, #07162e, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: 60,
        background: 'linear-gradient(270deg, #07162e, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes stats-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .stats-track {
          display: flex;
          gap: 0;
          width: max-content;
          animation: stats-scroll 40s linear infinite;
        }
        .stats-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div
        ref={trackRef}
        className={`stats-track${paused ? ' paused' : ''}`}
      >
        {allStats.map((s, i) => (
          <div
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.55rem',
              padding: '.2rem 1.6rem',
              borderRight: '1px solid rgba(255,255,255,.06)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>{s.icon}</span>
            <span style={{
              fontSize: '.95rem',
              fontWeight: 800,
              color: '#14b99e',
              letterSpacing: '.02em',
            }}>
              {s.val}
            </span>
            <span style={{
              fontSize: '.75rem',
              color: '#7098b8',
              fontWeight: 500,
              letterSpacing: '.01em',
            }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
