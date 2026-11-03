import Link from 'next/link';
import { AXES, PROGRAMAS } from './_lib/data';
import { Icon } from './_components/Icons';
import AssistantWidget from './_components/AssistantWidget';
import InteractiveChallengeTabs from './_components/InteractiveChallengeTabs';
import AnimatedStatsDock from './_components/AnimatedStatsDock';
import ImpactExplorer from './_components/ImpactExplorer';
import MingaTecnologica from './_components/MingaTecnologica';
import MingaAfiliacion from './_components/MingaAfiliacion';
import SeccionCienciaEstonia from './_components/SeccionCienciaEstonia';

// Metas y Resultados clave esperados al 2031 con enlaces interactivos
const results2031 = [
  { icon: 'TrendingDown', color: 'red', val: '-50%', title: 'homicidios', sub: 'reducción drástica', href: '/pregunta?q=¿Cómo planea el Plan Estonia reducir un 50% los homicidios en Quito?' },
  { icon: 'FileCheck2', color: 'blue', val: '+300.000', title: 'trámites digitales', sub: 'cero filas', href: '/pregunta?q=¿Cómo funcionarán los trámites 100% digitales en 72 horas?' },
  { icon: 'Clock', color: 'blue', val: '-40%', title: 'tiempo de viaje', sub: 'transporte integrado', href: '/pregunta?q=¿Cómo se integrará la tarifa del Metro con los buses y cuánto tiempo se ahorrará?' },
  { icon: 'Home', color: 'orange', val: '+250.000', title: 'títulos de propiedad', sub: 'seguridad jurídica', href: '/pregunta?q=¿Cómo será la titulación masiva de 250.000 predios en Quito?' },
  { icon: 'Waves', color: 'teal', val: '+200%', title: 'tratamiento de aguas', sub: 'ríos limpios', href: '/pregunta?q=¿Cómo se recuperará y descontaminará el río Machángara y las quebradas?' },
  { icon: 'Trees', color: 'green', val: '+5 m²', title: 'áreas verdes / hab.', sub: 'parques y quebradas', href: '/pregunta?q=¿Dónde se construirán los nuevos parques y áreas verdes en Quito?' },
  { icon: 'Briefcase', color: 'purple', val: '+150.000', title: 'empleos generados', sub: 'reactivación productiva', href: '/pregunta?q=¿Qué incentivos y proyectos generarán 150.000 empleos según el plan?' },
  { icon: 'Recycle', color: 'orange', val: '-50%', title: 'residuos a relleno', sub: 'economía circular', href: '/pregunta?q=¿Cómo funcionará la economía circular para no saturar el relleno del Inga?' }
];

// Mapeo enriquecido para los 6 ejes con imágenes hiperrealistas y colores oficiales
const enrichedAxes = [
  {
    name: 'Ciudad Digital e Institucional',
    axisQuery: 'Digitalización',
    count: '6 programas',
    desc: 'Trámites simples, transparencia y un municipio que sirve.',
    img: '/assets/eje-digital.webp',
    colorClass: 'axis-brand-blue',
    icon: 'Laptop'
  },
  {
    name: 'Seguridad y Convivencia',
    axisQuery: 'Seguridad',
    count: '5 programas',
    desc: 'Barrios más seguros, prevención y tecnología para tu tranquilidad.',
    img: '/assets/eje-seguridad.webp',
    colorClass: 'axis-brand-red',
    icon: 'Shield'
  },
  {
    name: 'Movilidad Inteligente',
    axisQuery: 'Movilidad',
    count: '6 programas',
    desc: 'Una ciudad conectada, rápida, segura y accesible.',
    img: '/assets/eje-movilidad.webp',
    colorClass: 'axis-brand-teal',
    icon: 'BusFront'
  },
  {
    name: 'Ambiente y Territorio',
    axisQuery: 'Ambiente',
    count: '5 programas',
    desc: 'Una ciudad más verde, resiliente y sostenible para el futuro.',
    img: '/assets/eje-ambiente.webp',
    colorClass: 'axis-brand-orange',
    icon: 'Leaf'
  },
  {
    name: 'Desarrollo Económico y Empleo',
    axisQuery: 'Trabajo',
    count: '5 programas',
    desc: 'Más oportunidades, menos trámites, una ciudad que produce.',
    img: '/assets/eje-trabajo.webp',
    colorClass: 'axis-brand-purple',
    icon: 'BriefcaseBusiness'
  },
  {
    name: 'Desarrollo Humano y Vida Digna',
    axisQuery: 'Desarrollo humano',
    count: '5 programas',
    desc: 'Salud, educación, vivienda y bienestar para una ciudad más humana.',
    img: '/assets/eje-humano.webp',
    colorClass: 'axis-brand-pink',
    icon: 'HeartHandshake'
  }
];

