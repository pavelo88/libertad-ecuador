'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from './Icons';

export default function MobileBottomBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { href: '/', label: 'Inicio', icon: 'Home' },
    { href: '/plan-estonia/plan', label: 'El Plan', icon: 'BookOpen' },
    { href: '/plan-estonia/pregunta', label: 'Consultar IA', icon: 'Bot', isSpecial: true },
    { href: '/plan-estonia/programas', label: 'Programas', icon: 'Layers' },
    { href: '/plan-estonia/#sumate', label: 'Minga', icon: 'Users' }
  ];

  return (
    <div className="mobile-appbar-dock">
      <nav className="mobile-appbar-container" aria-label="Navegación Móvil App">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          if (item.isSpecial) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-dock-btn mobile-dock-special ${isActive ? 'active' : ''}`}
                aria-label={item.label}
              >
                <div className="special-sparkle-ring">
                  <Icon name={item.icon} size={22} />
                </div>
                <span>IA Quito</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-dock-btn ${isActive ? 'active' : ''}`}
            >
              <Icon name={item.icon} size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
