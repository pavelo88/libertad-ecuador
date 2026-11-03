import Link from 'next/link';
import { Icon } from '../_components/Icons';

export const metadata = {
  title: 'Política de Privacidad y Protección de Datos',
  description: 'Política de Privacidad de la plataforma cívica Plan Estonia Quito, conforme a la Ley Orgánica de Protección de Datos Personales de Ecuador.'
};

export default function PrivacidadPage() {
  return (
    <div className="page-shell">
      <div className="wrap">
        <div className="page-heading">
          <span className="page-overline">TRANSPARENCIA Y LEGALIDAD</span>
          <h1>Política de Privacidad</h1>
          <p>
            Conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP).
          </p>
        </div>

        <div className="reading-sheet" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="reading-content">
            <h3>1. Responsable del Tratamiento</h3>
            <p>
              La plataforma <strong>Plan Estonia Quito</strong> (en adelante, la "Plataforma") es un espacio digital cívico, educativo e informativo independiente orientado a difundir propuestas de desarrollo para el Distrito Metropolitano de Quito 2027–2031.
            </p>

            <h3>2. Datos Personales Recopilados</h3>
            <p>
              A través de nuestro módulo de afiliación cívica y banco de ideas, recopilamos únicamente los datos proporcionados voluntariamente por el usuario:
            </p>
            <ul>
              <li>Nombre y apellidos.</li>
              <li>Parroquia o sector de residencia en el Distrito Metropolitano de Quito.</li>
              <li>Número de teléfono celular (WhatsApp) y/o correo electrónico de contacto.</li>
              <li>Propuestas, ideas ciudadanas o rol cívico seleccionado.</li>
            </ul>

            <h3>3. Finalidad del Tratamiento</h3>
            <p>
              Los datos recopilados tienen como única finalidad:
            </p>
            <ul>
              <li>Coordinar actividades de voluntariado y participación ciudadana en la Minga de Quito.</li>
              <li>Sistematizar propuestas e iniciativas ciudadanas para enriquecer los programas de la ciudad.</li>
              <li>Enviar información relevante, boletines educativos y convocatorias cívicas relacionadas con el Plan.</li>
            </ul>

            <h3>4. No Comercialización ni Cesión de Datos</h3>
            <p>
              <strong>Bajo ninguna circunstancia vendemos, alquilamos ni transferimos sus datos personales a terceros comerciales</strong>. La información se procesa bajo estándares de confidencialidad y protocolos de seguridad informática para evitar accesos no autorizados, spam o malware.
            </p>

            <h3>5. Derechos del Titular (ARCO)</h3>
            <p>
              Usted tiene derecho a conocer, actualizar, rectificar y solicitar la eliminación de sus datos personales de nuestras listas de participación cívica en cualquier momento mediante solicitud a través de nuestros canales oficiales o respondiendo a nuestras comunicaciones.
            </p>

            <h3>6. Cookies y Analítica</h3>
            <p>
              Utilizamos cookies técnicas y analíticas anónimas (mediante scripts con carga diferida) con el único objetivo de optimizar la velocidad de navegación, la compatibilidad con dispositivos móviles y la experiencia de usuario.
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
