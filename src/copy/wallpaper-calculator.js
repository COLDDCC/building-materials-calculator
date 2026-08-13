export default {
  resultNote:
    'This is a roll count, not an area estimate. Wallpaper is cut into full-height strips and every strip has to start at the right point in the pattern, so the only correct way to count rolls is to work out how many strips fit in one roll and then divide. Dividing wall area by roll area — which is what most calculators do — will under-order on any paper with a repeat.',

  formula: {
    lines: [
      'Net wall width = 2 × (length + width) − door and window widths',
      'Strip length   = wall height + trim allowance',
      '',
      'Free match:      cut length = strip length',
      'Straight match:  cut length = ceil( strip ÷ repeat ) × repeat',
      'Drop match:      cut length = ceil( strip ÷ (repeat ÷ 2) ) × (repeat ÷ 2)',
      '',
      'Strips per roll = floor( roll length ÷ cut length )',
      'Strips needed   = ceil( net wall width ÷ roll width )',
      'Rolls           = ceil( strips needed ÷ strips per roll )',
    ],
    body: [
      'Everything turns on cut length. To make a patterned strip line up with the one beside it, you cannot cut it at exactly wall height — you have to cut at the next whole repeat above wall height, and throw the remainder away. With a 21 in repeat and a 100 in strip, the cut length is 105 in, and 5 in goes in the bin on every single strip.',
      'A drop match is the awkward case. The pattern shifts half a repeat sideways between adjacent strips, so successive strips start at alternating points and the effective step is half the repeat rather than the whole one. That is why the drop formula divides the repeat by two. It sounds like it should waste more; in practice it often wastes slightly less than a straight match, because the smaller step lands closer to the strip length.',
      'The floor() in strips-per-roll is where the simplified area method breaks down. A roll that holds 3.2 strips holds three strips — the leftover 0.2 is not long enough to reach the ceiling and cannot be used anywhere except above a door. Divide total area by roll area and you silently count that fraction as usable paper. On a large repeat that error compounds across every roll and typically leaves you one or two rolls short, which is the worst possible outcome because dye lots change between print runs.',
      'Windows are not deducted by default here, and that is deliberate. You still need short strips above and below a window, and those strips still have to be cut from the pattern at the correct point, so the paper is consumed whether or not the area is covered. Deduct a window only if it is genuinely floor-to-ceiling.',
    ],
  },

  example: {
    title: 'Worked example: a 14 × 12 ft room, 8 ft ceiling, 21 in straight-match paper',
    steps: [
      ['Perimeter', '2 × (14 + 12) = 52 ft'],
      ['Deduct one door', '52 − 3 = 49 ft net wall width'],
      ['Strip length', '96 in + 4 in trim = 100 in'],
      ['Cut length (straight match)', 'ceil(100 ÷ 21) = 5 repeats → 5 × 21 = 105 in'],
      ['Strips per US single roll', 'floor(324 ÷ 105) = 3 strips'],
      ['Strips needed', 'ceil(49 × 12 ÷ 27) = 22 strips'],
      ['Rolls', 'ceil(22 ÷ 3) = 8 single rolls'],
    ],
    conclusion:
      'Eight single rolls. The area method would have said 49 × 8 = 392 sq ft of wall ÷ 60.75 sq ft per roll = 6.5, rounded to 7 rolls — one roll short, discovered halfway up the last wall, with the original dye lot sold out. That gap is the entire reason this page exists.',
  },

  tables: [
    {
      title: 'Roll sizes by region',
      head: ['Region', 'Roll size', 'Nominal coverage', 'Notes'],
      rows: [
        ['US single roll', '27 in × 27 ft', '≈ 60 sq ft', 'Rarely sold on its own — see below'],
        ['US double roll', '27 in × 54 ft', '≈ 121 sq ft', 'The unit actually sold in American stores'],
        ['UK / EU standard', '53 cm × 10.05 m', '≈ 57 sq ft', 'One roll, one price, no doubling'],
        ['US "European width"', '20.5 in × 33 ft', '≈ 56 sq ft', 'Imported designer papers'],
      ],
      note: 'American wallpaper is priced by the single roll but packaged and shipped as a double. If a US price looks half what you expected, you are looking at a single-roll price for a double-roll bolt.',
    },
    {
      title: 'Match types and what they cost you',
      head: ['Match type', 'How strips align', 'Typical waste'],
      rows: [
        ['Free / random match', 'No alignment needed — texture, grasscloth, plain', '5–10%'],
        ['Straight match', 'Pattern repeats at the same height on every strip', '15–25%'],
        ['Drop / half-drop match', 'Pattern shifts half a repeat between strips', '15–30%'],
      ],
      note: 'The repeat length matters more than the match type. A 4 in repeat wastes almost nothing whichever way it matches; a 25 in repeat wastes heavily either way.',
    },
    {
      title: 'Strips per US single roll (27 ft) by ceiling height and repeat',
      head: ['Ceiling height', 'No repeat', '12 in repeat', '21 in repeat', '25 in repeat'],
      rows: [
        ['8 ft', '3', '3', '3', '3'],
        ['9 ft', '3', '3', '2', '2'],
        ['10 ft', '2', '2', '2', '2'],
        ['12 ft', '2', '2', '2', '1'],
      ],
      note: 'Notice the cliff edges. At 9 ft with a 21 in repeat you lose a whole strip per roll compared with a plain paper — a third of the roll, gone to pattern alignment.',
    },
  ],

  faq: [
    {
      q: 'How do I calculate how much wallpaper I need?',
      a: 'Measure the perimeter of the room and the ceiling height, subtract the width of any doors, and find the pattern repeat on the roll label. Work out how many full strips one roll yields at that repeat, then divide the number of strips the room needs by that figure. Never divide total wall area by roll area — that skips the pattern alignment and under-orders.',
    },
    {
      q: 'What is a pattern repeat?',
      a: 'The vertical distance before the design starts over. It is printed on the roll label, usually in inches in the US and centimetres in the UK. A 0 in repeat means the paper is a random match and can be cut anywhere.',
    },
    {
      q: 'What is the difference between a straight match and a drop match?',
      a: 'On a straight match, the same point in the pattern sits at the same height on every strip, so all strips are cut identically. On a drop match, the pattern shifts down half a repeat on alternate strips, so strips come in two alternating cuts. Drop-match paper is easier to hang than it sounds, but you have to plan cuts in pairs.',
    },
    {
      q: 'Should I deduct windows and doors?',
      a: 'Deduct door widths — you genuinely skip that section of wall. Leave standard windows in, because you still cut and hang short strips above and below them and those strips still consume full pattern repeats. Deduct only floor-to-ceiling glazing.',
    },
    {
      q: 'How much extra wallpaper should I buy?',
      a: 'One spare roll, always, from the same dye lot. Dye lots vary visibly between print runs and a roll bought six months later will not match. The roll also covers future repairs, and unopened rolls are usually returnable.',
    },
    {
      q: 'What is a single roll versus a double roll?',
      a: 'A US single roll is about 27 ft of paper and a double roll is about 54 ft. Manufacturers price by the single roll but package by the double, so you buy in bolts of two. Ordering "eight single rolls" means four bolts.',
    },
    {
      q: 'Does a large pattern repeat really waste that much paper?',
      a: 'Yes, and it is the main driver of your final roll count. A 25 in repeat on a 9 ft ceiling forces a 125 in cut for a 112 in strip — 10% of every strip discarded before you account for anything else, plus the strip you lose per roll from rounding down. Two papers with identical roll sizes can differ by 30% in rolls needed.',
    },
    {
      q: 'How much adhesive do I need?',
      a: 'Around one gallon per 200 sq ft of unpasted paper, so a typical room takes one to two gallons. Prepasted paper needs none, though many hangers still use a light coat of clear primer-sealer on the wall first to make future removal possible.',
    },
    {
      q: 'Can I use this calculator for peel-and-stick wallpaper?',
      a: 'Yes. Peel-and-stick comes in the same strip format and has the same pattern repeats, so the strip-by-strip method applies unchanged. Enter the roll width and length from your specific product, since peel-and-stick sizes vary far more than traditional paper.',
    },
  ],

  related: ['drywall-calculator', 'baseboard-calculator', 'tile-calculator', 'insulation-calculator'],
  guides: [
    { slug: 'how-to-calculate-wallpaper', title: 'How to Calculate Wallpaper: A Step-by-Step Method' },
    { slug: 'wallpaper-pattern-repeat-explained', title: 'Pattern Repeat Explained: Straight, Drop and Free Match' },
    { slug: 'single-vs-double-roll-wallpaper', title: 'Single Roll vs Double Roll: What You Are Actually Buying' },
  ],
};
