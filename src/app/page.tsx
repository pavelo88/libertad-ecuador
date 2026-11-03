import Image from "next/image";
import Link from "next/link";
import LibertadNavbar from "@/components/LibertadNavbar";
import LibertadFooter from "@/components/LibertadFooter";
import TazaSection from "@/components/TazaSection";
import {
  ScaleIcon,
  FlagIcon,
  ShieldCheckIcon,
  UsersIcon,
  MegaphoneIcon,
  CoffeeIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  MessageCircleIcon,
} from "@/components/Icons";

// URL para Plan Estonia (con comentario de subdominio)
// const planEstoniaUrl = "https://planestonia.libertadecuador.com/";
const planEstoniaUrl = "/plan-estonia";

const principios = [
  {
    icon: ScaleIcon,
    title: "Defensa del individuo",
    text: "Los derechos fundamentales de los ecuatorianos primero. Ninguna autoridad ni ley por encima de la Constitución.",
  },
  {
    icon: FlagIcon,
    title: "Menos Estado, más libertad",
    text: "Reducción estatal, fin de la tramitología asfixiante y un presupuesto que no ahogue el bolsillo de la gente.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Cero corrupción",
    text: "Denuncias formales y fiscalización ciudadana. Resultados en tribunales y auditorías, no solo indignación en redes.",
  },
];

