'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('pe_cookie_consent');
      if (!consent) setVisible(true);
    } catch {
      // localStorage bloqueado (modo privado, etc.)
    }
  }, []);

  const accept = (mode) => {
    try {
      localStorage.setItem('pe_cookie_consent', mode);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Configuración de cookies"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        background: 'linear-gradient(135deg, #07162e 0%, #0b2040 100%)',
        borderTop: '2px solid #14b99e',
        boxShadow: '0 -8px 40px rgba(0,0,0,.45)',
        padding: '1.25rem 1.5rem 1.35rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}
    >
      {/* Ícono candado */}
      <div
        aria-hidden="true"
        style={{
          flexShrink: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'rgba(20,185,158,.15)',
          border: '1.5px solid rgba(20,185,158,.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#14b99e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      {/* Texto */}
      <div style={{ flex: 1, minWidth: '220px' }}>
        <p
          style={{
            margin: '0 0 .25rem',
            fontWeight: 700,
            fontSize: '.9rem',
            color: '#e8f2fa',
            letterSpacing: '.01em',
          }}
        >
          Privacidad y Cookies
        </p>
        <p style={{ margin: 0, fontSize: '.78rem', color: '#7098b8', lineHeight: 1.55 }}>
          Usamos cookies esenciales para el funcionamiento del sitio y analíticas anónimas para mejorar la experiencia.
          Tratamiento conforme a la{' '}
          <Link href="/privacidad" style={{ color: '#5eb8f5', textDecoration: 'underline' }}>
            LOPDP
          </Link>
          .{' '}
          <Link href="/privacidad" style={{ color: '#5eb8f5', textDecoration: 'underline' }}>
            Política de Privacidad
          </Link>
          .
        </p>
      </div>

      {/* Botones */}
      <div
        style={{
          display: 'flex',
          gap: '.65rem',
          flexShrink: 0,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => accept('essential')}
          style={{
            padding: '.6rem 1.1rem',
            borderRadius: '9px',
            border: '1.5px solid rgba(94,184,245,.35)',
            background: 'transparent',
            color: '#9fc8e8',
            fontSize: '.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            letterSpacing: '.02em',
            transition: 'border-color .18s, color .18s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(94,184,245,.7)';
            e.currentTarget.style.color = '#c8e4f8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(94,184,245,.35)';
            e.currentTarget.style.color = '#9fc8e8';
          }}
        >
          Solo Esenciales
        </button>
        <button
          onClick={() => accept('all')}
          style={{
            padding: '.6rem 1.25rem',
            borderRadius: '9px',
            border: 'none',
            background: '#14b99e',
            color: '#fff',
            fontSize: '.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '.02em',
            boxShadow: '0 2px 12px rgba(20,185,158,.35)',
            transition: 'background .18s, box-shadow .18s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#12a88f';
            e.currentTarget.style.boxShadow = '0 4px 18px rgba(20,185,158,.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#14b99e';
            e.currentTarget.style.boxShadow = '0 2px 12px rgba(20,185,158,.35)';
          }}
        >
          Aceptar Todas
        </button>
      </div>
    </div>
  );
}
