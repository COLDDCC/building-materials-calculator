import { toBase, fromBase, unitLabel, KINDS } from '../lib/units.js';

// Vite 会把每个配置切成独立 chunk，页面只加载自己那一个。
let loaders = {};
try {
  loaders = import.meta.glob('../calculators/*.js');
} catch {
  loaders = {};
}

const STORE_KEY = 'buildtally-units';

function getSystem() {
  try {
    return localStorage.getItem(STORE_KEY) === 'metric' ? 'metric' : 'imperial';
  } catch {
    return 'imperial';
  }
}
function setSystem(s) {
  try {
    localStorage.setItem(STORE_KEY, s);
  } catch {}
}

function fmt(n, decimals) {
  if (!isFinite(n)) return '—';
  const d = decimals ?? (Math.abs(n) < 10 && n % 1 !== 0 ? 1 : 0);
  return n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
}

async function boot(root) {
  const slug = root.dataset.calc;
  const loader = loaders[`../calculators/${slug}.js`];
  const injected = globalThis.__CALC_CONFIGS__ && globalThis.__CALC_CONFIGS__[slug];
  if (!loader && !injected) return;
  const config = injected || (await loader()).default;

  let system = getSystem();
  const fields = Array.from(root.querySelectorAll('[data-input]'));
  const byId = Object.fromEntries(fields.map((el) => [el.dataset.input, el]));
  const state = {};

  function readField(el) {
    const id = el.dataset.input;
    const type = el.dataset.type;
    if (type === 'toggle') return el.checked;
    if (type === 'select' || type === 'preset') {
      return el.dataset.numeric === 'true' ? parseFloat(el.value) : el.value;
    }
    const raw = parseFloat(el.value);
    const v = isFinite(raw) ? raw : 0;
    const kind = el.dataset.kind;
    return kind && kind !== 'count' && kind !== 'pct' && kind !== 'usd' ? toBase(v, kind, system) : v;
  }

  function syncState() {
    for (const el of fields) state[el.dataset.input] = readField(el);
  }

  function paintFieldValues() {
    // 单位切换后，把 state 里的基准值换算回当前显示单位
    for (const el of fields) {
      const type = el.dataset.type;
      if (type === 'toggle' || type === 'select' || type === 'preset') continue;
      const kind = el.dataset.kind;
      let v = state[el.dataset.input];
      if (kind && kind !== 'count' && kind !== 'pct' && kind !== 'usd') v = fromBase(v, kind, system);
      el.value = Math.round(v * 1000) / 1000;
    }
    root.querySelectorAll('[data-unit-label]').forEach((el) => {
      el.textContent = unitLabel(el.dataset.unitLabel, system);
    });
  }

  function render() {
    const result = config.compute({ ...state });

    root.querySelectorAll('[data-output]').forEach((el) => {
      const id = el.dataset.output;
      const kind = el.dataset.kind || 'count';
      let v = result[id];
      if (typeof v !== 'number') {
        el.textContent = '—';
        return;
      }
      if (kind !== 'count' && kind !== 'pct' && kind !== 'usd') v = fromBase(v, kind, system);
      const dec = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : undefined;
      el.textContent = (kind === 'usd' ? '$' : '') + fmt(v, dec);
    });

    root.querySelectorAll('[data-output-range]').forEach((el) => {
      const lo = result[el.dataset.lo];
      const hi = result[el.dataset.hi];
      el.textContent =
        isFinite(lo) && isFinite(hi)
          ? '$' + fmt(Math.round(lo)) + ' – $' + fmt(Math.round(hi))
          : '—';
    });

    root.querySelectorAll('[data-when]').forEach((el) => {
      const key = el.dataset.when;
      const on = state[key] === true || result[key] === true;
      el.hidden = !on;
    });

    root.querySelectorAll('[data-slider-value]').forEach((el) => {
      const src = byId[el.dataset.sliderValue];
      if (src) el.textContent = src.value;
    });

    root.dataset.ready = 'true';
  }

  function applyPreset(el) {
    const opt = el.options[el.selectedIndex];
    const raw = opt.dataset.set;
    if (!raw) return;
    const patch = JSON.parse(raw);
    for (const [id, baseValue] of Object.entries(patch)) {
      state[id] = baseValue;
      const target = byId[id];
      if (target) {
        const kind = target.dataset.kind;
        const shown = kind && kind !== 'count' ? fromBase(baseValue, kind, system) : baseValue;
        target.value = Math.round(shown * 1000) / 1000;
      }
    }
  }

  for (const el of fields) {
    const ev = el.dataset.type === 'number' || el.dataset.type === 'slider' ? 'input' : 'change';
    el.addEventListener(ev, () => {
      if (el.dataset.type === 'preset') {
        applyPreset(el);
        syncState();
      } else {
        // 手改宽/长时，把地区预设切到 Custom
        const preset = fields.find((f) => f.dataset.type === 'preset');
        if (preset && ['rollWidth', 'rollLength'].includes(el.dataset.input)) {
          const custom = Array.from(preset.options).find((o) => o.value === 'custom');
          if (custom) preset.value = 'custom';
        }
        syncState();
      }
      render();
    });
  }

  root.querySelectorAll('[data-units]').forEach((btn) => {
    btn.addEventListener('click', () => {
      system = btn.dataset.units;
      setSystem(system);
      document.querySelectorAll('[data-units]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.units === system));
      });
      paintFieldValues();
      render();
    });
  });

  const copyBtn = root.querySelector('[data-action="copy"]');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const lines = [config.h1, ''];
      root.querySelectorAll('[data-result-row]').forEach((row) => {
        if (row.hidden) return;
        const label = row.querySelector('[data-result-label]')?.textContent?.trim();
        const value = row.querySelector('[data-output], [data-output-range]')?.textContent?.trim();
        const unit = row.querySelector('[data-unit-label]')?.textContent?.trim() || '';
        if (label && value) lines.push(`${label}: ${value} ${unit}`.trim());
      });
      lines.push('', `Calculated at ${location.href}`);
      try {
        await navigator.clipboard.writeText(lines.join('\n'));
        copyBtn.textContent = 'Copied';
        setTimeout(() => (copyBtn.textContent = 'Copy results'), 1600);
      } catch {}
    });
  }

  const printBtn = root.querySelector('[data-action="print"]');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // 初始化
  document.querySelectorAll('[data-units]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.units === system));
  });
  syncState();
  if (system === 'metric') paintFieldValues();
  render();
}

document.querySelectorAll('[data-calc]').forEach(boot);
