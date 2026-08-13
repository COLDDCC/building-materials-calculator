export default {
  title: 'How to Calculate Wallpaper: A Step-by-Step Method',
  description:
    'Measure four numbers, work out how many strips one roll yields, and divide. The step-by-step method that accounts for pattern repeat — and why the usual area calculation leaves you a roll short.',
  calculator: 'wallpaper-calculator',
  keyword: 'how to calculate wallpaper',
  updated: '2026-07-31',
  body: [
    {
      t: 'p',
      v: 'To calculate wallpaper, count strips rather than square feet. Measure the total width of wall you are papering, divide by the roll width to get the number of strips, then work out how many of those strips you can actually cut from one roll once the pattern repeat is accounted for. Divide the first number by the second and round up. That final rounding is where the whole job lives.',
    },
    {
      t: 'p',
      v: 'It takes about five minutes with a tape measure and the roll label. Here is the order to do it in.',
    },

    { t: 'h2', v: 'The four numbers you need' },
    {
      t: 'ul',
      v: [
        'Total wall width — the perimeter of the room, or the width of the single wall if you are doing a feature wall.',
        'Ceiling height — floor to ceiling, at the tallest point if the floor is uneven.',
        'Pattern repeat — printed on the roll label, in inches or centimetres. A plain or textured paper has no repeat.',
        'Roll size — width and length, also on the label. This varies more than people expect, and it is the number most often assumed rather than read.',
      ],
    },
    {
      t: 'p',
      v: 'Measure the room, do not calculate it from the floor plan. Rooms are rarely the dimensions on the drawing, and a two-inch error across four walls is most of a strip.',
    },

    { t: 'h2', v: 'Step 1: find the net wall width' },
    {
      t: 'p',
      v: 'Add the four wall lengths together. Subtract about three feet for each doorway — that width of wall genuinely does not get papered.',
    },
    {
      t: 'p',
      v: 'Do not subtract standard windows. This feels wrong the first time, but you still have to hang short strips above and below a window, and each of those strips has to be cut from the correct point in the pattern. The paper is consumed whether or not the wall behind it exists. Only deduct glazing that runs floor to ceiling, where there is genuinely no wall to cover.',
    },

    { t: 'h2', v: 'Step 2: find the strip length' },
    {
      t: 'p',
      v: 'Take your ceiling height and add a trim allowance — two inches at the top and two at the bottom is standard, so four inches total. That allowance is not optional padding. Ceilings are not level, floors are not flat, and you trim each strip to fit after it is on the wall. Cut to exact height and the first strip that meets a low spot in the ceiling is wasted.',
    },

    { t: 'h2', v: 'Step 3: round the strip up to a whole repeat' },
    {
      t: 'p',
      v: 'This is the step that separates a wallpaper calculation from a paint calculation, and it is the one that gets skipped.',
    },
    {
      t: 'p',
      v: 'For the pattern on one strip to line up with the pattern on the strip beside it, both strips have to start at the same point in the design. You cannot cut at exactly strip length; you cut at the next whole repeat above it, and the remainder is offcut. With a 25 in repeat and a 116 in strip, you are cutting at 125 in — nine inches of every strip goes in the bin before you have made a single mistake.',
    },
    {
      t: 'p',
      v: 'Drop match paper works slightly differently. The design shifts sideways by half a repeat between adjacent strips, so the useful step is half the repeat rather than the whole one. Counter-intuitively this often wastes marginally less, because the smaller step lands closer to your strip length. Free match paper — grasscloth, most textures, plain colours — skips this step entirely: cut at strip length and move on.',
    },
    {
      t: 'callout',
      v: 'Rule of thumb: repeat length matters more than match type. A four-inch repeat costs you almost nothing however it matches. A twenty-five-inch repeat is expensive either way.',
    },

    { t: 'h2', v: 'Step 4: how many strips come out of one roll' },
    {
      t: 'p',
      v: 'Divide the roll length by your cut length and round down. Always down. A roll that yields 2.8 strips yields two strips — the remaining 0.8 is not tall enough to reach the ceiling and has nowhere to go except above a door.',
    },
    {
      t: 'p',
      v: 'That rounding down is exactly what the area method glosses over, and it is why the area method under-orders. Dividing total wall area by total roll area silently counts every leftover fragment as usable paper. It is never usable.',
    },

    { t: 'h2', v: 'Step 5: divide and round up' },
    {
      t: 'p',
      v: 'Strips needed is the net wall width divided by the roll width, rounded up. Rolls needed is strips needed divided by strips per roll, rounded up again. Two ceiling functions, one after the other, and you have your order.',
    },

    { t: 'h2', v: 'A worked example' },
    {
      t: 'p',
      v: 'A 12 × 11 ft bedroom with 9 ft ceilings, one door, papered in a UK-format roll (53 cm × 10.05 m) with a 25 in drop match.',
    },
    {
      t: 'table',
      head: ['Step', 'Working', 'Result'],
      rows: [
        ['Perimeter', '2 × (12 + 11)', '46 ft'],
        ['Less one door', '46 − 3', '43 ft net width'],
        ['Strip length', '108 in + 4 in trim', '112 in'],
        ['Half repeat (drop match)', '25 ÷ 2', '12.5 in'],
        ['Cut length', 'ceil(112 ÷ 12.5) = 9 → 9 × 12.5', '112.5 in'],
        ['Strips per roll', 'floor(395.7 ÷ 112.5)', '3 strips'],
        ['Strips needed', 'ceil(43 × 12 ÷ 20.87)', '25 strips'],
        ['Rolls', 'ceil(25 ÷ 3)', '9 rolls'],
      ],
    },
    {
      t: 'p',
      v: 'Nine rolls. Note how close the cut length landed to the strip length — 112.5 against 112 — which is the drop match doing its job. Had this been a straight match at the same 25 in repeat, the cut length would have jumped to 125 in, the roll would have yielded only three strips still, but the waste per strip would have tripled.',
    },

    { t: 'h2', v: 'The mistake worth avoiding' },
    {
      t: 'html',
      v: 'Run the same room through the area method and you get something different. 43 ft of wall at 9 ft high is 387 sq ft; a UK roll covers about 57 sq ft; 387 divided by 57 is 6.8, so you order seven rolls. You are two rolls short, and you find out on the fourth wall. This is not a rounding quibble — it is the difference between finishing the room and waiting three weeks for a reprint in a dye lot that does not match. The <a href="/wallpaper-calculator/">wallpaper calculator</a> does the strip-by-strip version automatically, including the drop-match half-repeat.',
    },

    { t: 'h2', v: 'Two things about buying' },
    {
      t: 'p',
      v: 'American wallpaper is priced by the single roll and packaged as a double. A US single roll is about 27 ft of paper; the bolt you carry out of the store holds 54 ft. If a US price looks like half what you expected, you are reading a single-roll price for a double-roll bolt. Order in whole bolts and know which unit the quote is in.',
    },
    {
      t: 'p',
      v: 'Buy one spare roll from the same dye lot, every time. Dye lots shift between print runs — enough to read as a different colour in daylight — and a roll bought six months later will not match the wall. The spare covers the strip you tear, the corner you misjudge, and the repair you will need in three years. Unopened rolls are usually returnable, so it is the cheapest insurance on the job.',
    },

    { t: 'h2', v: 'The short version' },
    {
      t: 'html',
      v: 'Net wall width divided by roll width, rounded up, gives strips. Roll length divided by cut length, rounded down, gives strips per roll. Divide the first by the second, round up, add a spare. If you would rather not do the two roundings by hand, put your measurements into the <a href="/wallpaper-calculator/">wallpaper calculator</a> and it will show the cut length and the waste percentage alongside the roll count.',
    },
  ],
};
