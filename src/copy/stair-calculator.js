export default {
  resultNote:
    "Riser height is the number to check first. Every riser in a flight must be within 3/8 in of every other one, which means you divide the total rise into equal parts rather than picking a round number and letting the last step absorb the difference. The uneven last step is the single most common cause of a failed stair inspection.",

  formula: {
    lines: [
      'Risers        = round( total rise ÷ preferred riser height )',
      'Riser height  = total rise ÷ Risers',
      'Treads        = Risers − 1',
      'Total run     = Treads × tread depth',
      'Stringer      = √( total rise² + total run² ) + 12 in for cuts',
      'Stair angle   = atan( total rise ÷ total run )',
      '',
      'IRC check: riser ≤ 7.75 in · tread ≥ 10 in · rise + run between 17 and 18 in',
    ],
    body: [
      "Total rise means finished floor to finished floor, and the word finished is doing real work. If the lower floor is getting 3/4 in of hardwood after the stair goes in, and you measured to the subfloor, every riser in the flight is wrong. Measure to where the surfaces will be, not where they are.",
      "There is always one more riser than tread, because the top tread is the upper floor itself. That single fact is where most homemade layouts go wrong: people cut treads to match risers and end up with a step at the top that is a full riser too high or a stringer that runs past the landing.",
      "The comfort rules are older than the code and worth respecting. Rise plus run should land between 17 and 18 in, and twice the rise plus the run should land near 25 in. A 7 in riser with a 11 in tread satisfies both and feels effortless. A 7.75 in riser with a 10 in tread is legal and noticeably steeper underfoot — fine for a basement, tiring on a main stair.",
      "Stringer length from the Pythagorean result is the diagonal, not the board you buy. Add at least 12 in for the cuts at top and bottom, then round up to a stock length. A 2×12 is the minimum stock for a cut stringer, because after the notches are cut you must leave at least 5 in of solid material behind them or the stringer loses its strength.",
    ],
  },

  example: {
    title: "Worked example: 108 in total rise, 10.5 in treads",
    steps: [
      ['Trial riser count', '108 ÷ 7.25 = 14.9 → 15 risers'],
      ['Actual riser height', '108 ÷ 15 = 7.2 in'],
      ['Treads', '15 − 1 = 14'],
      ['Total run', '14 × 10.5 = 147 in = 12 ft 3 in'],
      ['Stringer diagonal', '√(108² + 147²) = 182.4 in'],
      ['Stock to buy', '182.4 + 12 = 194.4 in → 18 ft'],
      ['Angle', 'atan(108 ÷ 147) = 36.3°'],
      ['Code check', 'Riser 7.2 ≤ 7.75 ✓ · Tread 10.5 ≥ 10 ✓ · Rise+run 17.7 ✓'],
    ],
    conclusion:
      "Fifteen risers at 7.2 in, fourteen treads, and 12 ft 3 in of floor space consumed. That run length is the number that surprises people — a standard flight eats over twelve feet of the room below, and there is no way to shorten it without steepening the stair.",
  },

  tables: [
    {
      title: 'IRC R311.7 residential stair limits',
      head: ['Dimension', 'Limit', 'Note'],
      rows: [
        ['Maximum riser height', '7¾ in', 'Measured vertically nosing to nosing'],
        ['Minimum tread depth', '10 in', 'Nosing to nosing, not the board width'],
        ['Maximum variation in a flight', '⅜ in', 'Between the largest and smallest riser'],
        ['Minimum stair width', '36 in', 'Above the handrail height'],
        ['Minimum headroom', '6 ft 8 in', 'Measured vertically from the nosing line'],
        ['Nosing projection', '¾ to 1¼ in', 'Required where treads are under 11 in'],
        ['Handrail height', '34 to 38 in', 'Above the nosing line'],
      ],
      note: 'The IRC is the model code. Your local jurisdiction may amend any of these, and some cities are stricter on riser height. Confirm before cutting.',
    },
    {
      title: 'Common total rises and the layouts that fit',
      head: ['Total rise', 'Risers', 'Riser height', 'Total run at 10½ in'],
      rows: [
        ['96 in (8 ft)', '14', '6.86 in', '136.5 in'],
        ['104 in', '14', '7.43 in', '136.5 in'],
        ['108 in (9 ft)', '15', '7.20 in', '147 in'],
        ['112 in', '15', '7.47 in', '147 in'],
        ['120 in (10 ft)', '17', '7.06 in', '168 in'],
        ['144 in (12 ft)', '20', '7.20 in', '199.5 in'],
      ],
    },
  ],

  faq: [
    { q: 'How do I calculate stair stringers?', a: 'Divide the total finished rise by your preferred riser height and round to a whole number of risers. Divide the total rise by that count for the actual riser height, subtract one for the tread count, and multiply treads by tread depth for the total run. The stringer is the hypotenuse of rise and run.' },
    { q: 'Why is there one more riser than tread?', a: 'Because the top tread is the floor you are stepping onto. A flight with 15 risers lands on the upper floor after the fifteenth, so only 14 tread boards get cut.' },
    { q: 'What is the maximum riser height?', a: 'Seven and three quarter inches under the IRC for residential stairs, and all risers in a flight must be within three eighths of an inch of each other. Commercial stairs under the IBC are limited to seven inches.' },
    { q: 'What size lumber for stair stringers?', a: 'A 2×12 minimum for cut stringers. After notching, the code requires at least 5 in of uncut material behind the cuts, and a 2×10 does not leave enough. Space stringers at 16 in on center, or 12 in if the treads are thin.' },
    { q: 'How much floor space does a staircase need?', a: 'More than people plan for. A standard 9 ft floor-to-floor flight at 10½ in treads runs 12 ft 3 in horizontally, plus landing space at both ends. Shortening the run means steepening the stair, and the code caps how far you can go.' },
    { q: 'What is a comfortable stair angle?', a: '30 to 37 degrees. Below 30 the steps feel stretched and people trip going up; above 37 the stair feels steep and going down becomes the problem. The IRC limits work out to about 42 degrees at the extreme.' },
    { q: 'Do I need to account for tread thickness?', a: 'Yes, at the bottom of the stringer. Cut the bottom riser shorter by the thickness of the tread material, or the first step will be one tread thickness taller than all the others. This is the classic stringer mistake and it fails inspection every time.' },
  ],

  related: ['board-foot-calculator', 'concrete-block-calculator', 'gravel-calculator', 'mulch-calculator'],
  guides: [
    { slug: 'how-to-lay-out-stair-stringers', title: 'How to Lay Out Stair Stringers' },
    { slug: 'stair-code-requirements', title: 'Stair Code Requirements: Rise, Run and Headroom' },
  ],
};
