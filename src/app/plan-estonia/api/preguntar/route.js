import { NextResponse } from 'next/server';
import { retrieve, localAnswer } from './_lib/retrieval';
import { sourceLink } from './_lib/data';

export const runtime = 'nodejs';
const LIMIT = 900;
const visits = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const v = visits.get(ip) || { count: 0, until: now + 60_000 };
  if (now > v.until) {
    v.count = 0;
    v.until = now + 60_000;
  }
  v.count++;
  visits.set(ip, v);
  if (visits.size > 2000) {
    for (const [k, x] of visits) {
      if (x.until < now) visits.delete(k);
    }
  }
  return v.count > 25;
}

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  if (rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Demasiadas preguntas por minuto. Por favor, intenta de nuevo en un momento.' },
      { status: 429 }
    );
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Solicitud incorrecta.' }, { status: 400 });
  }

  const q = String(data?.question || '').trim();
  if (q.length < 5 || q.length > LIMIT) {
    return NextResponse.json(
      { error: `Escribe una pregunta entre 5 y ${LIMIT} caracteres.` },
      { status: 400 }
    );
  }

  const sources = retrieve(q, 6).map((x) => ({ ...x, url: sourceLink(x.page) }));
  const nvidiaKey = process.env.NVIDIA_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!sources.length) {
    return NextResponse.json({
      mode: 'local',
      answer: localAnswer(q, sources),
      sources: []
    });
  }

  const context = sources
    .map(
      (s, i) =>
        `FUENTE ${i + 1} | pág. ${s.page} | ${s.kind} | ${s.title}\n${
          s.kind === 'program'
            ? `DIAGNÓSTICO: ${s.diagnosis || ''}\nPROPUESTA: ${s.intervention || ''}`
            : s.excerpt
        }`
    )
    .join('\n\n');

  const systemPrompt = `Eres el Asistente Oficial del PLAN ESTONIA para Quito 2027–2031 (Lema: Trabajo · Orden · Corazón).
Tu misión es explicar las soluciones, propuestas y esperanza de futuro con claridad, cordialidad y rigor basándote en el documento del plan.
Explica:
1. Qué soluciones concretas propone el plan para resolver este problema en Quito.
2. Cómo beneficiaría directamente al ciudadano en su vida cotidiana, barrio o trabajo.
3. Qué metas o tiempos plantea la propuesta.
Sé directo, inspirador, empático y estructurado. Cita siempre las páginas de origen como 'Plan Estonia, pág. X'.`;

  // 1. Intentar con NVIDIA NIM API si está configurada
  if (nvidiaKey) {
    try {
      const nvRes = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${nvidiaKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: process.env.NVIDIA_MODEL || 'meta/llama-3.1-70b-instruct',
          messages: [
            { role: 'system', content: systemPrompt },
            {
              role: 'user',
              content: `PREGUNTA DEL CIUDADANO:\n${q}\n\nCONTENIDO OFICIAL DEL PLAN ESTONIA:\n${context}`
            }
          ],
          temperature: 0.3,
          max_tokens: 750
        }),
        signal: AbortSignal.timeout(18000)
      });

      if (nvRes.ok) {
        const nvJson = await nvRes.json();
        const answer = nvJson.choices?.[0]?.message?.content;
        if (answer) {
          return NextResponse.json({
            mode: 'ai',
            answer,
            sources: sources.slice(0, 5)
          });
        }
      }
    } catch (e) {
      console.warn('NVIDIA API fallback:', e?.message);
    }
  }

  // 2. Intentar con OpenAI API si está configurada
  if (openaiKey) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${openaiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            {
              role: 'user',
              content: `PREGUNTA CIUDADANA:\n${q}\n\nCONTENIDO DEL PLAN:\n${context}`
            }
          ],
          max_tokens: 650
        }),
        signal: AbortSignal.timeout(20000)
      });

      if (res.ok) {
        const json = await res.json();
        const answer = json.choices?.[0]?.message?.content;
        if (answer) {
          return NextResponse.json({
            mode: 'ai',
            answer,
            sources: sources.slice(0, 5)
          });
        }
      }
    } catch (e) {
      console.warn('OpenAI fallback:', e?.message);
    }
  }

  // 3. Fallback inteligente local
  return NextResponse.json({
    mode: 'local',
    answer: localAnswer(q, sources),
    sources: sources.slice(0, 4)
  });
}