const pasos = [
  {
    icon: UsersIcon,
    n: "01",
    title: "Únete al movimiento",
    text: "Sé parte de Libertad Ecuador y recibe las convocatorias cívicas y asambleas en tu provincia.",
    href: "https://wa.me/593969710543?text=Hola%2C%20quiero%20unirme%20a%20Libertad%20Ecuador.",
    cta: "Click para unirte",
  },
  {
    icon: MegaphoneIcon,
    n: "02",
    title: "Lidera en tu cantón",
    text: "Coordinamos cuadros y activistas en Pichincha y todo el país para levantar la representación liberal y ciudadana.",
    href: "https://wa.me/593969710543?text=Hola%2C%20quiero%20ser%20l%C3%ADder%20local%20de%20Libertad%20Ecuador%20en%20mi%20cant%C3%B3n.",
    cta: "Quiero liderar",
  },
  {
    icon: CoffeeIcon,
    n: "03",
    title: "Apoya con el souvenir",
    text: "Apoya al movimiento con el souvenir cívico oficial Lágrimas de Zurdo. $10 USD, compra coordinada directamente por WhatsApp.",
    href: "https://wa.me/593969710543?text=Hola%2C%20quiero%20comprar%20el%20#taza%20Lagrimas%20de%20Zurdo%20y%20apoyar%20el%20movimiento.",
    cta: "Comprar souvenir · $10",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050810] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      <LibertadNavbar />

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none bg-cover bg-center"
            style={{ backgroundImage: "url(/img/hero-dark.webp)" }}
          />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full blur-[140px] bg-[#e6b93e]/15 dark:bg-[#e6b93e]/10" />
          </div>

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-[0.3em] uppercase bg-[#e6b93e]/20 text-[#966b08] dark:text-[#e6b93e] border border-[#e6b93e]/30">
                Movimiento Ciudadano
              </div>
              <h1 className="text-4xl sm:text-6xl font-serif font-black text-slate-950 dark:text-white leading-[1.05]">
                Juntos vamos a <span className="text-[#c99818] dark:text-[#e6b93e]">subirles el nivel</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Libertad Ecuador nace como un proyecto en defensa de los derechos fundamentales de los ecuatorianos y
                contra la crisis política que se agrava año a año.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="https://wa.me/593969710543?text=Hola%2C%20quiero%20unirme%20a%20Libertad%20Ecuador."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold bg-[#e6b93e] text-slate-950 hover:bg-[#d8a930] transition-transform active:scale-95 shadow-lg shadow-[#e6b93e]/20"
                >
                  <span>Click para unirte</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>

                {/* Enlace Plan Estonia */}
                {/* Alternativa subdominio: href="https://planestonia.libertadecuador.com/" */}
                <a
                  href={planEstoniaUrl}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:border-[#e6b93e]/60 hover:text-[#c99818] dark:hover:text-[#e6b93e] transition-colors active:scale-95 bg-white/70 dark:bg-transparent"
                >
                  <span>Leer Plan Estonia</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Panel con hex-navy de fondo y la tortuga */}
            <div
              className="relative w-full aspect-[4/3] rounded-[2.5rem] border border-[#e6b93e]/30 bg-[#070b14] flex items-center justify-center overflow-hidden shadow-2xl bg-cover bg-center"
              style={{ backgroundImage: "url(/img/hex-navy.webp)" }}
            >
              <div className="absolute w-[85%] aspect-square rounded-full border border-[#e6b93e]/15 pointer-events-none" />
              <div className="absolute w-[62%] aspect-square rounded-full border border-[#e6b93e]/25 pointer-events-none" />
              <div className="absolute w-[40%] aspect-square rounded-full bg-[#e6b93e]/10 blur-2xl pointer-events-none" />

              <div className="relative w-[78%] aspect-[634/349] max-w-[500px] flex items-center justify-center">
                <Image
                  src="/tortuguita-transparent.webp"
                  alt="Tortuga de Libertad Ecuador"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_30px_rgba(230,185,62,0.35)]"
                  sizes="(max-width: 1024px) 80vw, 520px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRINCIPIOS ─── */}
        <section id="principios" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-[#090E17] border-y border-slate-200 dark:border-slate-800/80 transition-colors">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-[#b88c22] dark:text-[#e6b93e]">
                Lo que defendemos
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-950 dark:text-white">
                Tres ideas, ninguna negociable
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {principios.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="relative overflow-hidden p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-[#e6b93e]/50 transition-colors space-y-4 shadow-sm dark:shadow-none"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#e6b93e] text-slate-950 flex items-center justify-center shadow-md font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-950 dark:text-white">{p.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{p.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CÓMO SUMARTE ─── */}
        <section id="sumate" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-[#b88c22] dark:text-[#e6b93e]">
                Súmate
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-950 dark:text-white">
                ¿Quieres ser líder local en tu cantón o provincia?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pasos.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.n}
                    className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 shadow-sm dark:shadow-none"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-4xl font-serif font-black text-[#c99818] dark:text-[#e6b93e]">{p.n}</span>
                        <Icon className="w-6 h-6 text-[#b88c22] dark:text-[#e7c78d]" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-slate-950 dark:text-white">{p.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{p.text}</p>
                    </div>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#e6b93e] text-slate-950 hover:bg-[#d8a930] transition-colors active:scale-95 shadow-md shadow-[#e6b93e]/10"
                    >
                      <span>{p.cta}</span>
                      <MessageCircleIcon className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN SOUVENIR / TAZA ─── */}
        <TazaSection />

        {/* ─── CIERRE CON SKYLINE DE QUITO ─── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div
            className="relative max-w-5xl mx-auto rounded-[2.5rem] border border-[#e6b93e]/30 bg-[#070b14] overflow-hidden px-6 py-16 sm:py-20 text-center space-y-6 shadow-2xl bg-cover bg-bottom"
            style={{ backgroundImage: "url(/img/skyline-quito-2.webp)" }}
          >
            <div className="absolute inset-0 bg-[#050810]/75 dark:bg-[#050810]/80 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
                Quito digital. Cero burocracia.
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                El Plan Estonia es la propuesta integral para derribar la tramitología, automatizar servicios y transparentar cada centavo municipal.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                {/* Enlace Plan Estonia */}
                {/* Alternativa subdominio: href="https://planestonia.libertadecuador.com/" */}
                <a
                  href={planEstoniaUrl}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#e6b93e] text-slate-950 hover:bg-[#d8a930] transition-transform active:scale-95 shadow-lg shadow-[#e6b93e]/20"
                >
                  <span>Ver Plan Estonia</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold border border-slate-600 text-white hover:border-[#e6b93e]/60 transition-colors active:scale-95 bg-slate-900/50 backdrop-blur-sm"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LibertadFooter />
    </div>
  );
}
