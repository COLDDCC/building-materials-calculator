export default {
  slug: 'gravel-calculator',
  h1: 'Gravel Calculator',
  title: 'Gravel Calculator – Tons and Cubic Yards for Any Area',
  description:
    'Calculate gravel by the ton or cubic yard for driveways, paths and drainage. Covers crushed stone, pea gravel, road base and river rock, each with its own compacted density.',
  group: 'landscaping',
  order: 8,
  tagline: 'Driveways, paths and drainage — tons, yards and truckloads.',
  keyword: 'gravel calculator',

  inputs: [
    { id: 'shape', label: 'Area shape', type: 'select', default: 'rect',
      options: [
        { value: 'rect', label: 'Rectangle' },
        { value: 'circle', label: 'Circle (use length as diameter)' },
      ] },
    { id: 'length', label: 'Length / diameter', type: 'number', unit: 'ft', default: 40, min: 0, step: 1 },
    { id: 'width', label: 'Width', type: 'number', unit: 'ft', default: 10, min: 0, step: 0.5 },
    { id: 'depth', label: 'Depth', type: 'number', unit: 'in', default: 4, min: 0.5, step: 0.5,
      help: '2–3 in for a path, 4 in per layer for a driveway, 6+ in for heavy vehicles.' },
    { id: 'material', label: 'Material', type: 'select', default: 'crushed',
      options: [
        { value: 'crushed', label: 'Crushed stone (#57)' },
        { value: 'pea', label: 'Pea gravel' },
        { value: 'base', label: 'Crusher run / road base' },
        { value: 'river', label: 'River rock' },
      ] },
    { id: 'compaction', label: 'Add compaction allowance', type: 'toggle', default: true,
      help: 'Crusher run compacts about 20% under a plate compactor. Loose decorative stone does not.' },
    { id: 'waste', label: 'Extra allowance', type: 'slider', unit: 'pct', default: 5, min: 0, max: 20, step: 1 },
  ],

  outputs: [
    { id: 'tons', label: 'Tons needed', primary: true, unit: 'ton', decimals: 2 },
    { id: 'yards', label: 'Cubic yards', unit: 'cuyd', decimals: 2 },
    { id: 'area', label: 'Coverage area', unit: 'sqft' },
    { id: 'bags', label: '50 lb bags (small jobs)', unit: 'count' },
    { id: 'trips', label: 'Dump truck loads', unit: 'count', help: 'Assumes 10 cu yd per tandem dump truck.' },
    { id: 'cost', label: 'Estimated material cost', type: 'range', lo: 'costLow', hi: 'costHigh',
      help: 'Assumes $25–$70 per ton delivered. River rock and decorative stone sit at the top of that range.' },
  ],

  compute(v) {
    const area = v.shape === 'circle' ? Math.PI * Math.pow(v.length / 2, 2) : v.length * v.width;
    const compactionFactor = v.compaction && (v.material === 'base' || v.material === 'crushed') ? 1.2 : 1;
    const cuft = area * (v.depth / 12) * compactionFactor * (1 + v.waste / 100);
    const yards = Math.round((cuft / 27) * 100) / 100;
    const density = { crushed: 1.4, pea: 1.35, base: 1.5, river: 1.35 }[v.material];
    const tons = Math.round(yards * density * 100) / 100;
    const bags = Math.ceil((tons * 2000) / 50);
    const trips = Math.ceil(yards / 10);
    const priceLow = { crushed: 30, pea: 35, base: 25, river: 55 }[v.material];
    const priceHigh = { crushed: 55, pea: 65, base: 45, river: 110 }[v.material];
    return {
      tons, yards, area: Math.round(area), bags, trips,
      costLow: tons * priceLow, costHigh: tons * priceHigh,
    };
  },
};
