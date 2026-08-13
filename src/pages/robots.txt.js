import { SITE } from '../lib/registry.js';

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', SITE.domain).href}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
