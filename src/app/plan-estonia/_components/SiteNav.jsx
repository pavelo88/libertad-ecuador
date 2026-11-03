'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Icon } from './Icons';

const navGroups = [
  {
    id: 'plan',
    title: 'El Plan',
    items: [
      {
        href: '/plan-estonia/programas',
        label: '32 Programas de Gobierno',
        desc: 'Los 6 ejes estratégicos para transformar Quito',
        icon: 'Layers'
      },
      {
        href: '/plan-estonia/plan',
        label: 'Documento del Plan',
        desc: 'Metas, visión y metodología 2027–2031',
        icon: 'BookOpen'
      },
      {
        href: '/plan-estonia/impacto',
        label: 'En tu Día a Día',
        desc: 'Respuestas contextuales a situaciones reales',
        icon: 'Sparkles'
      },
      {
        href: '/plan-estonia/aula',
        label: 'Aula Ciudadana',
        desc: 'Aprende y pon a prueba tus conocimientos cívicos',
        icon: 'GraduationCap'
      }
    ]
  },
  {
    id: 'cifras',
    title: 'Quito en Cifras',
    items: [
      {
        href: '/plan-estonia/diagnostico',
        label: 'Diagnóstico Ciudadano',
        desc: 'Censo, empleo, seguridad y desafíos de la ciudad',
        icon: 'TrendingUp'
      },
      {
        href: '/plan-estonia/territorios',
        label: 'Mapa y Parroquias',
        desc: 'Realidad y necesidades de las 65 parroquias',
        icon: 'MapPin'
      },
      {
        href: '/plan-estonia/presupuesto',
        label: 'Presupuesto 2026',
        desc: 'Desglose financiero e inversión de USD 1.041 M',
        icon: 'Coins'
      }
    ]
  }
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [quickSearch, setQuickSearch] = useState('');
  const dropdownTimeoutRef = useRef(null);

  const route = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll de la pantalla cuando el drawer móvil está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Manejadores de hover con debounce para que los dropdowns no se cierren accidentalmente
  const handleMouseEnter = (id) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (quickSearch.trim().length > 2) {
      setOpen(false);
      setActiveDropdown(null);
      router.push(`/pregunta?q=${encodeURIComponent(quickSearch.trim())}`);
    }
  };

  const isHome = route === '/';

  return (
    <>
      <header className={`site-header ${isHome ? 'site-header-home' : ''} ${scrolled ? 'site-header-scrolled' : ''}`}>
        <div className="nav-inner wrap">
          {/* Logo Oficial */}
          <Link href="/" aria-label="Plan Estonia inicio" className="brand-official" onClick={() => { setOpen(false); setActiveDropdown(null); }}>
            <div className="brand-official-logo">
              <svg viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-mountain">
                <path d="M4 28L18 8L26 20L32 12L42 28H4Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M4 28L18 8L27 22" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 17L28 9L40 28" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="34" cy="7" r="2.5" fill="#14b99e" />
              </svg>
              <div className="brand-official-text">
                <span className="brand-official-title">PLAN ESTONIA</span>
                <span className="brand-official-motto hide-on-mobile">TRABAJO · ORDEN · CORAZÓN</span>
                <span className="brand-official-sub hide-on-mobile">QUITO 2027 – 2031</span>
              </div>
            </div>
          </Link>

          {/* Enlaces Desktop Agrupados en Dropdowns Elegantes */}
          <nav className="nav-links-clean nav-links-grouped" aria-label="Navegación principal">
            {/* 1. Inicio */}
            <Link
              href="/"
              className={`nav-item-clean ${isHome ? 'active' : ''}`}
              onClick={() => setActiveDropdown(null)}
            >
              Inicio
            </Link>

            {/* 2. Grupos con Dropdowns */}
            {navGroups.map((group) => {
              const isGroupActive = activeDropdown === group.id;
              const hasActiveChild = group.items.some((item) => route === item.href);

              return (
                <div
                  key={group.id}
                  className="nav-group-container"
                  onMouseEnter={() => handleMouseEnter(group.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`nav-group-trigger ${hasActiveChild ? 'active' : ''} ${isGroupActive ? 'open' : ''}`}
                    onClick={() => setActiveDropdown(isGroupActive ? null : group.id)}
                    aria-expanded={isGroupActive}
                  >
                    <span>{group.title}</span>
                    <Icon
                      name="ChevronDown"
                      size={14}
                      className={`trigger-arrow ${isGroupActive ? 'rotate' : ''}`}
                    />
                  </button>

                  {/* Panel Flotante del Dropdown */}
                  <div className={`nav-dropdown-menu ${isGroupActive ? 'visible' : ''}`} role="menu">
                    <div className="dropdown-items-grid">
                      {group.items.map((item) => {
                        const isCurrent = route === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`dropdown-link-item ${isCurrent ? 'current' : ''}`}
                            onClick={() => setActiveDropdown(null)}
                            role="menuitem"
                          >
                            <div className="dropdown-item-icon">
                              <Icon name={item.icon} size={18} />
                            </div>
                            <div className="dropdown-item-text">
                              <strong>{item.label}</strong>
                              <small>{item.desc}</small>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 3. Preguntas & Asistente IA */}
            <Link
              href="/plan-estonia/pregunta"
              className={`nav-item-clean nav-item-ai ${route === '/pregunta' ? 'active' : ''}`}
              onClick={() => setActiveDropdown(null)}
            >
              <span>Preguntas</span>
              <span className="nav-ai-pill">IA</span>
            </Link>

            {/* 4. Botón Destacado de Conversión (Minga Cívica) */}
            <Link
              href="/plan-estonia/#sumate"
              className="btn-nav-minga"
              onClick={() => setActiveDropdown(null)}
            >
              <Icon name="Users" size={15} />
              <span>Únete a la Minga</span>
            </Link>
          </nav>

          {/* Buscador inteligente */}
          <form onSubmit={handleSearchSubmit} className="header-search-box">
            <Icon name="Search" size={16} />
            <input
              type="text"
              placeholder="¿Qué deseas saber?"
              value={quickSearch}
              onChange={(e) => setQuickSearch(e.target.value)}
            />
          </form>

          {/* Botón de Menú Hamburguesa */}
          <button
            className="nav-toggle-clean"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
      </header>

      {/* OVERLAY Y DRAWER MÓVIL PROFESIONAL */}
      <div
        className={`mobile-drawer-overlay ${open ? 'active' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside className={`mobile-nav-drawer ${open ? 'active' : ''}`} aria-label="Menú móvil">
        <div className="drawer-header">
          <div className="brand-official-logo">
            <svg viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-mountain">
              <path d="M4 28L18 8L26 20L32 12L42 28H4Z" fill="currentColor" fillOpacity="0.15" />
              <path d="M4 28L18 8L27 22" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="34" cy="7" r="2.5" fill="#14b99e" />
            </svg>
            <div className="brand-official-text">
              <span className="brand-official-title">PLAN ESTONIA</span>
              <span className="brand-official-motto">QUITO 2027 – 2031</span>
            </div>
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Buscador dentro del menú móvil */}
        <form onSubmit={handleSearchSubmit} className="drawer-search-box">
          <Icon name="Search" size={18} />
          <input
            type="text"
            placeholder="Buscar propuestas o temas..."
            value={quickSearch}
            onChange={(e) => setQuickSearch(e.target.value)}
          />
        </form>

        {/* Lista de enlaces móviles organizados por categorías */}
        <div className="drawer-links-scroll">
          <div className="drawer-nav-section">
            <span className="drawer-section-kicker">INICIO</span>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`drawer-link-item ${isHome ? 'active' : ''}`}
            >
              <span>Inicio y Portada</span>
              <Icon name="ChevronRight" size={18} />
            </Link>
          </div>

          {navGroups.map((grp) => (
            <div key={grp.id} className="drawer-nav-section">
              <span className="drawer-section-kicker">{grp.title.toUpperCase()}</span>
              {grp.items.map((item) => {
                const active = route === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`drawer-link-item ${active ? 'active' : ''}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Icon name={item.icon} size={17} style={{ color: '#0d8a7a' }} />
                      <span>{item.label}</span>
                    </div>
                    <Icon name="ChevronRight" size={18} />
                  </Link>
                );
              })}
            </div>
          ))}

          <div className="drawer-nav-section">
            <span className="drawer-section-kicker">PARTICIPACIÓN CIUDADANA</span>
            <Link
              href="/plan-estonia/#sumate"
              onClick={() => setOpen(false)}
              className="drawer-link-item drawer-link-highlight"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon name="Users" size={18} style={{ color: '#1768d0' }} />
                <strong>Únete a la Minga / Aporta Ideas</strong>
              </div>
              <Icon name="ChevronRight" size={18} />
            </Link>
          </div>

          <div className="drawer-extra-box">
            <Link
              href="/plan-estonia/pregunta"
              onClick={() => setOpen(false)}
              className="drawer-cta-ai"
            >
              <Icon name="Bot" size={20} />
              <div>
                <strong>Asistente IA Ciudadano</strong>
                <small>Pregunta lo que quieras sobre el plan</small>
              </div>
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
