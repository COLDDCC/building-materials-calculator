// 构建期注册表：新增计算器只要往 src/calculators/ 丢一个文件即可，这里自动收录。
const configModules = import.meta.glob('../calculators/*.js', { eager: true });
const copyModules = import.meta.glob('../copy/*.js', { eager: true });

function slugFromPath(p) {
  return p.split('/').pop().replace(/\.js$/, '');
}

const copyBySlug = {};
for (const [path, mod] of Object.entries(copyModules)) {
  copyBySlug[slugFromPath(path)] = mod.default;
}

export const calculators = Object.entries(configModules)
  .map(([path, mod]) => {
    const cfg = mod.default;
    return { ...cfg, slug: cfg.slug || slugFromPath(path), copy: copyBySlug[cfg.slug] || null };
  })
  .sort((a, b) => (a.order || 99) - (b.order || 99));

export const bySlug = Object.fromEntries(calculators.map((c) => [c.slug, c]));

export const GROUPS = [
  { id: 'interior', label: 'Interior & Finishing', blurb: 'Everything inside the walls once the structure is up.' },
  { id: 'structural', label: 'Structural', blurb: 'Walls, framing, insulation and anything that carries load.' },
  { id: 'landscaping', label: 'Landscaping & Groundwork', blurb: 'Beds, paths, driveways and bulk material by the yard.' },
  { id: 'outdoor', label: 'Outdoor Structures', blurb: 'Decks, fences and siding. Coming next.' },
];

export function grouped() {
  return GROUPS.map((g) => ({ ...g, items: calculators.filter((c) => c.group === g.id) })).filter(
    (g) => g.items.length > 0
  );
}

export const SITE = {
  name: 'BuildTally',
  // 域名唯一入口：astro.config.mjs 的 site 与这里读同一个环境变量，改一处全站生效。
  domain: process.env.PUBLIC_SITE_URL || 'https://example.com',
  email: 'lengche2222@gmail.com',
  ga4Id: import.meta.env.PUBLIC_GA4_ID || '',
  tagline: 'Material calculators that give you the number you actually order.',
};
