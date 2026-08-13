export default {
  resultNote:
    'The sheet count is what to load on the truck. Drywall is bought whole — there is no half sheet — so the number is always rounded up, and the waste factor is what keeps you from making a second trip because of one bad cut.',

  formula: {
    lines: [
      'Wall area  = 2 × (length + width) × height',
      'Ceiling    = length × width                    (if included)',
      'Deductions = (doors × 21) + (windows × 12)',
      'Net area   = Wall area + Ceiling − Deductions',
      'Sheets     = ceil( Net area × (1 + waste) ÷ sheet area )',
      'Compound   = Net area × 1.1 ÷ 100 × 5 lb',
      'Tape       = Net area × 1.1 × 0.6 ft',
      'Screws     = Sheets × sheet area              (≈ 1 per sq ft)',
    ],
    body: [
      'Wall area comes from the room perimeter rather than the individual walls, which is why two numbers are enough for a rectangular room. Multiply the perimeter by ceiling height and you have every wall at once. For an L-shaped room, run the calculator twice on the two rectangles and add the results, minus the shared wall if it is not being boarded.',
      'The 21 and 12 sq ft deductions are standard estimating allowances, not measurements of your actual openings. A 3 × 7 ft door is 21 sq ft; a typical 3 × 4 ft window is 12. If your openings are much larger — a patio slider, a picture window — measure them and enter the equivalent count. Many estimators deliberately skip small deductions entirely, on the grounds that the offcuts around an opening are rarely usable anyway.',
      'Screws scale with sheet area rather than sheet count. A 4 × 8 sheet on 16 in centers takes about 32 screws, which works out to roughly one per square foot; that ratio holds when you move up to 4 × 10 or 4 × 12, so the calculator multiplies through by area. Buy by the pound: a 1 lb box holds roughly 320 screws at 1¼ in.',
      'Joint compound at 5 lb per 100 sq ft covers taping plus two finish coats at a level 4 finish. Push for a level 5 skim coat and that figure roughly doubles. Tape at 0.6 linear feet per square foot of board assumes standard 4 ft wide sheets; longer sheets mean fewer butt joints and slightly less tape, which is one of the quieter reasons to buy 4 × 12 when the room allows it.',
    ],
  },

  example: {
    title: 'Worked example: a 14 × 12 ft bedroom with 8 ft ceilings',
    steps: [
      ['Wall area', '2 × (14 + 12) × 8 = 416 sq ft'],
      ['Ceiling', 'not included in this run'],
      ['Deductions', '1 door (21) + 1 window (12) = 33 sq ft'],
      ['Net area', '416 − 33 = 383 sq ft'],
      ['With 10% waste', '383 × 1.10 = 421 sq ft'],
      ['Sheets at 4 × 8', '421 ÷ 32 = 13.2 → 14 sheets'],
      ['Compound', '421 ÷ 100 × 5 ≈ 21 lb'],
      ['Tape', '421 × 0.6 ≈ 253 ft'],
      ['Screws', '14 × 32 ≈ 450'],
    ],
    conclusion:
      'Fourteen 4 × 8 sheets, one bucket of all-purpose compound, one 250 ft roll of paper tape and a 2 lb box of screws. Add the ceiling and the same room jumps to 18 sheets — the ceiling alone is 168 sq ft, more than a third again on top of the walls.',
  },

  tables: [
    {
      title: 'Drywall thickness and where each one goes',
      head: ['Thickness', 'Weight per 4 × 8 sheet', 'Where it is used'],
      rows: [
        ['1/4 in', '≈ 38 lb', 'Curved walls, skimming over existing surfaces'],
        ['3/8 in', '≈ 44 lb', 'Repairs and remodels matching older board'],
        ['1/2 in', '≈ 57 lb', 'Standard for walls and 16 in o.c. ceilings'],
        ['5/8 in Type X', '≈ 70 lb', 'Fire-rated assemblies, garages, 24 in o.c. ceilings'],
      ],
      note: 'Ceilings on 24 in centers need 5/8 in board or 1/2 in sag-resistant board. Standard 1/2 in will sag between joists at that spacing.',
    },
    {
      title: 'Sheet sizes and coverage',
      head: ['Sheet size', 'Coverage', 'Best for'],
      rows: [
        ['4 × 8 ft', '32 sq ft', 'Standard rooms, anything you carry up stairs alone'],
        ['4 × 9 ft', '36 sq ft', '9 ft ceilings, vertical hanging with no butt joint'],
        ['4 × 10 ft', '40 sq ft', 'Rooms over 10 ft wide, fewer butt joints'],
        ['4 × 12 ft', '48 sq ft', 'Long walls and ceilings; hardest to handle'],
      ],
    },
    {
      title: 'Common rooms at 8 ft ceiling height, walls only',
      head: ['Room', 'Net area', '4 × 8 sheets at 10% waste'],
      rows: [
        ['10 × 10 ft', '≈ 287 sq ft', '10'],
        ['12 × 12 ft', '≈ 351 sq ft', '13'],
        ['14 × 12 ft', '≈ 383 sq ft', '14'],
        ['16 × 14 ft', '≈ 447 sq ft', '16'],
        ['20 × 16 ft', '≈ 543 sq ft', '19'],
      ],
      note: 'All assume one door and one window deducted. Add the ceiling area separately if you are boarding overhead.',
    },
  ],

  faq: [
    {
      q: 'How much drywall do I need for a 12 × 12 room?',
      a: 'With 8 ft ceilings, one door and one window, a 12 × 12 room comes to about 351 sq ft of wall — 13 sheets of 4 × 8 at a 10% waste factor. Adding the ceiling brings it to 17 sheets.',
    },
    {
      q: 'Should I hang drywall horizontally or vertically?',
      a: 'Horizontally on residential walls, in almost every case. It puts the butt joint at a comfortable working height, produces fewer linear feet of joint to finish, and is what the sheet sizes are designed around. Vertical hanging is for commercial fire-rated assemblies and for walls taller than 8 ft where a horizontal run would leave an awkward filler strip.',
    },
    {
      q: 'How many screws per sheet of drywall?',
      a: 'About 32 for a 4 × 8 sheet on framing at 16 in on center — roughly every 12 in in the field and every 8 in along the edges for ceilings. Wider 24 in framing uses fewer screws per sheet but needs thicker board to compensate.',
    },
    {
      q: 'What waste factor should I use?',
      a: '10% is the working default for a rectangular room. Drop to 5% for a simple square room with few openings and long uninterrupted walls. Go to 15% for rooms with lots of corners, angled ceilings, soffits or many small openings, where offcuts stop being reusable.',
    },
    {
      q: 'Do I subtract doors and windows?',
      a: 'Deduct doors, and deduct large windows. Standard windows are a judgement call — many estimators leave them in, because the strips you cut around a small opening usually end up in the skip anyway, and the extra board covers your mistakes elsewhere.',
    },
    {
      q: 'How much joint compound do I need?',
      a: 'Around 5 lb per 100 sq ft of board for a level 4 finish, which is taping plus two coats. A 4.5 gallon bucket holds about 61 lb and covers roughly 1,200 sq ft. Skim coating the whole surface to level 5 will use close to double.',
    },
    {
      q: 'Is 1/2 in or 5/8 in drywall better for ceilings?',
      a: '5/8 in, unless your joists are 16 in on center and you are buying sag-resistant 1/2 in specifically rated for ceilings. Standard 1/2 in board on 24 in centers will develop a visible sag between joists within a few years, and there is no fixing it afterwards.',
    },
    {
      q: 'How much does drywall cost per sheet?',
      a: 'Standard 1/2 in 4 × 8 board runs roughly $12 to $20 a sheet at US big-box prices, with 5/8 in Type X a few dollars higher and moisture-resistant board higher again. Prices in this trade move with commodity gypsum, so treat any figure more than a few months old as a rough guide.',
    },
  ],

  related: ['insulation-calculator', 'baseboard-calculator', 'wallpaper-calculator', 'tile-calculator'],
  guides: [
    { slug: 'how-much-drywall-do-i-need', title: 'How Much Drywall Do I Need?' },
    { slug: 'drywall-thickness-guide', title: 'Drywall Thickness Guide: 1/4 vs 1/2 vs 5/8' },
    { slug: 'how-many-screws-per-drywall-sheet', title: 'How Many Screws Per Drywall Sheet?' },
    { slug: 'what-is-a-waste-factor', title: 'What Is a Waste Factor, and Why 10%?' },
  ],
};
