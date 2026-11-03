'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from './Icons';

export default function InteractiveChallengeTabs() {
  const [activeTab, setActiveTab] = useState('seguridad');

  const challenges = {
    seguridad: {
      title: 'Quito necesita más seguridad',
      badge: 'Prioridad 01',
      desc: '264 homicidios en 2025 y más de 1.300 extorsiones. El Plan Estonia propone prevención, tecnología de videovigilancia inteligente y presencia territorial policial 24/7 para recuperar tu tranquilidad.',
      link: '/programas?eje=Seguridad',
      linkText: 'Ver propuestas de seguridad',
      image: '/assets/eje-seguridad.webp'
    },
    movilidad: {
      title: 'Movilidad rápida e integrada',
      badge: 'Prioridad 02',
      desc: 'Tiempos de viaje excesivos y congestión severa. Integración total de Metro, corredores BRT eléctricos, alimentadores unificados y tarjeta ciudadana sin filas.',
      link: '/programas?eje=Movilidad',
      linkText: 'Ver propuestas de movilidad',
      image: '/assets/eje-movilidad.webp'
    },
    ambiente: {
      title: 'Quito verde y resiliente',
      badge: 'Prioridad 03',
      desc: 'Solo el 2,85% de aguas residuales reciben tratamiento. Proponemos descontaminación de ríos, tratamiento de cuencas y protección ambiental del Chocó Andino.',
      link: '/programas?eje=Ambiente',
      linkText: 'Ver propuestas de ambiente',
      image: '/assets/eje-ambiente.webp'
    },
    empleo: {
      title: 'Oportunidades y reactivación económica',
      badge: 'Prioridad 04',
      desc: 'Desempleo juvenil del 7,2% y subempleo. Formalización Exprés en 72 horas, polo logístico Turubamba y créditos de capital semilla para emprendedores barriales.',
      link: '/programas?eje=Trabajo',
      linkText: 'Ver propuestas de empleo',
      image: '/assets/eje-trabajo.webp'
    },
    vivienda: {
      title: 'Vivienda digna y servicios básicos',
      badge: 'Prioridad 05',
      desc: 'Déficit habitacional en la periferia. Titulación masiva de 250.000 predios, agua potable y alcantarillado integral para barrios de laderas y valles.',
      link: '/programas?eje=Desarrollo%20humano',
      linkText: 'Ver propuestas de vivienda',
      image: '/assets/eje-humano.webp'
    }
  };

  const current = challenges[activeTab];

  return (
    <div className="challenge-card-interactive">
      <div className="challenge-tabs-header">
        <span className="challenge-main-title">Diagnóstico: los principales desafíos</span>
        <div className="challenge-tab-buttons">
          {Object.keys(challenges).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`challenge-tab-btn ${activeTab === key ? 'active' : ''}`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="challenge-content-body">
        <div className="challenge-image-wrap">
          <img src={current.image} alt={current.title} />
        </div>
        <div className="challenge-text-wrap">
          <h4>{current.title}</h4>
          <p>{current.desc}</p>
          <Link href={current.link} className="challenge-cta-link">
            {current.linkText} <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
