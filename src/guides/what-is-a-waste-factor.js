export default {
  title: 'What Is a Waste Factor, and Why 10%?',
  description:
    'A waste factor covers offcuts, cutting loss and breakage. Why it should scale with a room perimeter rather than its area, why it barely matters on small jobs, and what percentage each material actually needs.',
  calculator: 'drywall-calculator',
  keyword: 'waste factor',
  updated: '2026-07-31',
  body: [
    {
      t: 'p',
      v: 'A waste factor is the percentage you add to a calculated quantity to cover what does not end up on the wall — offcuts, bad cuts, damaged pieces and the strip at the end of a run that is two inches too short to use. Ten percent is the working default across most materials, and it is roughly right for a normal rectangular room.',
    },
    {
      t: 'p',
      v: 'It is also more interesting than it looks. The rule that would make it accurate is not the one most people apply, and on small jobs the number often does nothing at all.',
    },

    { t: 'h2', v: 'Three different things called waste' },
    {
      t: 'p',
      v: 'Lumping them together is why one percentage never fits every material.',
    },
    {
      t: 'ol',
      v: [
        'Offcut waste. Stock comes in fixed lengths and your wall does not match them. A 14 ft wall out of 16 ft trim discards 2 ft, every time, before anyone makes a mistake. This is arithmetic, not carelessness.',
        'Boundary cutting. Anything that meets a wall, a corner or an opening gets cut, and the piece you cut off is usually the wrong shape for anywhere else. Tile and drywall live here.',
        'Breakage and defect. Some materials arrive broken or unusable. Tile chips, rough lumber has wane and checks, and a percentage of any pallet of block will be cracked.',
      ],
    },
    {
      t: 'p',
      v: 'A material can suffer from one of these and not the others. Board foot lumber has almost no boundary cutting but heavy defect loss. Mulch has none of the three — its allowance is really just an insurance margin against measuring the bed short.',
    },

    { t: 'h2', v: 'Waste scales with perimeter, not area' },
    {
      t: 'p',
      v: 'Boundary cutting happens at edges, and edges grow with perimeter while material grows with area. So the smaller the room, the more cutting there is per square foot of material — which is the opposite of how most people apply the allowance.',
    },
    {
      t: 'table',
      head: ['Room', 'Perimeter ÷ area', 'Relative cutting per sq ft'],
      rows: [
        ['8 × 8 ft', '0.500', '2.9 ×'],
        ['11 × 14 ft', '0.325', '1.9 ×'],
        ['20 × 20 ft', '0.200', '1.2 ×'],
        ['28 × 20 ft', '0.171', '1.0 ×'],
      ],
      note: 'A small bathroom generates nearly three times the cut edge per square foot that a large basement does. If anything deserves 15%, it is the bathroom.',
    },

    { t: 'h2', v: 'But on small jobs the slider barely moves' },
    {
      t: 'p',
      v: 'Here is where it gets awkward. Materials are sold in whole units, and the rounding up to a whole unit is often larger than the waste factor itself. Take an 11 × 14 bedroom, walls only, in 4 × 8 drywall:',
    },
    {
      t: 'table',
      head: ['Waste factor', 'Sheets'],
      rows: [
        ['0%', '12'],
        ['5%', '13'],
        ['10%', '13'],
        ['15%', '14'],
        ['20%', '14'],
      ],
    },
    {
      t: 'p',
      v: 'Five percent and ten percent give the same answer. So do fifteen and twenty. The entire decision collapses into three possible outcomes, and half the range you might agonise over changes nothing.',
    },
    {
      t: 'p',
      v: 'Now the same exercise on a 28 × 20 basement with the ceiling boarded: 41 sheets at zero, 43 at five percent, 45 at ten, 47 at fifteen, 49 at twenty. Every five points costs two sheets. The rounding has stopped hiding anything.',
    },
    {
      t: 'callout',
      v: 'The uncomfortable conclusion: the waste factor matters least on the jobs that generate the most waste, and most on the jobs that generate the least. On a small room, stop fiddling with the percentage and just buy the extra sheet.',
    },

    { t: 'h2', v: 'What each material actually needs' },
    {
      t: 'table',
      head: ['Material', 'Default', 'Push it up when'],
      rows: [
        ['Drywall', '10%', 'Soffits, angled ceilings, many small walls — 15%'],
        ['Tile, straight layout', '10%', 'Diagonal or herringbone — 15 to 20%'],
        ['Wallpaper', 'n/a', 'Handled by the pattern repeat, not a percentage'],
        ['Baseboard and trim', '10%', 'Stock length matches your walls badly — 15%'],
        ['Concrete block', '5%', 'Curved or stepped walls, many openings — 8%'],
        ['Insulation', '8%', 'Irregular bays, lots of obstructions — 12%'],
        ['Mulch and gravel', '5%', 'Irregular bed shapes, uneven ground — 10%'],
        ['Board foot lumber', '15%', 'Character grade or many short parts — 25 to 30%'],
      ],
    },
    {
      t: 'html',
      v: 'Wallpaper is the interesting exception. It has no meaningful waste factor because the loss is not a percentage at all — it is determined by how the pattern repeat divides into your strip length, which produces jumps rather than a smooth curve. That is why the <a href="/wallpaper-calculator/">wallpaper calculator</a> has no waste slider, and why a blanket "add 20% for a pattern" is close to useless advice.',
    },

    { t: 'h2', v: 'What a waste factor is not' },
    {
      t: 'ul',
      v: [
        'Not a cover for measuring wrong. If you are unsure of a dimension, go and measure it again. Ten percent will not save an estimate built on a wrong number.',
        'Not a substitute for the spare. Tile dye lots and wallpaper batches shift between production runs; the spare box or roll has to come from the same lot as the job, and no percentage buys that for you.',
        'Not a contractor markup. Trade estimates carry a waste factor and a separate contingency, and they are different lines for good reasons.',
      ],
    },

    { t: 'h2', v: 'A practical way to set it' },
    {
      t: 'html',
      v: 'Run the calculation at your default and again five points higher. If the answer does not change, take the lower one and stop thinking about it. If it does change, look at the room: count the corners, the openings and the awkward shapes, and if there are more than a handful, buy the extra. Every calculator on this site exposes the waste factor as a slider precisely so you can do this in a few seconds — see the <a href="/">full list</a> for the material you are estimating.',
    },

    { t: 'h2', v: 'The short version' },
    {
      t: 'p',
      v: 'Ten percent is a sensible default and 5% to 15% covers almost everything. Small rooms genuinely waste more per square foot, but rounding to whole sheets and boxes usually absorbs the difference, so the percentage matters most on large jobs. Test it by moving the slider: if the answer holds, the decision was never yours to make.',
    },
  ],
};
