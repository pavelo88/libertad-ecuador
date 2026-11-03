'use client';
import {useState} from 'react';import Link from 'next/link';import {Icon} from './Icons';
const cases=[
 {id:'negocio',name:'Mi emprendimiento',icon:'BriefcaseBusiness',image:'eje-digital.webp',issue:'Licencias, inspecciones y trámites pueden consumir tiempo y recursos antes de abrir un negocio.',proposal:'El plan propone una licencia por nivel de riesgo, menos duplicación documental y plazos conocidos para respuestas administrativas.',effect:'Si se implementaran conforme a la ley, algunos negocios podrían completar trámites con menos visitas y esperas. No eliminaría exigencias sanitarias ni de seguridad.',constraint:'Se necesitan ordenanzas, interconexión institucional, presupuesto y fiscalización.',source:60,q:'Tengo un negocio pequeño: ¿qué trámites busca simplificar el plan y cuáles seguirían siendo obligatorios?'},
 {id:'transporte',name:'Mis viajes diarios',icon:'BusFront',image:'eje-movilidad.webp',issue:'Los desplazamientos prolongados reducen el tiempo disponible para trabajo, estudio, descanso y cuidados.',proposal:'El plan plantea coordinación del transporte en una sola autoridad, contratos por kilómetros efectivamente prestados y acciones de seguridad vial.',effect:'Una mejor coordinación podría mejorar frecuencias o conexiones en ciertos trayectos, dependiendo del rediseño concreto de rutas y del presupuesto.',constraint:'El plan no permite prometer un ahorro de minutos para tu ruta sin estudios y mediciones posteriores.',source:75,q:'Uso transporte público todos los días: ¿qué cambios reales se plantean, cuánto tardarían y cuáles son las limitaciones?'},
 {id:'seguridad',name:'Mi seguridad',icon:'Shield',image:'eje-seguridad.webp',issue:'El documento señala violencia, subregistro de robos y diferencias de riesgo entre barrios.',proposal:'Propone redistribución de recursos de vigilancia según evidencia, prevención comunitaria y rendición de cuentas en seguridad.',effect:'Si la coordinación funcionara, ciertos barrios podrían recibir prevención y atención mejor focalizadas, pero no existe una garantía individual de evitar delitos.',constraint:'Los resultados dependen también de Policía Nacional, justicia, recursos y evaluación de datos.',source:67,q:'¿Qué puede hacer el municipio con el Plan Estonia para mejorar la seguridad de los barrios, y qué corresponde a la Policía?'},
 {id:'trabajo',name:'Mi empleo',icon:'BriefcaseBusiness',image:'eje-trabajo.webp',issue:'El plan presenta desempleo y dificultades para convertir formación en empleos estables.',proposal:'Contempla capacitación vinculada a demandas laborales, convenios con empleadores y reducción de trabas para la actividad económica.',effect:'Podrían aparecer más opciones de capacitación e intermediación para participantes, sin asegurar que alguien encuentre empleo.',constraint:'La colocación efectiva dependería de vacantes, empresas, financiamiento y seguimiento de resultados.',source:83,q:'¿Cómo propone el Plan Estonia conectar cursos de capacitación con trabajos reales?'},
 {id:'agua',name:'Agua y ambiente',icon:'Leaf',image:'eje-ambiente.webp',issue:'El diagnóstico identifica brechas en depuración de aguas residuales y valorización de residuos.',proposal:'Plantea proyectos de saneamiento, tratamiento, reducción de residuos enviados al relleno e incentivos ambientales.',effect:'En un escenario de ejecución sostenida, podrían mejorar los servicios y disminuir impactos ambientales locales, sujetos a infraestructura operativa.',constraint:'Inversiones grandes, cronogramas, permisos y financiación no están garantizados.',source:90,q:'¿Qué propone el Plan Estonia para mejorar los ríos y tratar la basura y qué inversiones requiere?'},
 {id:'cuidados',name:'Cuidados y bienestar',icon:'HeartHandshake',image:'eje-humano.webp',issue:'El documento describe brechas en servicios de cuidado, salud mental y oportunidades de inclusión.',proposal:'Incluye redes comunitarias de cuidado, propuestas de atención a salud mental y espacios de educación, cultura y deporte.',effect:'Una implementación efectiva podría facilitar apoyos y acceso a actividades a determinados hogares, según los servicios disponibles.',constraint:'La cobertura, la elegibilidad, la ubicación y los estándares deberían definirse y evaluarse.',source:99,q:'¿Qué propone el Plan Estonia en materia de cuidado familiar y salud mental?'}
];
export default function ImpactExplorer() {
  const [selected, setSelected] = useState(cases[0].id);
  const item = cases.find((x) => x.id === selected) || cases[0];

  return (
    <div className="impact-module">
      {/* Selector Desplegable en Móvil */}
      <div className="impact-mobile-select-wrap">
        <label htmlFor="impact-select" className="sr-only">Seleccionar situación cotidiana</label>
        <div className="impact-select-box">
          <Icon name="Compass" size={18} />
          <select
            id="impact-select"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="impact-select-dropdown"
          >
            {cases.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
          <Icon name="ChevronDown" size={16} />
        </div>
      </div>

      {/* Selector de Pestañas en Escritorio / Tablet */}
      <div className="impact-tabs" role="group" aria-label="Selecciona un tema cotidiano">
        {cases.map((x) => (
          <button
            key={x.id}
            className={selected === x.id ? 'active' : ''}
            onClick={() => setSelected(x.id)}
          >
            <Icon name={x.icon} size={18} />
            <span>{x.name}</span>
          </button>
        ))}
      </div>

      <div className="impact-detail">
        <div className="impact-image">
          <img src={'/assets/' + item.image} alt={'Fotografía sobre ' + item.name} />
          <div className="impact-image-overlay">
            <span className="impact-image-tag">{item.name}</span>
          </div>
        </div>

        <div className="impact-content">
          <div className="impact-content-head">
            <span className="kicker">SIMULACIÓN EXPLICATIVA · NO ES UN BENEFICIO GARANTIZADO</span>
            <h2>{item.name}</h2>
          </div>

          <div className="impact-cards-grid">
            <div className="impact-card-tile tile-issue">
              <div className="tile-head">
                <span className="tile-dot dot-red"></span>
                <strong>¿Cuál es el problema?</strong>
              </div>
              <p>{item.issue}</p>
            </div>

            <div className="impact-card-tile tile-proposal">
              <div className="tile-head">
                <span className="tile-dot dot-teal"></span>
                <strong>¿Qué se propone?</strong>
              </div>
              <p>{item.proposal}</p>
            </div>

            <div className="impact-card-tile tile-effect">
              <div className="tile-head">
                <span className="tile-dot dot-green"></span>
                <strong>¿Qué podría cambiar?</strong>
              </div>
              <p>{item.effect}</p>
            </div>

            <div className="impact-card-tile tile-constraint">
              <div className="tile-head">
                <span className="tile-dot dot-amber"></span>
                <strong>¿Qué falta para lograrlo?</strong>
              </div>
              <p>{item.constraint}</p>
            </div>
          </div>

          <div className="impact-actions">
            <Link href={'/pregunta?q=' + encodeURIComponent(item.q)} className="button button-primary">
              <Icon name="Sparkles" size={17} />
              <span>Preguntar a la IA</span>
            </Link>
            <Link href={'/biblioteca/' + item.source} className="button button-outline">
              <Icon name="FileText" size={16} />
              <span>Referencia oficial · p. {item.source}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
