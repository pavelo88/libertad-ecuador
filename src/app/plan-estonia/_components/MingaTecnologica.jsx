'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from './Icons';

const etapasMinga = [
  {
    id: 'fase1',
    numero: 'ETAPA 01',
    periodo: 'Año 1 (2027)',
    titulo: 'Minga Vecinal & Trámites Inmediatos',
    lema: 'Lo más sencillo primero: victorias rápidas con la gente',
    viabilidad: '95% (Alta / Inmediata)',
    costo: 'Bajo / Fondos Municipales Directos',
    color: '#0d8a7a',
    ciudadania: 'La gente mapea baches y luminarias desde su celular; mingas comunitarias en quebradas y comités de seguridad barrial.',
    municipio: 'Trámites comerciales en 72 horas con declaración jurada; ventanilla única móvil en mercados y parroquias rurales.',
    metaClave: '100.000 trámites sin filas · 120 barrios con alertas comunitarias activas',
    preguntaIA: '¿Cómo funcionará la primera etapa del Plan Estonia en los barrios de Quito en 2027?'
  },
  {
    id: 'fase2',
    numero: 'ETAPA 02',
    periodo: 'Años 2–3 (2028–2029)',
    titulo: 'Conexión Real & Seguridad Jurídica',
    lema: 'Integrar lo que estaba roto: transporte unificado y vivienda con dueño',
    viabilidad: '82% (Media-Alta / Requiere convenios)',
    costo: 'Moderado / Reasignación presupuestaria',
    color: '#0056b3',
    ciudadania: 'Cultura Metro en paradas y buses; participación de dirigentes en mesas de titulación de predios sin intermediarios políticos.',
    municipio: 'Tarjeta ciudadana única Metro + Trole + Ecovía; titulación masiva de 50.000 predios en laderas y valles.',
    metaClave: '-25% tiempo de trasbordo · 50.000 escrituras entregadas',
    preguntaIA: '¿Cómo se integrará la tarifa del Metro con los buses y qué se necesita para la titulación de predios?'
  },
  {
    id: 'fase3',
    numero: 'ETAPA 03',
    periodo: 'Años 4–5 (2030–2031)',
    titulo: 'Quito Verde, Inteligente & Productivo',
    lema: 'La gran transformación: ríos limpios, empleo industrial y buses eléctricos',
    viabilidad: '72% (Estratégica / Alianzas Público-Privadas)',
    costo: 'Alto / Alianzas de Inversión y Créditos Multilaterales',
    color: '#7c3aed',
    ciudadania: 'Separación de residuos en cada hogar (-50% basura al Inga); consumo local y capacitación técnica en nuevos empleos verdes.',
    municipio: 'Plantas de tratamiento de aguas residuales; 100% flota troncal eléctrica y Polo Logístico Industrial Turubamba.',
    metaClave: '+200% aguas tratadas · 150.000 empleos sostenibles',
    preguntaIA: '¿Qué financiamiento requiere la planta de tratamiento de aguas y el polo logístico del sur de Quito?'
  }
];

const rolesCiudadanos = [
  {
    id: 'vecino',
    rol: 'Vecino / Familia',
    icon: 'Home',
    mision: 'Reportar luminarias y baches, participar en la alarma barrial y cuidar el parque cercano.',
    impacto: 'Barrio iluminado, seguro y con espacios para que jueguen tus hijos.'
  },
  {
    id: 'emprendedor',
    rol: 'Emprendedor / Negocio',
    icon: 'Briefcase',
    mision: 'Registrar tu negocio en 72 horas sin coimas ni clausuras arbitrarias.',
    impacto: 'Trabajar con tranquilidad legal y acceder a crédito semilla municipal.'
  },
  {
    id: 'estudiante',
    rol: 'Joven / Estudiante',
    icon: 'GraduationCap',
    mision: 'Sumarte a hackathons de datos cívicos y voluntariado tecnológico barrial.',
    impacto: 'Beca de conectividad, pasantías en el municipio digital y empleo técnico.'
  },
  {
    id: 'transporte',
    rol: 'Usuario de Transporte',
    icon: 'BusFront',
    mision: 'Usar la tarjeta inteligente, cuidar los buses y respetar los asientos preferenciales.',
    impacto: 'Ahorrar hasta 40 minutos diarios en trasbordos con una sola tarifa justa.'
  }
];

