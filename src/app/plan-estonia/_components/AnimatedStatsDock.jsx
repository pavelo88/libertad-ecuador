'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from './Icons';

const metricsData = [
  { icon: 'Users', endVal: 2.68, suffix: ' M', label: 'Habitantes', sub: 'Censo 2022', decimals: 2, href: '/diagnostico' },
  { icon: 'MapPin', endVal: 4235, suffix: ' km²', label: 'de territorio', sub: '65 parroquias', decimals: 0, href: '/modelo' },
  { icon: 'TrendingUp', endVal: 25, suffix: '%', label: 'del VAB nacional', sub: 'Motor económico', decimals: 0, href: '/programas?eje=Trabajo' },
  { icon: 'Briefcase', endVal: 7.2, suffix: '%', label: 'desempleo', sub: 'Más alto del país', decimals: 1, href: '/pregunta?q=¿Cómo planea el Plan Estonia reducir el desempleo juvenil en Quito?' },
  { icon: 'DollarSign', prefix: 'USD ', endVal: 1041, suffix: ' M', label: 'Presupuesto 2026', sub: '+3,96% vs 2025', decimals: 0, href: '/presupuesto' },
  { icon: 'Droplets', prefix: 'Solo ', endVal: 2.85, suffix: '%', label: 'aguas tratadas', sub: 'Reto ambiental', decimals: 2, href: '/programas?eje=Ambiente' },
  { icon: 'ShieldAlert', endVal: 264, suffix: '', label: 'homicidios 2025', sub: '+14% vs 2024', decimals: 0, href: '/programas?eje=Seguridad' },
  { icon: 'Layers', endVal: 32, suffix: '', label: 'Programas clave', sub: 'Metas 2027–2031', decimals: 0, href: '/programas' }
];

export default function AnimatedStatsDock() {
  const [counts, setCounts] = useState(metricsData.map(() => 0));

  useEffect(() => {
    const duration = 1600; // ms
    const startTime = performance.now();

    const frame = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(
        metricsData.map((m) => {
          return m.endVal * ease;
        })
      );

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, []);

  const formatNumber = (val, decimals) => {
    if (decimals === 0) return Math.round(val).toLocaleString('es-EC');
    return val.toFixed(decimals).replace('.', ',');
  };

  return (
    <section className="stats-dock-section">
      <div className="wrap">
        <div className="stats-dock-grid">
          {metricsData.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="stat-dock-item stat-dock-interactive"
              title={`Ver detalles sobre ${item.label}`}
            >
              <div className="stat-dock-icon">
                <Icon name={item.icon} size={19} />
              </div>
              <div className="stat-dock-texts">
                <span className="stat-dock-val">
                  {item.prefix || ''}
                  {formatNumber(counts[idx], item.decimals)}
                  {item.suffix}
                </span>
                <span className="stat-dock-label">{item.label}</span>
                <small className="stat-dock-sub">{item.sub}</small>
              </div>
              <span className="stat-dock-arrow">
                <Icon name="ChevronRight" size={13} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
