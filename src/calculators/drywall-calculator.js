export default {
  slug: 'drywall-calculator',
  h1: 'Drywall Calculator',
  title: 'Drywall Calculator – How Many Sheets Do You Need?',
  description:
    'Work out how many drywall sheets a room needs, plus joint compound, tape and screws. Handles ceilings, door and window deductions, 4×8 / 4×10 / 4×12 sheets and your own waste factor.',
  group: 'interior',
  order: 2,
  tagline: 'Enter your room size to get sheet count, compound, tape and screws.',
  keyword: 'drywall calculator',

  inputs: [
    { id: 'length', label: 'Room length', type: 'number', unit: 'ft', default: 14, min: 0, step: 0.5 },
    { id: 'width', label: 'Room width', type: 'number', unit: 'ft', default: 12, min: 0, step: 0.5 },
    { id: 'height', label: 'Wall height', type: 'number', unit: 'ft', default: 8, min: 0, step: 0.5 },
    { id: 'ceiling', label: 'Include ceiling', type: 'toggle', default: false },
    { id: 'doors', label: 'Number of doors', type: 'number', unit: 'count', default: 1, min: 0, step: 1,
      help: 'Each door deducts 21 sq ft.' },
    { id: 'windows', label: 'Number of windows', type: 'number', unit: 'count', default: 1, min: 0, step: 1,
      help: 'Each window deducts 12 sq ft.' },
    {
      id: 'sheet', label: 'Sheet size', type: 'select', default: 32,
      options: [
        { value: 32, label: '4 × 8 ft (32 sq ft)' },
        { value: 40, label: '4 × 10 ft (40 sq ft)' },
        { value: 48, label: '4 × 12 ft (48 sq ft)' },
      ],
    },
    { id: 'waste', label: 'Waste factor', type: 'slider', unit: 'pct', default: 10, min: 0, max: 20, step: 1 },
  ],

  outputs: [
    { id: 'sheets', label: 'Sheets needed', primary: true, unit: 'count' },
    { id: 'area', label: 'Total drywall area', unit: 'sqft' },
    { id: 'compound', label: 'Joint compound', unit: 'lb' },
    { id: 'tape', label: 'Drywall tape', unit: 'ft' },
    { id: 'screws', label: 'Screws', unit: 'count' },
    { id: 'cost', label: 'Estimated material cost', type: 'range', lo: 'costLow', hi: 'costHigh',
      help: 'Assumes $12–$20 per sheet plus compound, tape and fasteners.' },
  ],

  compute(v) {
    const wall = 2 * (v.length + v.width) * v.height;
    const ceiling = v.ceiling ? v.length * v.width : 0;
    const deduct = v.doors * 21 + v.windows * 12;
    const net = Math.max(wall + ceiling - deduct, 0);
    const adj = net * (1 + v.waste / 100);
    const sheets = Math.ceil(adj / v.sheet);

    // 每张板螺丝数随板面积线性变化（16 in o.c. 龙骨，4×8 板约 32 颗）
    const screws = Math.ceil(sheets * v.sheet);

    const materialLow = sheets * 12;
    const materialHigh = sheets * 20;
    const compound = Math.ceil((adj / 100) * 5);
    const tape = Math.ceil(adj * 0.6);

    return {
      sheets,
      area: Math.round(net),
      compound,
      tape,
      screws,
      costLow: materialLow + compound * 0.55 + tape * 0.03,
      costHigh: materialHigh + compound * 0.9 + tape * 0.06,
    };
  },
};