export default function MingaTecnologica() {
  const [etapaActiva, setEtapaActiva] = useState(0);
  const [rolActivo, setRolActivo] = useState(0);

  const etapa = etapasMinga[etapaActiva];
  const rol = rolesCiudadanos[rolActivo];

  return (
    <section className="section-minga-interactive" id="minga-tecnologica">
      <div className="wrap">
        {/* Cabecera del Módulo Compacta */}
        <div className="minga-header-box">
          <div className="minga-badge-pill">
            <span className="minga-sparkle">✨</span>
            <span>METODOLOGÍA DE IMPLEMENTACIÓN REALISTA</span>
          </div>
          <h2 className="minga-title-main">
            La Gran Minga de Quito: <em>Un plan viable por etapas con la gente</em>
          </h2>
          <p className="minga-lead-text">
            No es una lista de promesas mágicas. Es una ruta secuencial donde empezamos por lo más
            sencillo e inmediato y construimos juntos la ciudad más segura, humana y moderna del continente.
          </p>
        </div>

        {/* Estructura Split en Un Solo Golpe de Vista (Izquierda: Etapas | Derecha: Tu Papel Ciudadano) */}
        <div className="minga-split-dashboard">
          {/* Columna Izquierda: Ruta de 3 Etapas y Detalle */}
          <div className="minga-dash-col-left">
            <div className="minga-etapas-tabs" role="tablist">
              {etapasMinga.map((et, idx) => (
                <button
                  key={et.id}
                  role="tab"
                  aria-selected={idx === etapaActiva}
                  className={`minga-tab-card ${idx === etapaActiva ? 'active' : ''}`}
                  onClick={() => setEtapaActiva(idx)}
                >
                  <div className="tab-card-top">
                    <span className="tab-card-num">{et.numero}</span>
                    <span className="tab-card-tag">{et.periodo}</span>
                  </div>
                  <h4 className="tab-card-title">{et.titulo}</h4>
                  <div className="tab-card-viability">
                    <small>Viabilidad:</small>
                    <strong>{et.viabilidad.split(' ')[0]}</strong>
                  </div>
                </button>
              ))}
            </div>

            {/* Detalle Dinámico de la Etapa */}
            <div className="minga-stage-detail animate-app-in" key={etapa.id}>
              <div className="stage-detail-header" style={{ borderLeftColor: etapa.color }}>
                <div>
                  <span className="stage-kicker" style={{ color: etapa.color }}>
                    {etapa.numero} · {etapa.periodo}
                  </span>
                  <h3>{etapa.titulo}</h3>
                  <p className="stage-motto">&ldquo;{etapa.lema}&rdquo;</p>
                </div>
                <div className="stage-pills-wrap">
                  <span className="viability-badge">
                    <Icon name="CheckCircle2" size={13} />
                    {etapa.viabilidad}
                  </span>
                  <span className="cost-badge">
                    <Icon name="DollarSign" size={13} />
                    {etapa.costo}
                  </span>
                </div>
              </div>

              <div className="stage-comparison-grid">
                <div className="minga-actor-card actor-ciudadania">
                  <div className="actor-card-head">
                    <div className="actor-icon-box">
                      <Icon name="Users" size={18} />
                    </div>
                    <div>
                      <strong>¿Qué hace la Ciudadanía?</strong>
                      <small>Fuerza Barrial</small>
                    </div>
                  </div>
                  <p>{etapa.ciudadania}</p>
                </div>

                <div className="minga-actor-card actor-municipio">
                  <div className="actor-card-head">
                    <div className="actor-icon-box">
                      <Icon name="Landmark" size={18} />
                    </div>
                    <div>
                      <strong>¿Qué ejecuta el Municipio?</strong>
                      <small>Gestión Técnica</small>
                    </div>
                  </div>
                  <p>{etapa.municipio}</p>
                </div>
              </div>

              <div className="stage-bottom-action">
                <div className="stage-meta-goal">
                  <Icon name="Target" size={15} />
                  <span><strong>Meta:</strong> {etapa.metaClave}</span>
                </div>
                <Link
                  href={`/plan-estonia/pregunta?q=${encodeURIComponent(etapa.preguntaIA)}`}
                  className="btn-minga-ask"
                >
                  <Icon name="Sparkles" size={14} />
                  <span>Preguntar a la IA</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Columna Derecha: ¿Cuál es tu papel en la Minga? */}
          <div className="minga-dash-col-right">
            <div className="minga-roles-box">
              <div className="roles-box-head">
                <span className="section-card-kicker">PARTICIPACIÓN DIRECTA</span>
                <h3>¿Cuál es tu papel en la Minga?</h3>
                <p>Selecciona tu perfil ciudadano:</p>
              </div>

              <div className="roles-pills-row">
                {rolesCiudadanos.map((r, idx) => (
                  <button
                    key={r.id}
                    className={`role-select-btn ${idx === rolActivo ? 'active' : ''}`}
                    onClick={() => setRolActivo(idx)}
                  >
                    <Icon name={r.icon} size={15} />
                    <span>{r.rol}</span>
                  </button>
                ))}
              </div>

              <div className="role-active-card animate-app-in" key={rol.id}>
                <div className="role-card-grid">
                  <div className="role-card-part">
                    <span className="role-tag-sub">TU APORTE CIUDADANO</span>
                    <p><strong>{rol.mision}</strong></p>
                  </div>
                  <div className="role-card-part role-part-highlight">
                    <span className="role-tag-sub">TU BENEFICIO TANGIBLE</span>
                    <p><strong>{rol.impacto}</strong></p>
                  </div>
                </div>
              </div>

              <div className="minga-join-shortcut">
                <a href="#sumate" className="btn-join-shortcut">
                  <Icon name="Users" size={16} />
                  <span>Afiliarme a la Minga Barrial</span>
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
