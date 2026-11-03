import programas from '../_data/programas.json';
import secciones from '../_data/secciones.json';
import estrategia from '../_data/estrategia-antigravity.json';

export const PROGRAMAS = programas;
export const SECCIONES = secciones;
export const ESTRATEGIA = estrategia;
export const AXES = [
  { name: 'Digitalización', short: 'Un municipio que responde', icon: 'Laptop', color: 'cyan', detail: 'Trámites simples, identidad digital y datos conectados.', pages: '60–66' },
  { name: 'Seguridad', short: 'Barrios donde vivir tranquilos', icon: 'Shield', color: 'blue', detail: 'Prevención, despliegue basado en evidencia y espacios activos.', pages: '67–74' },
  { name: 'Movilidad', short: 'Tiempo para tu vida', icon: 'BusFront', color: 'teal', detail: 'Transporte integrado, accesibilidad y vías más seguras.', pages: '75–82' },
  { name: 'Trabajo', short: 'Oportunidades reales', icon: 'BriefcaseBusiness', color: 'orange', detail: 'Empleo, formación, vivienda y mercados.', pages: '82–89' },
  { name: 'Ambiente', short: 'Una ciudad que cuida el futuro', icon: 'Leaf', color: 'green', detail: 'Agua, residuos, riesgos, biodiversidad y ordenamiento.', pages: '90–98' },
  { name: 'Desarrollo humano', short: 'Personas en el centro', icon: 'HeartHandshake', color: 'pink', detail: 'Cuidado, inclusión, salud mental, cultura y deporte.', pages: '98–102' },
];
export const FAQ = [
  'Tengo un negocio pequeño: ¿qué cambiaría con los trámites?',
  'Paso horas en el transporte: ¿qué propone el plan?',
  '¿Qué propone el plan para mejorar la seguridad de mi barrio?',
  '¿Qué plantea para conseguir empleo o capacitarme?',
  '¿Cómo mejorarían el agua y el manejo de la basura?',
  '¿Qué medidas propone para personas adultas mayores?',
  '¿Cuánto costaría ejecutar el Plan Estonia?',
  '¿Qué riesgos y limitaciones tienen estas propuestas?',
];
export function getProgram(id) { return PROGRAMAS.find(p => p.id === id); }
export function byAxis(axis) { return PROGRAMAS.filter(p => p.axis === axis); }
export function sourceLink(page=1) { return `/plan-estonia/biblioteca/${page}`; }
export const MONEY = [
  { name: 'Digitalización', municipal: 24.6, terceros: 32.95, total: 57.55 },
  { name: 'Seguridad', municipal: 90.82, terceros: 30.2, total: 121.02 },
  { name: 'Movilidad', municipal: 437.3, terceros: 915.5, total: 1352.8 },
  { name: 'Desarrollo humano', municipal: 134.2, terceros: 191.5, total: 325.7 },
  { name: 'Ambiente', municipal: 305, terceros: 178, total: 483, range: 'Hasta 847 M USD según escenario' }
];
export const totalMinimum = MONEY.reduce((a,b) => a+b.total,0);
export const TERRITORIES = [
  { name:'Hipercentro', zones:'Manuela Sáenz · Eugenio Espejo · La Mariscal', theme:'Reactivar donde ya hay infraestructura', description:'El documento propone reutilización del suelo servido, repoblamiento y densificación con reglas públicas.', detail:'La intervención se condiciona a normas urbanísticas e infraestructura existente.', page: 51 },
  { name:'Sur productivo', zones:'Quitumbe · Eloy Alfaro', theme:'Acercar empleo, servicios y oportunidades', description:'Se plantean espacios productivos, mejoras territoriales y servicios más próximos a los barrios.', detail:'Requiere financiamiento, regulación y coordinación institucional.', page: 52 },
  { name:'Periferia en expansión', zones:'Calderón · Tumbaco · Los Chillos · La Delicia', theme:'Crecimiento acompañado de servicios', description:'Se describen desafíos de conectividad, catastro, acceso a transporte y exposición a riesgos.', detail:'La ejecución depende de la planificación territorial y otras autoridades competentes.', page: 53 },
  { name:'Borde rural y conservación', zones:'Chocó Andino · parroquias rurales', theme:'Conservar con incentivos y presencia pública', description:'Se proponen pagos por servicios ambientales y mejores capacidades de gestión territorial.', detail:'Necesita incentivos sostenibles y monitoreo ambiental verificable.', page: 54 }
];
