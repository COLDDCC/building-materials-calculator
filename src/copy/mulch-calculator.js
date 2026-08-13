export default {
  resultNote:
    "Cubic yards is the number to give a bulk supplier; bags is the number for the store. The break-even sits around two cubic yards — below that, bags usually win once you count the delivery fee; above it, bulk is dramatically cheaper and faster to spread.",

  formula: {
    lines: [
      'Rectangle: Area = length × width',
      'Circle:    Area = π × (diameter ÷ 2)²',
      'Triangle:  Area = (base × height) ÷ 2',
      '',
      'Cubic feet  = Area × (depth in inches ÷ 12) × (1 + allowance)',
      'Cubic yards = Cubic feet ÷ 27',
      'Bags        = ceil( Cubic feet ÷ bag size )',
      'Weight      = Cubic yards × material density',
    ],
    body: [
      "The only conversion that matters is 27. A cubic yard is 3 ft in every direction, so it is 27 cubic feet, and at the standard 3 in depth one yard covers 108 square feet. Memorise that pair of numbers and you can size any bed in your head: divide the square footage by 108 and you have your yards.",
      "Depth is where people go wrong in both directions. Under 2 in and mulch does not suppress weeds or hold moisture, so the job fails at its actual purpose. Over 4 in and you create a barrier that sheds light rain, stays wet underneath and encourages roots to grow up into the mulch layer. Three inches is the working answer for almost every bed, and existing mulch counts toward that depth — top up to 3 in, do not add 3 in.",
      "For irregular beds, break the shape into rectangles and circles and add them. It sounds crude and it is more accurate than any curve formula you will apply correctly in a driveway. Overestimating slightly is cheap; a second delivery is not.",
    ],
  },

  example: {
    title: "Worked example: a 20 × 8 ft bed at 3 in depth",
    steps: [
      ['Area', '20 × 8 = 160 sq ft'],
      ['Depth in feet', '3 ÷ 12 = 0.25 ft'],
      ['Volume', '160 × 0.25 = 40 cu ft'],
      ['With 5% allowance', '40 × 1.05 = 42 cu ft'],
      ['Cubic yards', '42 ÷ 27 = 1.56 cu yd'],
      ['Bags at 2 cu ft', 'ceil(42 ÷ 2) = 21 bags'],
      ['Weight', '1.56 × 500 lb ≈ 780 lb'],
    ],
    conclusion:
      "At 21 bags versus 1.5 yards this is right on the break-even. Bags win if you are hauling in a sedan and spreading over a weekend; bulk wins if you have anywhere to dump it, because 21 bags is 21 bags to open, empty and dispose of.",
  },

  tables: [
    {
      title: 'Coverage per cubic yard by depth',
      head: ['Depth', 'Coverage per cu yd', 'Coverage per 2 cu ft bag'],
      rows: [
        ['1 in', '324 sq ft', '24 sq ft'],
        ['2 in', '162 sq ft', '12 sq ft'],
        ['3 in', '108 sq ft', '8 sq ft'],
        ['4 in', '81 sq ft', '6 sq ft'],
        ['6 in', '54 sq ft', '4 sq ft'],
      ],
    },
    {
      title: 'Mulch types compared',
      head: ['Material', 'Weight per cu yd', 'Lifespan', 'Notes'],
      rows: [
        ['Shredded hardwood', '≈ 500 lb', '1–2 years', 'Knits together, stays put on slopes'],
        ['Wood chips', '≈ 450 lb', '2–3 years', 'Coarse, best for paths and around trees'],
        ['Pine bark nuggets', '≈ 400 lb', '2–4 years', 'Floats in heavy rain'],
        ['Rubber mulch', '≈ 700 lb', '10+ years', 'Playgrounds; does not feed soil'],
        ['Compost', '≈ 800 lb', 'Season', 'A soil amendment, not really a mulch'],
      ],
      note: 'Weights are for dry material. Wet mulch can weigh half again as much, which matters if you are loading a half-ton pickup — two yards of soaked hardwood is close to the payload limit.',
    },
  ],

  faq: [
    { q: 'How many bags of mulch are in a cubic yard?', a: 'Thirteen and a half 2 cu ft bags, or eighteen 1.5 cu ft bags. Most people round to 14 bags per yard.' },
    { q: 'How deep should mulch be?', a: 'Three inches for established beds, two for annual top-ups over existing mulch, and no more than four anywhere. Keep it pulled back from trunks and stems — mulch piled against bark holds moisture there and rots it.' },
    { q: 'How much does a yard of mulch cover?', a: '108 sq ft at 3 in deep, 162 sq ft at 2 in, 81 sq ft at 4 in. Divide your bed area by the right figure and round up.' },
    { q: 'Will a yard of mulch fit in my pickup?', a: 'A full-size pickup bed holds two to three cubic yards level with the rails, but weight limits you first. Two yards of hardwood is around 1,000 lb dry and considerably more wet — safe for a half-ton, at the edge for a small truck.' },
    { q: 'Is bulk mulch cheaper than bags?', a: 'Per yard, substantially — often less than half. The delivery fee is what moves the break-even, so bulk usually wins above about two yards and bags win below it. If you can collect it yourself, bulk wins almost immediately.' },
    { q: 'Should I remove old mulch first?', a: 'Usually not. Old mulch breaks down into the soil, which is part of the point. Rake it to break up any crust, then top up to depth. Remove it only if it has matted into a water-shedding layer or shows persistent fungal problems.' },
    { q: 'When is the best time to mulch?', a: 'Mid to late spring, once the soil has warmed. Mulching too early over cold soil keeps it cold and delays growth. A second light top-up in autumn helps insulate roots in cold climates.' },
  ],

  related: ['gravel-calculator', 'concrete-block-calculator', 'insulation-calculator', 'stair-calculator'],
  guides: [
    { slug: 'how-much-mulch-do-i-need', title: 'How Much Mulch Do I Need?' },
    { slug: 'bulk-vs-bagged-mulch', title: 'Bulk vs Bagged Mulch: Where the Break-Even Sits' },
  ],
};
