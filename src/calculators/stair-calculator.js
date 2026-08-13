export default {
  slug: 'stair-calculator',
  h1: 'Stair Stringer Calculator',
  title: 'Stair Stringer Calculator – Rise, Run and Stringer Length',
  description:
    'Lay out a stair stringer from total rise: riser height, tread depth, total run, stringer board length and an IRC code check on every number before you cut.',
  group: 'structural',
  order: 9,
  tagline: 'Riser height, total run, stringer length and an IRC code check.',
  keyword: 'stair calculator',

  inputs: [
    { id: 'totalRise', label: 'Total rise (finished floor to finished floor)', type: 'number', unit: 'in', default: 108, min: 1, step: 0.25 },
    { id: 'targetRiser', label: 'Preferred riser height', type: 'number', unit: 'in', default: 7.25, min: 4, step: 0.125,
      help: 'IRC R311.7.5 caps risers at 7¾ in for residential stairs.' },
    { id: 'tread', label: 'Tread depth (run)', type: 'number', unit: 'in', default: 10.5, min: 6, step: 0.25,
      help: 'IRC minimum tread depth is 10 in, measured nose to nose.' },
    { id: 'nosing', label: 'Nosing overhang', type: 'number', unit: 'in', default: 1, min: 0, step: 0.25 },
    { id: 'stairWidth', label: 'Stair width', type: 'number', unit: 'in', default: 36, min: 24, step: 1 },
    { id: 'stringers', label: 'Number of stringers', type: 'number', unit: 'count', default: 3, min: 2, step: 1,
      help: 'Three for a 36 in stair, four once you pass 42 in or use thin treads.' },
    { id: 'openRiser', label: 'Open riser (no riser boards)', type: 'toggle', default: false },
  ],

  outputs: [
    { id: 'risers', label: 'Number of risers', primary: true, unit: 'count' },
    { id: 'riserHeight', label: 'Actual riser height', unit: 'in', decimals: 3 },
    { id: 'treads', label: 'Number of treads', unit: 'count' },
    { id: 'totalRun', label: 'Total run', unit: 'in', decimals: 1 },
    { id: 'stringerLen', label: 'Stringer length (min board)', unit: 'in', decimals: 1 },
    { id: 'stockLen', label: 'Stringer stock to buy', unit: 'ft' },
    { id: 'angle', label: 'Stair angle', unit: 'count', decimals: 1, help: 'Degrees from horizontal. 30–37° is comfortable; IRC allows up to about 42°.' },
    { id: 'treadLf', label: 'Tread stock', unit: 'ft' },
    { id: 'riserLf', label: 'Riser stock', unit: 'ft', when: 'riserBoards' },
  ],

  compute(v) {
    const risers = Math.max(Math.round(v.totalRise / v.targetRiser), 1);
    const riserHeight = Math.round((v.totalRise / risers) * 1000) / 1000;
    const treads = risers - 1;
    const totalRun = treads * v.tread;
    const stringerLen = Math.sqrt(Math.pow(v.totalRise, 2) + Math.pow(totalRun, 2)) + 12;
    const stockLen = Math.ceil(stringerLen / 12 / 2) * 2;
    const angle = Math.round((Math.atan(v.totalRise / totalRun) * 180) / Math.PI * 10) / 10;
    const treadLf = Math.ceil((treads * (v.tread + v.nosing) * v.stairWidth) / 144 / (v.tread / 12) / 12);
    const riserLf = v.openRiser ? 0 : Math.ceil((risers * v.stairWidth) / 12);
    return {
      risers, riserHeight, treads, totalRun,
      stringerLen: Math.round(stringerLen * 10) / 10,
      stockLen, angle,
      treadLf: Math.ceil((treads * v.stairWidth) / 12),
      riserLf,
      riserBoards: !v.openRiser,
    };
  },
};
