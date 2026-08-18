export default {
  resultNote:
    'The block count above is what you order at the yard. It already includes the mortar joint, because block is sold by nominal size — a wall built with "8-inch" block gets 1.125 blocks for every square foot of face, and nothing you measure on the block itself will give you that number.',

  formula: {
    lines: [
      'Gross wall area = wall length × wall height',
      'Net area       = Gross area − openings',
      'Blocks         = ceil( Net area × 1.125 × (1 + waste) )',
      'Courses        = ceil( wall height in inches ÷ 8 )',
      'Mortar bags    = ceil( Blocks ÷ 12 )        (8 in block, 80 lb bag)',
      'Grout fill     = Blocks × 0.28 cu ft ÷ 27   (8 in block, all cores)',
    ],
    body: [
      'The 1.125 figure is the whole calculation. A standard block is sold as 8 × 8 × 16 in but leaves the mold at 7⅝ × 7⅝ × 15⅝ in. The missing ⅜ in on each face is the mortar joint, and once the wall is laid, each block plus its share of mortar occupies exactly 8 × 16 in of wall — 0.889 sq ft. Divide one by 0.889 and you get 1.125 blocks per square foot.',
      'Measure the block itself and you will get 1.21 blocks per square foot instead, which is roughly 7.5% high. On a 20 × 8 ft wall that is thirteen blocks you paid for and did not lay. This is the single most common error in concrete block estimating, and it is why this calculator uses nominal dimensions throughout. Selecting a 1/2 in joint recalculates the face area rather than leaving 1.125 in place.',
      'Mortar comes out of block count, not area. One 80 lb bag of premixed Type S mortar (per Quikrete’s Mason Mix data sheet) lays about 12 standard 8 in blocks, because the bed and head joints scale with the width of the block face you are buttering. Narrower 4 in block gets roughly 24 blocks per bag; 12 in block drops to about 8. Each bag also needs around 25 lb of masonry sand if you are mixing from Portland rather than buying premixed.',
      'Grout is separate again, and only applies if you are filling cores for structural reasons. A standard 8 in block has about 0.28 cu ft of open core after the webs are accounted for. Fill every core in a 20 × 8 ft wall and you are pouring close to two cubic yards — enough that it changes how you order and how you pour, so the calculator reports it in yards rather than bags.',
    ],
  },

  example: {
    title: 'Worked example: a 20 ft × 8 ft garden wall',
    steps: [
      ['Gross area', '20 ft × 8 ft = 160 sq ft'],
      ['Openings', 'none — net area stays 160 sq ft'],
      ['Raw block count', '160 × 1.125 = 180 blocks'],
      ['Waste at 5%', '180 × 1.05 = 189 blocks'],
      ['Courses', '8 ft = 96 in ÷ 8 in = 12 courses'],
      ['Mortar', '189 ÷ 12 = 16 bags (80 lb)'],
      ['Sand', '16 bags × 25 lb ≈ 0.20 tons'],
    ],
    conclusion:
      'Order 189 blocks and sixteen bags of mortar. Had you measured the actual 15⅝ in block face instead, the same wall would have come out at 203 blocks — fourteen extra blocks and one extra pallet charge for a wall that cannot use them.',
  },

  tables: [
    {
      title: 'Standard CMU sizes: nominal vs actual',
      head: ['Nominal size', 'Actual size', 'Blocks per sq ft', 'Typical use'],
      rows: [
        ['4 × 8 × 16 in', '3⅝ × 7⅝ × 15⅝ in', '1.125', 'Partition walls, veneer backup'],
        ['6 × 8 × 16 in', '5⅝ × 7⅝ × 15⅝ in', '1.125', 'Light retaining, garden walls'],
        ['8 × 8 × 16 in', '7⅝ × 7⅝ × 15⅝ in', '1.125', 'Foundations, load-bearing walls'],
        ['12 × 8 × 16 in', '11⅝ × 7⅝ × 15⅝ in', '1.125', 'Tall walls, heavy load, basements'],
      ],
      note: 'Face dimensions are identical across all four, so blocks per square foot never changes — only wall thickness, mortar volume and grout volume do.',
    },
    {
      title: 'Materials per 100 blocks',
      head: ['Block width', 'Mortar (80 lb bags)', 'Masonry sand', 'Grout, all cores filled'],
      rows: [
        ['4 in', '5 bags', '125 lb', '0.37 cu yd'],
        ['6 in', '7 bags', '175 lb', '0.74 cu yd'],
        ['8 in', '9 bags', '225 lb', '1.04 cu yd'],
        ['12 in', '13 bags', '325 lb', '1.67 cu yd'],
      ],
    },
    {
      title: 'Course height quick reference',
      head: ['Wall height', 'Courses (8 in nominal)', 'Blocks per linear foot of wall'],
      rows: [
        ['2 ft', '3', '2.25'],
        ['4 ft', '6', '4.5'],
        ['6 ft', '9', '6.75'],
        ['8 ft', '12', '9.0'],
        ['10 ft', '15', '11.25'],
      ],
    },
  ],

  faq: [
    {
      q: 'Are cinder blocks and concrete blocks the same thing?',
      a: 'In everyday American usage, yes — people say cinder block, the industry says concrete masonry unit or CMU, and both mean the grey rectangular block on the pallet. Strictly, a true cinder block used coal cinders as aggregate and has not been widely produced in decades. Anything you buy today is a concrete block, and this calculator applies to it either way.',
    },
    {
      q: 'How many concrete blocks do I need per square foot?',
      a: '1.125 blocks per square foot of wall face, for every standard block size from 4 in through 12 in. The face is always nominally 8 × 16 in, so the count is constant; only the wall thickness changes.',
    },
    {
      q: 'Why is my block count different from the yard\'s quote?',
      a: 'Usually one of three things: the yard added a waste factor you did not, they quoted full pallets rather than loose blocks (pallets typically hold 90 to 108 blocks), or they deducted openings you left in. Compare net areas first, then waste, then pallet rounding.',
    },
    {
      q: 'How many blocks are on a pallet?',
      a: 'A pallet of standard 8 in block usually carries 90 blocks, though 96 and 108 are both common depending on the manufacturer. Ordering in whole pallets is normally cheaper than loose block, so round up to the pallet once you are within about ten blocks of one.',
    },
    {
      q: 'Do I need to fill the cores with grout?',
      a: 'Only where the design calls for it. Freestanding garden walls under about 4 ft usually do not. Retaining walls, walls carrying a load above, and anything with vertical rebar do — the grout is what bonds the steel to the masonry. Local code and your engineer decide this, not the calculator.',
    },
    {
      q: 'How much mortar does one bag of mix lay?',
      a: 'Roughly 12 standard 8 in blocks per 80 lb bag of premixed Type S mortar with a 3/8 in joint. That drops if your joints run thick or your blocks are wider, and rises for narrow partition block. Buy one spare bag on any job over about 100 blocks — running short mid-course is worse than having one left over.',
    },
    {
      q: 'What size footing does a block wall need?',
      a: 'A common rule of thumb is a footing twice the width of the wall and at least as deep as the wall is thick, below the local frost line. For an 8 in wall that means roughly a 16 in wide, 8 in deep footing. Frost depth varies enormously by state, so check your local code before you dig.',
    },
    {
      q: 'How many blocks can one person lay in a day?',
      a: 'An experienced mason lays 90 to 150 standard blocks in a day on straightforward work. A capable DIYer working alone should plan on 50 to 70, less on the first day and less again on any course with openings or rebar.',
    },
  ],

  related: ['gravel-calculator', 'mulch-calculator', 'insulation-calculator', 'stair-calculator'],
  guides: [
    { slug: 'how-to-calculate-concrete-blocks-needed', title: 'How to Calculate Concrete Blocks Needed' },
    { slug: 'cinder-block-vs-concrete-block', title: 'Cinder Block vs Concrete Block: What Is the Difference?' },
    { slug: 'concrete-block-wall-cost', title: 'What Does a Concrete Block Wall Cost?' },
  ],
};
