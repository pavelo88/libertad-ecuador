'use client';
import { useState } from 'react';

// Datos reales extraídos del Plan Estonia (159 páginas)
const CHALLENGES = [
  {
    id: 'seguridad',
    title: 'Seguridad',
    icon: '🛡️',
    color: '#e74c3c',
    colorBg: 'rgba(231,76,60,.08)',
    colorBorder: 'rgba(231,76,60,.2)',
    headline: 'Quito Vigila Donde Más Se Necesita',
    problema: 'Quito registró más de 1.300 casos de extorsión hasta noviembre de 2025, siendo la segunda ciudad del país en este fenómeno. En 2025 murieron 300 personas en siniestros viales. La violencia intrafamiliar es el incidente más frecuente del Distrito.',
    meta: 'Reducir homicidios en un 50% hacia 2031, controlar la extorsión con trazabilidad obligatoria de bienes usados, y reducir siniestros viales en los tres corredores críticos.',
    acciones: [
      'Catálogo de cámaras municipales integradas al C5Q con cámaras privadas mediante incentivo tributario',
      'Trazabilidad obligatoria de bienes usados como requisito para obtener la LUAE',
      'Unidad de Acompañamiento a la Víctima de Extorsión (COOTAD Art. 54)',
      'Control automático de velocidad en tres corredores críticos con recaudación etiquetada',
    ],
    fuente: 'Plan Estonia, págs. 67–74',
  },
  {
    id: 'movilidad',
    title: 'Movilidad',
    icon: '🚌',
    color: '#2980b9',
    colorBg: 'rgba(41,128,185,.08)',
    colorBorder: 'rgba(41,128,185,.2)',
    headline: 'Un Solo Sistema, Un Solo Responsable',
    problema: 'La tarifa urbana está congelada en USD 0,35 cuando el costo real supera USD 0,65. El 55% de las aceras no cumple la norma mínima de 2,10 m. El 8% de la población del área metropolitana vive fuera del límite administrativo.',
    meta: 'Crear una Autoridad Metropolitana de Transporte, definir tarifa técnica con subsidio focalizado, y habilitar carril de alta ocupación en la Panamericana Norte.',
    acciones: [
      'Autoridad Metropolitana de Transporte sin nueva nómina (traslado de personal existente)',
      'Carril de alta ocupación reversible en la Panamericana Norte: medida de bajo costo visible en semanas',
      'Programa Acera Primero: intervención en aceras bajo la norma mínima',
      'Extensión del Metro fase Calderón con gestión concesionada',
    ],
    fuente: 'Plan Estonia, págs. 75–81',
  },
  {
    id: 'ambiente',
    title: 'Ambiente',
    icon: '🌿',
    color: '#27ae60',
    colorBg: 'rgba(39,174,96,.08)',
    colorBorder: 'rgba(39,174,96,.2)',
    headline: 'Quito Vuelve a Beber de Sus Ríos',
    problema: 'Quito trata solo el 2,85% de sus aguas residuales (131,6 millones de m³ generados, 3,75 millones depurados en 2023). En 2024 ocurrieron 207 inundaciones y 212 movimientos en masa. El área verde cayó de 9,9 a 9,4 m² por habitante en un año.',
    meta: 'Publicar línea base de agua no contabilizada por sector, meta auditable de reducción del 15%, y primera emisión de bono verde metropolitano con uso de fondos trazable.',
    acciones: [
      'Publicar porcentaje de agua no contabilizada por sector hidráulico como primer entregable exigible',
      'Mínimos de cobertura arbórea y superficie permeable por manzana verificables en licencia urbanística',
      'Marco de bonos verdes metropolitanos con línea base verificable',
      'Manifiesto electrónico de escombros y control del vertido ilegal (COOTAD Art. 395)',
    ],
    fuente: 'Plan Estonia, págs. 90–97',
  },
  {
    id: 'empleo',
    title: 'Empleo',
    icon: '💼',
    color: '#f39c12',
    colorBg: 'rgba(243,156,18,.08)',
    colorBorder: 'rgba(243,156,18,.2)',
    headline: 'Quito Trabaja',
    problema: 'Quito produce el 25% del valor agregado bruto del Ecuador pero tiene el desempleo más alto de las ciudades del país. Miles de personas poseen conocimientos sin credencial reconocida. El parque automotor crece 4,2% anual.',
    meta: 'Crear el Distrito Financiero-Tecnológico La Carolina-Iñaquito con incentivos sobre patente y predial, y desplegar programa de certificación de competencias adquiridas en el trabajo.',
    acciones: [
      'Distrito Financiero-Tecnológico La Carolina-Iñaquito: incentivos zonales sobre patente y predial',
      'Programa de certificación de habilidades adquiridas laboralmente sin credencial formal',
      'Centralidad Calderón: centro cívico-comercial-productivo bajo alianza público-privada a 30 años',
      'Hub de teletrabajo en Conocoto bajo concesión',
    ],
    fuente: 'Plan Estonia, págs. 82–84',
  },
  {
    id: 'vivienda',
    title: 'Vivienda',
    icon: '🏠',
    color: '#8e44ad',
    colorBg: 'rgba(142,68,173,.08)',
    colorBorder: 'rgba(142,68,173,.2)',
    headline: 'Titular Antes Que Construir',
    problema: 'Existen 2.153 asentamientos de hecho sobre 2.569 hectáreas; el 80% sin regularizar, 671 regularizados pero sin titularizar y 365 sin siquiera iniciar el trámite. El déficit habitacional es del 12,6% (10,4% cualitativo + 2,2% cuantitativo).',
    meta: 'El título va primero, es masivo y opera por lote de barrio, no por expediente individual. Regularización en lotes, densificación suave con trámite exprés y tasa cero.',
    acciones: [
      'Regularización masiva por lote de barrio (no expediente individual) para 2.153 asentamientos',
      'Ordenanza de densificación suave: subdivisión y renta de pisos con trámite exprés, tasa cero',
      'Contrato de arriendo estándar municipal con mediación gratuita',
      'Reasentamiento social de familias en riesgo no mitigable (a cargo de Desarrollo Humano)',
    ],
    fuente: 'Plan Estonia, págs. 84–85',
  },
];

