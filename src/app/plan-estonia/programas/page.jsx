import { PROGRAMAS, AXES } from '../_lib/data';
import AxisCarousel from '../_components/AxisCarousel';

export const metadata = { title: 'Catálogo de programas' };

const AXIS_COLORS = {
  'Digitalización': 'cyan',
  'Seguridad': 'blue',
  'Movilidad': 'teal',
  'Trabajo': 'orange',
  'Ambiente': 'green',
  'Desarrollo humano': 'pink',
};

export default function Programs() {
  return (
    <div className="page-shell">
      <div className="wrap">
        <div className="page-overline">CATÁLOGO DOCUMENTADO</div>
        <div className="page-heading">
          <h1>32 programas. <em>Una ciudad.</em></h1>
          <p>Explora lo que propone el documento por área estratégica. Cada ficha conserva su diagnóstico, intervención y referencias al Plan Estonia original.</p>
        </div>
      </div>

      {/* Carruseles por eje */}
      {AXES.map(axis => {
        const programs = PROGRAMAS.filter(p => p.axis === axis.name);
        if (!programs.length) return null;
        return (
          <section key={axis.name} className="axis-section" style={{ marginBottom: '3.5rem' }}>
            <div className="wrap">
              <div className="axis-section-header" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.25rem' }}>
                <span className={`mini-icon axis-${axis.name.replace(/\s+/g, '-').toLowerCase()}`} style={{ width: 42, height: 42, borderRadius: 12 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </span>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#64748b', textTransform: 'uppercase' }}>
                    {programs.length} PROGRAMA{programs.length !== 1 ? 'S' : ''}
                  </div>
                  <h2 style={{ margin: 0, fontSize: 'clamp(1.1rem,2.5vw,1.45rem)', fontWeight: 800, color: '#0b2c55' }}>
                    {axis.name}
                  </h2>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b' }}>{axis.detail}</p>
                </div>
                <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: '#94a3b8' }}>Páginas {axis.pages}</span>
              </div>
            </div>
            <div className="wrap">
              <AxisCarousel programs={programs} desktopVisible={4} />
            </div>
          </section>
        );
      })}

      {/* CSS inline para el carrusel */}
      <style>{`
        .axis-carousel { position: relative; }
        .axis-carousel-controls { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 14px; }
        .carousel-arrow { background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 50%; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0b2c55; transition: background .2s; }
        .carousel-arrow:hover { background: #e2e8f0; }
        .carousel-dots { display: flex; gap: 6px; }
        .carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: #cbd5e1; border: none; cursor: pointer; padding: 0; transition: background .2s, transform .2s; }
        .carousel-dot.active { background: #14b99e; transform: scale(1.3); }
      `}</style>
    </div>
  );
}
