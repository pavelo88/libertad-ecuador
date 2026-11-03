'use client';
import { useState, useRef, useEffect } from 'react';

const SUGERENCIAS = [
  '¿Cuáles son los 6 ejes del Plan Estonia?',
  '¿Cómo se financia el plan?',
  '¿Qué propone Estonia para la seguridad de Quito?',
  '¿Cuántos empleos proyecta el plan?',
  '¿Qué es la Minga Tecnológica?',
];

export default function AssistantWidget() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: '¡Hola! Soy el asistente IA del Plan Estonia. Consulto directamente el documento oficial (159 páginas) para responder sobre los 32 programas, los 6 ejes y las metas al 2031. ¿Qué deseas saber?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', text: q }]);
    setLoading(true);

    try {
      const res = await fetch('/api/preguntar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessages((m) => [
          ...m,
          { role: 'assistant', text: data.error || 'Hubo un problema. Por favor intenta de nuevo.' },
        ]);
      } else {
        const sourcesText =
          data.sources?.length
            ? '\n\n📄 ' +
              data.sources
                .map((s) => `Plan Estonia, pág. ${s.page}`)
                .filter((v, i, a) => a.indexOf(v) === i)
                .join(' · ')
            : '';
        setMessages((m) => [
          ...m,
          { role: 'assistant', text: data.answer + sourcesText, mode: data.mode },
        ]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', text: 'No se pudo conectar con el servidor. Verifica tu conexión.' },
      ]);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(160deg,#07162e 0%,#0b2040 100%)',
        border: '1px solid rgba(20,185,158,.22)',
        borderRadius: '18px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '480px',
        boxShadow: '0 8px 40px rgba(0,0,0,.32)',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '1rem 1.2rem .8rem',
          borderBottom: '1px solid rgba(20,185,158,.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'linear-gradient(135deg,#14b99e,#0b7a6a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 700, fontSize: '.9rem', color: '#e8f2fa', lineHeight: 1.2 }}>
            Asistente Plan Estonia
          </p>
          <p style={{ margin: 0, fontSize: '.72rem', color: '#14b99e', lineHeight: 1.2 }}>
            IA Cívica · Consulta el documento oficial
          </p>
        </div>
        <span
          style={{
            marginLeft: 'auto',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#14b99e',
            boxShadow: '0 0 6px #14b99e',
          }}
        />
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '.8rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '.7rem',
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '84%',
                padding: '.55rem .9rem',
                borderRadius: m.role === 'user' ? '14px 14px 3px 14px' : '14px 14px 14px 3px',
                background: m.role === 'user' ? '#14b99e' : 'rgba(255,255,255,.07)',
                color: m.role === 'user' ? '#fff' : '#c8daea',
                fontSize: '.82rem',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', gap: '4px', padding: '.4rem .9rem' }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#14b99e',
                  animation: `bounce 1.2s ${i * 0.2}s infinite`,
                  display: 'inline-block',
                }}
              />
            ))}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Sugerencias */}
      {messages.length <= 1 && (
        <div
          style={{
            padding: '0 .9rem .6rem',
            display: 'flex',
            gap: '6px',
            flexWrap: 'wrap',
            flexShrink: 0,
          }}
        >
          {SUGERENCIAS.slice(0, 3).map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              style={{
                background: 'rgba(20,185,158,.1)',
                border: '1px solid rgba(20,185,158,.25)',
                borderRadius: '8px',
                color: '#14b99e',
                fontSize: '.7rem',
                padding: '4px 9px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                textAlign: 'left',
                lineHeight: 1.3,
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div
        style={{
          padding: '.7rem 1rem',
          borderTop: '1px solid rgba(20,185,158,.12)',
          display: 'flex',
          gap: '8px',
          flexShrink: 0,
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Pregunta sobre el Plan Estonia…"
          style={{
            flex: 1,
            background: 'rgba(255,255,255,.07)',
            border: '1px solid rgba(94,184,245,.2)',
            borderRadius: '10px',
            padding: '8px 12px',
            color: '#e8f2fa',
            fontSize: '.82rem',
            outline: 'none',
            fontFamily: 'inherit',
          }}
        />
        <button
          onClick={() => send()}
          disabled={!input.trim() || loading}
          style={{
            background: input.trim() && !loading ? '#14b99e' : 'rgba(20,185,158,.25)',
            border: 'none',
            borderRadius: '10px',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: input.trim() && !loading ? 'pointer' : 'default',
            flexShrink: 0,
            transition: 'background .18s',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4z"/>
            <path d="M22 2 11 13"/>
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: .4; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
