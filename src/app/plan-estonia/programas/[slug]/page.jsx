import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROGRAMAS, getProgram, sourceLink } from '../../_lib/data';
import { Icon } from '../../_components/Icons';

export async function generateStaticParams() {
  return PROGRAMAS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProgram(slug);
  return {
    title: p?.title ? `${p.title} | Plan Estonia` : 'Programa no encontrado',
    description: p?.subtitle || p?.diagnosis || 'Ficha oficial de programa del Plan Estonia.',
  };
}

const axisPhotos = {
  'Digitalización': { img: '/assets/eje-digital.webp', label: 'Eje 1 · Ciudad Digital e Institucional' },
  'Seguridad': { img: '/assets/eje-seguridad.webp', label: 'Eje 2 · Seguridad y Convivencia' },
  'Movilidad': { img: '/assets/eje-movilidad.webp', label: 'Eje 3 · Movilidad Inteligente' },
  'Ambiente': { img: '/assets/eje-ambiente.webp', label: 'Eje 4 · Ambiente y Territorio' },
  'Trabajo': { img: '/assets/eje-trabajo.webp', label: 'Eje 5 · Desarrollo Económico y Empleo' },
  'Desarrollo humano': { img: '/assets/eje-humano.webp', label: 'Eje 6 · Desarrollo Humano y Vida Digna' },
};

export default async function ProgramDetail({ params }) {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) notFound();

  const photoInfo = axisPhotos[p.axis] || {
    img: '/assets/portada-plan-estonia.webp',
    label: `Eje Estratégico · ${p.axis}`,
  };

  return (
    <div className="program-detail">
      <section className="program-hero-wrapper">
        <div className="wrap">
          <nav className="program-breadcrumbs" aria-label="Ruta de navegación">
            <Link href="/plan-estonia/programas">
              <Icon name="ArrowLeft" size={16} />
              <span>Todos los programas</span>
            </Link>
            <span>/</span>
            <span style={{ color: '#e2e8f0', fontWeight: 700 }}>{p.axis}</span>
          </nav>

          <div className="program-hero-grid">
            <div>
              <div className="program-tag-pill">
                <span>{p.axis}</span>
                <span>•</span>
                <span>Programa {p.number}</span>
                <span>•</span>
                <span>Año {p.period}</span>
              </div>
              <h1 className="program-hero-title">{p.title}</h1>
              <p className="program-hero-subtitle">{p.subtitle}</p>
              <div className="program-hero-buttons">
                <Link href={'/plan-estonia' + sourceLink(p.page)} className="btn-program-primary">
                  <Icon name="FileText" size={18} />
                  <span>Leer fuente oficial · p. {p.page}</span>
                </Link>
                <Link
                  href={'/plan-estonia/pregunta?q=' + encodeURIComponent(`Explícame qué propone el programa "${p.title}" del Plan Estonia, cómo se financiará y cuáles son sus metas.`)}
                  className="btn-program-secondary"
                >
                  <Icon name="Sparkles" size={17} />
                  <span>Consultar con IA</span>
                </Link>
              </div>
            </div>
            <div className="program-hero-badge-box">
              <span className="program-hero-num">{String(p.number).padStart(2, '0')}</span>
              <span className="program-hero-num-sub">de 32 programas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Banner foto eje */}
      <div className="wrap" style={{marginTop:'2rem'}}>
        <div className="program-banner-photo">
          <img src={photoInfo.img} alt={p.title} />
          <div className="program-banner-overlay">
            <span className="program-banner-label">
              <Icon name="Layers" size={14} />
              <span>{photoInfo.label}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Layout 2x2: Situación | ¿Dudas? / Diagnóstico | Propuesta */}
      <div className="wrap program-sections-2col" style={{marginTop:'2rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.25rem',alignItems:'start'}}>

        {/* COL 1, ROW 1: Situación actual */}
        <section className="program-section-card card-diagnosis">
          <span className="section-card-kicker">01 / SITUACIÓN ACTUAL</span>
          <h2>¿Dónde estamos?</h2>
          <p>{p.diagnosis || p.excerpt}</p>
        </section>

        {/* COL 2, ROW 1: ¿Tienes dudas? */}
        <div className="program-ai-box" style={{height:'100%'}}>
          <div className="program-ai-icon-pill"><Icon name="Sparkles" size={20} /></div>
          <strong>¿Tienes dudas de este programa?</strong>
          <p>Nuestro asistente inteligente con citas textuales te explica cómo se ejecutará en tu parroquia o barrio.</p>
          <Link
            href={'/plan-estonia/pregunta?q=' + encodeURIComponent(`¿Cómo beneficia el programa "${p.title}" a los barrios de Quito y qué presupuesto requerirá?`)}
            className="btn-program-ai-ask"
          >
            <span>Preguntar a la IA</span>
            <Icon name="ArrowRight" size={15} />
          </Link>
          {/* Ficha técnica documental */}
          <div className="program-doc-sheet" style={{marginTop:'1.5rem'}}>
            <div className="program-sheet-header">FICHA TÉCNICA DOCUMENTAL</div>
            <div className="program-sheet-row"><span>Eje Estratégico</span><b>{p.axis}</b></div>
            <div className="program-sheet-row"><span>Etapa de Inicio</span><b>Año {p.period} (2027–2031)</b></div>
            <div className="program-sheet-row"><span>Página en Documento</span><b>Página {p.page}</b></div>
            <Link href={'/plan-estonia' + sourceLink(p.page)} className="program-sheet-action">
              <span>Ver página original</span>
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>

        {/* COL 1, ROW 2: Diagnóstico causal */}
        <section className="program-section-card card-diagnosis">
          <span className="section-card-kicker">02 / DIAGNÓSTICO CAUSAL</span>
          <h2>¿Qué lo produce?</h2>
          <p>{p.causes || 'El documento técnico no especifica un diagnóstico causal separado en este punto.'}</p>
        </section>

        {/* COL 2, ROW 2: Propuesta y acción */}
        <section className="program-section-card card-intervention">
          <div className="intervention-badge-pill">
            <Icon name="Sparkles" size={15} />
            <span>ESTRATEGIA CENTRAL</span>
          </div>
          <span className="section-card-kicker">03 / PROPUESTA Y ACCIÓN</span>
          <h2>¿Cómo se plantea intervenir?</h2>
          <div className="intervention-text-body">
            <p>{p.intervention || 'No hay texto de intervención independiente identificado en esta sección.'}</p>
          </div>
        </section>

      </div>

      {/* Disclaimer */}
      <div className="wrap" style={{marginTop:'1.5rem',marginBottom:'3rem'}}>
        <div className="program-disclaimer-box">
          <Icon name="Info" size={20} />
          <span>
            Estos textos describen propuestas del documento público del Plan Estonia Quito
            2027–2031. Su ejecución dependerá de viabilidad legal, presupuestaria, institucional y
            normativa municipal.
          </span>
        </div>
      </div>
    </div>
  );
}
