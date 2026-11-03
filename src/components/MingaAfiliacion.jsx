'use client';
import { useState } from 'react';
import Link from 'next/link';

const AREAS = [
  { id: 'tech', icon: '💻', label: 'Tecnología' },
  { id: 'legal', icon: '⚖️', label: 'Legal' },
  { id: 'salud', icon: '🏥', label: 'Salud' },
  { id: 'edu', icon: '📚', label: 'Educación' },
  { id: 'arte', icon: '🎨', label: 'Arte' },
  { id: 'medio', icon: '🌿', label: 'Ambiente' },
];

const IDEAS_EJEMPLO = [
  { autor: 'María V., La Floresta', idea: 'App de denuncia ciudadana con IA para reportar baches, luminarias y basura directamente al municipio.', votos: 142 },
  { autor: 'Carlos M., Quitumbe', idea: 'Red de huertos comunitarios en lotes baldíos para producir alimentos frescos en el sur de Quito.', votos: 98 },
  { autor: 'Andrea P., Cotocollao', idea: 'Biblioteca digital barrial con acceso a cursos técnicos gratuitos en cada UPC.', votos: 76 },
];

export default function MingaAfiliacion() {
  const [step, setStep] = useState(0); // 0 = formulario, 1 = enviado
  const [area, setArea] = useState('');
  const [nombre, setNombre] = useState('');
  const [idea, setIdea] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !area) return;
    setStep(1);
  };

  return (
    <section
      id="sumate"
      style={{
        background: 'linear-gradient(160deg, #07162e 0%, #0a1e3d 100%)',
        padding: '4.5rem 0',
      }}
    >
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.8rem' }}>
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
            Participa
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
            Minga Cívica: Súmate al Cambio
          </h2>
          <p
            style={{
              maxWidth: '580px',
              margin: '0 auto',
              color: '#7098b8',
              fontSize: '.95rem',
              lineHeight: 1.7,
            }}
          >
            El Plan Estonia es de todos los quiteños. Aporta tu idea, tu talento o tu tiempo — cada ciudadano es parte del gobierno del cambio.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Formulario de afiliación */}
          <div
            style={{
              background: 'rgba(255,255,255,.03)',
              border: '1px solid rgba(20,185,158,.18)',
              borderRadius: '18px',
              padding: '1.8rem 1.6rem',
            }}
          >
            {step === 0 ? (
              <>
                <h3 style={{ margin: '0 0 1.2rem', fontSize: '1.05rem', fontWeight: 800, color: '#e8f2fa' }}>
                  Regístrate como Mingante
                </h3>
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: '#7098b8', marginBottom: '.3rem', letterSpacing: '.04em' }}>
                      Tu nombre *
                    </label>
                    <input
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Nombre completo"
                      required
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,.06)',
                        border: '1px solid rgba(94,184,245,.18)',
                        borderRadius: '10px',
                        padding: '9px 12px',
                        color: '#e8f2fa',
                        fontSize: '.85rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: '#7098b8', marginBottom: '.5rem', letterSpacing: '.04em' }}>
                      Área de aporte *
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '.4rem' }}>
                      {AREAS.map((a) => (
                        <button
                          key={a.id}
                          type="button"
                          onClick={() => setArea(a.id)}
                          style={{
                            padding: '.5rem .3rem',
                            borderRadius: '10px',
                            border: area === a.id ? '1.5px solid #14b99e' : '1.5px solid rgba(255,255,255,.08)',
                            background: area === a.id ? 'rgba(20,185,158,.12)' : 'rgba(255,255,255,.03)',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '3px',
                            fontFamily: 'inherit',
                            transition: 'all .15s',
                          }}
                        >
                          <span style={{ fontSize: '1.1rem' }}>{a.icon}</span>
                          <span style={{ fontSize: '.67rem', color: area === a.id ? '#14b99e' : '#7098b8', fontWeight: area === a.id ? 700 : 400 }}>
                            {a.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: '#7098b8', marginBottom: '.3rem', letterSpacing: '.04em' }}>
                      Tu idea para Quito (opcional)
                    </label>
                    <textarea
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      placeholder="¿Qué cambiarías en tu barrio o ciudad?"
                      rows={3}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,.06)',
                        border: '1px solid rgba(94,184,245,.18)',
                        borderRadius: '10px',
                        padding: '9px 12px',
                        color: '#e8f2fa',
                        fontSize: '.82rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                        lineHeight: 1.5,
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#14b99e',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '11px',
                      color: '#fff',
                      fontSize: '.88rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      letterSpacing: '.02em',
                      transition: 'background .18s',
                    }}
                  >
                    Unirme a la Minga →
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '.8rem' }}>🎉</div>
                <h3 style={{ margin: '0 0 .5rem', fontSize: '1.1rem', fontWeight: 800, color: '#14b99e' }}>
                  ¡Gracias, {nombre}!
                </h3>
                <p style={{ color: '#7098b8', fontSize: '.85rem', lineHeight: 1.6, margin: '0 0 1.2rem' }}>
                  Eres parte de la Minga Cívica de Quito. Te contactaremos con próximos pasos para empezar a aportar en el área de{' '}
                  <strong style={{ color: '#5eb8f5' }}>{AREAS.find((a) => a.id === area)?.label}</strong>.
                </p>
                <button
                  onClick={() => { setStep(0); setNombre(''); setArea(''); setIdea(''); }}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(94,184,245,.3)',
                    borderRadius: '10px',
                    padding: '8px 18px',
                    color: '#5eb8f5',
                    fontSize: '.82rem',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  Registrar otro ciudadano
                </button>
              </div>
            )}
          </div>

          {/* Banco de Ideas */}
          <div>
            <h3 style={{ margin: '0 0 1rem', fontSize: '1.05rem', fontWeight: 800, color: '#e8f2fa' }}>
              Banco de Ideas Ciudadanas
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '1rem' }}>
              {IDEAS_EJEMPLO.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,.04)',
                    border: '1px solid rgba(255,255,255,.06)',
                    borderRadius: '12px',
                    padding: '1rem 1.1rem',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '3px',
                      minWidth: 36,
                    }}
                  >
                    <button
                      style={{
                        background: 'rgba(20,185,158,.12)',
                        border: '1px solid rgba(20,185,158,.3)',
                        borderRadius: '8px',
                        width: 32,
                        height: 28,
                        cursor: 'pointer',
                        color: '#14b99e',
                        fontSize: '1rem',
                        lineHeight: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      aria-label="Votar por esta idea"
                    >
                      ↑
                    </button>
                    <span style={{ fontSize: '.75rem', fontWeight: 700, color: '#14b99e' }}>{item.votos}</span>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 .3rem', fontSize: '.82rem', color: '#c8daea', lineHeight: 1.5 }}>
                      {item.idea}
                    </p>
                    <p style={{ margin: 0, fontSize: '.72rem', color: '#4a6c8a' }}>{item.autor}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/pregunta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#5eb8f5',
                fontSize: '.82rem',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Ver todas las ideas ciudadanas →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
