export default {
  slug: 'mulch-calculator',
  h1: 'Mulch Calculator',
  title: 'Mulch Calculator – Cubic Yards and Bags You Need',
  description:
    'Calculate mulch by cubic yards or 2 cu ft bags for rectangular, circular or irregular beds, at any depth. Shows the bag-versus-bulk break-even and the weight your vehicle has to carry.',
  group: 'landscaping',
  order: 7,
  tagline: 'Beds of any shape, any depth — yards, bags and delivery weight.',
  keyword: 'mulch calculator',

  inputs: [
    { id: 'shape', label: 'Bed shape', type: 'select', default: 'rect',
      options: [
        { value: 'rect', label: 'Rectangle' },
        { value: 'circle', label: 'Circle (use length as diameter)' },
        { value: 'triangle', label: 'Triangle' },
      ] },
    { id: 'length', label: 'Length / diameter', type: 'number', unit: 'ft', default: 20, min: 0, step: 0.5 },
    { id: 'width', label: 'Width', type: 'number', unit: 'ft', default: 8, min: 0, step: 0.5 },
    { id: 'depth', label: 'Mulch depth', type: 'number', unit: 'in', default: 3, min: 0.5, step: 0.5,
      help: '2–3 in for annual top-up, 3–4 in for a new bed. Over 4 in can suffocate roots.' },
    { id: 'material', label: 'Material', type: 'select', default: 'bark',
      options: [
        { value: 'bark', label: 'Shredded bark / hardwood' },
        { value: 'chips', label: 'Wood chips' },
        { value: 'rubber', label: 'Rubber mulch' },
        { value: 'compost', label: 'Compost' },
      ] },
    { id: 'bagSize', label: 'Bag size', type: 'select', default: 2,
      options: [{ value: 1.5, label: '1.5 cu ft' }, { value: 2, label: '2 cu ft' }, { value: 3, label: '3 cu ft' }] },
    { id: 'waste', label: 'Extra allowance', type: 'slider', unit: 'pct', default: 5, min: 0, max: 20, step: 1 },
  ],

  outputs: [
    { id: 'yards', label: 'Cubic yards needed', primary: true, unit: 'cuyd', decimals: 2 },
    { id: 'cuft', label: 'Cubic feet', unit: 'cuft' },
    { id: 'bags', label: 'Bags to buy', unit: 'count' },
    { id: 'area', label: 'Bed area', unit: 'sqft' },
    { id: 'weight', label: 'Approximate weight', unit: 'lb' },
    { id: 'trips', label: 'Pickup truck loads', unit: 'count', help: 'Assumes 2 cu yd per full-size pickup bed.' },
    { id: 'cost', label: 'Estimated material cost', type: 'range', lo: 'costLow', hi: 'costHigh',
      help: 'Bulk runs $30–$60 per cu yd delivered; bags run $3.50–$6 each.' },
  ],

  compute(v) {
    let area;
    if (v.shape === 'circle') area = Math.PI * Math.pow(v.length / 2, 2);
    else if (v.shape === 'triangle') area = (v.length * v.width) / 2;
    else area = v.length * v.width;

    const cuftRaw = (area * (v.depth / 12)) * (1 + v.waste / 100);
    const yards = Math.round((cuftRaw / 27) * 100) / 100;
    const bags = Math.ceil(cuftRaw / v.bagSize);
    const density = { bark: 500, chips: 450, rubber: 700, compost: 800 }[v.material];
    const weight = Math.round((cuftRaw / 27) * density);
    const trips = Math.ceil(yards / 2);
    return {
      yards, cuft: Math.ceil(cuftRaw), bags, area: Math.round(area), weight, trips,
      costLow: Math.min(yards * 30, bags * 3.5), costHigh: Math.max(yards * 60, bags * 6),
    };
  },
};
