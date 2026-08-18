export default {
  slug: 'baseboard-calculator',
  h1: 'Baseboard & Trim Calculator',
  title: 'Baseboard Calculator – Linear Feet and Pieces You Need',
  description:
    'Work out the linear feet of baseboard, casing, shoe moulding or crown a room needs, how many stock lengths to buy, and how much caulk, nails and paint go with it.',
  group: 'interior',
  order: 5,
  tagline: 'Linear feet, stock pieces, caulk and nails for any room.',
  keyword: 'baseboard calculator',

  inputs: [
    { id: 'length', label: 'Room length', type: 'number', unit: 'ft', default: 14, min: 0, step: 0.5 },
    { id: 'width', label: 'Room width', type: 'number', unit: 'ft', default: 12, min: 0, step: 0.5 },
    { id: 'doors', label: 'Doorways', type: 'number', unit: 'count', default: 1, min: 0, step: 1,
      help: 'Each doorway removes 3 ft of baseboard run.' },
    { id: 'openings', label: 'Other openings', type: 'number', unit: 'ft', default: 0, min: 0, step: 0.5,
      help: 'Total width of cased openings, fireplaces or built-ins, in feet.' },
    { id: 'stock', label: 'Stock length', type: 'select', default: 16,
      options: [
        { value: 8, label: '8 ft' }, { value: 12, label: '12 ft' },
        { value: 14, label: '14 ft' }, { value: 16, label: '16 ft' },
      ] },
    { id: 'shoe', label: 'Add shoe moulding', type: 'toggle', default: false },
    { id: 'crown', label: 'Add crown moulding', type: 'toggle', default: false },
    { id: 'waste', label: 'Waste factor', type: 'slider', unit: 'pct', default: 10, min: 0, max: 20, step: 1 },
  ],

  outputs: [
    { id: 'pieces', label: 'Stock lengths to buy', primary: true, unit: 'count' },
    { id: 'linear', label: 'Baseboard run', unit: 'ft' },
    { id: 'shoeLf', label: 'Shoe moulding', unit: 'ft', when: 'shoe' },
    { id: 'crownLf', label: 'Crown moulding', unit: 'ft', when: 'crown' },
    { id: 'corners', label: 'Inside / outside corners', unit: 'count' },
    { id: 'caulk', label: 'Caulk tubes', unit: 'count' },
    { id: 'nails', label: 'Finish nails (16 ga)', unit: 'count' },
    { id: 'cost', label: 'Estimated material cost', type: 'range', lo: 'costLow', hi: 'costHigh',
      help: 'Assumes $1.20–$4.50 per linear foot depending on profile and species.' },
  ],

  compute(v) {
    const perimeter = 2 * (v.length + v.width);
    const linear = Math.max(perimeter - v.doors * 3 - v.openings, 0);
    const adj = linear * (1 + v.waste / 100);
    const pieces = Math.ceil(adj / v.stock);
    const shoeLf = v.shoe ? Math.ceil(adj) : 0;
    const crownLf = v.crown ? Math.ceil(perimeter * (1 + v.waste / 100)) : 0;
    const corners = 4 + v.doors * 2;
    const totalLf = adj + shoeLf + crownLf;
    // A 10.1 oz tube runs ~100-119 linear ft at the 1/8 in bead standard for a baseboard-to-wall seam.
    const caulk = Math.ceil(totalLf / 100);
    const nails = Math.ceil(totalLf * 1.5);
    return {
      pieces, linear: Math.round(linear), shoeLf, crownLf, corners, caulk, nails,
      costLow: totalLf * 1.2 + caulk * 4,
      costHigh: totalLf * 4.5 + caulk * 9,
    };
  },
};
