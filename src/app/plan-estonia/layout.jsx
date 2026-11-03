import './globals.css';
import SiteNav from './_components/SiteNav';
import Footer from './_components/Footer';
import MobileBottomBar from './_components/MobileBottomBar';
import CookieBanner from './_components/CookieBanner';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#07162e',
};

export const metadata = {
  title: {
    default: 'Plan Estonia | Aula y Consulta Ciudadana para Quito',
    template: '%s | Plan Estonia Quito'
  },
  description: 'Conoce y analiza el Plan Estonia para Quito 2027–2031. Pregunta a la IA, explora 32 programas, súmate a la Minga Cívica y aporta tus ideas.',
  metadataBase: new URL('https://plan-estonia.vercel.app'),
  alternates: { canonical: '/' },
  keywords: ['Plan Estonia', 'Quito', 'Alcaldía Quito', 'Propuestas Quito', 'Minga Tecnológica', 'Quito 2027-2031'],
  authors: [{ name: 'Plan Estonia Quito' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Plan Estonia | Quito de Oportunidades para Todos',
    description: 'Un plan serio, realizable y medible para una ciudad más segura, más próspera y más humana. Explora las propuestas y súmate a la Minga.',
    url: 'https://plan-estonia.vercel.app',
    siteName: 'Plan Estonia Quito',
    images: [
      {
        url: '/assets/quito-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Panorámica de Quito con nevados al atardecer - Plan Estonia',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plan Estonia | Quito de Oportunidades para Todos',
    description: 'Conoce las 32 propuestas, pregunta a la IA ciudadana y únete a la Minga por el futuro de Quito.',
    images: ['/assets/quito-hero.webp'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://plan-estonia.vercel.app/#organization',
      name: 'Plan Estonia Quito · Libertad Ecuador',
      url: 'https://plan-estonia.vercel.app',
      logo: 'https://plan-estonia.vercel.app/icon.png',
      description: 'Plataforma cívica y analítica del Plan de Transformación Integral para el Distrito Metropolitano de Quito 2027–2031.',
      areaServed: {
        '@type': 'City',
        name: 'Quito, Ecuador'
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://plan-estonia.vercel.app/#website',
      url: 'https://plan-estonia.vercel.app',
      name: 'Plan Estonia Quito',
      publisher: {
        '@id': 'https://plan-estonia.vercel.app/#organization'
      },
      inLanguage: 'es-EC',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://plan-estonia.vercel.app/pregunta?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://plan-estonia.vercel.app/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es el Plan Estonia para Quito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es un plan de gobierno integral para el Distrito Metropolitano de Quito (2027–2031) estructurado en 6 ejes estratégicos, 32 programas de intervención directa y una inversión proyectada de USD 2.340 millones, enfocado en digitalización, seguridad, empleo y movilidad.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Cuáles son los 6 ejes estratégicos del Plan Estonia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1. Ciudad Digital e Institucional (trámites 100% digitales en 72h). 2. Seguridad y Convivencia (-50% de homicidios). 3. Movilidad Inteligente (integración Metro-buses). 4. Ambiente y Territorio (descontaminación de ríos y quebradas). 5. Desarrollo Económico (150.000 nuevos empleos). 6. Desarrollo Humano y Salud.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Cómo funciona el Asistente de IA Ciudadana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El asistente responde dudas sobre el plan de gobierno en segundos citando directamente los 10 capítulos del documento oficial de 159 páginas, garantizando respuestas precisas y transparentes para los 2.68 millones de habitantes de Quito.'
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <SiteNav />
      <main id="main">{children}</main>
      <Footer />
      <MobileBottomBar />
      <CookieBanner />
    </>
  );
}
