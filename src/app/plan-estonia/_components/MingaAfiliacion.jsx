'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from './Icons';

const PARROQUIAS_QUITO = [
  'Calderón',
  'Iñaquito (Norte Urbano)',
  'Quitumbe (Sur Urbano)',
  'Centro Histórico',
  'Carcelén',
  'Conocoto (Valle de Los Chillos)',
  'Cumbayá',
  'Tumbaco',
  'Cotocollao',
  'La Magdalena',
  'San Antonio de Pichincha',
  'Chimbacalle',
  'Mariscal Sucre',
  'Ponceano',
  'El Condado',
  'Solanda',
  'Chillogallo',
  'Guamaní',
  'Llano Chico',
  'Zámbiza',
  'Pifo',
  'Yaruquí',
  'Alangasí',
  'Amaguaña',
  'San Rafael / Valle',
  'Otra parroquia urbana o rural'
];

const ROLES_MINGA = [
  { id: 'voluntario', label: 'Vecino / Voluntario Barrial' },
  { id: 'emprendedor', label: 'Emprendedor / Comercio' },
  { id: 'joven', label: 'Joven / Innovador Digital' },
  { id: 'profesional', label: 'Profesional / Especialista' },
  { id: 'testigo', label: 'Defensor Cívico y Veedor' }
];

const EJES_IDEAS = [
  'Seguridad y Convivencia',
  'Movilidad Inteligente y Metro',
  'Digitalización y Cero Trámites',
  'Desarrollo Económico y Empleo',
  'Ambiente y Descontaminación',
  'Salud, Educación y Cuidado'
];

