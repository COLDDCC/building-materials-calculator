// 配置驱动：新增计算器 = 新增本目录下一个文件，不改任何组件代码。
// compute(v) 接收英制基准单位：长度 ft、小尺寸 in、面积 sq ft。

// 标称面尺寸 8 in × 16 in（含 3/8 in 灰缝）= 0.8889 sq ft => 每平方英尺 1.125 块
const BLOCKS_PER_SQFT = 1.125;

// 按标称墙厚（in）给出的每块灌芯体积（cu ft）与每袋砂浆可砌块数
// 8 in 标定值取 Quikrete Mason Mix Type S 官方数据表（80 lb 袋 "lays up to 13 standard 8x8x16 blocks"）
// 与行业经验值（约 12 块/袋）的交集，取 12；其余墙厚按同一比例换算，未逐一核实供应商实测值。
const BY_WIDTH = {
  4:  { core: 0.10, blocksPerBag: 24 },
  6:  { core: 0.20, blocksPerBag: 16 },
  8:  { core: 0.28, blocksPerBag: 12 },
  12: { core: 0.45, blocksPerBag: 8 },
};

export default {
  slug: 'concrete-block-calculator',
  h1: 'Concrete Block Calculator',
  title: 'Concrete Block Calculator – How Many Blocks Do You Need?',
  description:
    'Calculate how many concrete blocks (cinder blocks / CMU) your wall needs, plus mortar bags, grout fill and rebar. Uses nominal 8 × 16 in block face, so the count matches what you actually buy.',
  group: 'structural',
  order: 1,
  tagline: 'Enter your wall size to get block count, mortar bags and grout volume.',
  keyword: 'concrete block calculator',

  inputs: [
    { id: 'length', label: 'Wall length', type: 'number', unit: 'ft', default: 20, min: 0, step: 0.5 },
    { id: 'height', label: 'Wall height', type: 'number', unit: 'ft', default: 8, min: 0, step: 0.5 },
    {
      id: 'width', label: 'Block size', type: 'select', default: 8,
      options: [
        { value: 4,  label: '4 × 8 × 16 in' },
        { value: 6,  label: '6 × 8 × 16 in' },
        { value: 8,  label: '8 × 8 × 16 in (standard)' },
        { value: 12, label: '12 × 8 × 16 in' },
      ],
      help: 'Nominal size. A "8 × 8 × 16" block actually measures 7⅝ in — the missing ⅜ in is the mortar joint.',
    },
    { id: 'joint', label: 'Mortar joint', type: 'select', default: 0.375,
      options: [
        { value: 0.375, label: '3/8 in (standard)' },
        { value: 0.5, label: '1/2 in' },
      ],
      help: 'Nominal block sizing already assumes 3/8 in. A 1/2 in joint slightly reduces block count.',
    },
    { id: 'openings', label: 'Door & window area to deduct', type: 'number', unit: 'sqft', default: 0, min: 0, step: 1 },
    { id: 'waste', label: 'Waste factor', type: 'slider', unit: 'pct', default: 5, min: 0, max: 20, step: 1 },
    { id: 'fill', label: 'Fill cores with grout', type: 'toggle', default: false },
    { id: 'rebar', label: 'Include vertical rebar', type: 'toggle', default: false },
  ],

  outputs: [
    { id: 'blocks',  label: 'Blocks needed', primary: true, unit: 'count' },
    { id: 'netArea', label: 'Net wall area', unit: 'sqft' },
    { id: 'courses', label: 'Courses high', unit: 'count' },
    { id: 'bags',    label: 'Mortar (80 lb bags)', unit: 'count' },
    { id: 'sand',    label: 'Masonry sand', unit: 'ton', decimals: 2 },
    { id: 'grout',   label: 'Grout fill', unit: 'cuyd', decimals: 2, when: 'fill' },
    { id: 'rebarLf', label: 'Rebar (#4)', unit: 'ft', when: 'rebar' },
    { id: 'cost', label: 'Estimated material cost', type: 'range', lo: 'costLow', hi: 'costHigh',
      help: 'Assumes $1.80–$3.00 per block, $6–$9 per 80 lb mortar bag, $150–$210 per cu yd of grout.' },
  ],

  compute(v) {
    const spec = BY_WIDTH[v.width] || BY_WIDTH[8];
    // 灰缝加大时，标称面高/宽同步加大，每块占墙面积上升
    const faceSqft = ((8 - 0.375 + v.joint) * (16 - 0.375 + v.joint)) / 144;
    const perSqft = v.joint === 0.375 ? BLOCKS_PER_SQFT : 1 / faceSqft;

    const gross = v.length * v.height;
    const netArea = Math.max(gross - v.openings, 0);
    const raw = netArea * perSqft;
    const blocks = Math.ceil(raw * (1 + v.waste / 100));
    const courses = Math.ceil((v.height * 12) / (8 - 0.375 + v.joint));

    const bags = Math.ceil(blocks / spec.blocksPerBag);
    const sand = Math.round((bags * 0.0125) * 100) / 100; // 每袋砂浆约配 25 lb 砂

    const grout = v.fill ? (blocks * spec.core) / 27 : 0;

    // 竖筋 32 in 一道（隔孔），横筋每 4 ft 一道
    let rebarLf = 0;
    if (v.rebar) {
      const verticals = Math.ceil((v.length * 12) / 32) + 1;
      const horizontals = Math.ceil((v.height * 12) / 48);
      rebarLf = Math.ceil(verticals * (v.height + 2) + horizontals * v.length);
    }

    const costLow = blocks * 1.8 + bags * 6 + grout * 150 + rebarLf * 0.45;
    const costHigh = blocks * 3.0 + bags * 9 + grout * 210 + rebarLf * 0.85;

    return { blocks, netArea: Math.round(netArea), courses, bags, sand, grout, rebarLf, costLow, costHigh };
  },
};
