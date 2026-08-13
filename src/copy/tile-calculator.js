export default {
  resultNote:
    "The tile count assumes you cut from full tiles at the perimeter and cannot reuse most offcuts. Boxes matter more than tiles: tile is sold by the box, dye lots vary between batches, and a box bought later almost never matches. Buy the extra box now.",

  formula: {
    lines: [
      'Area          = length × width',
      'Effective tile = (tile side + grout joint)²',
      'Tiles per sq ft = 144 ÷ effective tile area in sq in',
      'Tiles         = ceil( Area × tiles per sq ft × (1 + waste + diagonal) )',
      'Boxes         = ceil( Tiles ÷ tiles per box )',
      'Thinset bags  = ceil( Area ÷ 95 )   (floor, 1/4 in notch trowel)',
      'Grout         = Area × joint ratio × 0.5 lb',
    ],
    body: [
      "Grout joints are part of the module, not a rounding error. A 12 in tile with a 1/8 in joint occupies 12.125 in of floor, so a hundred square feet takes 98 tiles rather than 100. It is a small correction on small tile and a large one on mosaic, where a 1/4 in joint between 2 in tiles changes the count by more than 20 percent.",
      "The diagonal option adds five percentage points on top of your waste factor because a 45 degree layout produces two cut edges at every wall instead of one, and the triangular offcuts are almost never reusable. Herringbone and chevron behave the same way; treat them as diagonal. Running bond and straight stack are the cheap layouts.",
      "Thinset coverage depends on the notch trowel, which in turn depends on tile size. A 1/4 in square notch covers about 95 sq ft per 50 lb bag on floors; a 1/4 in V-notch for wall tile stretches to about 130. Large-format tile over 15 in needs a 1/2 in notch and drops coverage to around 60, so buy an extra bag if you are setting big plank tile.",
    ],
  },

  example: {
    title: "Worked example: a 12 × 10 ft floor in 12 × 24 in tile",
    steps: [
      ['Area', '12 × 10 = 120 sq ft'],
      ['Effective tile', '(12.125 × 24.125) = 292.5 sq in = 2.03 sq ft'],
      ['Raw tile count', '120 ÷ 2.03 = 59 tiles'],
      ['Waste at 10%', '59 × 1.10 = 65 tiles'],
      ['Boxes at 8 per box', 'ceil(65 ÷ 8) = 9 boxes'],
      ['Thinset', 'ceil(120 ÷ 95) = 2 bags at 50 lb'],
      ['Grout', '120 × 0.5 ≈ 60 lb'],
    ],
    conclusion:
      "Nine boxes covers 72 tiles, which leaves seven spares. That is the right amount to hold back for future repairs — enough for a couple of cracked tiles, not enough to feel wasteful.",
  },

  tables: [
    {
      title: 'Tiles per square foot by size',
      head: ['Tile size', 'With 1/8 in joint', 'With 1/4 in joint'],
      rows: [
        ['3 × 6 in subway', '7.0', '6.4'],
        ['6 × 6 in', '3.87', '3.56'],
        ['12 × 12 in', '0.98', '0.94'],
        ['12 × 24 in', '0.49', '0.47'],
        ['18 × 18 in', '0.44', '0.42'],
        ['24 × 24 in', '0.25', '0.24'],
      ],
    },
    {
      title: 'Waste factor by layout',
      head: ['Layout', 'Recommended waste', 'Why'],
      rows: [
        ['Straight / grid', '10%', 'One cut edge per wall'],
        ['Running bond (offset)', '10–12%', 'Staggered ends need more part tiles'],
        ['Diagonal 45°', '15%', 'Two cut edges per tile at every wall'],
        ['Herringbone / chevron', '15–20%', 'Angled cuts, unusable offcuts'],
        ['Large format over 24 in', '15%', 'A single bad cut costs a whole tile'],
      ],
    },
  ],

  faq: [
    { q: 'How many tiles do I need for a 10 × 10 room?', a: '100 sq ft of floor takes about 98 12 × 12 tiles before waste, or 108 with a 10% allowance. In 12 × 24 tile the same floor takes 49 tiles, 54 with waste.' },
    { q: 'How much extra tile should I buy?', a: '10% for a straight layout, 15% for diagonal or herringbone, and always round up to a whole box. Keep the spares — dye lots shift between production runs and a replacement box a year later will read as a different colour under daylight.' },
    { q: 'Do I include grout joints in the calculation?', a: 'Yes, and this calculator does it automatically. The joint adds to the module size, so wider joints mean fewer tiles. It makes a negligible difference on large-format tile and a substantial one on mosaic.' },
    { q: 'How much thinset do I need?', a: 'Roughly one 50 lb bag per 95 sq ft on floors with a 1/4 in square-notch trowel, or per 130 sq ft on walls with a V-notch. Tile over 15 in needs a larger notch and roughly a third more mortar.' },
    { q: 'How much grout do I need?', a: 'About half a pound per square foot for 12 in tile at a 1/8 in joint. Smaller tile and wider joints raise it sharply — mosaic with 1/4 in joints can approach two pounds per square foot.' },
    { q: 'What size trowel should I use?', a: 'A 1/4 × 1/4 in square notch for tile up to 12 in, a 1/4 × 3/8 in for 12 to 16 in, and a 1/2 × 1/2 in for large format. The rule that matters is coverage: lift a set tile and you want at least 80% of the back contacted, 95% in wet areas.' },
    { q: 'Can I tile over existing tile?', a: 'Sometimes, if the existing tile is well bonded, flat and not over a failing substrate, and if the added height does not create a problem at doors and transitions. Scarify or prime the glaze first. When in doubt, the removal is cheaper than the failure.' },
  ],

  related: ['drywall-calculator', 'baseboard-calculator', 'insulation-calculator', 'wallpaper-calculator'],
  guides: [
    { slug: 'how-many-tiles-do-i-need', title: 'How Many Tiles Do I Need?' },
    { slug: 'tile-waste-factor', title: 'Tile Waste Factor: 10, 15 or 20 Percent?' },
  ],
};
