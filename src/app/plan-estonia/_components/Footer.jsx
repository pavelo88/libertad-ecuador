import Link from 'next/link';
import { Icon } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div>
          <div className="footer-official-logo">
            <svg viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-mountain">
              <path d="M4 28L18 8L26 20L32 12L42 28H4Z" fill="currentColor" fillOpacity="0.15" />
              <path d="M4 28L18 8L27 22" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 17L28 9L40 28" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="34" cy="7" r="2.5" fill="#14b99e" />
            </svg>
            <div className="footer-official-text">
              <span className="footer-official-title">PLAN ESTONIA</span>
              <span className="footer-official-motto">TRABAJO · ORDEN · CORAZÓN</span>
              <span className="footer-official-sub">QUITO 2027 – 2031</span>
            </div>
          </div>
          <p>
            Una herramienta de lectura, consulta y educación cívica basada en un plan de trabajo público para Quito 2027–2031.
          </p>
          <div className="footer-tech-credit">
            <span>Tecnología cívica provista bajo licencia por</span>
            <strong>SinergIA Tech</strong>
          </div>
        </div>

        <div>
          <h4>Explora</h4>
          <Link href="/plan-estonia/programas">Todos los programas</Link>
          <Link href="/plan-estonia/aula">Aula ciudadana</Link>
          <Link href="/plan-estonia/territorios">Territorios</Link>
          <Link href="/plan-estonia/diagnostico">Datos de Quito</Link>
          <Link href="/plan-estonia/modelo">Modelo de ciudad</Link>
          <Link href="/plan-estonia/presupuesto">Financiamiento</Link>
        </div>

        <div>
          <h4>Transparencia y Legal</h4>
          <Link href="/plan-estonia/plan">Índice general</Link>
          <Link href="/plan-estonia/metodologia">Fuentes y metodología</Link>
          <Link href="/plan-estonia/privacidad" style={{ display: 'flex', flexDirection: 'column', gap: '2px', margin: '8px 0' }}>
            <strong>Política de Privacidad</strong>
            <span style={{ fontSize: '0.74rem', color: '#8da2b8', lineHeight: 1.3 }}>
              Conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP).
            </span>
          </Link>
          <Link href="/plan-estonia/terminos" style={{ display: 'flex', flexDirection: 'column', gap: '2px', margin: '8px 0' }}>
            <strong>Términos y Condiciones</strong>
            <span style={{ fontSize: '0.74rem', color: '#8da2b8', lineHeight: 1.3 }}>
              Transparencia, independencia y naturaleza cívica de la plataforma.
            </span>
          </Link>
          <Link href="/plan-estonia/biblioteca/1">
            Biblioteca interna <Icon name="ArrowRight" size={13} />
          </Link>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} Plan Estonia Quito · Plataforma tecnológica desarrollada y licenciada por <strong style={{ color: '#54d6b5', fontWeight: 800 }}>SinergIA Tech</strong>. Todos los derechos de software reservados ·{' '}
          <Link href="/plan-estonia/privacidad" style={{ textDecoration: 'underline' }}>Política de Privacidad</Link> ·{' '}
          <Link href="/plan-estonia/terminos" style={{ textDecoration: 'underline' }}>Términos y Condiciones</Link>
        </span>
        <span>Contenido propuesto, no obras ejecutadas. Herramienta cívica e informativa de código abierto y analítica ciudadana.</span>
      </div>
    </footer>
  );
}
