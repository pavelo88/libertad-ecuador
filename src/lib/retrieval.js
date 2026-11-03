// src/lib/retrieval.js
import fs from 'fs';
import path from 'path';
/**
 * Simple retrieval function that searches the paginated JSON data for matching pages.
 * It loads `src/app/plan-estonia/data/paginas.json`, filters entries whose `text`
 * contains the query (case‑insensitive) and returns up to `limit` results.
 *
 * @param {string} query - The user's question or search string.
 * @param {number} [limit=5] - Maximum number of results to return.
 * @returns {Promise<Array<{page:number,text:string}>>}
 */
export const retrieve = async (query, limit = 5) => {
  try {
    const dataPath = path.resolve(
      process.cwd(),
      'src',
      'app',
      'plan-estonia',
      'data',
      'paginas.json'
    );
    const raw = await fs.promises.readFile(dataPath, 'utf-8');
    const pages = JSON.parse(raw);
    const lower = query.toLowerCase();
    const matches = pages.filter(p => p.text && p.text.toLowerCase().includes(lower));
    return matches.slice(0, limit);
  } catch (e) {
    console.warn('retrieve error:', e);
    return [];
  }
};

/**
 * Very simple local fallback answer. In a production system this would run a
 * local LLM or template‑based response. Here we just return a generic message
 * that includes the first matching source excerpt when available.
 *
 * @param {string} question - The original question.
 * @param {Array} sources - Array of source objects returned by `retrieve`.
 * @returns {string}
 */
export const localAnswer = (question, sources) => {
  if (sources && sources.length) {
    const first = sources[0];
    return `Respuesta local basada en la página ${first.page}: ${first.text.slice(0, 200)}...`;
  }
  return 'Respuesta local no disponible para la consulta.';
};
