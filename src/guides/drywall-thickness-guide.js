export default {
  title: 'Drywall Thickness Guide: 1/4 vs 1/2 vs 5/8',
  description:
    'Which drywall thickness goes where, the framing spacing each one can span, where code requires 5/8 in Type X, and why two layers of 1/2 in beat one layer of 5/8 in for sound.',
  calculator: 'drywall-calculator',
  keyword: 'drywall thickness',
  updated: '2026-07-31',
  body: [
    {
      t: 'p',
      v: 'Use 1/2 in on walls, 5/8 in on ceilings and anywhere a fire rating is required, 1/4 in only for curves and for skimming over an existing surface, and 3/8 in only when you are matching board that is already there. That covers almost every residential decision.',
    },
    {
      t: 'p',
      v: 'The reason the answer is that simple is that thickness is not really a strength decision. It decides three things — how far the board can span before it sags, whether the assembly can carry a fire rating, and how much mass the wall has for sound. Everything else follows from those.',
    },

    { t: 'h2', v: 'Framing spacing is the real constraint' },
    {
      t: 'p',
      v: 'Before you pick a thickness, look at the framing. The gap between studs or joists is what determines whether a board will hold a flat plane over its life, and it is why the same 1/2 in sheet is correct on a wall and a mistake on a ceiling twelve inches away.',
    },
    {
      t: 'table',
      head: ['Thickness', 'Max stud spacing (walls)', 'Max joist spacing (ceilings)', 'Notes'],
      rows: [
        ['1/4 in', 'Not for single layer', 'Not permitted', 'Curves and overlay only'],
        ['3/8 in', '16 in o.c.', 'Not permitted', 'Repairs, matching old work'],
        ['1/2 in standard', '24 in o.c.', '16 in o.c.', 'Perpendicular to joists'],
        ['1/2 in sag-resistant', '24 in o.c.', '24 in o.c.', 'Sold specifically for ceilings'],
        ['5/8 in', '24 in o.c.', '24 in o.c.', 'The default for ceilings'],
      ],
      note: 'Boards run perpendicular to framing in every case. Hanging parallel to joists reduces the permitted span and invites sagging between them.',
    },
    {
      t: 'p',
      v: 'The line that catches people is standard 1/2 in on 24 in ceiling joists. It goes up fine, looks perfect for a year, and then develops a shallow wave between every joist that you notice for the first time when late afternoon sun rakes across it. There is no repair. Either use 5/8 in or buy 1/2 in that is explicitly labelled sag-resistant or ceiling board — the ordinary sheet is not the same product.',
    },

    { t: 'h2', v: 'Where 5/8 in Type X is not optional' },
    {
      t: 'p',
      v: 'Type X board contains glass fibre that holds the core together as the gypsum calcines, which is what lets an assembly carry a one-hour rating. Where the code calls for a rated separation, ordinary 5/8 in board will not do — it has to be Type X, and the stamp is on the back of the sheet.',
    },
    {
      t: 'table',
      head: ['Location', 'Model code requirement'],
      rows: [
        ['Garage walls shared with the house', '1/2 in gypsum board on the garage side'],
        ['Garage ceiling with habitable space above', '5/8 in Type X'],
        ['Structure supporting that separation', 'Same rating as the assembly it carries'],
        ['Furnace and utility rooms', 'Varies by jurisdiction — check locally'],
        ['Multi-family party walls', 'Rated assembly, usually double layer'],
      ],
      note: 'These follow the model residential code. Local jurisdictions amend fire provisions more often than any other section, so confirm with your building department before you order.',
    },
    {
      t: 'p',
      v: 'One detail worth knowing: a rating belongs to an assembly, not to a board. Swapping in a thicker sheet does not create a rating, and using the wrong screw spacing or the wrong joint treatment can void one. If the drawing calls out a tested assembly number, build that assembly.',
    },

    { t: 'h2', v: 'Thickness and sound' },
    {
      t: 'p',
      v: 'Mass blocks sound, so 5/8 in performs better than 1/2 in — but only by a few points, which is far less than people expect from a 25% increase in thickness. Moving from 1/2 in to 5/8 in on a standard stud wall buys you roughly two points of STC. That is barely audible.',
    },
    {
      t: 'p',
      v: 'Two layers of 1/2 in, on the other hand, is a genuine improvement, and two layers with a damping compound between them is a large one. If a quiet room is the goal, the money is better spent on a second layer, resilient channel or insulation in the cavity than on upgrading a single layer to 5/8 in.',
    },
    {
      t: 'callout',
      v: 'Upgrading thickness for sound is the classic false economy. Doubling the layers works; thickening one layer barely moves the needle.',
    },

    { t: 'h2', v: 'Specialty boards' },
    {
      t: 'ul',
      v: [
        'Moisture-resistant, often green: for bathrooms and laundries away from direct wetting. It resists humidity, not water. It does not belong in a shower.',
        'Mold-resistant, often purple: paperless or treated facing, for the same locations where mold risk is the concern rather than moisture alone.',
        'Cement board and foam tile backer: the correct substrate inside a shower or tub surround. No gypsum product is.',
        'Abuse and impact-resistant: denser core and tougher facing, for garages, hallways and rental turnovers.',
        'Lightweight 1/2 in: about a quarter lighter than standard for the same wall performance. Worth the small premium if you are hanging alone.',
      ],
    },

    { t: 'h2', v: 'Weight, and why it decides more than the spec sheet' },
    {
      t: 'table',
      head: ['Board', '4 × 8 sheet', '4 × 12 sheet'],
      rows: [
        ['1/4 in', '≈ 38 lb', '≈ 57 lb'],
        ['3/8 in', '≈ 44 lb', '≈ 66 lb'],
        ['1/2 in lightweight', '≈ 44 lb', '≈ 66 lb'],
        ['1/2 in standard', '≈ 57 lb', '≈ 85 lb'],
        ['5/8 in Type X', '≈ 70 lb', '≈ 105 lb'],
      ],
    },
    {
      t: 'html',
      v: 'A 4 × 12 sheet of 5/8 in weighs about as much as a bag of cement and has to go overhead. Nobody hangs that alone, and nobody should try — a dropped ceiling sheet takes the corner off and often the person under it. If you are working single-handed, rent a drywall lift or drop to 4 × 8, and accept the extra joints. The <a href="/drywall-calculator/">drywall calculator</a> lets you switch sheet size and see immediately what the trade costs you in sheet count.',
    },

    { t: 'h2', v: 'Matching what is already on the wall' },
    {
      t: 'p',
      v: 'Patching into an existing wall is the one situation where the right thickness is whatever is already there, regardless of what the table says. A patch that sits proud or sunk by an eighth of an inch shows through paint under any raking light, and feathering compound over that step across a large area is slow, thick and prone to cracking.',
    },
    {
      t: 'p',
      v: 'To find out what you have, pull a switch plate and measure the cut edge of the board at the box. Houses built before the mid-1960s often carry 3/8 in board, and some older work carries rock lath and plaster instead, which is a different repair entirely. Anything from the last few decades will almost certainly be 1/2 in on walls.',
    },
    {
      t: 'p',
      v: 'If the thickness you need is not stocked locally, shim rather than compensate with compound. Furring the framing out with a strip of 1/8 in hardboard or two layers of construction paper is quicker than trying to bury a step, and it leaves a flat plane the tape can sit on.',
    },
    { t: 'h2', v: 'Cost' },
    {
      t: 'p',
      v: 'Thickness is a small part of the bill. Standard 1/2 in board runs roughly $12 to $20 a sheet at US retail, with 5/8 in Type X a few dollars above that and moisture or mold-resistant board higher again. On a single room the difference between hanging 1/2 in and 5/8 in throughout is usually less than the cost of the compound, which is a reasonable argument for not economising on the ceiling.',
    },

    { t: 'h2', v: 'Three mistakes worth avoiding' },
    {
      t: 'ul',
      v: [
        'Standard 1/2 in on 24 in ceiling joists. It will sag, and it cannot be fixed afterwards.',
        'Ordinary 5/8 in where the drawing says Type X. Same thickness, different core, no rating.',
        'Green board in a shower. It is a humidity product, and behind tile it will fail.',
      ],
    },

    { t: 'h2', v: 'The short version' },
    {
      t: 'html',
      v: 'Walls take 1/2 in. Ceilings take 5/8 in, or 1/2 in sold specifically as sag-resistant. Fire separations take 5/8 in Type X and the assembly they are specified in. Buy 1/4 in only to bend around a curve and 3/8 in only to match what is already on the wall. Once the thickness is settled, the <a href="/guides/how-much-drywall-do-i-need/">sheet counts by room</a> will tell you how many to order.',
    },
  ],
};