export default function MingaAfiliacion() {
  const [tab, setTab] = useState('afiliacion'); // 'afiliacion' | 'idea'
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  // Form states
  const [formData, setFormData] = useState({
    nombre: '',
    parroquia: 'Calderón',
    telefono: '',
    email: '',
    rol: 'voluntario',
    titulo: '',
    eje: 'Seguridad y Convivencia',
    barrio: '',
    descripcion: '',
    website_trap: '', // Honeypot invisible
    acepta_privacidad: true
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [resultData, setResultData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.acepta_privacidad) {
      setErrorMsg('Debes aceptar la política de privacidad para participar.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/plan-estonia/api/participacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tipo: tab,
          nombre: formData.nombre,
          parroquia: formData.parroquia,
          telefono: formData.telefono,
          email: formData.email,
          rol: formData.rol,
          titulo: formData.titulo,
          eje: formData.eje,
          barrio: formData.barrio,
          descripcion: formData.descripcion,
          contacto: formData.telefono || formData.email,
          website_trap: formData.website_trap,
          form_start_time: startTime
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Ocurrió un error al procesar tu registro.');
      }

      // Evento analítico para Google Ads y Meta Ads
      if (typeof window !== 'undefined') {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            event_category: 'Participacion',
            event_label: tab,
            value: 1
          });
        }
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead', { content_name: tab });
        }
      }

      setResultData(data);
    } catch (err) {
      setErrorMsg(err.message || 'Error de conexión. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResultData(null);
    setErrorMsg('');
    setFormData((prev) => ({
      ...prev,
      nombre: '',
      telefono: '',
      email: '',
      titulo: '',
      barrio: '',
      descripcion: ''
    }));
  };

  return (
    <section className="section-afiliacion-minga" id="sumate">
      <div className="wrap afiliacion-split-container">
        {/* Columna Izquierda en Escritorio: Únete a la Minga y Razones Cívicas */}
        <div className="afiliacion-header-column">
          <div className="afiliacion-header-sticky">
            <span className="minga-badge-pill">
              <Icon name="Users" size={14} /> PARTICIPACIÓN CIUDADANA REAL
            </span>
            <h2 className="afiliacion-title">
              Únete a la Minga por el <em>Futuro de Quito</em>
            </h2>
            <p className="afiliacion-lead">
              La ciudad más linda del mundo la construimos entre todos. Afíliate a la red cívica de tu parroquia o ingresa tu idea para ser parte del cambio real.
            </p>

            <div className="afiliacion-perks-box">
              <div className="afiliacion-perk">
                <div className="perk-icon-pill">
                  <Icon name="Shield" size={16} />
                </div>
                <div>
                  <strong>Cero uso político</strong>
                  <small>Tus datos son protegidos conforme a la LOPDP ecuatoriana.</small>
                </div>
              </div>

              <div className="afiliacion-perk">
                <div className="perk-icon-pill">
                  <Icon name="Sparkles" size={16} />
                </div>
                <div>
                  <strong>Credencial Cívica Digital</strong>
                  <small>Genera tu carnet digital oficial listo para compartir.</small>
                </div>
              </div>

              <div className="afiliacion-perk">
                <div className="perk-icon-pill">
                  <Icon name="MapPinned" size={16} />
                </div>
                <div>
                  <strong>Presencia en 65 parroquias</strong>
                  <small>Coordinación barrial directa en tu sector.</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha en Escritorio: Formulario Compacto de Un Solo Golpe de Vista */}
        <div className="afiliacion-card-wrap">
          {!resultData ? (
            <>
              {/* Selector de Pestañas Superior */}
              <div className="afiliacion-tab-switcher" role="tablist">
                <button
                  type="button"
                  className={`switch-tab-btn ${tab === 'afiliacion' ? 'active' : ''}`}
                  onClick={() => { setTab('afiliacion'); setErrorMsg(''); }}
                >
                  <Icon name="UserCheck" size={17} />
                  <span>Afiliarme a la Minga</span>
                </button>
                <button
                  type="button"
                  className={`switch-tab-btn ${tab === 'idea' ? 'active' : ''}`}
                  onClick={() => { setTab('idea'); setErrorMsg(''); }}
                >
                  <Icon name="Lightbulb" size={17} />
                  <span>Proponer una Idea</span>
                </button>
              </div>

              {/* Formulario */}
              <form onSubmit={handleSubmit} className="afiliacion-form" noValidate>
                {/* Honeypot Anti-Bot Invisible (No visible para humanos) */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                  <label htmlFor="website_trap">Dejar en blanco</label>
                  <input
                    type="text"
                    id="website_trap"
                    name="website_trap"
                    value={formData.website_trap}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {errorMsg && (
                  <div className="afiliacion-error-alert" role="alert">
                    <Icon name="AlertCircle" size={17} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {tab === 'afiliacion' ? (
                  /* CAMPOS AFILIACIÓN */
                  <div className="form-fields-grid">
                    <div className="form-group-item">
                      <label htmlFor="nombre">
                        Nombre y Apellidos <em>*</em>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ej. María Elena Morales"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        maxLength={90}
                      />
                    </div>

                    <div className="form-group-item">
                      <label htmlFor="parroquia">
                        Tu Parroquia en Quito <em>*</em>
                      </label>
                      <select
                        id="parroquia"
                        name="parroquia"
                        value={formData.parroquia}
                        onChange={handleChange}
                        required
                      >
                        {PARROQUIAS_QUITO.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group-item">
                      <label htmlFor="telefono">
                        Celular / WhatsApp (Ecuador) <em>*</em>
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="099 123 4567"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        maxLength={15}
                      />
                    </div>

                    <div className="form-group-item">
                      <label htmlFor="email">
                        Correo Electrónico <small>(opcional)</small>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="tu-correo@ejemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        maxLength={80}
                      />
                    </div>

                    <div className="form-group-item full-width">
                      <label>¿Cómo te gustaría sumar a la Minga?</label>
                      <div className="roles-pill-wrap">
                        {ROLES_MINGA.map((r) => (
                          <label
                            key={r.id}
                            className={`role-pill-btn ${formData.rol === r.id ? 'active' : ''}`}
                          >
                            <input
                              type="radio"
                              name="rol"
                              value={r.id}
                              checked={formData.rol === r.id}
                              onChange={handleChange}
                            />
                            <span>{r.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* CAMPOS BANCO DE IDEAS */
                  <div className="form-fields-grid">
                    <div className="form-group-item full-width">
                      <label htmlFor="titulo">
                        Título de tu Propuesta o Idea <em>*</em>
                      </label>
                      <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        placeholder="Ej. Red de alarmas comunitarias integradas con botón en celulares en San Antonio"
                        required
                        value={formData.titulo}
                        onChange={handleChange}
                        maxLength={150}
                      />
                    </div>

                    <div className="form-group-item">
                      <label htmlFor="eje">
                        Eje Temático del Plan <em>*</em>
                      </label>
                      <select
                        id="eje"
                        name="eje"
                        value={formData.eje}
                        onChange={handleChange}
                        required
                      >
                        {EJES_IDEAS.map((ej) => (
                          <option key={ej} value={ej}>{ej}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group-item">
                      <label htmlFor="barrio">
                        Barrio / Sector de Quito
                      </label>
                      <input
                        type="text"
                        id="barrio"
                        name="barrio"
                        placeholder="Ej. La Vicentina, Carapungo etapa 2, Chimbacalle..."
                        value={formData.barrio}
                        onChange={handleChange}
                        maxLength={80}
                      />
                    </div>

                    <div className="form-group-item full-width">
                      <label htmlFor="descripcion">
                        ¿En qué consiste tu idea y qué problema resuelve? <em>*</em>
                      </label>
                      <textarea
                        id="descripcion"
                        name="descripcion"
                        rows={4}
                        placeholder="Explica cómo esta propuesta mejoraría la calidad de vida en tu barrio o en todo Quito..."
                        required
                        value={formData.descripcion}
                        onChange={handleChange}
                        maxLength={1500}
                      />
                      <div className="char-counter">
                        {formData.descripcion.length} / 1500 caracteres
                      </div>
                    </div>

                    <div className="form-group-item">
                      <label htmlFor="nombre">Tu Nombre o Seudónimo</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ej. Carlos Andrade"
                        value={formData.nombre}
                        onChange={handleChange}
                        maxLength={80}
                      />
                    </div>

                    <div className="form-group-item">
                      <label htmlFor="telefono">WhatsApp / Contacto</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="099 000 0000"
                        value={formData.telefono}
                        onChange={handleChange}
                        maxLength={15}
                      />
                    </div>
                  </div>
                )}

                {/* Consentimiento Legal y Anti-Spam */}
                <div className="form-consent-box">
                  <label className="consent-checkbox-label">
                    <input
                      type="checkbox"
                      name="acepta_privacidad"
                      checked={formData.acepta_privacidad}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      Acepto los términos de participación cívica y tratamiento responsable de datos personales para la Minga de Quito.
                    </span>
                  </label>
                  <div style={{ marginTop: '10px', padding: '12px 14px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '0.78rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div>
                      <Link href="/plan-estonia/privacidad" target="_blank" style={{ color: '#0d8a7a', fontWeight: 800, textDecoration: 'underline' }}>
                        Política de Privacidad
                      </Link>
                      : Conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP).
                    </div>
                    <div>
                      <Link href="/plan-estonia/terminos" target="_blank" style={{ color: '#0d8a7a', fontWeight: 800, textDecoration: 'underline' }}>
                        Términos y Condiciones
                      </Link>
                      : Transparencia, independencia y naturaleza cívica de la plataforma.
                    </div>
                  </div>
                </div>

                {/* Botón de Envío con Micro-Feedback */}
                <div className="form-submit-row">
                  <button
                    type="submit"
                    className="btn-submit-minga"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-fast" /> Procesando con seguridad...
                      </>
                    ) : tab === 'afiliacion' ? (
                      <>
                        <span>Completar mi Afiliación Cívica</span>
                        <Icon name="ArrowRight" size={18} />
                      </>
                    ) : (
                      <>
                        <span>Enviar Propuesta al Banco de Ideas</span>
                        <Icon name="Send" size={17} />
                      </>
                    )}
                  </button>
                  <small className="form-secure-note">
                    <Icon name="ShieldCheck" size={15} /> Protección Zero-Trust contra bots y spam. Tus datos están blindados.
                  </small>
                </div>
              </form>
            </>
          ) : (
            /* ======================================================== */
            /* TARJETA DE ÉXITO / CREDENCIAL CÍVICA DIGITAL PERSONALIZADA */
            /* ======================================================== */
            <div className="civic-badge-success-view">
              <div className="success-header-badge">
                <div className="success-icon-circle">
                  <Icon name="CheckCircle2" size={32} />
                </div>
                <h3>{resultData.message}</h3>
                <p>
                  Te has sumado formalmente a la red de transformación de Quito. Guarda y comparte tu credencial cívica oficial.
                </p>
              </div>

              {/* Credencial Digital Estilo Apple Wallet / Pass */}
              <div className="civic-pass-card">
                <div className="pass-card-top">
                  <div className="pass-brand">
                    <span className="brand-mark">E<span>.</span></span>
                    <div>
                      <strong>PLAN ESTONIA QUITO</strong>
                      <small>RED CÍVICA DMQ 2027–2031</small>
                    </div>
                  </div>
                  <div className="pass-code-pill">
                    <span>{resultData.code}</span>
                  </div>
                </div>

                <div className="pass-card-body">
                  <div className="pass-user-info">
                    <small>CIUDADANO AFILIADO</small>
                    <h4>{resultData.nombre || 'Ciudadano Quiteño'}</h4>
                  </div>
                  <div className="pass-meta-grid">
                    <div>
                      <small>PARROQUIA</small>
                      <strong>{resultData.parroquia || 'Distrito Metropolitano'}</strong>
                    </div>
                    <div>
                      <small>ESTADO</small>
                      <strong className="status-verified">ACTIVO EN MINGA</strong>
                    </div>
                  </div>
                </div>

                <div className="pass-card-footer">
                  <div className="pass-motto">
                    <span>Trabajo, Orden, Corazón</span>
                  </div>
                  <div className="pass-tagline">
                    <small>Minga de Oportunidades para Todos</small>
                  </div>
                </div>
              </div>

              {/* Acciones de Viralidad Ciudadana */}
              <div className="success-actions-row">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `¡Ya soy parte de la Minga por el futuro de Quito con el Plan Estonia! 🏙️ Mi código cívico es ${resultData.code}. Súmate tú también o aporta tus ideas aquí: https://plan-estonia.vercel.app/#sumate`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-share"
                >
                  <Icon name="Share2" size={18} />
                  <span>Compartir mi Credencial en WhatsApp</span>
                </a>

                <button
                  type="button"
                  className="btn-reset-form"
                  onClick={handleReset}
                >
                  Registrar a otra persona o ingresar otra idea
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
