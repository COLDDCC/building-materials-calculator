import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

// astro.config 在 Astro 加载 .env 之前求值，这里显式读一次，保证与 src/lib/registry.js 的 SITE.domain 一致
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

export default defineConfig({
  // 与 src/lib/registry.js 的 SITE.domain 读同一个环境变量，改一处即可
  site: PUBLIC_SITE_URL || 'https://example.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  // 静态构建下 Astro 生成 meta-refresh 兜底；真 301 由 public/_redirects 交给 Cloudflare Pages
  redirects: {
    '/cinder-block-calculator': '/concrete-block-calculator/',
    '/cmu-calculator': '/concrete-block-calculator/',
  },
  vite: { plugins: [tailwindcss()] },
});
