export default function sitemap() {
  const baseUrl = 'https://plan-estonia.vercel.app';
  const routes = [
    '',
    '/plan',
    '/diagnostico',
    '/impacto',
    '/programas',
    '/modelo',
    '/territorios',
    '/presupuesto',
    '/pregunta',
    '/aula',
    '/metodologia'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }));

  return routes;
}
