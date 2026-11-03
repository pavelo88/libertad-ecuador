// Recuperación determinista, ejecutable sin servicios externos.
// Las explicaciones solo reproducen intenciones de las propuestas: no predicen resultados.
import programs from '../data/programas.json';
import pages from '../data/paginas.json';

const STOP = new Set('el la los las un una unos unas de del que como para por en con sin al a y o e es son ser mi mis yo me nos puede podria cuando donde se su sus ha han tengo necesito quiero sobre si cuanto cual cuales hacer hay esto esta este esos esas ciudad quito plan estonia mejor ayuda vida cambio cambiar que propone explicame dime existe bajo segun'.split(' '));
const SYNONYMS = {
 transporte: ['bus','buses','metro','movilidad','pasaje','rutas'], buses: ['transporte','movilidad','bus','rutas'], bus: ['transporte','movilidad','buses'],
 trafico: ['congestion','movilidad','transporte','vias'], trabajo: ['empleo','trabajar','laboral','empresa'], empleo: ['trabajo','laboral','capacitacion','contratacion'],
 inseguridad: ['seguridad','robo','homicidios','violencia'], robo: ['seguridad','delincuencia','camaras','victimizacion'],
 negocio: ['emprendimiento','licencia','luae','tramites','comerciante'], emprender: ['emprendimiento','empresa','licencia','comercio'],
 tramites: ['digitalizacion','burocracia','licencias','permiso'], permiso: ['tramites','licencia','luae','autorizacion'],
 mayores: ['adultos','cuidado','inclusion','envejecimiento'], jubilados: ['adultos','cuidado','renta'],
 agua: ['rios','saneamiento','depuracion','epmaps'], basura: ['residuos','reciclaje','inga','organicos'],
 vivienda: ['habitacional','regularizacion','titulo','propiedad'], discapacidad: ['inclusion','accesibilidad','proteccion'],
 parque: ['espacio','publico','deporte','cultura'], salud: ['mental','cuidado','proteccion'],
 inundaciones: ['riesgo','quebradas','drenaje'], escuela: ['educacion','formacion','jovenes'],
 presupuesto: ['inversion','financiamiento','costo','millones'], costo: ['presupuesto','financiamiento','inversion'],
 calderon: ['periferia','seguridad','territorial'], mujeres: ['cuidado','empleo','acoso','proteccion']
};
export const normalize = s => String(s??'').toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();
export function terms(query) {
  const initial = normalize(query).split(' ').filter(t => t.length>2 && !STOP.has(t));
  let all=[...initial];
  for(const t of initial) if(SYNONYMS[t]) all.push(...SYNONYMS[t]);
  return [...new Set(all)].slice(0,32);
}
function score(text, tokens, title='',axis='') {
 const base=normalize(text), name=normalize(title),cat=normalize(axis);let value=0;
 for (let i=0;i<tokens.length;i++) {
   const term=tokens[i];
   const re=new RegExp(`(^|\\s)${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}(?=\\s|$)`,'g');
   let found=(base.match(re)||[]).length;
   if(!found && term.length>5) found=base.includes(term.slice(0,-1))?1:0;
   value+=Math.min(found,4)*(i<8?2:0.9);
   if(name.includes(term))value+=12;
   if(cat.includes(term))value+=2;
 }
 return value;
}
export function retrieve(question, max=5) {
 const ts=terms(question);
 if (!ts.length) return [];
 const pResult=programs.map(p=>({kind:'program',id:p.id,page:p.page,title:p.title,axis:p.axis,
  excerpt:(p.intervention || p.diagnosis || p.sourceText).slice(0,1500),diagnosis:p.diagnosis,intervention:p.intervention,
  score:score([p.title,p.subtitle,p.diagnosis,p.causes,p.intervention].join(' '),ts,p.title,p.axis)}));
 const top=pResult.sort((a,b)=>b.score-a.score);
 const pgResult=pages.filter(p=>p.page>4).map(p=>({kind:'page',page:p.page,title:`Plan original · página ${p.page}`,excerpt:p.text.slice(0,1150),score:score(p.text,ts)})).sort((a,b)=>b.score-a.score);
 const list=[...top.slice(0,Math.min(max,4)),...pgResult.slice(0,3)].filter(r=>r.score>0);
 return list.sort((a,b)=>b.score-a.score).slice(0,max);
}
function short(text,max=300){
 const normalized=String(text||'').replace(/\s+/g,' ').trim();
 if(normalized.length<=max)return normalized;
 let sub=normalized.slice(0,max);let last=sub.lastIndexOf('. ');
 if(last>max*.55)return sub.slice(0,last+1);
 return sub.slice(0,sub.lastIndexOf(' '))+'…';
}
export function localAnswer(question, sources) {
 const normalizedQuestion=normalize(question);
 if(/presupuesto|financia|cuanto cuesta|costaria|coste del plan|inversion/.test(normalizedQuestion))return `**Financiación declarada por el Plan Estonia:** la cartera consolidada de las cinco áreas presenta un costo mínimo declarado de USD 2.341,07 millones. Sin embargo, la suma de las cinco filas detalladas asciende a USD 2.340,07 millones. Hay una diferencia de USD 1 millón pendiente de aclaración.

**¿Cómo se financiaría?** El documento combina aporte municipal con financiación y participación de terceros, algunas todavía sujetas a acuerdos o estructuración. No son fondos asegurados.

**Para comprenderlo:** abre el apartado de Presupuesto dentro de esta web y el contenido integrado de la página 150.`;
 if(/riesgos|limitacion|garantia|cumplir|promesa|beneficio garantizado/.test(normalizedQuestion)&&!sources.some(s=>s.kind==='program'&&s.score>15))return 'Las medidas del Plan Estonia son **propuestas**, no servicios ya disponibles ni resultados garantizados. Para evaluar cada una deben revisarse la competencia legal, el cronograma, el presupuesto, la financiación de terceros, los responsables y las métricas verificables. La biblioteca interna incluye el modelo de gestión (páginas 40–58), los programas (60–102) y el consolidado financiero (150). Algunas cifras presentan discrepancias señaladas en Metodología.';
 const match=sources.find(x=>x.kind==='program'&&x.score>=2);
 if(!match || match.score<2){
   return 'No encontré una propuesta suficientemente específica para responder con confianza en el documento. Puedes probar con un tema concreto, como transporte, seguridad, empleo, agua, cuidados o trámites. Prueba también el catálogo de programas y la biblioteca de este sitio.';
 }
 const actions=short(match.intervention||match.excerpt,620);
 const diagnosis=short(match.diagnosis,215);
 return `El **Plan Estonia propone** «${match.title}» (${match.axis}).\n\n**Qué problema identifica:** ${diagnosis || 'El documento presenta un diagnóstico sobre este tema.'}\n\n**Qué haría, según el texto:** ${actions}\n\n**Qué significaría en la práctica:** la propuesta busca actuar sobre ese problema, pero **no significa que el beneficio esté garantizado**. Dependería de aprobación normativa, presupuesto, ejecución y coordinación con las entidades responsables.\n\n**Para comprobarlo:** consulta la ficha «${match.title}» y la referencia interna de la página ${match.page}. Si deseas, pregunta por costos, plazos, riesgos o a qué institución correspondería aplicarlo.`;
}
