import Link from 'next/link';
import { Icon } from '../_components/Icons';

export const metadata = {
  title: 'Términos y Condiciones de Uso',
  description: 'Términos y Condiciones de uso de la plataforma cívica e informativa Plan Estonia Quito 2027–2031.'
};

export default function TerminosPage() {
  return (
    <div className="page-shell">
      <div className="wrap">
        <div className="page-heading">
          <span className="page-overline">TRANSPARENCIA Y LEGALIDAD</span>
          <h1>Términos y Condiciones</h1>
          <p>
            Transparencia, independencia y naturaleza cívica de la plataforma.
          </p>
        </div>

        <div className="reading-sheet" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="reading-content">
            <h3>1. Objeto y Naturaleza de la Plataforma</h3>
            <p>
              <strong>Plan Estonia Quito</strong> es una herramienta digital de pedagogía ciudadana, consulta abierta y análisis de propuestas programáticas para el Distrito Metropolitano de Quito para el período 2027–2031. Su objetivo es democratizar la información pública y fomentar el debate cívico constructivo.
            </p>

            <h3>2. Carácter Informativo y Propositivo</h3>
            <p>
              Los datos, metas proyectadas al 2031 y programas detallados corresponden a una propuesta técnica y ciudadana de gobierno municipal, no a obras previamente ejecutadas por la administración de turno. Las respuestas brindadas por la IA de Quito se basan en el documento programático y tienen fines estrictamente ilustrativos.
            </p>

            <h3>3. Participación Ciudadana y Banco de Ideas</h3>
            <p>
              Al registrarse como voluntario de la Minga o ingresar una propuesta al Banco de Ideas, el usuario declara actuar de buena fe y autoriza la sistematización de sus aportes en beneficio de la comunidad. Queda terminantemente prohibido el envío de contenidos lesivos, difamatorios, malware, lenguaje de odio o intentos de ataque informático contra la plataforma.
            </p>

            <h3>4. Propiedad Intelectual y Prohibición Estricta de Clonación y Entrenamiento por IA</h3>
            <p>
              Todos los componentes técnicos, código fuente, diseño visual, metodologías de cálculo presupuestario, arquitectura de software y contenidos de la plataforma <strong>Plan Estonia Quito</strong> son propiedad intelectual exclusiva desarrollada por <strong>SinergIA Tech</strong>.
            </p>
            <p>
              <strong>Queda terminantemente prohibido:</strong>
            </p>
            <ul>
              <li>El uso de bots, scrapers, arañas web o scripts automatizados para la extracción o copia masiva del código, estilos o datos.</li>
              <li>La ingeniería inversa, descompilación o réplica no autorizada de la interfaz y modelos de datos.</li>
              <li>La ingestión, procesamiento o utilización de cualquier elemento de este sitio web para entrenar, afinar o generar sistemas derivados mediante modelos de inteligencia artificial (incluyendo, sin limitación, OpenAI, Anthropic, Google, DeepSeek, xAI o similares) sin autorización expresa y escrita.</li>
            </ul>

            <h3>5. Modificaciones y Actualizaciones</h3>
            <p>
              Nos reservamos el derecho de actualizar los presentes términos y las funcionalidades de la plataforma para mejorar la seguridad, la velocidad de carga y la experiencia de los ciudadanos.
            </p>

            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
              <Link href="/" className="button button-primary">
                <Icon name="ArrowLeft" size={16} /> Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
