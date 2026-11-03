import Link from 'next/link';
import { Icon } from './Icons';

const pilaresEstonia = [
  {
    codigo: '01',
    palabra: 'Una Sola Vez',
    subtitulo: 'Principio Once-Only & X-Road',
    desc: 'El ciudadano nunca entrega al Municipio un dato o documento que la administración pública ya posee. Interoperabilidad federada bajo arquitectura de código abierto.',
    impacto: 'Elimina 210 trámites redundantes y filas presenciales.',
    icono: 'Laptop',
    link: '/programas/una-sola-vez'
  },
  {
    codigo: '02',
    palabra: 'Plazo Cierto',
    subtitulo: 'Silencio Administrativo Operativo',
    desc: 'Regulación por riesgo: vencido el término legal sin respuesta municipal, la autorización se presume legalmente concedida (COA art. 207) con declaración jurada.',
    impacto: 'LUAE y permisos en 72 horas para actividades de bajo riesgo.',
    icono: 'Clock',
    link: '/programas/libertad-para-hacer'
  },
  {
    codigo: '03',
    palabra: 'Título Primero',
    subtitulo: 'Capital Muerto a Activo Productivo',
    desc: 'En el binomio regularizar–urbanizar, el título de propiedad va primero, por lote de barrio. Transforma 2.153 asentamientos de hecho en colateral bancario de crédito.',
    impacto: '250.000 predios formalizados con seguridad jurídica.',
    icono: 'FileCheck2',
    link: '/territorios'
  },
  {
    codigo: '04',
    palabra: 'Contrato Programa',
    subtitulo: 'El dinero sigue al resultado',
    desc: 'Separación estricta entre quien regula (Municipio) y quien opera (público o privado). Se paga por kilómetro de bus recorrido y tonelada de agua tratada, no por nómina.',
    impacto: 'Fin a transferencias a ciegas de USD 395M a empresas públicas.',
    icono: 'Scale',
    link: '/modelo'
  },
  {
    codigo: '05',
    palabra: 'Precio Real',
    subtitulo: 'Subsidio a la persona, no a la empresa',
    desc: 'El espacio vial escaso y los subsidios se transparentan. La ayuda social viaja en la Tarjeta Ciudad al usuario vulnerable, no al dueño de la unidad de transporte.',
    impacto: 'Tarifa integrada Metro-buses y cuentas transparentes.',
    icono: 'CreditCard',
    link: '/presupuesto'
  }
];

const reglasFiscales = [
  { regla: 'R1 · Gasto Corriente', detalle: 'Techo estricto: no crece por encima de la inflación anual del Ecuador.' },
  { regla: 'R2 · Ingresos Propios', detalle: 'Piso mínimo: sube de forma continua respecto del 30% actual.' },
  { regla: 'R3 · Transferencias EPs', detalle: 'Baja del 38% y 100% condicionada a contratos-programa auditados.' },
  { regla: 'R4 · Inversión en Seguridad', detalle: 'Piso legal: sube progresivamente desde el crítico 0,43% del 2026.' }
];

export default function SeccionCienciaEstonia() {
  return (
    <section className="section-estonia-science" id="metodologia-estonia">
      <div className="wrap">
        {/* Encabezado Científico Institucional */}
        <div className="estonia-science-head">
          <div className="estonia-kicker-pill">
            <Icon name="Sparkles" size={14} />
            <span>LA DOCTRINA Y CIENCIA DEL PLAN ESTONIA ORIGINAL · PÁGS. 40–58</span>
          </div>
          <h2 className="estonia-title">
            ¿Por qué Estonia? <br />
            <em>Cinco palabras, cuatro reglas fiscales y un modelo sin improvisación.</em>
          </h2>
          <p className="estonia-lead">
            Estonia no se cita como aspiración retórica ni eslogan de campaña. Se toma porque es un método de
            <strong> código abierto (X-Road)</strong>, testeado internacionalmente, con costos auditados y cooperación
            disponible. Es la sustitución de la discrecionalidad burocrática por arquitectura institucional liberal clásica:
          </p>
        </div>

        {/* Las 5 Palabras Clave / Principios Doctrinales */}
        <div className="estonia-principles-grid">
          {pilaresEstonia.map((p) => (
            <Link key={p.codigo} href={p.link} className="estonia-principle-card">
              <div className="estonia-card-top">
                <span className="estonia-code">{p.codigo} / PRINCIPIO</span>
                <span className="estonia-icon-pill">
                  <Icon name={p.icono} size={18} />
                </span>
              </div>
              <h3 className="estonia-word">{p.palabra}</h3>
              <h4 className="estonia-subtitle">{p.subtitulo}</h4>
              <p className="estonia-desc">{p.desc}</p>
              <div className="estonia-impact-tag">
                <Icon name="CheckCircle2" size={14} />
                <span>{p.impacto}</span>
              </div>
              <div className="estonia-card-foot">
                <span>Ver programa en el plan</span>
                <Icon name="ArrowRight" size={14} />
              </div>
            </Link>
          ))}
        </div>

        {/* Bloque Inferior: 4 Reglas Fiscales Duras + Cita del Documento */}
        <div className="estonia-fiscal-dock">
          <div className="estonia-fiscal-left">
            <div className="fiscal-overline">RIGOR FISCAL COMPROMETIDO (PÁG. 57)</div>
            <h3>Cuatro reglas de acero presupuestarias</h3>
            <p>
              Un plan de gobierno vale por lo que promete y por lo que se deja verificar. Quito no puede sostenerse
              con endeudamiento opaco ni gasto corriente desbordado.
            </p>
            <div className="fiscal-badges-grid">
              {reglasFiscales.map((f, i) => (
                <div key={i} className="fiscal-badge-item">
                  <strong>{f.regla}</strong>
                  <span>{f.detalle}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="estonia-fiscal-right">
            <div className="estonia-quote-card">
              <div className="quote-icon-wrap">
                <Icon name="BookOpen" size={24} />
              </div>
              <blockquote>
                «Quito paga dos veces por la misma ciudad: se vacía donde hay servicios y crece donde no los hay.
                Este plan no inventa trámites ni promete milagros: <strong>aplica reglas generales, contratos exigibles
                y tecnología probada</strong> para devolverle el futuro a los quiteños.»
              </blockquote>
              <cite>— Plan Estonia (Pág. 40 · Modelo de Gestión)</cite>
              <div className="quote-actions">
                <Link href="/plan-estonia/plan" className="btn-quote-plan">
                  Leer las 159 páginas del plan <Icon name="ArrowUpRight" size={15} />
                </Link>
                <Link href="/plan-estonia/pregunta?q=¿Qué se copia exactamente de Estonia y por qué se eligió ese modelo?" className="btn-quote-ai">
                  Preguntar a la IA sobre Estonia <Icon name="Sparkles" size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
