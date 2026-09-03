// 每个计算器一枚示意图标：24x24, 纯直线/简单折线, 描边不填色，跟蓝图线稿风格统一。
// 目的不是装饰，是让不认识英文的人也能从图形猜出这是哪种材料。
export const ICONS = {
  // 两张石膏板错缝拼接，缝上有螺丝钉的小十字
  'drywall-calculator':
    'M3 4h18v16H3z M3 12h18 M9 4v8 M15 12v8 M6.3 7.7l1.4 1.4M7.7 7.7l-1.4 1.4 M17.3 15.7l1.4 1.4M18.7 15.7l-1.4 1.4',
  // 卷筒立面：一卷带花纹重复的墙纸
  'wallpaper-calculator':
    'M4 3c0-.8 1.8-1.5 4-1.5s4 .7 4 1.5-1.8 1.5-4 1.5-4-.7-4-1.5z M4 3v16c0 .8 1.8 1.5 4 1.5 M12 3v3 M12 9v3 M12 15v3',
  // 3x3 瓷砖网格，缝隙清楚
  'tile-calculator': 'M3 3h18v18H3z M3 9h18 M3 15h18 M9 3v18 M15 3v18',
  // 墙脚踢脚线：地板 + 墙面，墙角贴着一条凸起的踢脚板
  'baseboard-calculator': 'M3 21h18 M3 21V3 M3 18h2.5v-3h2.5',
  // 一摞码放的木板
  'board-foot-calculator': 'M3 6h18v3H3z M3 11h18v3H3z M3 16h18v3H3z',
  // 错缝砌筑的空心砖墙
  'concrete-block-calculator':
    'M3 4h6v5H3z M9 4h6v5H9z M15 4h6v5h-6z M6 9h6v5H6z M12 9h6v5h-6z M3 14h6v5H3z M9 14h6v5H9z M15 14h6v5h-6z',
  // 两根龙骨间的蓬松保温棉：标准建筑制图里的绝缘材料锯齿符号
  'insulation-calculator':
    'M5 3v18 M19 3v18 M5 6.5l3.5 2-3.5 2 3.5 2-3.5 2 3.5 2-3.5 2 M19 6.5l-3.5 2 3.5 2-3.5 2 3.5 2-3.5 2 3.5 2',
  // 树皮覆盖物花坛：梯形花坛边框 + 几撇覆盖物纹理
  'mulch-calculator': 'M2 19h20 M4.5 19l2-9h11l2 9 M8.5 14.5l1.2-1.2 M12 12.5l1.2-1.2 M15.5 14.5l1.2-1.2',
  // 铺满碎石的料斗/车斗
  'gravel-calculator':
    'M3 10l3-5h12l3 5 M3 10h18v9H3z M7 13.5l1-1 M10.5 16l1-1 M14 13l1-1 M17 16l1-1 M9 15.5l1-1',
  // 侧视台阶剖面
  'stair-calculator': 'M3 21h4v-4h4v-4h4v-4h4v-4h4',
};
