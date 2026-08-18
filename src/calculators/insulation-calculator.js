export default {
  slug: 'insulation-calculator',
  h1: 'Insulation Calculator',
  title: 'Insulation Calculator – Batts, Rolls and Blown-In Coverage',
  description:
    'Find out how many bags or batts of insulation your walls, ceiling or attic need, what R-value fits the cavity you have, and what depth blown-in has to reach.',
  group: 'structural',
  order: 6,
  tagline: 'Batts, rolls or blown-in — by cavity depth and target R-value.',
  keyword: 'insulation calculator',

  inputs: [
    { id: 'length', label: 'Area length', type: 'number', unit: 'ft', default: 30, min: 0, step: 0.5 },
    { id: 'width', label: 'Area width', type: 'number', unit: 'ft', default: 24, min: 0, step: 0.5 },
    { id: 'assembly', label: 'Assembly', type: 'select', default: 'attic',
      options: [
        { value: 'wall2x4', label: 'Wall — 2×4 stud (3.5 in cavity)' },
        { value: 'wall2x6', label: 'Wall — 2×6 stud (5.5 in cavity)' },
        { value: 'attic', label: 'Attic floor (open depth)' },
        { value: 'floor', label: 'Floor / crawlspace joists' },
      ] },
    { id: 'type', label: 'Insulation type', type: 'select', default: 'blown',
      options: [
        { value: 'batt', label: 'Fiberglass batts' },
        { value: 'blown', label: 'Blown-in cellulose' },
        { value: 'blownfg', label: 'Blown-in fiberglass' },
      ] },
    { id: 'targetR', label: 'Target R-value', type: 'number', unit: 'count', default: 49, min: 0, step: 1,
      help: 'US DOE recommends R-49 to R-60 in most attics, R-13 to R-21 in walls.' },
    { id: 'spacing', label: 'Framing spacing', type: 'select', default: 16,
      options: [{ value: 16, label: '16 in on center' }, { value: 24, label: '24 in on center' }] },
    { id: 'waste', label: 'Waste factor', type: 'slider', unit: 'pct', default: 8, min: 0, max: 20, step: 1 },
  ],

  outputs: [
    { id: 'packages', label: 'Bags / batt packages', primary: true, unit: 'count' },
    { id: 'area', label: 'Area to insulate', unit: 'sqft' },
    { id: 'depth', label: 'Installed depth', unit: 'in', decimals: 1 },
    { id: 'cavityR', label: 'Achievable R-value in cavity', unit: 'count' },
    { id: 'cavities', label: 'Stud / joist bays', unit: 'count' },
    { id: 'cost', label: 'Estimated material cost', type: 'range', lo: 'costLow', hi: 'costHigh',
      help: 'Assumes $0.55–$1.85 per sq ft installed material only.' },
  ],

  compute(v) {
    const area = v.length * v.width;
    const adj = area * (1 + v.waste / 100);
    const cavityDepth = { wall2x4: 3.5, wall2x6: 5.5, attic: 99, floor: 9.25 }[v.assembly];
    const rPerInch = { batt: 3.2, blown: 3.7, blownfg: 2.5 }[v.type];

    let depth = v.targetR / rPerInch;
    if (depth > cavityDepth) depth = cavityDepth;
    const cavityR = Math.round(depth * rPerInch);

    let packages;
    if (v.type === 'batt') {
      const perBag = v.assembly === 'wall2x4' ? 88 : 64;
      packages = Math.ceil(adj / perBag);
    } else {
      // Settled installed yield per bag, back-calculated from manufacturer coverage charts
      // (Greenfiber Sanctuary cellulose: ~21 cu ft/bag at R-19; Owens Corning AttiCat
      // fiberglass: ~55-63 cu ft/bag across R-19-R-60). Not a physical/compressed bag volume.
      const cuFtPerBag = v.type === 'blown' ? 20 : 55;
      const cuFtNeeded = (adj * depth) / 12;
      packages = Math.ceil(cuFtNeeded / cuFtPerBag);
    }
    const cavities = Math.ceil((Math.max(v.length, v.width) * 12) / v.spacing) + 1;

    return {
      packages, area: Math.round(area), depth, cavityR, cavities,
      costLow: area * 0.55, costHigh: area * 1.85,
    };
  },
};
