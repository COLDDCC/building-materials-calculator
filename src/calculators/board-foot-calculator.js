export default {
  slug: 'board-foot-calculator',
  h1: 'Board Foot Calculator',
  title: 'Board Foot Calculator – Price Hardwood by the Board Foot',
  description:
    'Convert rough lumber dimensions into board feet and price the pile. Handles quarter thickness (4/4, 8/4), multiple pieces and the difference between nominal and actual size.',
  group: 'interior',
  order: 10,
  tagline: 'Board feet and cost for any stack of rough or surfaced lumber.',
  keyword: 'board foot calculator',

  inputs: [
    { id: 'thickness', label: 'Thickness', type: 'select', default: 1,
      options: [
        { value: 0.75, label: '3/4 in (surfaced 4/4)' },
        { value: 1, label: '1 in (4/4 rough)' },
        { value: 1.25, label: '1¼ in (5/4)' },
        { value: 1.5, label: '1½ in (6/4)' },
        { value: 2, label: '2 in (8/4)' },
        { value: 3, label: '3 in (12/4)' },
      ] },
    { id: 'boardWidth', label: 'Width', type: 'number', unit: 'in', default: 6, min: 0.25, step: 0.25 },
    { id: 'boardLength', label: 'Length', type: 'number', unit: 'ft', default: 8, min: 0.25, step: 0.25 },
    { id: 'qty', label: 'Number of boards', type: 'number', unit: 'count', default: 10, min: 1, step: 1 },
    { id: 'price', label: 'Price per board foot', type: 'number', unit: 'usd', default: 8, min: 0, step: 0.25 },
    { id: 'waste', label: 'Waste factor', type: 'slider', unit: 'pct', default: 15, min: 0, max: 40, step: 1,
      help: 'Rough lumber loses material to jointing, planing and defect cutting. 15–30% is normal for furniture work.' },
  ],

  outputs: [
    { id: 'totalBf', label: 'Board feet', primary: true, unit: 'count', decimals: 2 },
    { id: 'perBoard', label: 'Board feet per piece', unit: 'count', decimals: 2 },
    { id: 'withWaste', label: 'Board feet to buy', unit: 'count', decimals: 2 },
    { id: 'totalCost', label: 'Cost at your price', unit: 'usd', decimals: 2 },
    { id: 'linear', label: 'Total linear feet', unit: 'ft' },
    { id: 'cuft', label: 'Volume', unit: 'cuft', decimals: 2 },
  ],

  compute(v) {
    const perBoard = (v.thickness * v.boardWidth * (v.boardLength * 12)) / 144;
    const totalBf = perBoard * v.qty;
    const withWaste = totalBf * (1 + v.waste / 100);
    return {
      perBoard: Math.round(perBoard * 100) / 100,
      totalBf: Math.round(totalBf * 100) / 100,
      withWaste: Math.round(withWaste * 100) / 100,
      totalCost: Math.round(withWaste * v.price * 100) / 100,
      linear: Math.round(v.boardLength * v.qty),
      cuft: Math.round((withWaste / 12) * 100) / 100,
    };
  },
};
