# cmchen的博客

一个基于 [Astro](https://astro.build) 构建的静态博客站点，fork 自 [motues/Momo](https://github.com/motues/Momo) 并进行了深度改造：暖纸配色与中文衬线字体体系、完整的移动端交互重做、一套可扩展的自定义 Markdown 样式，以及无需本地环境的 GitHub 在线管理后台。

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
- **阅读进度**：页面顶部全局进度条、浮动按钮上的进度环、目录面板内的进度百分比
- **沉浸阅读**：文章页支持进入全屏阅读模式，自动隐藏导航与侧栏
- **全文搜索**：基于 Pagefind 的本地索引搜索，带搜索历史与 `/`、`Ctrl/Cmd+K` 快捷键
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
- **实时预览**：编辑区内容实时推送到预览 iframe，支持独立预览编辑器与内容回填
- **站点设置 / 安全 / 导出**：站点信息配置、访问密码保护、数据批量导出、PDF 转图片

### 界面与工程

- **字体体系**：Noto Serif SC 正文、Ma Shan Zheng 站名、ZCOOL QingKe HuangYou 标语、ZCOOL KuaiLe 卡片标题、LXGW Bright 引用、JetBrains Mono 代码
- **视觉主题**：暖纸浅色（`#fdf8f0`）与暗暖深色（`#1a1612`）双调色板，全部经 CSS 变量驱动
- **动效**：tsparticles 粒子背景、Astro View Transitions 路由过渡、AOS 风格入场动画
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

## 部署

仓库内置 GitHub Actions 工作流（`.github/workflows/deploy.yml`）：推送到 `main` 后自动构建并发布到 GitHub Pages。构建包含两步：`astro build` 与 `pagefind` 索引生成。注意 `astro.config.mjs` 中 `site` 与 `base` 需与实际的 Pages 地址一致。

## 致谢

- 本项目 fork 自 [motues/Momo](https://github.com/motues/Momo) 并在其设计上深度进化，自定义样式语法与脚注样式参考了 Momo 的实现。

---

<p align="center">Made with ❤️ by cmchen</p>
