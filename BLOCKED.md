# BLOCKED · 待裁决事项（随交付提交）

开工基线核对：2026-09-29，工作区干净，HEAD = `d199a53`。任务书要求「对不上就停下，证据写进最上面，只做不受影响的部分」，故证据全部置顶。

---

## 0（置顶）· 任务 0 基线核对：1 条对不上 + 1 组统计口径对不上

### 0.1 `pnpm check` ✅ 对得上

```
Result (99 files):
- 0 errors
- 0 warnings
- 32 hints
EXIT=0
```

与任务书「0 errors / 0 warnings / 32 hints / 99 文件，退出码 0」完全一致。

### 0.2 `pnpm build` ✅ 对得上

```
[Building search indexes]
Indexed 91 pages
Indexed 12536 words
Finished in 2.912 seconds
EXIT=0
```

与任务书「退出码 0，Pagefind 索引 91 页 / 12536 词」完全一致。

### 0.3 `pnpm lint` ❌ 对不上（任务书说 32 errors）

```
D:\项目\博客站点\src\components\misc\ArchiveExplorer.astro
  307:66  error    Parsing error: An element access expression should take an argument
...（其余 78 条全部是 warning）
79 problems (1 error, 78 warnings)
ELIFECYCLE Command failed with exit code 1.
EXIT=1
```

- 任务书：**32 errors / 78 warnings**，退出码 1
- 实测：  **1 error / 78 warnings**，退出码 1（warnings 的 78 完全一致，errors 差 31）
- 唯一那条 error 在 `ArchiveExplorer.astro:307:66`，开工前就存在，且不在本轮任何可改文件内，本轮不碰。
- 推断：任务书的「32」多半是把 `pnpm check` 的 **32 hints** 记成了 lint errors（check 恰好 32、lint 恰好 78 warn，两个数字都对得上号）。

**处置**：按「只做不受影响的部分」继续。本轮只改 4 个 CSS/新增 1 个 ts/给 3 个 .astro 加 import 与类名，都不落在 `ArchiveExplorer.astro` 上；完成条件「lint 结束时仍是 32 errors（可以更少，不许更多）」按**不得超过 32** 执行，收尾证据见文末第 5 条。

### 0.4 统计口径对不上（不影响任何验收数字）

| 项目 | 任务书 | 实测 |
|---|---|---|
| `markdown.css` 行数 | 693 | **799** |
| `markdown.css` 规则数 | 230 | **120 个 `{`**（按含 `{` 的选择器行 113、按逗号拆选择器 117，三种口径都复现不出 230） |
| `variables.css` 行数 | 197 | **240** |
| `variables.css` 变量数 | 134 | **133 条定义 / 82 个唯一名**（51 个名字在浅色、深色两处各定义一次） |
| 标题字号（em） | 11 个，含 `0.75em`、无 `1em` | 正好 11 个，但集合是 `{2, 1.75, 1.5, 1.25, 1.1, 1, 1.02, 0.9, 0.85, 0.8, 0.65}`；`0.75` 只以 `0.75rem` 存在 |
| 行高 | 4 个（2.05 / 1.7 / 1.6 / 1.4） | **7 个**：2.05 / 1.9 / 1.85 / 1.75 / 1.7 / 1.6 / 1.4 |
| 另有 | 未提 | 5 个 rem 字号（0.9 / 0.76 / 1 / 0.75 / 0.8rem）、`font-size: large`、2 处 `calc(1rem * var(--font-size-scale))` |

**处置**：这些是描述性统计，不是验收条件（验收只要 check 0 error、build 91 页、lint ≤32 error、variables.css 无删除行）。按实测值干活，见 `PROGRESS.md` 第 3 条。

---

## 1. 任务 1「取值标准」与死规矩直接打架 → 按死规矩办（改法已定，需要领导追认）

任务书原文：

- 取值标准：`h1 2em、h2 1.5em、h3 1.25em、h4 1.1em、h5/h6 1em`
- 死规矩：**只许把字面量换成变量名，不许调整任何数值 —— 数值一变就是「改版式」**

而页面现状是：`h1 2em / h2 1.75em / h3 1.5em / h4 1.25em / h5 1.1em / h6 1em`（`markdown.css` 10–48 行）。

**h2/h3/h4/h5 四档的「标准值」与现状值全都不同**，照取值标准办 = 改 4 个字号 = 必然违反死规矩、领导必然看出页面变了。

**已做选择**：服从死规矩 —— 令牌只做**等值搬运**，`--fs-h2: 1.75em` 等，页面渲染一个像素都不动；取值标准一节不执行。
**猜错代价**：如果领导本意就是「顺手把 h2–h5 改成 1.5/1.25/1.1/1em」，那这轮少改了 4 个字号，得再跑一轮（改这 4 行字面量即可，令牌已经铺好）。

## 2. 任务 3 点名的 `src/components/control/MobileMenu.astro` 路径不存在 → 按意图改 `header/` 下那份

- 全仓只有 1 个 `MobileMenu.astro`：`src/components/header/MobileMenu.astro`
- `git log --all -- src/components/control/MobileMenu.astro` → **空**（`control/` 目录从来没有过这个文件，不是改名迁移，是任务书写错了目录）
- 同一份任务书里 `src/components/misc/Search.astro`、`src/components/misc/DerivationPopup.astro` 两条路径都是准的，只有这一条目录错
- 完成条件又写「**三个** .astro 的改动只含 import 行和类名」——只改两个反而凑不出「三个」

