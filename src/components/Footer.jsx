import Link from 'next/link';

const explora = [
  { href: '/plan', label: 'Todos los programas' },
  { href: '/aula', label: 'Aula ciudadana' },
  { href: '/territorios', label: 'Territorios' },
  { href: '/programas', label: 'Datos de Quito' },
  { href: '/plan#financiamiento', label: 'Financiamiento' },
  { href: '/modelo', label: 'Modelo de ciudad' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        {/* Columna brand */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href="/" className="brand" aria-label="Ir al inicio">
            <div className="brand-mark" style={{ background: 'transparent', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="40" height="40" rx="8" fill="#0b1f3a"/>
                <polygon points="20,8 34,32 6,32" fill="#14b99e" opacity=".9"/>
                <polygon points="20,8 24,16 16,16" fill="#ffffff" opacity=".95"/>
                <line x1="6" y1="32" x2="34" y2="32" stroke="#5eb8f5" strokeWidth="1.5" opacity=".5"/>
              </svg>
            </div>
            <div className="brand-text">
              <b>PLAN ESTONIA</b>
              <small>TRABAJO · ORDEN · CORAZÓN</small>
              <small>QUITO 2027 – 2031</small>
            </div>
          </Link>
          <p
            style={{
              marginTop: '1.1rem',
              fontSize: '.82rem',
              lineHeight: 1.6,
              color: '#8fa5bc',
              maxWidth: '260px',
            }}
          >
            Una herramienta cívica para explorar, consultar y dialogar
            sobre el Plan de Transformación Integral para el Distrito
            Metropolitano de Quito.
          </p>
          <div
            style={{
              marginTop: '1.25rem',
              display: 'flex',
              gap: '.6rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/pregunta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#14b99e',
                color: '#fff',
                fontSize: '.78rem',
                fontWeight: 700,
                padding: '7px 14px',
                borderRadius: '8px',
                textDecoration: 'none',
                letterSpacing: '.02em',
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              Preguntar a la IA
            </Link>
            <Link
              href="/#sumate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'transparent',
                color: '#5eb8f5',
                fontSize: '.78rem',
                fontWeight: 600,
                padding: '7px 14px',
                borderRadius: '8px',
                border: '1px solid #1e3a52',
                textDecoration: 'none',
              }}
            >
              Únete a la Minga
            </Link>
          </div>
        </div>

        {/* Columna Explora */}
        <div>
          <h4
            style={{
              fontSize: '.72rem',
              fontWeight: 800,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: '#5eb8f5',
              marginBottom: '.9rem',
            }}
          >
            Explora
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.45rem' }}>
            {explora.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="footer-nav-link"
                  style={{
                    color: '#8fa5bc',
                    fontSize: '.85rem',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna Transparencia y Legal */}
        <div>
          <h4
            style={{
              fontSize: '.72rem',
              fontWeight: 800,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: '#5eb8f5',
              marginBottom: '.9rem',
            }}
          >
            Transparencia y Legal
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
            <li>
              <Link
                href="/fuentes"
                style={{ color: '#c8daea', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}
              >
                Índice general
              </Link>
            </li>
            <li>
              <Link
                href="/metodologia"
                style={{ color: '#8fa5bc', fontSize: '.85rem', textDecoration: 'none' }}
              >
                Fuentes y metodología
              </Link>
            </li>
            <li>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.15rem' }}>
                <Link
                  href="/privacidad"
                  style={{ color: '#c8daea', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}
                >
                  Política de Privacidad
                </Link>
                <span style={{ color: '#5a7a94', fontSize: '.76rem', lineHeight: 1.4 }}>
                  Tratamiento de datos conforme a la LOPDP (Ley Orgánica de Protección de Datos Personales, Ecuador).
                </span>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.15rem' }}>
                <Link
                  href="/terminos"
                  style={{ color: '#c8daea', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}
                >
                  Términos y Condiciones
                </Link>
                <span style={{ color: '#5a7a94', fontSize: '.76rem', lineHeight: 1.4 }}>
                  Condiciones de uso de la plataforma y del asistente de IA ciudadana.
                </span>
              </div>
            </li>
            <li>
              <Link
                href="/biblioteca"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: '#5eb8f5',
                  fontSize: '.82rem',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Biblioteca interna
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span style={{ color: '#3d6278', fontSize: '.78rem' }}>
          © 2026 · Explorador documental Plan Estonia
          {' · '}
          <Link href="/privacidad" style={{ color: '#3d6278', textDecoration: 'none' }}>
            Política de Privacidad
          </Link>
          {' · '}
          <Link href="/terminos" style={{ color: '#3d6278', textDecoration: 'none' }}>
            Términos y Condiciones
          </Link>
        </span>
        <span style={{ color: '#2e4f64', fontSize: '.75rem' }}>
          Contenido propuesto con fines cívicos y educativos. No es comunicación oficial de ningún candidato.
        </span>
      </div>
    </footer>
  );
}
