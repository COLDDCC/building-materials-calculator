export default {
  title: 'Single Roll vs Double Roll: What You Are Actually Buying',
  description:
    'US wallpaper is priced by the single roll and sold by the double. What that means for the number on the shelf tag, why small rooms pay a penalty for it, and how to compare a US price against a UK one.',
  calculator: 'wallpaper-calculator',
  keyword: 'single roll vs double roll wallpaper',
  updated: '2026-07-31',
  body: [
    {
      t: 'p',
      v: 'In the United States, wallpaper is priced by the single roll and packaged as a double roll. A single roll holds about 27 ft of paper; the bolt that leaves the store holds about 54 ft. You almost never buy a single roll, because almost nobody sells one — it is a unit of pricing, not a unit of packaging.',
    },
    {
      t: 'p',
      v: 'That gap between how a price is quoted and how the product is boxed catches out most first-time buyers, and it has a second consequence that costs real money on small jobs. Both are worth understanding before you order.',
    },

    { t: 'h2', v: 'Why two units exist at all' },
    {
      t: 'p',
      v: 'The single roll survives from an era when paper genuinely came in shorter lengths and had to be trimmed by hand at the edges. It settled into the trade as a coverage unit — roughly the amount that covers a defined patch of wall — and estimating practice, price books and manufacturer literature all grew up around it.',
    },
    {
      t: 'p',
      v: 'Manufacturing moved on. Longer bolts waste less at the printing stage and produce fewer seams for the hanger, so production standardised on double and occasionally triple rolls. Pricing never followed, because a single-roll price looks smaller and every competitor was quoting the same way. So the unit stayed on the tag while the physical object doubled.',
    },
    {
      t: 'callout',
      v: 'If a US wallpaper price looks roughly half what you expected for a designer paper, you are almost certainly reading a single-roll price for a bolt that will be charged as two.',
    },

    { t: 'h2', v: 'What each unit actually contains' },
    {
      t: 'table',
      head: ['Unit', 'Dimensions', 'Nominal coverage', 'How it is sold'],
      rows: [
        ['US single roll', '27 in × 27 ft', '60.75 sq ft', 'Pricing unit only'],
        ['US double roll (bolt)', '27 in × 54 ft', '121.5 sq ft', 'What you carry out'],
        ['US triple roll', '27 in × 81 ft', '182 sq ft', 'Some trade lines'],
        ['UK / EU roll', '53 cm × 10.05 m', '≈ 57 sq ft', 'One roll, one price'],
        ['US "Euro width"', '20.5 in × 33 ft', '≈ 56 sq ft', 'Imported designer papers'],
      ],
      note: 'Nominal coverage is the paper on the roll, not the wall it will cover. See below.',
    },
    {
      t: 'p',
      v: 'The last row is the one that trips up people ordering from an American showroom that carries European lines. A narrow 20.5 in imported roll and a 27 in domestic roll cover similar area, but they need different numbers of strips for the same wall, so you cannot substitute one for the other in a quantity you were quoted.',
    },

    { t: 'h2', v: 'Nominal coverage is not usable coverage' },
    {
      t: 'p',
      v: 'A single roll holds 60.75 sq ft of paper. It will not cover 60.75 sq ft of wall. Every strip is cut a little longer than the wall is tall, and on a patterned paper it is cut longer still to reach a whole repeat, and the tail end of each roll is too short to reach the ceiling. All of that comes off the top.',
    },
    {
      t: 'p',
      v: 'The old trade rule is to count on about 30 to 35 sq ft of usable coverage per single roll. That is pessimistic for an average job and about right for a bad one. In the worked example below the figure comes out at 41 sq ft — around two thirds of nominal — which is a reasonable planning assumption for a normal room with a modest repeat.',
    },

    { t: 'h2', v: 'The small-room penalty' },
    {
      t: 'p',
      v: 'Because you buy in bolts, the rounding happens twice: once when you round strips up to rolls, and again when you round rolls up to a whole bolt. On a big room those two roundings disappear into the total. On a small room they can add a quarter to the bill.',
    },
    {
      t: 'p',
      v: 'A 9 × 7 ft powder room, 8 ft ceiling, one door, in a 12 in straight-match paper on standard US stock:',
    },
    {
      t: 'table',
      head: ['Step', 'Working', 'Result'],
      rows: [
        ['Net wall width', '2 × (9 + 7) − 3', '29 ft'],
        ['Strip length', '96 in + 4 in trim', '100 in'],
        ['Cut length', 'ceil(100 ÷ 12) = 9 repeats', '108 in'],
        ['Strips needed', 'ceil(29 × 12 ÷ 27)', '13 strips'],
        ['If singles existed', 'floor(324 ÷ 108) = 3 per roll', '5 single rolls'],
        ['Buying in bolts', 'floor(648 ÷ 108) = 6 per bolt', '3 bolts = 6 singles'],
      ],
    },
    {
      t: 'html',
      v: 'The maths says five singles. The store sells three bolts, which is six. You pay for a full extra single roll and take it home unopened. On a small feature wall the effect is sharper still — a job needing two singles buys one bolt and uses half of it. This is not a reason to order short; it is a reason to know it is happening, and to check whether a narrower European-width paper in the same design lands on a better boundary. The <a href="/wallpaper-calculator/">wallpaper calculator</a> takes roll width and length directly, so you can run both formats against the same room.',
    },

    { t: 'h2', v: 'Reading a quote without getting caught' },
    {
      t: 'ul',
      v: [
        'Ask which unit the price is in. "Per roll" from a US supplier usually means per single; from a UK supplier it means the actual roll.',
        'Convert to price per bolt before comparing two US suppliers, and to price per usable square foot before comparing across regions.',
        'Check the roll dimensions on every quote. Designer and imported lines vary far more than the standard sizes suggest, and a 20.5 in width changes your strip count.',
        'Confirm what a stated quantity means. "You need eight rolls" from a showroom almost always means eight singles, which is four bolts.',
      ],
    },

    { t: 'h2', v: 'Order it all at once' },
    {
      t: 'p',
      v: 'Whatever the unit, buy the whole job in one order and check that every bolt carries the same batch or dye lot number. Colour drifts between print runs — not dramatically, but enough to read as a shadow down one seam in daylight, and there is no fixing it short of restripping the wall.',
    },
    {
      t: 'html',
      v: 'Buy one bolt more than you need, from that same lot. Unopened bolts are returnable at most retailers, which makes the spare close to free insurance against a torn strip, a misjudged corner, or a repair three years from now when the pattern is discontinued. If you are still working out how many strips the room takes, the <a href="/guides/how-to-calculate-wallpaper/">step-by-step method</a> covers the measuring order.',
    },

    { t: 'h2', v: 'The short version' },
    {
      t: 'p',
      v: 'A US single roll is a price, not a package. Double it to get the bolt you actually carry home, expect roughly two thirds of the nominal coverage to reach the wall, and assume small rooms will round up to a bolt you only half use. UK and EU buyers have it simpler: one roll, one price, about 57 sq ft, and no doubling to keep track of.',
    },
  ],
};
