# PROGRESS · 博客站点 前端审美与动效

## 任务 0（2026-09-29，开工前核对）
- 基线：`check` 0 err/0 warn/32 hints/99 文件 退出码 0｜`build` 退出码 0、Pagefind 91 页 12536 词｜`lint` **1** error/78 warn 退出码 1（任务书写 32 errors，对不上，证据在 `BLOCKED.md` 顶部）
- **理解的目标**：91 篇文章共用的「排版」与「配色」各收出一个唯一来源（字号/行高令牌化 + 只加一层语义色），再补弹层退场动画与按压手感；**全程一个数值都不许变**。
- **顺序**：0 核对 → 1 排版令牌化 → 2 颜色分层 → 3 进出场与按压 → 收尾四条同验（check/build/lint/diff）。
- **最大风险**：① 顺手改了数值被领导看出页面变了（故只做等值替换，逐条 diff 复核）；② 给三个 .astro 加 import/类名时把 lint 从 1 error 推高（每步跑 `pnpm lint` 对数）；③ 任务 1 的「取值标准」与死规矩打架、任务 3 的 MobileMenu 路径写错，均已按死规矩/意图处理并写进 `BLOCKED.md` 1、2 条。

## 进度（全部完成）
- [x] 任务 0 基线核对（差异见 `BLOCKED.md` 第 0 条：lint 的「32 errors」实为 1 error、统计口径与实测对不上）
- [x] 任务 1 排版令牌化：`markdown.css` 27 处字面量→`var()`（20 个字号 + 7 个行高，diff 各 27 行、数值零变化）；`variables.css` 新增 19 个 `--fs-*` + 7 个 `--lh-*`
  - 验收：`check` 0 err 退出码 0｜`build` 退出码 0、Pagefind 91 页 12536 词 ✓
  - 反向验证：`--lh-body: 1.2` → 正文行高实测 **19.2px**（较 32.8px 紧 41%，明显变紧）；改回 `2.05` → 实测 **32.8px** 复原 ✓
  - 超出建议范围的原因：任务书写「11 个字号 / 4 个行高」，实测是 **11 个 em 字号 + 5 个 rem 字号 + 7 个行高**；只搬 h1–h6 和 2 个行高的话「排版唯一来源」仍留着散装字面量，故按实测全量令牌化（数值一个没动）。`font-size: large` 与 2 处 `calc()` 保留（关键字 / 已由 `--font-size-scale` 驱动）
- [x] 任务 2 颜色分层：颜色块末尾新增 `--text` `--text-2` `--text-3` `--line` `--line-2`，全部指向既有变量（`--text-2`→`--muted-text-color`、`--line-2`→`--hover-bg-color`：它在明暗两套主题里都落在 bg 与 border 之间，是最淡的一档中性色）
  - 验收：同上两条 ✓；`git diff variables.css` = **37 增 / 0 删** ✓
  - 反向验证：`--text-2` 改指 `#ff0000` → `+ --text-2: #ff0000;`（删除行仍为 0）；改回 → `+ --text-2: var(--muted-text-color);` ✓
- [x] 任务 3 进出场与按压手感：新建 `src/styles/motion.css`（减弱动效全局规则 + 3 条退场关键帧 + 3 条带关闭态闸门的生效规则）、`src/utils/press.ts`（导出 `PRESS`）；三个 `.astro` 只加 import 与类名
  - 验收：`check` 0 err｜`build` 91 页｜`lint` 仍是 **1 error / 78 warnings**（与基线逐字一致）✓；三文件 diff = import 行 + 类名 ✓
  - 实测（`astro preview` + 浏览器取计算值）：
    - 搜索弹层关闭 → `animation: anim-fade-out 0.16s`，淡出曲线 `0ms→1.00 / 80ms→0.198 / 160ms→0` ✓
    - 移动端抽屉关闭 → `animation-name: anim-drop-out`、`0.14s`，闸门选择器 `matches()` = true ✓
    - 推导浮层关闭 → `animation: anim-sheet-out 0.22s`，`110ms→opacity 0.198` ✓（打开态 `animation: none`，不误播）
    - `PRESS` 已落进 DOM：`#close-search`、`.mobile-menu-action` 的 class 均含 `transition-transform duration-150 active:scale-[0.98]`，计算值 `transition-duration: 0.15s` ✓
  - 反向验证：`anim-fade-out` 改 `0ms` → 重建后关闭瞬间 `opacity` 一律为 **0**（`[0,0][40,0][80,0][160,0]`，弹层瞬间消失）；改回 `160ms` → 曲线复原为上表 ✓
  - 环境限制（取证方式说明）：本机浏览器窗口被遮挡，页面 `visibilityState = hidden`，文档时间轴冻结（`document.timeline.currentTime` 恒为 0）、rAF 不触发，动画无法自然走时；故用 WAAPI `animation.currentTime` 手动推进时间轴读取逐点 opacity —— 读到的就是该 CSS 动画对真实元素的真实作用值
  - 「停 160–220ms 再真隐藏」：现有定时器是 240ms/300ms，改它必须动脚本（被禁），沿用并记入 `BLOCKED.md` 第 3 条
- [x] 收尾四条同验：`check` 退出码 0 且 0 errors｜`build` 退出码 0 且 91 页｜`lint` 仍是 1 error（≤32，未变多）｜`variables.css` 0 删除行 —— 四条同时成立，完整输出见 `BLOCKED.md` 第 5 条

> 按任务书「不提交、不推送」，本轮所有文件只改不提交。
