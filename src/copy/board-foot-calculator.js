export default {
  resultNote:
    "A board foot is a volume, not an area, which is why a wide thin board and a narrow thick one can price identically. The figure to shop with is the waste-adjusted total: rough lumber loses material at every step from jointing to final dimension, and the yard sells you the rough number.",

  formula: {
    lines: [
      'Board feet per piece = thickness in × width in × length in ÷ 144',
      '                     = thickness in × width in × length ft ÷ 12',
      'Total board feet     = per piece × quantity',
      'Board feet to buy    = Total × (1 + waste)',
      'Cost                 = Board feet to buy × price per board foot',
    ],
    body: [
      "One board foot is 144 cubic inches — a piece 1 in thick, 12 in wide and 12 in long. Every version of the formula is that same volume rearranged, which is why you can divide by 144 with all three dimensions in inches, or by 12 when length is already in feet. Use whichever matches how the board is labelled and you will not transpose a unit.",
      "Hardwood is sold in quarters. 4/4 means one inch thick, 8/4 means two, 5/4 and 6/4 fall between. The quarter refers to the rough thickness off the saw, so 4/4 stock surfaced on two faces arrives at about 13/16 in or 3/4 in — you pay for the full inch and receive less than that. Charge that difference to the project, not to the yard; it is how the trade has always priced.",
      "Any board under one inch thick still counts as one inch for pricing. A 1/2 in resawn board is billed at 4/4. This catches people out on thin stock projects, where the board foot total looks far higher than the volume of wood on the bench.",
      "Waste on furniture work is higher than people expect. Rough lumber comes with wane, checks, cup and twist, and you cut around all of it before you get to a usable face. Fifteen percent is a floor for clear straight stock; twenty-five to thirty is realistic for character-grade material or for a project with many short parts.",
    ],
  },

  example: {
    title: "Worked example: ten 4/4 boards, 6 in wide, 8 ft long, at $8 per board foot",
    steps: [
      ['Per board', '1 × 6 × 8 ÷ 12 = 4 board feet'],
      ['Total', '4 × 10 = 40 board feet'],
      ['With 15% waste', '40 × 1.15 = 46 board feet'],
      ['Cost', '46 × $8 = $368'],
      ['Volume check', '46 ÷ 12 = 3.83 cu ft'],
    ],
    conclusion:
      "Buy 46 board feet, not 40. At the yard that will come as whatever widths are on the rack, since hardwood is sold random width and random length — you rarely get ten identical boards, and the tally sheet is measured board by board at the counter.",
  },

  tables: [
    {
      title: 'Quarter thickness and what you actually get',
      head: ['Nominal', 'Rough thickness', 'Surfaced two sides', 'Typical use'],
      rows: [
        ['4/4', '1 in', '13/16 or 3/4 in', 'Panels, drawer sides, general furniture'],
        ['5/4', '1¼ in', '1⅛ or 1 in', 'Stair treads, thick tabletops'],
        ['6/4', '1½ in', '1⅜ or 1¼ in', 'Chair parts, heavy frames'],
        ['8/4', '2 in', '1¾ in', 'Legs, workbench tops'],
        ['12/4', '3 in', '2¾ in', 'Turning blanks, heavy joinery'],
      ],
    },
    {
      title: 'Board feet in common sizes',
      head: ['Board', '6 ft', '8 ft', '10 ft', '12 ft'],
      rows: [
        ['4/4 × 4 in', '2.0', '2.7', '3.3', '4.0'],
        ['4/4 × 6 in', '3.0', '4.0', '5.0', '6.0'],
        ['4/4 × 8 in', '4.0', '5.3', '6.7', '8.0'],
        ['8/4 × 6 in', '6.0', '8.0', '10.0', '12.0'],
        ['8/4 × 8 in', '8.0', '10.7', '13.3', '16.0'],
      ],
      note: 'Softwood at the big-box store is sold by the linear foot in nominal sizes instead, so a 2×4 is not measured this way. Board feet is a hardwood convention.',
    },
  ],

  faq: [
    { q: 'How do you calculate board feet?', a: 'Multiply thickness in inches by width in inches by length in feet, then divide by 12. A 1 in by 6 in by 8 ft board is 4 board feet. If the length is in inches instead, divide by 144.' },
    { q: 'What does 4/4 mean?', a: 'Four quarters of an inch — one inch of rough thickness. 8/4 is two inches, 5/4 is an inch and a quarter. The fraction always refers to the thickness before surfacing.' },
    { q: 'Is a board foot the same as a linear foot?', a: 'No. A linear foot measures length only, so it means nothing without knowing the width and thickness. A board foot is a fixed volume, which is why hardwood of any random width can be priced consistently.' },
    { q: 'How do I calculate board feet for boards thinner than 1 inch?', a: 'Round up to one inch. Anything under 4/4 is billed as 4/4 at nearly every hardwood dealer, so a half inch board 6 in by 8 ft still tallies as 4 board feet.' },
    { q: 'How much waste should I allow?', a: 'Fifteen percent for clear straight stock and simple parts. Twenty-five to thirty for character-grade lumber, projects with many small pieces, or anywhere you need matched grain across a panel. Buying tight and running short mid-project is expensive, because a second trip rarely produces matching boards.' },
    { q: 'Why is my lumber thinner than I paid for?', a: 'Because you paid for rough thickness and received surfaced. Planing to remove saw marks and flatten the board costs about an eighth of an inch per face. Buy rough and surface it yourself if you need maximum finished thickness.' },
    { q: 'How do I measure random width boards?', a: 'Measure the width at the narrowest point of the usable section and round to the nearest inch — that is how most yards tally. On tapered or waney boards, the average width across the length is the fairer measure, and reputable dealers will use it.' },
  ],

  related: ['stair-calculator', 'baseboard-calculator', 'drywall-calculator', 'tile-calculator'],
  guides: [
    { slug: 'what-is-a-board-foot', title: 'What Is a Board Foot?' },
    { slug: 'lumber-nominal-vs-actual-size', title: 'Nominal vs Actual Lumber Size' },
  ],
};
