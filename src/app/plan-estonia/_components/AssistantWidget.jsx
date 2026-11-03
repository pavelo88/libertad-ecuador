'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from './Icons';

export default function AssistantWidget() {
  const [question, setQuestion] = useState('');
  const router = useRouter();

  const handleAsk = (q) => {
    const query = q || question;
    if (query.trim().length > 3) {
      router.push(`/pregunta?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const commonQuestions = [
    '¿Cómo mejorará la seguridad en mi barrio?',
    '¿Qué se hará con el transporte público?',
    '¿Cómo me beneficia la digitalización?',
    '¿Qué propuestas hay para creación de empleo?',
    '¿Cuándo se ejecutarán los programas?'
  ];

  return (
    <div className="assistant-card-preview">
      {/* Cabecera del Asistente */}
      <div className="assistant-card-header">
        <div className="assistant-avatar-badge">
          <Icon name="Bot" size={24} />
          <span className="assistant-online-ping" />
        </div>
        <div>
          <h4>Asistente Plan Estonia</h4>
          <span className="assistant-status">
            <span className="status-dot-active" /> En línea
          </span>
        </div>
      </div>

      <p className="assistant-intro">
        Soy el asistente del Plan Estonia. Puedo responder tus preguntas sobre propuestas,
        programas, presupuesto, cómo te beneficia y mucho más.
      </p>

      {/* Preguntas comunes rápidas */}
      <div className="assistant-faq-section">
        <span className="assistant-faq-title">Preguntas comunes:</span>
        <div className="assistant-faq-list">
          {commonQuestions.map((q) => (
            <button
              key={q}
              onClick={() => handleAsk(q)}
              className="assistant-faq-btn"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input de consulta interactivo */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="assistant-input-box"
      >
        <input
          type="text"
          placeholder="Escribe tu pregunta..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Enviar pregunta"
          className="assistant-send-btn"
        >
          <Icon name="Send" size={16} />
        </button>
      </form>
    </div>
  );
}
