'use client';
import { useState } from 'react';

// Datos reales del Plan Estonia — impacto por perfil ciudadano
const SITUACIONES = [
  {
    id: 'emprendedor',
    emoji: '👨‍💼',
    titulo: 'Soy emprendedor',
    descripcion: 'Quito produce el 25% del VAB nacional pero tiene el mayor desempleo urbano del país. El plan crea incentivos reales para el sector privado.',
    beneficios: [
      { icon: '🏙️', text: 'Distrito Financiero-Tecnológico La Carolina-Iñaquito: descuentos en patente y predial para empresas tech' },
      { icon: '📜', text: 'Programa de certificación de competencias adquiridas sin credencial formal (para formalizar tu trayectoria)' },
      { icon: '🏗️', text: 'Centralidad Calderón: centro cívico-comercial bajo alianza público-privada a 30 años (nueva zona económica)' },
      { icon: '💻', text: 'Hub de teletrabajo en Conocoto bajo concesión (infraestructura para trabajar sin trasladarse al centro)' },
    ],
    fuente: 'Plan Estonia, págs. 82–84',
  },
  {
    id: 'residente-asentamiento',
    emoji: '🏘️',
    titulo: 'Vivo en un asentamiento informal',
    descripcion: 'Quito tiene 2.153 asentamientos de hecho sobre 2.569 hectáreas. El 80% no tiene escrituras. El trámite individual tarda años.',
    beneficios: [
      { icon: '📋', text: 'Regularización masiva por lote de barrio: el título se procesa en bloque, no expediente por expediente' },
      { icon: '🔑', text: 'Título de propiedad como primer entregable del mandato — antes de cualquier otra obra' },
      { icon: '🏠', text: 'Ordenanza de densificación suave: trámite exprés y tasa cero para subdividir o arrendar pisos adicionales' },
      { icon: '🤝', text: 'Contrato de arriendo estándar municipal con mediación gratuita para proteger al arrendatario' },
    ],
    fuente: 'Plan Estonia, págs. 84–85',
  },
  {
    id: 'conductor',
    emoji: '🚗',
    titulo: 'Me muevo en carro o bus',
    descripcion: 'La tarifa urbana está congelada en USD 0,35 cuando el costo real supera USD 0,65. El 55% de las aceras no cumplen la norma mínima de 2,10 m.',
    beneficios: [
      { icon: '🚦', text: 'Carril de alta ocupación reversible en Panamericana Norte: medida de bajo costo visible en semanas' },
      { icon: '🚇', text: 'Extensión Metro fase Calderón con gestión concesionada (más cobertura, menor congestión)' },
      { icon: '🛤️', text: 'Programa Acera Primero: rehabilitación de aceras bajo la norma mínima en zonas prioritarias' },
      { icon: '🏛️', text: 'Autoridad Metropolitana de Transporte: un solo responsable, sin nueva nómina' },
    ],
    fuente: 'Plan Estonia, págs. 75–81',
  },
  {
    id: 'vecino-inseguridad',
    emoji: '🏠',
    titulo: 'Me preocupa la seguridad',
    descripcion: 'Quito registró más de 1.300 casos de extorsión hasta noviembre de 2025. La violencia intrafamiliar es el incidente más frecuente del Distrito.',
    beneficios: [
      { icon: '📷', text: 'Catálogo de cámaras municipales integradas al C5Q con cámaras privadas (incentivo tributario para participar)' },
      { icon: '🔍', text: 'Trazabilidad obligatoria de bienes usados como requisito de LUAE (corta el mercado de objetos robados)' },
      { icon: '🆘', text: 'Unidad de Acompañamiento a la Víctima de Extorsión con base legal en COOTAD Art. 54' },
      { icon: '🚗', text: 'Control automático de velocidad en tres corredores críticos — recaudación etiquetada a vialidad' },
    ],
    fuente: 'Plan Estonia, págs. 67–74',
  },
  {
    id: 'vecino-ambiente',
    emoji: '🌿',
    titulo: 'Me preocupa el ambiente',
    descripcion: 'Quito trata solo el 2,85% de sus aguas residuales. En 2024 ocurrieron 207 inundaciones y 212 movimientos en masa. El área verde bajó a 9,4 m² por habitante.',
    beneficios: [
      { icon: '💧', text: 'Publicación de porcentaje de agua no contabilizada por sector hidráulico como primer entregable exigible' },
      { icon: '🌳', text: 'Mínimos de cobertura arbórea y superficie permeable por manzana, verificables en licencia urbanística' },
      { icon: '📊', text: 'Marco de bonos verdes metropolitanos con línea base verificable (financiamiento externo para proyectos hídricos)' },
      { icon: '🚛', text: 'Manifiesto electrónico de escombros y control del vertido ilegal (COOTAD Art. 395)' },
    ],
    fuente: 'Plan Estonia, págs. 90–97',
  },
];

export default function ImpactExplorer() {
  const [active, setActive] = useState(0);
  const sit = SITUACIONES[active];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', alignItems: 'start' }}>
      {/* Selector */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
        {SITUACIONES.map((s, i) => {
          const isActive = active === i;
          return (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '.75rem 1rem',
                borderRadius: '12px',
                border: isActive ? '1.5px solid #14b99e' : '1.5px solid #e2e8f0',
                background: isActive ? 'rgba(20,185,158,.07)' : '#fff',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'inherit',
                transition: 'all .18s',
              }}
            >
              <span style={{ fontSize: '1.35rem', flexShrink: 0 }}>{s.emoji}</span>
              <span
                style={{
                  fontSize: '.85rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#09203b' : '#475569',
                }}
              >
                {s.titulo}
              </span>
              {isActive && (
                <span style={{ marginLeft: 'auto', color: '#14b99e' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Detalle */}
      <div
        style={{
          background: 'linear-gradient(160deg, #07162e 0%, #0b2040 100%)',
          borderRadius: '16px',
          padding: '1.4rem 1.3rem',
          border: '1px solid rgba(20,185,158,.2)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '.9rem' }}>
          <span style={{ fontSize: '1.8rem' }}>{sit.emoji}</span>
          <div>
            <p style={{ margin: 0, fontWeight: 800, fontSize: '1rem', color: '#e8f2fa' }}>{sit.titulo}</p>
            <p style={{ margin: 0, fontSize: '.76rem', color: '#7098b8', lineHeight: 1.4 }}>{sit.descripcion}</p>
          </div>
        </div>

        <p style={{ margin: '0 0 .8rem', fontSize: '.72rem', fontWeight: 700, color: '#14b99e', letterSpacing: '.07em', textTransform: 'uppercase' }}>
          Con el Plan Estonia tendrás:
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
          {sit.beneficios.map((b, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
                background: 'rgba(255,255,255,.04)',
                borderRadius: '10px',
                padding: '.55rem .8rem',
                border: '1px solid rgba(255,255,255,.05)',
              }}
            >
              <span style={{ fontSize: '1.1rem', flexShrink: 0, lineHeight: 1 }}>{b.icon}</span>
              <span style={{ fontSize: '.8rem', color: '#c8daea', lineHeight: 1.5 }}>{b.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .impact-explorer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
