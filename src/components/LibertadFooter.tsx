import Image from "next/image";
import Link from "next/link";

export default function LibertadFooter() {
  // const planEstoniaUrl = "https://planestonia.libertadecuador.com/";
  const planEstoniaUrl = "/plan-estonia";
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#03060c] py-14 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 dark:text-slate-400 transition-colors">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Logo central en Footer */}
        <div className="flex flex-col items-center justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-[#e6b93e]/15 border border-[#e6b93e]/30 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
              <Image
                src="/logo.webp"
                alt="Logo Libertad Ecuador"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="text-left">
              <div className="font-serif font-bold text-base text-slate-900 dark:text-white leading-tight">
                Libertad Ecuador
              </div>
              <div className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#b88c22] dark:text-[#e6b93e]">
                Movimiento Ciudadano
              </div>
            </div>
          </Link>
        </div>

        {/* Navegación footer */}
        <div className="flex flex-wrap justify-center items-center gap-6 font-semibold">
          <Link href="#principios" className="hover:text-[#c99818] dark:hover:text-[#e6b93e] transition-colors">
            Principios
          </Link>
          <Link href="#sumate" className="hover:text-[#c99818] dark:hover:text-[#e6b93e] transition-colors">
            Organización
          </Link>
          <Link href="souvenir" className="hover:text-[#c99818] dark:hover:text-[#e6b93e] transition-colors">
            Souvenir Cívico
          </Link>
          {/* Alternativa subdominio: href="https://planestonia.libertadecuador.com/" */}
          <a
            href={planEstoniaUrl}
            className="hover:text-[#c99818] dark:hover:text-[#e6b93e] transition-colors"
          >
            Plan Estonia
          </a>
          <a
            href="https://wa.me/593969710543"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            WhatsApp Oficial
          </a>
        </div>

        <p>
          Libertad Ecuador &copy; {new Date().getFullYear()} &mdash; Todos los derechos reservados.
        </p>
        <p className="max-w-lg mx-auto leading-relaxed text-slate-500 dark:text-slate-400">
          Iniciativa ciudadana en defensa irrestricta de las libertades individuales, el libre mercado, la eliminación del gasto superfluo y la fiscalización institucional en todo el Ecuador.
        </p>
      </div>
    </footer>
  );
}
