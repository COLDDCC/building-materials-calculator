export default {
  resultNote:
    "Gravel is sold by the ton in most of the US and by the cubic yard in some regions, so both numbers are shown. If you are ordering by phone, give the yardage and let the supplier convert — their density figure for their specific stone beats any generic table.",

  formula: {
    lines: [
      'Area        = length × width      (or π × radius² for circles)',
      'Cubic feet  = Area × (depth ÷ 12) × compaction × (1 + allowance)',
      'Cubic yards = Cubic feet ÷ 27',
      'Tons        = Cubic yards × density',
      '',
      'Densities:  crushed stone 1.4 · pea gravel 1.35 · crusher run 1.5 · river rock 1.35 tons/cu yd',
    ],
    body: [
      "Compaction is the term people leave out and then come up short. Crusher run and crushed stone are delivered loose and lose roughly 20 percent of their volume once a plate compactor has been over them. Order the loose volume that your finished depth requires and you will finish an inch shallow across the whole driveway. Decorative stone that is never compacted does not need the allowance, which is why it is a toggle here rather than a fixed multiplier.",
      "Driveways are built in layers, not in one pour. A typical build is 4 in of crusher run as a base, compacted, then 4 in more, compacted, then a 2 to 3 in top course of clean crushed stone. Run this calculator once per layer with the right material each time — a single 10 in run of one material will give you the volume but not the shopping list.",
      "Density varies more than tables suggest. Wet stone weighs more than dry, angular crushed stone packs tighter than rounded river rock, and limestone and granite differ by several percent. The figures here are working averages for ordering; if the quarry quotes their own tons per yard, use theirs.",
    ],
  },

  example: {
    title: "Worked example: a 40 × 10 ft driveway top course, 4 in of #57 stone",
    steps: [
      ['Area', '40 × 10 = 400 sq ft'],
      ['Depth in feet', '4 ÷ 12 = 0.333 ft'],
      ['Loose volume', '400 × 0.333 = 133 cu ft'],
      ['Compaction at 20%', '133 × 1.2 = 160 cu ft'],
      ['With 5% allowance', '160 × 1.05 = 168 cu ft'],
      ['Cubic yards', '168 ÷ 27 = 6.22 cu yd'],
      ['Tons at 1.4', '6.22 × 1.4 = 8.7 tons'],
    ],
    conclusion:
      "Order nine tons. That is one tandem dump truck load with room to spare, and it is worth confirming the truck can reach the drop point — a tandem needs about 12 ft of clearance width and a fair amount of overhead room to raise the bed.",
  },

  tables: [
    {
      title: 'Gravel types and what they are for',
      head: ['Material', 'Size', 'Tons per cu yd', 'Best use'],
      rows: [
        ['Crusher run / road base', '0 to ¾ in with fines', '1.5', 'Compacted base under driveways and pavers'],
        ['#57 crushed stone', '¾ to 1 in clean', '1.4', 'Driveway top course, drainage, French drains'],
        ['#8 chip / pea size', '⅜ in', '1.4', 'Paver setting bed, walkways'],
        ['Pea gravel', '⅜ in rounded', '1.35', 'Paths, playgrounds, decorative — does not compact'],
        ['River rock', '1 to 3 in rounded', '1.35', 'Dry creek beds, decorative borders'],
        ['#2 / ballast', '2 to 3 in', '1.4', 'Deep base, mud stabilisation, heavy traffic'],
      ],
    },
    {
      title: 'Driveway depth by use',
      head: ['Use', 'Total depth', 'Build-up'],
      rows: [
        ['Footpath', '2–3 in', 'Single layer over fabric'],
        ['Car driveway on firm soil', '6–8 in', '4 in base + 2–4 in top'],
        ['Car driveway on soft soil', '10–12 in', '6 in ballast + 4 in base + 2 in top'],
        ['Trucks / RV parking', '12+ in', 'Ballast, base and top, each compacted'],
      ],
      note: 'Put a woven geotextile fabric under the first layer on anything but well-drained sand. It costs little and is the difference between a driveway that sinks into the subgrade and one that does not.',
    },
  ],

  faq: [
    { q: 'How much does a cubic yard of gravel weigh?', a: 'Between 2,400 and 3,000 lb depending on the stone and how wet it is. Crushed stone averages about 2,800 lb per yard, or 1.4 tons.' },
    { q: 'How many tons of gravel do I need for a driveway?', a: 'A 40 × 10 ft driveway at 4 in deep needs roughly nine tons of crushed stone including compaction. For a full new build at 8 in total depth, roughly double that across two layers.' },
    { q: 'How deep should gravel be for a driveway?', a: 'Six to eight inches total on firm ground, built as a compacted base plus a top course. On soft or clay soil, go to ten or twelve inches and put fabric underneath, or the stone will disappear into the subgrade within a couple of seasons.' },
    { q: 'What is the difference between crusher run and #57 stone?', a: 'Crusher run includes the fine dust from crushing, which lets it lock together and compact into a hard base. #57 is washed clean of fines, so it drains freely but never truly compacts. Base course uses crusher run; drainage and top courses use #57.' },
    { q: 'How much gravel does a dump truck hold?', a: 'A tandem axle dump truck carries about 10 to 14 cubic yards, or 12 to 16 tons. Smaller single-axle trucks carry 5 to 7 yards. Delivery is priced per load, so filling the truck is much cheaper per ton than a part load.' },
    { q: 'Do I need landscape fabric under gravel?', a: 'On paths and decorative areas, yes — it stops the stone migrating into the soil. Under a driveway, use a woven geotextile rather than the light non-woven weed fabric, which will tear under the load in the first year.' },
    { q: 'Can I calculate gravel in bags?', a: 'You can, and the bag figure is shown, but it is rarely practical. A single ton is forty 50 lb bags, so anything bigger than a small path becomes an unreasonable number of bags to carry, open and dispose of.' },
  ],

  related: ['mulch-calculator', 'concrete-block-calculator', 'stair-calculator', 'insulation-calculator'],
  guides: [
    { slug: 'how-much-gravel-do-i-need', title: 'How Much Gravel Do I Need?' },
    { slug: 'gravel-driveway-layers', title: 'Gravel Driveway Layers: Base, Middle and Top' },
  ],
};
