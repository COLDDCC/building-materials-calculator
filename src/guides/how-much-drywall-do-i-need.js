export default {
  title: 'How Much Drywall Do I Need?',
  description:
    'Sheet counts for the rooms people actually board — a bedroom, a living room, a garage, a basement, a whole house — plus the four decisions that change the answer and what fits in a pickup.',
  calculator: 'drywall-calculator',
  keyword: 'how much drywall do i need',
  updated: '2026-07-31',
  body: [
    {
      t: 'p',
      v: 'For a standard bedroom with 8 ft ceilings, walls only, plan on 13 sheets of 4 × 8 drywall. Add the ceiling and it becomes 18. A two-car garage runs about 40 sheets; a finished basement about 45. For a whole house, multiply the floor area by 3.5 and divide by 32.',
    },
    {
      t: 'p',
      v: 'Those are planning figures, and they are close enough to load a truck against. What moves them is not the room size so much as four decisions you make before you order.',
    },

    { t: 'h2', v: 'Sheet counts by room' },
    {
      t: 'p',
      v: 'All of these assume 4 × 8 sheets, a 10% waste factor, and the doors and windows a room of that type normally has.',
    },
    {
      t: 'table',
      head: ['Room', 'Ceiling height', 'Net area', 'Sheets'],
      rows: [
        ['11 × 14 bedroom, walls only', '8 ft', '367 sq ft', '13'],
        ['11 × 14 bedroom, walls + ceiling', '8 ft', '521 sq ft', '18'],
        ['15 × 18 living room, walls + ceiling', '9 ft', '786 sq ft', '28'],
        ['20 × 22 two-car garage, walls + ceiling', '9 ft', '1,142 sq ft', '40'],
        ['28 × 20 basement, walls + ceiling', '8 ft', '1,286 sq ft', '45'],
      ],
      note: 'Net area is after deducting doors at 21 sq ft and windows at 12 sq ft each.',
    },
    {
      t: 'p',
      v: 'The bedroom line shows the single biggest swing in the whole exercise. Boarding the ceiling of an 11 × 14 room adds 154 sq ft to a 367 sq ft job — nearly half again — and takes it from 13 sheets to 18. Any figure you find online that does not say whether the ceiling is included is not a figure you can order from.',
    },

    { t: 'h2', v: 'The four decisions that change the number' },

    { t: 'h3', v: '1. Ceiling or not' },
    {
      t: 'p',
      v: 'Covered above, and worth deciding first because it also decides what thickness you buy. Ceilings on joists at 24 in centres need 5/8 in board or 1/2 in sag-resistant board rated for ceilings. Standard 1/2 in will sag visibly between joists within a few years and there is no remedy short of taking it down.',
    },

    { t: 'h3', v: '2. Sheet size' },
    {
      t: 'p',
      v: 'Bigger sheets mean fewer sheets and, more importantly, fewer butt joints — the end-to-end joints that are hardest to hide because there is no tapered edge to bed the tape into. That 15 × 18 living room takes 28 sheets in 4 × 8. In 4 × 12 it takes 19.',
    },
    {
      t: 'p',
      v: 'Nineteen sheets is nine fewer to carry, and on a 18 ft wall a 12 ft sheet plus a 6 ft filler produces one butt joint where three 8 ft sheets would produce two. The trade-off is weight and handling: a 4 × 12 sheet of 1/2 in board is about 85 lb and needs two people and a clear path. If you are working alone in a finished house, 4 × 8 is the right answer even though the sheet count looks worse.',
    },

    { t: 'h3', v: '3. Ceiling height' },
    {
      t: 'p',
      v: 'Eight-foot ceilings are the easy case: two courses of 4 ft board hung horizontally cover the wall exactly, with no rip. At 9 ft you need a 1 ft filler strip along the whole perimeter, which is why the 15 × 18 room above needs proportionally more board than its floor area suggests. At 10 ft, hanging vertically with 10 ft sheets is usually tidier than three horizontal courses.',
    },

    { t: 'h3', v: '4. Waste factor' },
    {
      t: 'html',
      v: 'Leave it at 10% unless you have a reason not to. A plain rectangle with long walls and two openings will come in under that; a room broken up by soffits, angled ceilings or arched openings will not, because those are the shapes that turn offcuts into rubbish. The <a href="/drywall-calculator/">drywall calculator</a> takes the waste factor as a slider so you can see what the assumption is costing you before you commit to it.',
    },

    { t: 'h2', v: 'Estimating a whole house' },
    {
      t: 'p',
      v: 'Room-by-room breaks down once you are counting a whole floor, because interior partitions get boarded on both faces and it becomes tedious to track. The estimating shortcut is to multiply the finished floor area by 3.5.',
    },
    {
      t: 'p',
      v: 'A 1,500 sq ft house gives 5,250 sq ft of drywall, which at 10% waste is 181 sheets of 4 × 8. The multiplier holds reasonably for a typical single-storey layout with 8 ft ceilings: roughly one part ceiling, one part exterior wall face, and one and a half parts interior partitions counted on both sides.',
    },
    {
      t: 'callout',
      v: 'Use 3.5 for a normal layout, 3.0 for an open plan with few internal walls, and 4.0 or more for a house chopped into many small rooms. Bathrooms and hallways are where the multiplier climbs.',
    },

    { t: 'h2', v: 'What comes with the board' },
    {
      t: 'p',
      v: 'Sheets are the expensive part but not the part you run out of. For that 11 × 14 bedroom with the ceiling boarded, the same job needs roughly 29 lb of joint compound, 344 ft of tape and 576 screws.',
    },
    {
      t: 'ul',
      v: [
        'Compound: one 4.5 gallon bucket does roughly 1,200 sq ft of board at a level 4 finish. Most single rooms need one bucket; skimming the whole surface to level 5 needs two.',
        'Tape: about 0.6 linear feet per square foot of board. A 250 ft roll covers roughly 400 sq ft. Paper tape for flats and inside corners, mesh only if you are using setting compound.',
        'Screws: reckon on one per square foot of board, and about 320 to the pound in 1¼ in. A 5 lb box covers anything short of a whole floor.',
      ],
    },

    { t: 'h2', v: 'Getting it home' },
    {
      t: 'p',
      v: 'A 4 × 8 sheet of 1/2 in board weighs about 57 lb. Twenty sheets is over half a ton, which is at or past the payload of most half-ton pickups before you count anything else in the bed. The bed length is the other limit: a 4 × 8 sheet needs the tailgate down and a flag, and 4 × 12 will not go in a short bed at all.',
    },
    {
      t: 'p',
      v: 'Most suppliers deliver free above a fairly low order threshold, and many will boom sheets onto a second-floor window or into a garage. For anything over about fifteen sheets, delivery is almost always the right call — it costs little, saves the truck, and the sheets arrive without the corner damage that comes from strapping them down.',
    },

    { t: 'h2', v: 'The short version' },
    {
      t: 'html',
      v: 'Bedroom walls 13 sheets, add the ceiling and it is 18. Garage 40, basement 45, whole house 3.5 times the floor area. Decide the ceiling first, pick the largest sheet you can physically handle, and hold the waste factor at 10% unless the room is unusually simple or unusually awkward. For your actual dimensions, the <a href="/drywall-calculator/">drywall calculator</a> returns sheets, compound, tape and screws together, and shows the formula it used.',
    },
  ],
};
