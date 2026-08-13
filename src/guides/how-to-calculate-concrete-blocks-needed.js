export default {
  title: 'How to Calculate Concrete Blocks Needed',
  description:
    'The number of concrete blocks a wall needs comes from one figure: 1.125 blocks per square foot. Here is where that number comes from, and the mistake that makes most estimates 7% too high.',
  calculator: 'concrete-block-calculator',
  keyword: 'how to calculate concrete blocks needed',
  updated: '2026-07-31',
  body: [
    { t: 'p', v: 'A wall needs 1.125 concrete blocks per square foot of face. Multiply your wall length by its height, subtract any openings, multiply by 1.125, add a waste factor of about 5%, and round up. That is the whole calculation, and it holds for every standard block size from 4 in through 12 in.' },
    { t: 'p', v: 'The reason it holds — and the reason so many estimates come out wrong — is worth two minutes.' },

    { t: 'h2', v: 'Why 1.125, and not something you can measure' },
    { t: 'p', v: 'Pick up a standard concrete block and put a tape on it. You will read roughly 7⅝ in tall by 15⅝ in long, not the 8 × 16 printed on the bin label. That is not a defect. Block is manufactured undersized by ⅜ in in each direction so that once it is laid with a ⅜ in mortar joint, the block plus its joint occupies exactly 8 × 16 in of finished wall.' },
    { t: 'p', v: 'Eight by sixteen inches is 128 square inches, or 0.889 square feet. One divided by 0.889 gives 1.125 blocks per square foot. That figure already contains the mortar, which is why you never add anything for joints afterwards.' },
    { t: 'callout', v: 'Measure the block instead of using the nominal size and you get 1.21 blocks per square foot — about 7.5% high. On a 20 × 8 ft wall that is thirteen blocks you paid for, hauled, and cannot lay.' },

    { t: 'h2', v: 'The calculation, step by step' },
    { t: 'ol', v: [
      'Measure the wall length and height in feet and multiply them for gross area.',
      'Subtract the area of any doors, windows or other openings.',
      'Multiply the net area by 1.125.',
      'Add a waste factor. Five percent is normal for a straight wall; go to eight or ten if the wall has corners, curves or many openings.',
      'Round up to a whole block, then round again to the nearest pallet if you are within about ten blocks of one.',
    ] },

    { t: 'h2', v: 'A worked example' },
    { t: 'p', v: 'A garden wall 20 ft long and 8 ft high, no openings, standard 8 in block.' },
    { t: 'table', head: ['Step', 'Calculation', 'Result'], rows: [
      ['Gross area', '20 × 8', '160 sq ft'],
      ['Net area', 'no openings', '160 sq ft'],
      ['Raw block count', '160 × 1.125', '180 blocks'],
      ['Waste at 5%', '180 × 1.05', '189 blocks'],
      ['Courses', '96 in ÷ 8 in', '12 courses'],
      ['Mortar', '189 ÷ 27 per bag', '7 bags at 80 lb'],
    ] },
    { t: 'p', v: 'Order 189 blocks. Two pallets of 90 gets you 180, so you are ordering two pallets plus nine loose, or three pallets if the yard prices loose block badly — which many do.' },

    { t: 'h2', v: 'A wall with openings' },
    {
      t: 'p',
      v: 'Openings come off as area, before the multiplier. Put a standard 3 × 7 ft door and a 4 × 3 ft window into that same 20 × 8 ft wall and you deduct 21 plus 12, so 33 sq ft.',
    },
    {
      t: 'table',
      head: ['Step', 'Calculation', 'Result'],
      rows: [
        ['Gross area', '20 × 8', '160 sq ft'],
        ['Less openings', '160 − 33', '127 sq ft'],
        ['Raw block count', '127 × 1.125', '143 blocks'],
        ['Waste at 5%', '143 × 1.05', '151 blocks'],
        ['Mortar', '151 ÷ 27 per bag', '6 bags'],
      ],
    },
    {
      t: 'p',
      v: 'Thirty-eight blocks less than the solid wall, which is most of half a pallet. It is worth deducting openings properly on anything with more than one of them — unlike drywall, where small deductions are often ignored because the offcuts are unusable, block offcuts are reusable and the saving is real.',
    },
    {
      t: 'p',
      v: 'One thing openings do not change is the half-block question. Corners, jambs and the ends of alternating courses all need half blocks, and it is tempting to count them separately. Do not. Two halves make a whole, they come out of the same total, and most yards will cut them from your order or supply them at the same unit price.',
    },
    { t: 'h2', v: 'What about mortar?' },
    { t: 'p', v: 'Mortar scales with block count, not wall area, because you are buttering a fixed amount of face on each block. One 80 lb bag of Type N or S mix lays about 27 standard 8 in blocks at a ⅜ in joint. Narrower 4 in partition block stretches to roughly 54 per bag; 12 in block drops to about 18. Buy one spare bag on anything over 200 blocks.' },

    { t: 'h2', v: 'When the count changes' },
    { t: 'ul', v: [
      'A ½ in mortar joint makes each block occupy slightly more wall, so the count falls a little. The calculator recalculates the face area rather than keeping 1.125 fixed.',
      'Half blocks at corners and openings do not change the total — they come out of the same count, since two halves make a whole.',
      'Filling cores with grout does not change the block count, but it adds roughly 0.28 cu ft of concrete per 8 in block, which is close to two cubic yards on a wall this size.',
    ] },

    { t: 'h2', v: 'The short answer' },
    { t: 'p', v: 'Net wall area × 1.125 × 1.05, rounded up. Use the nominal 8 × 16 in block face, never the tape measure reading, and the number you get will match what the mason actually lays.' },
  ],
};
