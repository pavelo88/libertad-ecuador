// Texto generado en una respuesta no se interpreta como HTML: previene XSS.
export default function MarkdownLite({text}){
 const pieces=String(text||'').split(/(\*\*[^*]+\*\*)/g);
 function format(s){return s.split(/\n+/).map((line,i)=><span key={i}>{i>0&&<><br/><br/></>}{line}</span>)}
 return <div className="answer-text">{pieces.map((part,i)=>part.startsWith('**')&&part.endsWith('**')?<strong key={i}>{part.slice(2,-2)}</strong>:<span key={i}>{format(part)}</span>)}</div>;
}
