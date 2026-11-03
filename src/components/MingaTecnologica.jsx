import Link from 'next/link';

// Ejes reales del Plan Estonia 2027–2031 (6 ejes documentados)
const ETAPAS = [
  {
    num: '01',
    año: '2027–2028',
    titulo: 'Digitalización y Gobierno Abierto',
    descripcion: 'Quito Datos Abiertos, ventanilla única digital, catastro multipropósito y presupuesto participativo digital con trazabilidad ciudadana.',
    hitos: ['Ventanilla única de trámites municipales en línea', 'Catastro multipropósito actualizado', 'Portal de datos abiertos con indicadores auditables'],
    color: '#14b99e',
  },
  {
    num: '02',
    año: '2027–2029',
    titulo: 'Seguridad y Movilidad',
    descripcion: 'Integración C5Q con cámaras privadas, trazabilidad de bienes usados, Autoridad Metropolitana de Transporte y carril reversible Panamericana Norte.',
    hitos: ['Catálogo de cámaras municipales integradas', 'Trazabilidad obligatoria de bienes usados (LUAE)', 'Autoridad Metropolitana de Transporte operativa'],
    color: '#5eb8f5',
  },
  {
    num: '03',
    año: '2028–2031',
    titulo: 'Hábitat, Ambiente y Desarrollo',
    descripcion: 'Regularización masiva de 2.153 asentamientos, bonos verdes metropolitanos, titulación antes de obra y Distrito Financiero-Tecnológico.',
    hitos: ['Regularización por lote de barrio iniciada', 'Primer bono verde metropolitano emitido', 'Distrito Financiero-Tecnológico activo'],
    color: '#a78bfa',
  },
];

// Áreas de la Minga Tecnológica — voluntariado ciudadano especializado
const AREAS = [
  { icon: '💻', nombre: 'Tecnología e IA' },
  { icon: '⚖️', nombre: 'Legal y Regularización' },
  { icon: '🌿', nombre: 'Medio Ambiente' },
  { icon: '📚', nombre: 'Educación y Cultura' },
  { icon: '🏥', nombre: 'Salud Pública' },
  { icon: '🏗️', nombre: 'Infraestructura' },
  { icon: '📊', nombre: 'Datos y Transparencia' },
  { icon: '🤝', nombre: 'Desarrollo Social' },
];

export default function MingaTecnologica() {
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #04101f 0%, #071829 55%, #04101f 100%)',
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decoración de fondo */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,185,158,.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(20,185,158,.12)',
              border: '1px solid rgba(20,185,158,.3)',
              borderRadius: '20px',
              padding: '4px 14px',
              fontSize: '.72rem',
              fontWeight: 700,
              color: '#14b99e',
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Modelo de Gestión
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              fontWeight: 900,
              color: '#e8f2fa',
              margin: '0 0 .8rem',
              lineHeight: 1.2,
            }}
          >
            La Minga Tecnológica de Quito
          </h2>
          <p
            style={{
              maxWidth: '620px',
              margin: '0 auto',
              color: '#7098b8',
              fontSize: '.95rem',
              lineHeight: 1.7,
            }}
          >
            Un modelo único donde ciudadanos, empresas y academia co-ejecutan el plan junto al municipio. La minga no es solo voluntariado — es co-gobierno basado en competencias.
          </p>
        </div>

        {/* Etapas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.2rem',
            marginBottom: '2.5rem',
          }}
        >
          {ETAPAS.map((e) => (
            <div
              key={e.num}
              style={{
                background: 'rgba(255,255,255,.03)',
                border: `1px solid ${e.color}33`,
                borderRadius: '16px',
                padding: '1.4rem 1.3rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  fontSize: '4rem',
                  fontWeight: 900,
                  color: `${e.color}0d`,
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                {e.num}
              </div>
              <p
                style={{
                  margin: '0 0 .25rem',
                  fontSize: '.72rem',
                  fontWeight: 700,
                  color: e.color,
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                }}
              >
                Etapa {e.num} · {e.año}
              </p>
              <h3 style={{ margin: '0 0 .6rem', fontSize: '1rem', fontWeight: 800, color: '#e8f2fa' }}>
                {e.titulo}
              </h3>
              <p style={{ margin: '0 0 .9rem', fontSize: '.8rem', color: '#7098b8', lineHeight: 1.55 }}>
                {e.descripcion}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
                {e.hitos.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '7px',
                      alignItems: 'center',
                      fontSize: '.77rem',
                      color: '#c8daea',
                    }}
                  >
                    <span style={{ color: e.color, fontSize: '.9rem' }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Áreas de voluntariado */}
        <div
          style={{
            background: 'rgba(255,255,255,.025)',
            borderRadius: '18px',
            padding: '1.8rem 1.6rem',
            border: '1px solid rgba(94,184,245,.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#e8f2fa' }}>
                Voluntarios especializados activos
              </h3>
              <p style={{ margin: '.25rem 0 0', fontSize: '.82rem', color: '#5eb8f5' }}>
                Co-gobierno: ciudadanos, empresas y academia
              </p>
            </div>
            <Link
              href="/#sumate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                background: '#14b99e',
                color: '#fff',
                fontSize: '.82rem',
                fontWeight: 700,
                padding: '10px 20px',
                borderRadius: '10px',
                textDecoration: 'none',
                letterSpacing: '.02em',
                flexShrink: 0,
              }}
            >
              Únete a la Minga
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
              gap: '.7rem',
            }}
          >
            {AREAS.map((a) => (
              <div
                key={a.nombre}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255,255,255,.04)',
                  borderRadius: '10px',
                  padding: '.6rem .85rem',
                  border: '1px solid rgba(255,255,255,.05)',
                }}
              >
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{a.icon}</span>
                <div style={{ minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: '.77rem', fontWeight: 600, color: '#c8daea', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {a.nombre}
                  </p>
                  <p style={{ margin: 0, fontSize: '.7rem', color: '#14b99e', fontWeight: 700 }}>
                    Sumate →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