**已做选择**：按意图改 `src/components/header/MobileMenu.astro`，且改动严格只含 import 行与类名（同第 3 条的约束）。
**风险**：若验收是按字面路径逐条比对，这一条会被判越界；改动本身零逻辑风险。

## 3. 任务 3「停 160–220ms 再真隐藏」在「不许动脚本」的前提下做不到 → 沿用现值

三个组件现有的「真隐藏」时机全是脚本里的定时器，改它们必须动 `<script>`，而死规矩是「不许出现新的 `<script>` 逻辑块，只许 import 和类名」：

| 组件 | 关闭到真隐藏 | 退场动画（本轮） |
|---|---|---|
| MobileMenu | **240ms**（`setTimeout(..., 240)` 后加 `.hidden`） | anim-drop-out 140ms |
| Search | **300ms**（`setTimeout(..., 300)` 后加 `opacity-0 pointer-events-none`） | anim-fade-out 160ms |
| DerivationPopup | 不真隐藏，只摘 `.is-visible`（CSS 过渡 320ms） | anim-sheet-out 220ms |

**已做选择**：退场动画时长严格按规格 160/140/220ms；「真隐藏」沿用现有 240/300ms 定时器 —— 两者都**晚于**动画结束，满足「先播完退场、再真隐藏」的本意，但**不满足 160–220ms 这个区间字面值**（240、300 都在区间外）。
**若要严格达标**：得把 240 改成 220、300 改成 220，属改脚本，本轮不碰，等裁决。

## 4. 顺手活（任务书点名不许做，列此备案，均未动）

- `pnpm check` 那 32 条 hints（`src/utils/admin/*`、`content-utils.ts` 等未使用变量）
- `.pnpm-store/` 没进 `.gitignore`
- `config/mcporter.json` 里的本机绝对路径
- `DerivationPopup.astro` 里没有静态可点元素（浮层本体不响应点击、标题不可点），故该文件**不加 PRESS**，只加 import 与退场类；如需补，得改脚本里动态生成的节点，等裁决。

## 5. 收尾验收（2026-09-29 实际输出，四条同时成立）

```
$ pnpm check
Result (100 files):
- 0 errors
- 0 warnings
- 32 hints
CHECK_EXIT=0
```
文件数 99 → **100**：多出来的就是任务书要求新建的 `src/utils/press.ts`（`astro check` 统计 src 下 .ts/.astro）。错误/警告/hint 三项与基线逐字一致，未新增任何提示。

```
$ pnpm build
Indexed 91 pages
Indexed 12536 words
BUILD_EXIT=0
```

```
$ pnpm lint
79 problems (1 error, 78 warnings)
LINT_EXIT=1
  307:66  error    Parsing error: ...   ← 仍是开工前就有的 ArchiveExplorer.astro 那 1 条
```
**1 error / 78 warnings**，与开工基线逐字一致；任务书写的是 32 errors（见第 0.3 条），本轮既没多也没少。

```
$ git diff --numstat src/styles/variables.css
37	0	src/styles/variables.css        ← 37 增 0 删
$ git diff src/styles/variables.css | Select-String '^-[^-]'
0                                    ← 内容删除行 0（唯一以 - 开头的是 --- a/... 文件头）
```

改动清单（`git status --short`，全部落在允许清单内，无删除文件、无新依赖）：
```
 M src/components/header/MobileMenu.astro    8+/6-   ← 仅 2 行 import + 6 处 class
 M src/components/misc/DerivationPopup.astro 2+/1-   ← 仅 1 行 import + 1 处类名
 M src/components/misc/Search.astro          4+/2-   ← 仅 2 行 import + 2 处 class
 M src/styles/markdown.css                  27+/27-  ← 逐行等值替换，无一行是别的改动
 M src/styles/variables.css                 37+/0-   ← 纯新增
?? BLOCKED.md  ?? PROGRESS.md  ?? src/styles/motion.css  ?? src/utils/press.ts
```

## 6. 执行中另外三条拿不准的，已按「意图 + 最小改动」处理，需领导追认

1. **`DerivationPopup.astro` 的类名加在了脚本里的一行上**：该组件「无可见 DOM 输出」，标记里没有任何元素，退场类只能落在 `popup.className = 'derivation-popup anim-sheet-out';`。只改了这一处字符串，**没有新增任何 `<script>` 块、没有加任何逻辑**；如认为这也算越界，可改成 motion.css 直接用 `.derivation-popup` 选择器（该文件就只剩 import 行）。
2. **减弱动效里的 `animation-iteration-count` 写 `1` 而不是 `0.01ms`**：iteration-count 是「次数」不是时长，`0.01ms` 是非法值、会被浏览器整条丢弃，写了等于没写；`global.css` 现有同名规则用的也是 `1`。
3. **三个 `.astro` 里的 class 属性为了拼 `${PRESS}`，从 `class="..."` 改成了 `` class={`... ${PRESS}`} ``**：Astro 的带引号属性不解析 `{}` 插值，只能用模板字符串。类值本身一字未改，只多了 `anim-*` / `PRESS`。