export default function Home() {
  return (
    <>
      {/* ========================================================= */}
      {/* HERO SECTION ESTILO APPLE / STRIPE CON FONDO PANORÁMICO */}
      {/* ========================================================= */}
      <section className="hero-cinematic">
        <div className="hero-cinematic-bg">
          <img
            src="/assets/quito-hero.webp"
            alt="Panorámica de Quito con nevados al atardecer"
            className="hero-cinematic-img"
          />
          <div className="hero-cinematic-overlay" />
        </div>

        <div className="wrap hero-cinematic-content">
          <div className="hero-copy-clean">
            <h1 className="hero-cinematic-title">
              Quito de oportunidades <br />
              para todos
            </h1>
            <p className="hero-cinematic-subtitle">
              Un plan serio, realizable y medible para una ciudad más segura, más próspera,
              más verde y más humana.
            </p>

            <div className="hero-cinematic-actions">
              <Link href="#sumate" className="btn-hero-solid">
                Únete a la Minga <Icon name="Users" size={17} />
              </Link>
              <Link href="/plan-estonia/plan" className="btn-hero-ghost">
                Conoce el Plan <Icon name="ArrowRight" size={16} />
              </Link>
              <Link href="/plan-estonia/pregunta" className="btn-hero-ghost">
                Pregunta a la IA
              </Link>
            </div>
          </div>

          <div className="hero-quote-stamp">
            <span className="script-motto">Trabajo, Orden, Corazón</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BARRA FLOTANTE DE INDICADORES CLAVE (CON ANIMACIÓN FLUIDA) */}
      {/* ========================================================= */}
      <AnimatedStatsDock />

      {/* ========================================================= */}
      {/* SECCIÓN PRINCIPAL: 6 EJES TEMÁTICOS + WIDGET ASISTENTE IA */}
      {/* ========================================================= */}
      <section className="section-main-hub">
        <div className="wrap">
          <div className="hub-layout-grid">
            {/* Columna Izquierda: Los 6 Ejes del Plan Estonia */}
            <div className="axes-column">
              <div className="section-header-row">
                <div>
                  <h2 className="section-title-bold">Los 6 Ejes del Plan Estonia</h2>
                  <p className="section-subtitle-muted">
                    Un modelo integral para transformar Quito
                  </p>
                </div>
                <Link href="/plan-estonia/programas" className="section-link-more">
                  Ver todos los programas <Icon name="ArrowRight" size={16} />
                </Link>
              </div>

              <div className="axes-cards-grid">
                {enrichedAxes.map((axe, i) => (
                  <Link
                    key={i}
                    href={`/plan-estonia/programas?eje=${encodeURIComponent(axe.axisQuery)}`}
                    className="axe-card-card"
                  >
                    <div className="axe-card-img-wrap">
                      <img src={axe.img} alt={axe.name} />
                      <div className="axe-card-badge-top">
                        <Icon name={axe.icon} size={15} />
                      </div>
                    </div>
                    <div className={`axe-card-banner ${axe.colorClass}`}>
                      <h3>{axe.name}</h3>
                      <p>{axe.desc}</p>
                      <div className="axe-card-footer">
                        <span>{axe.count}</span>
                        <Icon name="ArrowRight" size={15} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Asistente Interactivo Plan Estonia */}
            <div className="assistant-column">
              <AssistantWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DIAGNÓSTICO INTERACTIVO + MODELO DE CIUDAD + RESULTADOS */}
      {/* ========================================================= */}
      <section className="section-triple-grid">
        <div className="wrap">
          <div className="triple-cards-container">
            {/* 1. Diagnóstico Interactivo con Pestañas */}
            <div className="triple-card-col">
              <InteractiveChallengeTabs />
            </div>

            {/* 2. Modelo de Ciudad */}
            <div className="triple-card-col model-city-col">
              <div className="model-city-card">
                <div className="model-city-head">
                  <div className="model-city-head-row">
                    <div>
                      <h3>Modelo de Ciudad</h3>
                      <small>Quito compacto, conectado y con dueño</small>
                    </div>
                    <Link href="/plan-estonia/modelo" className="model-city-link" title="Ver modelo territorial completo">
                      <Icon name="ArrowUpRight" size={16} />
                    </Link>
                  </div>
                </div>

                <div className="model-city-graphic-wrap model-city-photo-wrap">
                  <img
                    src="/assets/quito-modelo-3d.webp"
                    alt="Modelo territorial y urbano 3D de Quito"
                    className="model-city-img-photo"
                  />
                  <div className="model-city-photo-overlay" />
                  <div className="model-city-pin pin-calderon">
                    <span>Calderón</span>
                    <small>Crecimiento ordenado</small>
                  </div>
                  <div className="model-city-pin pin-centro">
                    <span>Centro Histórico</span>
                    <small>Se recupera y se habita</small>
                  </div>
                  <div className="model-city-pin pin-inaquito">
                    <span>Iñaquito</span>
                    <small>Densificación con servicios</small>
                  </div>
                  <div className="model-city-pin pin-valles">
                    <span>Valles</span>
                    <small>Conservación y turismo</small>
                  </div>
                </div>

                <div className="model-city-legend">
                  <span><i className="dot-blue" /> Zona urbana consolidada</span>
                  <span><i className="dot-cyan" /> Densificación prioritaria</span>
                  <span><i className="dot-orange" /> Crecimiento ordenado</span>
                  <span><i className="dot-green" /> Conservación ambiental</span>
                </div>
              </div>
            </div>

            {/* 3. Resultados esperados al 2031 */}
            <div className="triple-card-col results-2031-col">
              <div className="results-card-container">
                <div className="results-head">
                  <div className="results-head-top">
                    <h3>Resultados esperados al 2031</h3>
                    <span className="results-badge-touch">Toca para consultar</span>
                  </div>
                  <small>Metas claras y medibles para una mejor calidad de vida</small>
                </div>

                <div className="results-items-grid">
                  {results2031.map((res, idx) => (
                    <Link
                      key={idx}
                      href={res.href}
                      className="result-metric-box result-metric-interactive"
                      title={`Preguntar sobre ${res.title}`}
                    >
                      <div className={`result-metric-val color-${res.color}`}>
                        <Icon name={res.icon} size={17} />
                        <strong>{res.val}</strong>
                      </div>
                      <span className="result-metric-title">{res.title}</span>
                      <small className="result-metric-sub">{res.sub}</small>
                      <span className="result-metric-tap-hint">
                        <Icon name="ArrowRight" size={11} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* LA CIENCIA DEL PLAN ESTONIA ORIGINAL: DOCTRINA Y REGLAS   */}
      {/* ========================================================= */}
      <SeccionCienciaEstonia />

      {/* ========================================================= */}
      {/* LA MINGA DE QUITO: PLAN POR ETAPAS, VIABILIDAD Y CIUDADANÍA */}
      {/* ========================================================= */}
      <MingaTecnologica />

      {/* ========================================================= */}
      {/* EXPLORADOR DE IMPACTO EN EL DÍA A DÍA (SITUACIONES REALES) */}
      {/* ========================================================= */}
      <section className="section-impact-citizen">
        <div className="wrap">
          <div className="section-header-row">
            <div>
              <span className="section-badge-pill">PROPUESTAS EXPLICADAS</span>
              <h2 className="section-title-bold">¿Y esto qué significaría en mi vida?</h2>
              <p className="section-subtitle-muted">
                Respuestas contextuales a situaciones del día a día, con citas al documento.
              </p>
            </div>
            <Link href="/plan-estonia/impacto" className="section-link-more">
              Explorar todas las situaciones <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <ImpactExplorer />
        </div>
      </section>

      {/* ========================================================= */}
      {/* MINGA CÍVICA: AFILIACIÓN CIUDADANA & BANCO DE IDEAS       */}
      {/* ========================================================= */}
      <MingaAfiliacion />
    </>
  );
}

