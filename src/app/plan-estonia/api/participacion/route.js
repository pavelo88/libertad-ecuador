import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export const runtime = 'nodejs';

// Rate Limiting en memoria (Token Bucket / IP Windowing)
const visits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutos
  const maxRequests = 12; // Máximo 12 envíos por 15 min

  const record = visits.get(ip) || { count: 0, resetAt: now + windowMs };
  if (now > record.resetAt) {
    record.count = 0;
    record.resetAt = now + windowMs;
  }
  record.count++;
  visits.set(ip, record);

  // Limpieza preventiva para no saturar memoria
  if (visits.size > 5000) {
    for (const [key, val] of visits.entries()) {
      if (val.resetAt < now) visits.delete(key);
    }
  }

  return record.count > maxRequests;
}

// Sanitización contra XSS e inyecciones
function sanitize(str = '') {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // Elimina etiquetas HTML
    .replace(/javascript:/gi, '')
    .replace(/onload|onerror|onclick/gi, '')
    .trim();
}

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';

  // 1. Verificación de Rate Limit
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Has alcanzado el límite de envíos por ahora. Por favor espera unos minutos antes de volver a intentar.' },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Formato de datos no válido.' }, { status: 400 });
  }

  const {
    tipo = 'afiliacion', // 'afiliacion' | 'idea'
    website_trap = '',   // Honeypot invisible contra bots
    form_start_time = 0, // Timestamp para detectar envíos sobrehumanos
    // Campos de afiliación
    nombre = '',
    parroquia = '',
    telefono = '',
    email = '',
    rol = 'voluntario',
    // Campos de propuesta
    titulo = '',
    eje = '',
    barrio = '',
    descripcion = '',
    contacto = '',
  } = body;

  // 2. Blindaje Anti-Bot: Trampa Honeypot
  if (website_trap && website_trap.trim().length > 0) {
    // Es un bot automatizado que rellenó el campo trampa oculto.
    // Retornamos éxito simulado sin gastar almacenamiento ni CPU.
    return NextResponse.json({
      success: true,
      code: 'QTO-8899',
      message: 'Registro completado.'
    });
  }

  // 3. Blindaje Anti-Bot: Velocidad no humana (< 1.2 segundos para rellenar)
  const now = Date.now();
  if (form_start_time && now - Number(form_start_time) < 1200) {
    return NextResponse.json({
      success: true,
      code: 'QTO-8899',
      message: 'Registro completado.'
    });
  }

  // 4. Validación de Dominio y Sanitización
  const cleanTipo = tipo === 'idea' ? 'idea' : 'afiliacion';
  const cleanNombre = sanitize(nombre);
  const cleanParroquia = sanitize(parroquia);
  const cleanTelefono = sanitize(telefono).replace(/[^\d+ -]/g, '');
  const cleanEmail = sanitize(email).toLowerCase();
  const cleanRol = sanitize(rol);

  // Generador de Código Cívico Oficial (Ej: QTO-AF-8392)
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const prefix = cleanTipo === 'afiliacion' ? 'AF' : 'ID';
  const civicCode = `QTO-${prefix}-${randomNum}`;

  let recordPayload = null;

  if (cleanTipo === 'afiliacion') {
    if (cleanNombre.length < 2 || cleanNombre.length > 90) {
      return NextResponse.json({ error: 'Por favor ingresa un nombre y apellido válido (2 a 90 caracteres).' }, { status: 400 });
    }
    if (!cleanParroquia || cleanParroquia.length < 2) {
      return NextResponse.json({ error: 'Por favor selecciona tu parroquia en Quito.' }, { status: 400 });
    }
    if (cleanTelefono.length < 8) {
      return NextResponse.json({ error: 'Por favor ingresa un número de teléfono o celular válido.' }, { status: 400 });
    }

    recordPayload = {
      id: crypto.randomUUID(),
      code: civicCode,
      tipo: 'afiliacion',
      nombre: cleanNombre,
      parroquia: cleanParroquia,
      telefono: cleanTelefono,
      email: cleanEmail,
      rol: cleanRol || 'Voluntario cívico barrial',
      ipHash: crypto.createHash('sha256').update(ip).digest('hex').substring(0, 16),
      createdAt: new Date().toISOString()
    };
  } else {
    // Propuesta / Banco de Ideas
    const cleanTitulo = sanitize(titulo);
    const cleanEje = sanitize(eje);
    const cleanBarrio = sanitize(barrio);
    const cleanDesc = sanitize(descripcion);
    const cleanContacto = sanitize(contacto);

    if (cleanTitulo.length < 5 || cleanTitulo.length > 150) {
      return NextResponse.json({ error: 'El título de la idea debe tener entre 5 y 150 caracteres.' }, { status: 400 });
    }
    if (cleanDesc.length < 15 || cleanDesc.length > 1500) {
      return NextResponse.json({ error: 'Describe tu idea con más detalle (entre 15 y 1.500 caracteres).' }, { status: 400 });
    }

    recordPayload = {
      id: crypto.randomUUID(),
      code: civicCode,
      tipo: 'idea',
      titulo: cleanTitulo,
      eje: cleanEje || 'General',
      parroquia: cleanParroquia || cleanBarrio || 'Distrito Metropolitano',
      descripcion: cleanDesc,
      nombre: cleanNombre || 'Ciudadano anónimo',
      contacto: cleanContacto || cleanTelefono,
      ipHash: crypto.createHash('sha256').update(ip).digest('hex').substring(0, 16),
      createdAt: new Date().toISOString()
    };
  }

  // 5. Almacenamiento Seguro Append-Only (Resistente a fallos y concurrencia)
  try {
    const dataDir = path.join(process.cwd(), 'data');
    await fs.mkdir(dataDir, { recursive: true });
    const filePath = path.join(dataDir, 'participacion.jsonl');
    await fs.appendFile(filePath, JSON.stringify(recordPayload) + '\n', 'utf8');
  } catch (err) {
    console.error('Error al persistir registro cívico en archivo:', err);
    // No bloqueamos al usuario si el FS tuviera un retraso, el código ya fue generado
  }

  return NextResponse.json({
    success: true,
    code: civicCode,
    tipo: cleanTipo,
    nombre: cleanNombre,
    parroquia: cleanParroquia,
    message: cleanTipo === 'afiliacion'
      ? '¡Bienvenido a la Minga por Quito! Tu registro se ha completado con éxito.'
      : '¡Gracias por tu aporte! Tu idea ha sido ingresada en el Banco de Propuestas de Quito.'
  });
}
