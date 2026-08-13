const TILES = {
  144: '12 × 12 in', 288: '12 × 24 in', 324: '18 × 18 in',
  576: '24 × 24 in', 144.5: '6 × 24 in plank', 18: '3 × 6 in subway', 36: '6 × 6 in',
};

export default {
  slug: 'tile-calculator',
  h1: 'Tile Calculator',
  title: 'Tile Calculator – How Many Tiles and Boxes Do You Need?',
  description:
    'Calculate how many floor or wall tiles you need, how many boxes to buy, and how much thinset and grout to pick up. Handles diagonal layouts and grout joint width.',
  group: 'interior',
  order: 4,
  tagline: 'Floor or wall, straight or diagonal — get tiles, boxes, thinset and grout.',
  keyword: 'tile calculator',

  inputs: [
    { id: 'length', label: 'Area length', type: 'number', unit: 'ft', default: 12, min: 0, step: 0.5 },
    { id: 'width', label: 'Area width', type: 'number', unit: 'ft', default: 10, min: 0, step: 0.5 },
    { id: 'surface', label: 'Surface', type: 'select', default: 'floor',
      options: [{ value: 'floor', label: 'Floor' }, { value: 'wall', label: 'Wall / backsplash' }] },
    { id: 'tileSize', label: 'Tile size', type: 'select', default: 144,
      options: [
        { value: 18, label: '3 × 6 in subway' },
        { value: 36, label: '6 × 6 in' },
        { value: 144, label: '12 × 12 in' },
        { value: 144.5, label: '6 × 24 in plank' },
        { value: 288, label: '12 × 24 in' },
        { value: 324, label: '18 × 18 in' },
        { value: 576, label: '24 × 24 in' },
      ] },
    { id: 'joint', label: 'Grout joint', type: 'select', default: 0.125,
      options: [
        { value: 0.0625, label: '1/16 in' }, { value: 0.125, label: '1/8 in' },
        { value: 0.1875, label: '3/16 in' }, { value: 0.25, label: '1/4 in' },
      ] },
    { id: 'layout', label: 'Diagonal layout', type: 'toggle', default: false,
      help: 'Diagonal and herringbone layouts cut more tiles at the perimeter. Adds 5% on top of your waste factor.' },
    { id: 'perBox', label: 'Tiles per box', type: 'number', unit: 'count', default: 10, min: 1, step: 1 },
    { id: 'waste', label: 'Waste factor', type: 'slider', unit: 'pct', default: 10, min: 0, max: 25, step: 1 },
  ],

  outputs: [
    { id: 'tiles', label: 'Tiles needed', primary: true, unit: 'count' },
    { id: 'boxes', label: 'Boxes to buy', unit: 'count' },
    { id: 'area', label: 'Surface area', unit: 'sqft' },
    { id: 'thinset', label: 'Thinset (50 lb bags)', unit: 'count' },
    { id: 'grout', label: 'Grout', unit: 'lb' },
    { id: 'spacers', label: 'Spacers', unit: 'count' },
    { id: 'cost', label: 'Estimated material cost', type: 'range', lo: 'costLow', hi: 'costHigh',
      help: 'Assumes $2–$12 per sq ft of tile plus setting materials.' },
  ],

  compute(v) {
    const area = v.length * v.width;
    const tileSqIn = v.tileSize;
    const side = Math.sqrt(tileSqIn);
    const effective = (side + v.joint) * (side + v.joint);
    const perSqft = 144 / effective;
    const extra = v.waste + (v.layout ? 5 : 0);
    const tiles = Math.ceil(area * perSqft * (1 + extra / 100));
    const boxes = Math.ceil(tiles / v.perBox);
    const notchDepth = v.surface === 'floor' ? 95 : 130;
    const thinset = Math.ceil(area / notchDepth);
    const grout = Math.ceil(area * (v.joint / 0.125) * 0.5);
    const spacers = Math.ceil(tiles * 2.2);
    return {
      tiles, boxes, area: Math.round(area), thinset, grout, spacers,
      costLow: area * 2 + thinset * 14 + Math.ceil(grout / 25) * 18,
      costHigh: area * 12 + thinset * 26 + Math.ceil(grout / 25) * 32,
    };
  },
};
