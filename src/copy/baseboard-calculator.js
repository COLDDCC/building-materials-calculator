export default {
  resultNote:
    "The number that matters is stock lengths, not linear feet. Trim is sold in fixed lengths, and a wall one inch longer than your stock forces a scarf joint or a second board. Always plan the longest walls first and cut the short pieces from what is left.",

  formula: {
    lines: [
      'Perimeter    = 2 × (length + width)',
      'Run          = Perimeter − (doorways × 3 ft) − other openings',
      'With waste   = Run × (1 + waste)',
      'Pieces       = ceil( With waste ÷ stock length )',
      'Corners      = 4 + (doorways × 2)',
      'Caulk tubes  = ceil( total linear feet ÷ 100 )',
      'Finish nails = total linear feet × 1.5',
    ],
    body: [
      "The waste factor on trim does something different from the waste factor on sheet goods. With drywall it covers breakage and bad cuts; with trim it covers the offcut left at the end of every board. If your room has four 14 ft walls and you buy 16 ft stock, you throw away 2 ft four times over — 12 percent of the material, before anyone makes a mistake.",
      "That is why stock length is a real decision and not a detail. Match the stock to your longest wall wherever you can. A 14 ft wall wants 14 or 16 ft stock; buying 8 ft stock for it means a scarf joint in the middle of the most visible run in the room. Where a wall genuinely exceeds available stock, put the scarf joint away from the door you enter through.",
      "Corner count drives your miter planning more than your material. Every inside corner on quality work is coped rather than mitered, because a coped joint stays closed when the house moves and a mitered one opens. Outside corners stay mitered. Count them before you start so you know how many of each you are committing to.",
    ],
  },

  example: {
    title: "Worked example: a 14 × 12 ft room with one doorway, 16 ft stock",
    steps: [
      ['Perimeter', '2 × (14 + 12) = 52 ft'],
      ['Deduct doorway', '52 − 3 = 49 ft of run'],
      ['Waste at 10%', '49 × 1.10 = 53.9 ft'],
      ['Pieces at 16 ft', 'ceil(53.9 ÷ 16) = 4 pieces'],
      ['Corners', '4 inside + 2 at the door casing'],
      ['Caulk', 'ceil(54 ÷ 100) = 1 tube'],
      ['Nails', '54 × 1.5 ≈ 81 finish nails'],
    ],
    conclusion:
      "Four 16 ft lengths gives 64 ft for a 49 ft run. That sounds generous until you lay it out: the 14 ft walls take one board each with 2 ft left, and those 2 ft offcuts are only useful if something in the room is shorter than 2 ft. Usually nothing is.",
  },

  tables: [
    {
      title: 'Common trim profiles and typical heights',
      head: ['Profile', 'Typical size', 'Where it fits'],
      rows: [
        ['Colonial baseboard', '3¼ in tall', 'Standard builder-grade rooms'],
        ['Ranch / clamshell', '2¼–3¼ in', 'Mid-century and rental-grade'],
        ['Flat stock baseboard', '5½–7¼ in', 'Modern and craftsman interiors'],
        ['Shoe moulding', '¾ in', 'Covers the floor gap; runs on top of base'],
        ['Quarter round', '¾ in', 'Alternative to shoe, heavier profile'],
        ['Crown moulding', '3½–5¼ in', 'Wall-to-ceiling; measure the full perimeter'],
      ],
      note: 'Taller baseboard suits taller ceilings. A common guide is roughly 1 in of baseboard height for every foot of ceiling, so 8 ft ceilings take 3 to 4 in and 10 ft ceilings carry 5 to 7 in comfortably.',
    },
    {
      title: 'Stock length efficiency by wall length',
      head: ['Wall length', 'Best stock', 'Offcut', 'Joint needed'],
      rows: [
        ['8 ft', '8 ft', '0 ft', 'No'],
        ['10 ft', '12 ft', '2 ft', 'No'],
        ['12 ft', '12 ft', '0 ft', 'No'],
        ['14 ft', '14 ft', '0 ft', 'No'],
        ['16 ft', '16 ft', '0 ft', 'No'],
        ['18 ft', '16 ft + offcut', '—', 'Yes, one scarf'],
      ],
    },
  ],

  faq: [
    { q: 'How do I calculate baseboard for a room?', a: 'Add up the perimeter, subtract about 3 ft for each doorway, add 10% for waste, then divide by the stock length you plan to buy and round up. Buying by linear foot without dividing by stock length will leave you short.' },
    { q: 'Do I subtract doorways?', a: 'Yes, about 3 ft for a standard 32 to 36 in door opening. Do not subtract windows unless they run to the floor. Cased openings and fireplaces come out at their actual width.' },
    { q: 'Should I cope or miter inside corners?', a: 'Cope. A coped joint tolerates walls that are not square and stays tight as the house moves through the seasons. Mitered inside corners look identical on day one and open into a visible gap within a year.' },
    { q: 'How much waste should I allow on trim?', a: '10% for a simple rectangular room. Push to 15% if the room has many short walls, bay windows, or if your stock length is a poor match for your wall lengths, since every board leaves an offcut.' },
    { q: 'Do I need shoe moulding?', a: 'If you installed the floor after the baseboard, or if the floor is not perfectly flat, yes — shoe covers the expansion gap and the variation. On a new build where baseboard went in after flooring and both are dead flat, you can skip it for a cleaner modern look.' },
    { q: 'What nails should I use for baseboard?', a: '16 gauge finish nails, 2 to 2½ in, driven into studs. 18 gauge brads are for shoe moulding and small profiles only — they do not have the holding power for a tall baseboard that is pulling against a slightly bowed wall.' },
    { q: 'Should I paint the trim before or after installing?', a: 'Prime and put on the first finish coat before installing, then fill nail holes, caulk the top edge and apply the last coat in place. Painting flat stock on sawhorses is far faster and produces a better film than working on your knees against the floor.' },
  ],

  related: ['drywall-calculator', 'tile-calculator', 'wallpaper-calculator', 'board-foot-calculator'],
  guides: [
    { slug: 'how-much-baseboard-do-i-need', title: 'How Much Baseboard Do I Need?' },
    { slug: 'coping-vs-mitering-trim', title: 'Coping vs Mitering: Which Joint Where' },
  ],
};
