'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header site-header-home${scrolled ? ' site-header-scrolled' : ''}`}>
      <div className="wrap nav-inner">
        {/* Logo montaña — igual al sitio de producción */}
        <Link href="/" className="brand" aria-label="Plan Estonia – inicio">
          <div className="brand-mark" style={{ background: 'transparent', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="40" height="40" rx="8" fill="#07162e"/>
              {/* Montaña grande */}
              <polygon points="20,8 34,32 6,32" fill="#14b99e" opacity=".9"/>
              {/* Pico nevado */}
              <polygon points="20,8 24,16 16,16" fill="#ffffff" opacity=".95"/>
              {/* Línea base */}
              <line x1="6" y1="32" x2="34" y2="32" stroke="#5eb8f5" strokeWidth="1.5" opacity=".5"/>
            </svg>
          </div>
          <div className="brand-text brand-official-title">
            <b>PLAN ESTONIA</b>
            <small className="brand-official-motto">TRABAJO · ORDEN · CORAZÓN</small>
            <small className="brand-official-sub">QUITO 2027 – 2031</small>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="Navegación principal">
          <Link href="/" className="nav-item-clean">Inicio</Link>
          <Link href="/plan" className="nav-item-clean">El Plan</Link>
          <Link href="/programas" className="nav-item-clean">Quito en Cifras</Link>
          <Link href="/pregunta" className="nav-item-clean">
            Preguntas{' '}
            <span
              style={{
                background: '#e0f3f2',
                color: '#0b9889',
                fontSize: '.65rem',
                fontWeight: 900,
                padding: '2px 6px',
                borderRadius: '6px',
                letterSpacing: '.06em',
                verticalAlign: 'middle',
              }}
            >
              IA
            </span>
          </Link>
          <Link href="/#sumate" className="nav-cta">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Únete a la Minga
          </Link>
          <Link
            href="/pregunta"
            className="header-search-box"
            aria-label="Buscador de propuestas"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            ¿Qué deseas saber?
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          className="nav-mobile-drawer"
          aria-label="Menú móvil"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#fff',
            borderTop: '1px solid #e8edf2',
            boxShadow: '0 8px 32px rgba(9,32,59,.12)',
            padding: '1.25rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
            zIndex: 999,
          }}
        >
          {[
            { href: '/', label: 'Inicio' },
            { href: '/plan', label: 'El Plan' },
            { href: '/programas', label: 'Quito en Cifras' },
            { href: '/pregunta', label: 'Preguntas IA' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '.75rem 1rem',
                borderRadius: '10px',
                color: '#09203b',
                fontWeight: 500,
                fontSize: '.95rem',
                textDecoration: 'none',
                background: '#f5f7fa',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#sumate"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: '.5rem',
              padding: '.85rem 1rem',
              borderRadius: '10px',
              background: '#14b99e',
              color: '#fff',
              fontWeight: 700,
              fontSize: '.95rem',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Únete a la Minga
          </Link>
        </nav>
      )}
    </header>
  );
}
