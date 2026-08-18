export default {
  resultNote:
    "Insulation is sold by coverage, not by R-value, so the package count is the number to shop with. Check the bag: blown-in coverage is printed as square feet at a given installed depth, and that depth is the one number installers most often fall short on.",

  formula: {
    lines: [
      'Area          = length × width',
      'Depth needed  = target R ÷ R per inch of material',
      'Depth used    = min( depth needed, cavity depth )',
      'Achievable R  = depth used × R per inch',
      '',
      'Batts:    packages = ceil( Area × (1 + waste) ÷ coverage per bag )',
      'Blown-in: cu ft    = Area × (1 + waste) × depth ÷ 12',
      '          bags     = ceil( cu ft ÷ cu ft per bag )',
    ],
    body: [
      "R-value per inch is the bridge between the number the code calls for and the material you actually buy. Fiberglass batts run about R-3.2 per inch, blown cellulose about R-3.7, blown fiberglass about R-2.5, and closed-cell spray foam around R-6.5. Divide your target by that figure and you have the depth the job requires, which is what the installer can be held to.",
      "In a wall the cavity caps you. A 2×4 stud bay is 3.5 in deep, so even perfect fiberglass tops out near R-13 and no product choice changes the geometry. Getting past that means either 2×6 framing, continuous exterior foam, or a higher-R-per-inch material. The calculator clamps the depth at the cavity for wall and floor assemblies and leaves attics open, since attic depth is limited only by what you blow in.",
      "Blown-in is priced and bagged by volume, so the settled depth drives the bag count directly. Bags list coverage at several depths on the label — the same bag might cover 60 sq ft at R-19 and 25 sq ft at R-49. Under-blowing is the classic shortfall: the crew leaves before the depth is reached and the attic reads as insulated while performing two-thirds as well. Set depth markers before the hose starts.",
    ],
  },

  example: {
    title: "Worked example: a 30 × 24 ft attic to R-49 in blown cellulose",
    steps: [
      ['Area', '30 × 24 = 720 sq ft'],
      ['Depth for R-49', '49 ÷ 3.7 = 13.24 in'],
      ['Cavity limit', 'Attic floor is open — no cap applies'],
      ['Volume', '720 × 1.08 × 13.24 ÷ 12 = 858 cu ft'],
      ['Bags at 20 cu ft settled', 'ceil(858 ÷ 20) = 43 bags'],
    ],
    conclusion:
      "That is a machine job, not a hand job — most rental blowers move around 20 bags an hour with two people, so a straightforward attic like this is a couple of hours' work once the machine is loaded and the depth markers are set. Big-box stores commonly lend the blower free with a bag minimum, which usually makes this cheaper than it looks.",
  },

  tables: [
    {
      title: 'R-value per inch by material',
      head: ['Material', 'R per inch', 'R-13 needs', 'R-49 needs'],
      rows: [
        ['Fiberglass batt', '3.1–3.4', '4 in', '15 in'],
        ['Mineral wool batt', '3.7–4.2', '3.3 in', '12.5 in'],
        ['Blown cellulose', '3.5–3.8', '3.6 in', '13.2 in'],
        ['Blown fiberglass', '2.2–2.7', '5.3 in', '20 in'],
        ['Open-cell spray foam', '3.5–3.8', '3.6 in', '13.2 in'],
        ['Closed-cell spray foam', '6.0–7.0', '2 in', '7.5 in'],
      ],
    },
    {
      title: 'US DOE recommended R-values by climate zone',
      head: ['Zone', 'Attic', '2×4 wall', '2×6 wall', 'Floor'],
      rows: [
        ['1–2 (hot south)', 'R-30 to R-49', 'R-13', 'R-20', 'R-13'],
        ['3 (warm)', 'R-30 to R-60', 'R-13', 'R-20', 'R-19'],
        ['4 (mixed)', 'R-49 to R-60', 'R-13 to R-15', 'R-20 to R-21', 'R-25'],
        ['5–6 (cold)', 'R-49 to R-60', 'R-15 to R-21', 'R-21', 'R-30'],
        ['7–8 (very cold)', 'R-49 to R-60', 'R-21', 'R-21+', 'R-38'],
      ],
      note: 'Zones run roughly south to north. Check your county on the DOE map rather than guessing from your state, since several states span three zones.',
    },
  ],

  faq: [
    { q: 'How much insulation do I need for my attic?', a: 'Most of the US now wants R-49 to R-60 in the attic. In blown cellulose that is roughly 13 to 16 in of settled depth; in fiberglass batts it is R-38 plus a second unfaced layer laid across the joists.' },
    { q: 'How do I know how much insulation I already have?', a: 'Measure the depth with a ruler at several points and multiply by the R per inch for what is up there — about 2.5 for old blown fiberglass, 3.7 for cellulose, 3.2 for batts. Anything under 8 in of loose fill in a cold climate is worth topping up.' },
    { q: 'Can I put new insulation over old?', a: 'Over loose fill and unfaced batts, yes, and it is the cheapest energy work in most houses. The one rule is that the new layer must be unfaced. A second vapour barrier partway through the assembly traps moisture between the two.' },
    { q: 'What R-value fits in a 2×4 wall?', a: 'About R-13 to R-15 with high-density fiberglass or mineral wool. The cavity is 3.5 in and no batt product gets meaningfully past that. Going higher means exterior continuous foam or closed-cell spray.' },
    { q: 'Do I need a vapour barrier?', a: 'It depends on climate zone and assembly, and getting it on the wrong side is worse than omitting it. In cold climates the retarder goes toward the interior; in hot humid climates that same detail can trap condensation. Check local code before installing faced batts.' },
    { q: 'Batts or blown-in?', a: 'Blown-in for attics — it fills around wiring and framing irregularities and reaches high R-values cheaply. Batts for open stud walls and accessible joist bays, where you can fit them without compressing or leaving gaps. A compressed or gapped batt loses far more performance than the label difference between materials.' },
    { q: 'Does insulation need to breathe?', a: 'The insulation does not, but the attic above it usually does. Do not block soffit vents when you blow in — use baffles at the eaves. Blocked soffits are the most common cause of ice dams in a freshly insulated attic.' },
  ],

  related: ['drywall-calculator', 'concrete-block-calculator', 'baseboard-calculator', 'tile-calculator'],
  guides: [
    { slug: 'how-much-insulation-do-i-need', title: 'How Much Insulation Do I Need?' },
    { slug: 'r-value-explained', title: 'R-Value Explained: What the Number Actually Means' },
  ],
};
