'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from './Icons';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('plan_estonia_cookie_consent');
      if (!consent) {
        setShow(true);
      }
    } catch (e) {
      // LocalStorage deshabilitado o privado
      setShow(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('plan_estonia_cookie_consent', 'accepted');
    } catch (e) {}
    setShow(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('plan_estonia_cookie_consent', 'essential_only');
    } catch (e) {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de Cookies y Privacidad"
      className="cookie-banner-floating"
    >
      <div className="cookie-banner-head">
        <div className="cookie-banner-icon">
          <Icon name="Shield" size={20} />
        </div>
        <div className="cookie-banner-info">
          <h4>Privacidad y Cookies</h4>
          <p>
            Utilizamos cookies técnicas necesarias y analítica anónima para optimizar la velocidad y la experiencia cívica, conforme a la <strong>Ley Orgánica de Protección de Datos Personales (LOPDP)</strong> de Ecuador.
          </p>
        </div>
      </div>

      <div className="cookie-banner-links">
        <Link href="/plan-estonia/privacidad">
          Política de Privacidad
        </Link>
        <span>•</span>
        <Link href="/plan-estonia/terminos">
          Términos de Uso
        </Link>
      </div>

      <div className="cookie-banner-actions">
        <button
          onClick={handleDecline}
          type="button"
          className="btn-cookie-decline"
        >
          Solo Esenciales
        </button>
        <button
          onClick={handleAccept}
          type="button"
          className="btn-cookie-accept"
        >
          Aceptar Todas
        </button>
      </div>
    </aside>
  );
}
