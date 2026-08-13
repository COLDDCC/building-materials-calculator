// 3.9 节专项：逐卷取整 + 三种对花模式 + US / UK 卷规格预设。
// 关键：绝不使用「总面积 ÷ 单卷面积」的简化算法。

export default {
  slug: 'wallpaper-calculator',
  h1: 'Wallpaper Calculator',
  title: 'Wallpaper Calculator with Pattern Repeat – How Many Rolls?',
  description:
    'Calculate how many wallpaper rolls you need, including pattern repeat and straight or drop match. Rolls are counted strip by strip, not by dividing total area — so the number is the one that actually hangs.',
  group: 'interior',
  order: 3,
  tagline: 'Includes pattern repeat, match type and US / UK roll sizes.',
  keyword: 'wallpaper calculator',

  inputs: [
    { id: 'length', label: 'Room length', type: 'number', unit: 'ft', default: 14, min: 0, step: 0.5 },
    { id: 'width', label: 'Room width', type: 'number', unit: 'ft', default: 12, min: 0, step: 0.5 },
    { id: 'height', label: 'Wall height', type: 'number', unit: 'ft', default: 8, min: 0, step: 0.25 },
    { id: 'doors', label: 'Doors', type: 'number', unit: 'count', default: 1, min: 0, step: 1,
      help: 'Each door removes 3 ft of wall width.' },
    { id: 'windows', label: 'Windows', type: 'number', unit: 'count', default: 2, min: 0, step: 1 },
    { id: 'deductWindows', label: 'Deduct window widths', type: 'toggle', default: false,
      help: 'Off by default — you still need short strips above and below a window, so most hangers do not deduct them.' },
    { id: 'repeat', label: 'Pattern repeat', type: 'number', unit: 'in', default: 21, min: 0, step: 0.25,
      help: 'Vertical repeat length printed on the roll label. Enter 0 for a plain / random-match paper.' },
    {
      id: 'match', label: 'Match type', type: 'select', default: 'straight',
      options: [
        { value: 'free', label: 'Free match (random)' },
        { value: 'straight', label: 'Straight match' },
        { value: 'drop', label: 'Drop match (half-drop)' },
      ],
    },
    {
      id: 'region', label: 'Roll size preset', type: 'preset', default: 'us-single',
      options: [
        { value: 'us-single', label: 'US single roll — 27 in × 27 ft', set: { rollWidth: 27, rollLength: 27 } },
        { value: 'us-double', label: 'US double roll — 27 in × 54 ft', set: { rollWidth: 27, rollLength: 54 } },
        { value: 'uk', label: 'UK / EU standard — 53 cm × 10.05 m', set: { rollWidth: 20.866, rollLength: 32.972 } },
        { value: 'custom', label: 'Custom' },
      ],
    },
    { id: 'rollWidth', label: 'Roll width', type: 'number', unit: 'in', default: 27, min: 1, step: 0.5 },
    { id: 'rollLength', label: 'Roll length', type: 'number', unit: 'ft', default: 27, min: 1, step: 0.5 },
    { id: 'trim', label: 'Trim allowance per strip', type: 'number', unit: 'in', default: 4, min: 0, step: 1,
      help: 'Extra length top and bottom for trimming. 4 in total is typical.' },
  ],

  outputs: [
    { id: 'rolls', label: 'Rolls needed', primary: true, unit: 'count' },
    { id: 'strips', label: 'Strips required', unit: 'count' },
    { id: 'stripsPerRoll', label: 'Usable strips per roll', unit: 'count' },
    { id: 'cutLength', label: 'Cut length per strip', unit: 'in', decimals: 1,
      help: 'Wall height plus trim, rounded up to a whole pattern repeat.' },
    { id: 'netWidth', label: 'Net wall width', unit: 'ft', decimals: 1 },
    { id: 'wastePct', label: 'Pattern waste', unit: 'pct', decimals: 0,
      help: 'Share of purchased paper that ends up as offcuts. Large repeats and drop matches push this up.' },
    { id: 'paste', label: 'Adhesive', unit: 'count', help: 'Quantity of 1 gal buckets, if your paper is unpasted.' },
    { id: 'cost', label: 'Estimated material cost', type: 'range', lo: 'costLow', hi: 'costHigh',
      help: 'Assumes $35–$120 per roll. Designer and hand-printed papers run well above this.' },
  ],

  compute(v) {
    const perimeter = 2 * (v.length + v.width);
    const deducted = v.doors * 3 + (v.deductWindows ? v.windows * 3 : 0);
    const netWidth = Math.max(perimeter - deducted, 0);

    const strip = v.height * 12 + v.trim;
    const repeat = v.repeat > 0 ? v.repeat : 0;

    let cutLength = strip;
    if (repeat > 0 && v.match === 'straight') {
      cutLength = Math.ceil(strip / repeat) * repeat;
    } else if (repeat > 0 && v.match === 'drop') {
      const half = repeat / 2;
      cutLength = Math.ceil(strip / half) * half;
    }

    const rollLengthIn = v.rollLength * 12;
    const stripsPerRoll = Math.floor(rollLengthIn / cutLength);
    const strips = Math.ceil((netWidth * 12) / v.rollWidth);
    const rolls = stripsPerRoll > 0 ? Math.ceil(strips / stripsPerRoll) : 0;

    const bought = rolls * v.rollWidth * rollLengthIn;
    const used = strips * v.rollWidth * strip;
    const wastePct = bought > 0 ? Math.round((1 - used / bought) * 100) : 0;

    const coverageSqft = (rolls * v.rollWidth * rollLengthIn) / 144;
    const paste = Math.ceil(coverageSqft / 200);

    return {
      rolls,
      strips,
      stripsPerRoll,
      cutLength,
      netWidth,
      wastePct,
      paste,
      costLow: rolls * 35,
      costHigh: rolls * 120,
    };
  },
};