export default function InteractiveChallengeTabs({ challenges = CHALLENGES, defaultTab = 0 }) {
  const [active, setActive] = useState(defaultTab);
  const ch = challenges[active];

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #e8edf2',
        boxShadow: '0 4px 24px rgba(9,32,59,.07)',
      }}
    >
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Desafíos de Quito"
        style={{
          display: 'flex',
          borderBottom: '1px solid #e8edf2',
          overflowX: 'auto',
        }}
      >
        {challenges.map((c, i) => {
          const isActive = active === i;
          return (
            <button
              key={c.id}
              id={`tab-${c.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${c.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              style={{
                flex: '1 1 0',
                minWidth: 0,
                padding: '.65rem .4rem',
                border: 'none',
                borderBottom: isActive ? `2px solid ${c.color}` : '2px solid transparent',
                background: isActive ? c.colorBg : 'transparent',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
                transition: 'background .18s, border-color .18s',
                fontFamily: 'inherit',
              }}
            >
              <span style={{ fontSize: '1.15rem', lineHeight: 1 }}>{c.icon}</span>
              <span
                style={{
                  fontSize: '.68rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? c.color : '#64748b',
                  letterSpacing: '.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                {c.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        id={`panel-${ch.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${ch.id}`}
        style={{ padding: '1.2rem 1.3rem 1.3rem' }}
      >
        {/* Headline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '.9rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: '10px',
              background: ch.colorBg,
              border: `1px solid ${ch.colorBorder}`,
              fontSize: '1.2rem',
              flexShrink: 0,
            }}
          >
            {ch.icon}
          </span>
          <h3
            style={{
              margin: 0,
              fontSize: '1rem',
              fontWeight: 800,
              color: '#09203b',
              lineHeight: 1.2,
            }}
          >
            {ch.headline}
          </h3>
        </div>

        {/* Problema */}
        <div
          style={{
            background: '#f8fafc',
            borderLeft: `3px solid ${ch.color}`,
            borderRadius: '0 8px 8px 0',
            padding: '.65rem .85rem',
            marginBottom: '.9rem',
          }}
        >
          <p
            style={{
              margin: '0 0 .2rem',
              fontSize: '.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '.07em',
              color: ch.color,
            }}
          >
            El desafío
          </p>
          <p style={{ margin: 0, fontSize: '.82rem', color: '#475569', lineHeight: 1.55 }}>
            {ch.problema}
          </p>
        </div>

        {/* Meta */}
        <div
          style={{
            background: ch.colorBg,
            border: `1px solid ${ch.colorBorder}`,
            borderRadius: '8px',
            padding: '.6rem .85rem',
            marginBottom: '.9rem',
            display: 'flex',
            gap: '8px',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>🎯</span>
          <p style={{ margin: 0, fontSize: '.82rem', color: '#09203b', fontWeight: 600, lineHeight: 1.5 }}>
            {ch.meta}
          </p>
        </div>

        {/* Acciones */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.45rem' }}>
          {ch.acciones.map((a, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-start',
                fontSize: '.81rem',
                color: '#334155',
                lineHeight: 1.45,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: ch.color,
                  color: '#fff',
                  fontSize: '.6rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '1px',
                }}
              >
                {i + 1}
              </span>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
