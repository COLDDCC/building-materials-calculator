import { calculators, SITE } from '../lib/registry.js';
import { guides } from '../lib/guides.js';

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: '/', priority: '1.0', freq: 'weekly' },
    ...calculators.map((c) => ({ loc: `/${c.slug}/`, priority: '0.9', freq: 'monthly' })),
    { loc: '/guides/', priority: '0.7', freq: 'weekly' },
    ...guides.map((g) => ({ loc: `/guides/${g.slug}/`, priority: '0.7', freq: 'monthly' })),
    ...['/about/', '/contact/', '/privacy/', '/disclaimer/'].map((loc) => ({
      loc, priority: '0.3', freq: 'yearly',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${new URL(u.loc, SITE.domain).href}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
