import Image from "next/image";
import { CoffeeIcon, MessageCircleIcon } from "./Icons";

export default function TazaSection() {
  return (
    <section id="souvenir" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-gradient-to-b dark:from-[#090E17] dark:to-[#050810] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] border border-[#e6b93e]/30 bg-white/90 dark:bg-[#070b14] p-8 sm:p-14 grid md:grid-cols-2 gap-10 items-center shadow-xl dark:shadow-2xl backdrop-blur-sm">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e6b93e]/15 text-[#9c710d] dark:text-[#e6b93e] border border-[#e6b93e]/30">
            <CoffeeIcon className="w-4 h-4" />
            <span>Merchandising Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-950 dark:text-white leading-tight">
            Taza <span className="text-[#c99818] dark:text-[#e6b93e]">&quot;Lágrimas de Zurdo&quot;</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Apoya las actividades de campo, logística, capacitación cívica y fiscalización ciudadana del movimiento Libertad Ecuador. Tu aporte financia directamente la presencia de nuestros cuadros en cada cantón.
          </p>
          <div>
            <a
              href="https://wa.me/593969710543?text=Hola%2C%20quiero%20comprar%20la%20taza%20Lagrimas%20de%20Zurdo%20y%20apoyar%20al%20movimiento%20Libertad%20Ecuador."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#e6b93e] text-slate-950 hover:bg-[#d8a930] transition-all active:scale-95 shadow-lg shadow-[#e6b93e]/20"
            >
              <span>Comprar taza &bull; $10 USD</span>
              <MessageCircleIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div
          className="relative aspect-square max-w-sm mx-auto w-full rounded-3xl border border-amber-200/60 dark:border-[#e6b93e]/30 flex items-center justify-center p-8 overflow-hidden group shadow-xl bg-cover bg-center"
          style={{ backgroundImage: "url(/img/wave-light.webp)" }}
        >
          <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/img/taza-producto.webp"
              alt="Taza Lágrimas de Zurdo"
              fill
              className="object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.12)] mix-blend-multiply"
              sizes="(max-width: 768px) 80vw, 360px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
