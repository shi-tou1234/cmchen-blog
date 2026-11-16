# cmchen的博客

一个基于 [Astro](https://astro.build) 构建的静态博客站点，fork 自 [motues/Momo](https://github.com/motues/Momo) 并进行了深度改造：暖纸配色与「界面无衬线 + 正文衬线」的字体体系、完整的移动端交互重做、一套可扩展的自定义 Markdown 样式，以及无需本地环境的 GitHub 在线管理后台。

线上地址：<https://shi-tou1234.github.io/cmchen-blog/>

## 初始化版本

如果你想要一个功能齐全、内容为空的初始化模板，用来快速搭建自己的博客，可以使用 **[cmchen-blog-starter](https://github.com/shi-tou1234/cmchen-blog-starter)** —— 它是本仓库的初始化版本，已删除全部文章、关于、工具栏链接、旅行地图城市标记、音乐播放器等个人内容，只保留完整的功能与工程配置。

使用方法：

1. 克隆或 fork [cmchen-blog-starter](https://github.com/shi-tou1234/cmchen-blog-starter) 到你的仓库；
2. 按该仓库 README 中「填充你的内容」章节，填入你自己的文章与个人资料；
3. 按「部署」章节修改 `astro.config.mjs` 中的 `site` / `base` 为你的部署地址，推送后到仓库 `Settings → Pages` 将 Source 设为 GitHub Actions，即可自动构建发布。

## 功能特性

### 阅读体验

- **主题系统**：明亮（暖纸色）/ 暗黑（暖深色）/ 跟随系统三种模式，切换时以按钮为圆心的圆形揭示动画过渡，尊重 `prefers-reduced-motion`
- **字号调节**：正文字号 80%–150% 滑杆调节，偏好写入 localStorage 长期记住
- **文章列表**：A「浅色漫染」单列卡片，整幅封面自然过渡到柔和底色，桌面左文右景、手机上图下文；E「轻量组合」以线稿图标、子分类标签和日期信息补充文字层次，无封面或图片加载失败时收拢为纯文字卡片
- **移动归档**：标题正常换行、两行摘要直接显示，点击文章进入阅读；桌面保留悬停展开摘要，大屏触摸设备同样常显摘要
- **阅读进度**：页面顶部全局进度条、浮动按钮上的进度环、目录面板内的进度百分比
- **沉浸阅读**：文章页支持进入全屏阅读模式，自动隐藏导航与侧栏
- **全文搜索**：基于 Pagefind 的本地索引搜索，带搜索历史与 `/`、`Ctrl/Cmd+K` 快捷键
- **相关阅读**：文末（评论前）列出最多 4 篇同分类文章，可跳转分类页查看全部
- **细节功能**：博客使用指南弹窗、一键复制邮箱、站点运行天数、图片灯箱、Giscus 评论（主题自动同步明暗）

### 移动端体验

- **收拢式浮动按钮（FAB）**：全部移动端页面右上角只有一个带阅读进度环的圆钮，点击展开「菜单 / 目录 / 返回上一页 / 评论 / 回顶」（目录、返回、评论仅在文章页出现），平时收拢不遮挡正文
- **快捷操作面板**：由 FAB 的「菜单」打开，提供搜索、主题、指南、邮箱、字体五个快捷入口，图标按钮样式
- **底部导航栏**：首页 / 归档 / 关于 / 工具栏四个固定入口，毛玻璃背景并适配安全区
- **工具栏页面**（`/tools`）：集中存放常用外部工具与项目链接

### 自定义样式与 Markdown 扩展

在标准 Markdown 与 GFM 之上，支持以下自定义语法（样式可嵌套，如 `!!==模糊彩虹==!!`）：

| 语法 | 效果 |
| --- | --- |
| `++文本++` | 下划线 |
| `!!文本!!` | 模糊/剧透遮蔽，悬停或点击后清晰 |
| `==文本==` | 彩虹文字 |
| `{汉字}(hàn\|zì)` | 拼音注音（ruby），支持逐字 `\|` 分隔 |
| `[^1]` | 脚注，文末自动生成编号列表并支持跳回 |
| `:::quote` | 引用卡片，`<right>—— 出处</right>` 右对齐落款 |
| `:::note` / `:::tip` / `:::important` / `:::warning` / `:::caution` | 提示框，支持自定义标题 |
| `:::derivation` | 推导容器（hover 浮层展示） |
| `::music{id="歌曲ID"}` | 音乐卡片 |
| `::github{repo="用户名/仓库名"}` | GitHub 仓库卡片 |
| `$...$` / `$$...$$` | KaTeX 数学公式 |
| ` ```typst ` 代码块 | Typst 公式/图形渲染（typst.ts） |

### 管理后台（`/admin`）

- **GitHub 集成**：通过 GitHub API 直接读写仓库中的文章，无需本地环境
- **文章管理**：在线新建、编辑、删除、置顶、草稿自动保存与恢复
- **Markdown 工具栏**：常规格式之外，自定义样式（下划线、模糊、彩虹、拼音、脚注、引用卡片、音乐/GitHub 卡片）均可一键插入语法模板，脚注自动编号并在文末补全定义
- **实时预览**：编辑区内容实时推送到预览 iframe，预览窗支持全部自定义样式（下划线、模糊、彩虹、拼音、脚注、引用卡片、提示框、卡片占位）与正文一致的渲染，支持独立预览编辑器与内容回填
- **站点设置 / 安全 / 导出**：站点信息配置、访问密码保护、数据批量导出、PDF 转图片

### 界面与工程

- **字体体系**：界面与卡片走系统无衬线栈（PingFang SC / 微软雅黑 / Noto Sans CJK SC），文章正文走中文衬线栈（Noto Serif SC / 宋体，18px / 1.95 行高），站名楷体、标语展示黑体、引用与代码另设字体，全站不依赖外部字体 CDN
- **视觉主题**：暖纸浅色（`#f8f6f0`）与暗暖深色（`#211f1b`）双调色板，卡片圆角收敛为 15 / 12 / 7px 三档，全部经 CSS 变量驱动
- **动效**：Astro View Transitions 路由过渡、基于 IntersectionObserver 的卡片入场动画，弹层退场与按压手感统一，不做常驻背景动画
- **代码质量**：ESLint + Prettier + `astro check`

## 本地开发

```bash
pnpm install        # 安装依赖
pnpm dev            # 启动开发服务器 http://localhost:4321
pnpm build          # 构建并生成 pagefind 索引到 dist/
pnpm preview        # 预览构建产物
pnpm newpost <路径> [语言]   # 新建文章，如 pnpm newpost docs/test.md zh-cn
pnpm check          # astro check 类型检查
pnpm lint           # ESLint 检查（lint:fix 自动修复）
pnpm format         # Prettier 格式化
```

## 目录结构（节选）

```text
src/
├── components/       # 组件（header/ 头部与抽屉、control/ 交互控件、admin/ 后台、misc/ 杂项）
├── content/blog/     # 文章（Content Collections，每篇一个目录 + 语言 md）
├── layouts/          # 布局（Layout / MainPageLayout）
├── pages/            # 路由（首页、文章、归档、关于、工具栏、admin、404）
├── plugins/          # remark/rehype 插件（自定义样式、卡片、Typst 等）
├── styles/           # 全局样式与主题变量（variables.css / markdown.css 等）
└── utils/            # 工具函数（含后台 admin/ 逻辑）
```

## 桌面版（Electron）

支持将博客打包为 Windows 桌面 exe：**优先在线加载 GitHub Pages 线上站点（新文章即时可见，无需重新打包），断网或站点不可达时自动回落到打包时内置的离线快照**，中文搜索两种模式下均可用。

```bash
pnpm run dist:electron    # 一键打包：桌面形态构建 + 精简 electron 应用
```

产物输出到 `release/`：

- `cmchen-blog-desktop 0.0.1.exe`：portable 便携版，双击即用
- `cmchen-blog-desktop Setup 0.0.1.exe`：NSIS 安装版

实现要点：桌面壳基于 [Electron](https://www.electronjs.org/)，启动时探测线上站点（HEAD + 5 秒超时），可达即加载线上；不可达则用内置 `serve-handler` 在 127.0.0.1 随机端口托管打包时的离线快照（Pagefind 搜索依赖 http 源，两种模式均已处理）；线上地址可用环境变量 `DESKTOP_ONLINE_URL` 覆盖；staging 精简打包仅携带 serve-handler 依赖闭包（12 个包），exe 约 147MB。调试时先 `pnpm run build:desktop` 再 `pnpm exec electron .`。只有想让「离线快照」更新时才需要重新打包。

## 部署

仓库内置 GitHub Actions 工作流（`.github/workflows/deploy.yml`）：推送到 `main` 后自动构建并发布到 GitHub Pages。构建包含两步：`astro build` 与 `pagefind` 索引生成。注意 `astro.config.mjs` 中 `site` 与 `base` 需与实际的 Pages 地址一致。

封面采用「**每篇一张专属图、精选池 + 自动补齐**」，完全不需要 API Key：

- 每篇文章按 ID 的 sha256 生成唯一文件名（`public/covers/<hash>.webp`），106 篇互不重复。
- 图库由三部分组成：人工筛过的 Unsplash 精选照片、`cn.bing.com` 每日壁纸（专业风光大片），以及从 Pexels CDN 里按亮度/色彩/熵/肤色等规则筛出的风景静物。明显不合格的图片编号记录在 `script/cover-rejects.json`，永久拉黑。
- `pnpm run covers:curated`：重新拉取精选照片、替换黑名单图片，并生成 `spare-*.webp` 预留池（当前 40 张）。
- `pnpm run covers:ensure`：扫描文章，新文章**优先从预留池取一张，完全不联网**；预留耗尽才回退到 Pexels CDN 自动下载并做质量筛选。已有封面直接复用，旧文章封面永不改变；删除文章时自动清理孤儿图片与记录。
- 已接入 `dev`、`build`、`build:desktop` 与 CI。图片随仓库提交，正常构建零网络请求。
- 图源许可：Unsplash / Pexels 允许免费商用；Bing 每日壁纸版权归原作者。追溯信息见 `public/covers/manifest.json`。

设置 `COVER_IMAGE_LOCAL_FALLBACK=false` 可改回 Picsum 随机照片外链（该域名在国内网络经常超时，届时 `cache:covers` 会在构建期尝试把原图下载为本站静态资源；源站不可达时仅探测一次并保留原地址）。如需按标题检索、让封面更贴题，可在 Actions secrets 中设置 `COVER_IMAGE_API_KEY`，并在 Actions variables 中设置 `COVER_IMAGE_PROVIDER`（`pexels`、`unsplash` 或 `pixabay`）；Key 只在构建阶段使用，不写入页面。

## 致谢

- 本项目 fork 自 [motues/Momo](https://github.com/motues/Momo) 并在其设计上深度进化，自定义样式语法与脚注样式参考了 Momo 的实现。

---

<p align="center">Made with ❤️ by cmchen</p>
