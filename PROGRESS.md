# 建材计算器站 · 建设进度

## 阶段一：配置层 + 内容层 + 引擎层 —— 完成
- `src/lib/units.js` 英制/公制换算（compute 一律以英制为基准单位）
- `src/lib/registry.js` 自动注册表：往 src/calculators/ 丢文件即自动收录
- `src/scripts/calc.js` 客户端引擎，按 slug 动态加载配置分片
- `src/calculators/*.js` P0 十个计算器配置
- `src/copy/*.js` P0 十页独立内容，无跨页复用

## 阶段二：渲染层 —— 完成
- `src/layouts/Base.astro` head / canonical / JSON-LD / 面包屑 / 页眉页脚
- `src/components/Calculator.astro` 从配置渲染表单 +「材料票」结果面板
- `src/pages/[slug].astro` 3.1–3.8 八个区块，10 页由配置自动生成
- `src/pages/index.astro` 首页分组 + 站内搜索
- 设计方向：估算单（蓝图墨蓝 / 纸白 / 卷尺黄），零 webfont

### 实测
| 指标 | 规格要求 | 实测 |
|---|---|---|
| 页面 JS（gzip） | < 80 KB | 3.9 KB（引擎 2.6 + 配置 1.3） |
| CSS（gzip） | — | 4.9 KB |
| Schema | SoftwareApplication + FAQPage + Breadcrumb | 三种齐全 |
| 首屏计算器 | 免滚动免点击 | 是，结果在构建期已算出，无 CLS |

### 十个计算器人工验算（与各页算例逐一对上）
concrete block 189 块 · drywall 14 张 · wallpaper 8 卷 · tile 130 片 · baseboard 4 根
insulation 391 袋 · mulch 1.56 yd³ · gravel 8.71 t · stair 15 级 · board foot 40 bf

墙纸对花算法反向验证：同一房间用竞品的「面积 ÷ 单卷面积」得 7 卷，逐卷取整得 8 卷 —— 少订一卷，
与 3.9 节的判断一致，这条差异化论点在代码层面站得住。

## 阶段三：站点层 —— 完成
- `/guides/` 内容中心 + `guides/[slug].astro` 文章模板（Article schema），已发首篇
- about / contact / privacy / disclaimer 四页，均为原创文案
- `sitemap.xml`（17 条 URL）、`robots.txt`、`favicon.svg`
- `public/_redirects`：cinder-block 与 cmu 两个同义词 301 到 concrete-block（Cloudflare Pages 真 301），
  Astro `redirects` 生成 meta-refresh 兜底
- 计算器页只渲染已发布的支撑文章链接，站内零 404

### 站内链接核查
19 个页面 226 条站内链接，无死链。每个计算器页的站内入链数（第 7 节要求 ≥3）：
concrete block 8 · insulation 7 · baseboard 6 · drywall 6 · tile 6 · stair 5 · gravel 4 · mulch 4 · wallpaper 4 · board foot 3
（mulch 初查只有 2 条，已通过给 concrete block 与 stair 增补邻接关系补足）

## 阶段四：支撑文章 —— 完成（8 篇）

| # | slug | 词数 | 对应计算器 |
|---|---|---|---|
| 1 | how-to-calculate-concrete-blocks-needed | 897 | concrete block |
| 2 | how-to-calculate-wallpaper | 1289 | wallpaper |
| 3 | wallpaper-pattern-repeat-explained | 1388 | wallpaper |
| 4 | single-vs-double-roll-wallpaper | 1186 | wallpaper |
| 5 | how-much-drywall-do-i-need | 1168 | drywall |
| 6 | drywall-thickness-guide | 1351 | drywall |
| 7 | how-many-screws-per-drywall-sheet | 1089 | drywall |
| 8 | what-is-a-waste-factor | 1029 | 全站枢纽 |

全部落在第 6 节要求的 800–1500 区间。每篇正文至少 2 处内链回对应计算器页。

**防跨页复用的做法**（第 7 节，优先级最高）
- 每篇算例与计算器页算例用不同房间尺寸、不同参数，全部先用 node 跑实算再落笔
- 角度错开：计算器页讲公式推导，文章讲操作顺序 / 选型 / 采购
- 与计算器页重合的事实（损耗率、接缝膏用量、螺丝盒规格等）主动改写句式

**几处靠实算立论的差异点**
- 墙纸：面积除法比逐卷取整少订 1–2 卷，两个例子都验过
- 花色循环：36 in 要 7 卷而 40 in 只要 5 卷，卷数是阶梯式而非递增
- 损耗率：小房间每平方英尺切边多近 3 倍，但取整会吸收掉差异，所以损耗率反而在大工程上更关键

## 阶段五：验收 —— 待做
第 10 节清单逐条核对、Rich Results Test、真机移动端实测、Search Console 提交

## 上线准备（2026-08-13 已做，build 已在本机 Node 22 复跑通过）
- **构建可复现**：本机 Node 22.14.0 跑 `npm run build` 通过（25 页），并修正了 rolldown 原生绑定缺失问题（旧 node_modules 是 Node 20 装的，已删掉重装）。`dist/` 内链接为正常路径（`/drywall-calculator/`），此前预览文件里的 `#` 前缀链接非真实产物。
- **锁版本**：`.nvmrc`（22.14.0）+ `package.json` engines `>=22.12.0` + `wrangler.toml`（Pages 直传预留）。Cloudflare Pages 项目设置里再设 `NODE_VERSION=22.14.0`。
- **域名单点配置**：`PUBLIC_SITE_URL` 环境变量统一喂给 astro.config（`loadEnv`）与 `SITE.domain`（见 `.env.example`）。不设时回退 `https://example.com`。邮箱收敛为 `SITE.email`（contact/privacy 引用）。canonical / OG / sitemap / robots / JSON-LD 随该变量联动。
- **接入 GA4**：Base.astro 按 `PUBLIC_GA4_ID` 注入 gtag（不设则不加载任何脚本），隐私政策与之匹配。注意：带上线 GA 后，EU/UK 流量建议仍补 cookie 同意横幅（尚未做）。
- **分享卡片**：新增 `public/og.png`（1200×630），og:image / twitter:card 已配（summary_large_image）。
- **404**：新增 `src/pages/404.astro`，站内导航兜底。
- **git**：已 `git init`（master，含 .gitignore），待推 Cloudflare Pages。

## 仍需人工处理（我做不了）
- 第 0 节 SERP DR 复核，需 Ahrefs/Semrush 账号
- P0 其余 9 个词的 Semrush 批量验证，低于 500 月搜索量的砍掉
- 域名确定：`src/lib/registry.js` 里 SITE.domain 暂填 example.com
- 各配置文件末尾的单价与系数（每袋砂浆砌 27 块、每张板 $12–20 等）需按美国主流建材商实际规格复核
