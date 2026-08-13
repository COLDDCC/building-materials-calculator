const mods = import.meta.glob('../guides/*.js', { eager: true });

export const guides = Object.entries(mods)
  .map(([path, m]) => ({ slug: path.split('/').pop().replace(/\.js$/, ''), ...m.default }))
  .sort((a, b) => (a.title > b.title ? 1 : -1));

export const guideSlugs = new Set(guides.map((g) => g.slug));
export const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));
