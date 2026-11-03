"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SunIcon, MoonIcon, MenuIcon, XIcon } from "./Icons";

export default function LibertadNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("le_theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("le_theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("le_theme", "dark");
      setIsDark(true);
    }
  };

  // URL de destino para Plan Estonia (cambiar si se usa subdominio)
  // const planEstoniaUrl = "https://planestonia.libertadecuador.com/";
  const planEstoniaUrl = "/plan-estonia";
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 dark:bg-[#050810]/90 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#e6b93e]/15 border border-[#e6b93e]/30 overflow-hidden group-hover:scale-105 transition-transform">
            <Image
              src="/logo.webp"
              alt="Logo Libertad Ecuador"
              fill
              className="object-contain p-1 drop-shadow-sm"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-slate-900 dark:text-white tracking-wide leading-tight">
              Libertad Ecuador
            </span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#b88c22] dark:text-[#e6b93e]">
              Movimiento Ciudadano
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#principios" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            Principios
          </Link>
          <Link href="#sumate" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            Organización
          </Link>
          <Link href="#souvenir" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            Souvenir Cívico
          </Link>

          {/* Enlace Plan Estonia */}
          {/* Alternativa subdominio: href="https://planestonia.libertadecuador.com/" */}
          <a
            href={planEstoniaUrl}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border border-[#e6b93e]/50 text-[#b88c22] dark:text-[#e6b93e] hover:bg-[#e6b93e]/10 transition-colors"
          >
            <span>Plan Estonia</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#e6b93e] animate-pulse" />
          </a>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            aria-label="Cambiar tema de color"
          >
            {isDark ? <SunIcon className="w-5 h-5 text-[#e6b93e]" /> : <MoonIcon className="w-5 h-5 text-slate-700" />}
          </button>

          <a
            href="https://wa.me/593969710543?text=Hola%2C%20quiero%20unirme%20a%20Libertad%20Ecuador."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#e6b93e] text-slate-950 hover:bg-[#d8a930] transition-transform active:scale-95 shadow-md shadow-[#e6b93e]/20"
          >
            <span>Sumarme</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Cambiar tema"
          >
            {isDark ? <SunIcon className="w-5 h-5 text-[#e6b93e]" /> : <MoonIcon className="w-5 h-5 text-slate-700" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
            aria-label="Menú móvil"
          >
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-xl px-4 py-6 space-y-4">
          <Link
            href="#principios"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-700 dark:text-slate-200 hover:text-[#e6b93e]"
          >
            Principios
          </Link>
          <Link
            href="#sumate"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-700 dark:text-slate-200 hover:text-[#e6b93e]"
          >
            Organización
          </Link>
          <Link
            href="#souvenir"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-700 dark:text-slate-200 hover:text-[#e6b93e]"
          >
            Souvenir Cívico
          </Link>
          {/* Alternativa subdominio: href="https://planestonia.libertadecuador.com/" */}
          <a
            href={planEstoniaUrl}
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-[#b88c22] dark:text-[#e6b93e]"
          >
            Plan Estonia ↗
          </a>
          <a
            href="https://wa.me/593969710543?text=Hola%2C%20quiero%20unirme%20a%20Libertad%20Ecuador."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full text-sm font-bold bg-[#e6b93e] text-slate-950 shadow-md"
          >
            Sumarme al Movimiento
          </a>
        </div>
      )}
    </header>
  );
}
