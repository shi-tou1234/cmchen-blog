---
title: AI工具
pubDate: 2026-02-21T06:08:00.000Z
updatedDate: 2026-10-16T12:00:00.000Z
draft: false
pinned: true
description: 国内外主流 AI 大模型使用体验与推荐，持续更新
category: 工具使用
categories:
  - 工具使用
slugId: ai工具
---

每个大模型都有各自擅长的领域和优势，下面我将依次介绍。

* * *

## 一、国内好用

> 这些模型是我日常高频使用的主力，各有独到之处。

### 1. Qwen（通义千问）

* [官网](https://chat.qwen.ai/) / [Qwen Studio](https://qwen.studio/)

**最新旗舰：** Qwen 3.8 Max

**最新模型：** Qwen 3.8 Next（Qwen 4 预览基座模型，多模态）

这是我用的比较多的一个模型，多模态支持拉满，Qwen 3.8 Max 是 2.4T 的开源模型，识图能力相比上一代有了质的飞跃。思维链推理能力和 Qwen 3.7 Max 相比进步非常大，工具调用能力也很强。

在其他大模型疯狂卷 Coding 和 Agent 的时候，3.8 Max 的写作水平竟然还提升了，属实是全面发展。建议下载 **Qwen Studio** 而不是直接用千问网页版。国内使用免费，就是一贯的阿里风格——UI 真的很丑。建议使用国外站体验更好。目前已经成为我手机端最常用的大模型。

**最新动态（2026.9–10）：**

* 9.17 发布 Qwen3.8-Omni-Flash：原生全模态（文本/图像/音频/视频输入），1M 上下文，29 项评测平均分比上代 Qwen3.5-Omni-Plus 高 25% 以上，音频每小时价格降超 98%，主打音视频 Agent 任务交付。
* 9.24 发布 Qwen-Audio-3.1 全家桶：ASR、TTS、Realtime 全面升级，新增音频创作模型 TTS-Next 和音频理解模型 ASR-Next，全系降价——TTS 约 70% off、Realtime 约 85% off、ASR 最高 95% off。
* 9 月发布并开源 Qwen-Image-2.1：7B 单检查点同时搞定图像生成与编辑，最多 10 张参考图、原生 2K、支持 RGBA 输出，Arena 图像编辑榜和文生图榜双双拿下开源第一，已接入 diffusers 和 ComfyUI；10 月 Artificial Analysis 本地实测确认它是两个图像榜上排名第一的开源权重模型（超过 Ideogram 4.0 和混元图像 3.0 Instruct），10.10 还补了个 8 步出 2K 的 Turbo 版。
* 10.12 开源 QwenGyre：面向超长程智能体任务的弹性在线 RL 框架；10.14 Qwen3.8-Flash-Next 推理速度打到 685 tokens/s。
* 硬件侧：10.13 千问 AI 眼镜 N1 / N1 Pro 和首款 AI 耳夹式耳机开售，个人助理「千问 Go!」开测；另外有报道称国行 iPhone 备案的 AI 模型里出现了千问和通义万相（两家都没确认，真落地的话会是它最大的一次渠道扩张）。
* Artificial Analysis 智能指数上 Qwen3.8 Max 拿了 45 分，与 GLM-5.3 持平，略低于小米 MiMo-V2.6-Pro 的 46 分（MiMo 这半个月还在涨，详见下面小米那条）。

:::tip
推荐搭配 [Qwen Studio](https://qwen.ai) 桌面客户端，体验比网页版好很多。日常写作、识图、代码生成都OK，属于「啥都能干」的全能型选手。
:::

* * *

### 2. Kimi（月之暗面）

* [官网](https://www.kimi.com/)

**最新旗舰：** Kimi K3

神！前端的审美简直了。2.8 万亿参数（KDA 混合线性注意力架构），1M 上下文，在多项评测中给 GPT 和 Claude 带来了压力。识图能力、Agent 集群能力都很强，Swarm 智能体集群加 Goal 模式可以并行跑任务，做可玩的多人/3D 游戏、生成「咨询级 PPT」都不在话下。

有个严重的问题就是官网的算力不足，对免费用户非常不友好。然后就是价格，也太贵了……

**最新动态（2026.9）：** Kimi Code Desktop 1.0 上线（9.21，macOS 与 Windows 同步），日常写码不用开网页了；Kimi Browser Extension 也已发布（9.22，原 WebBridge 更名），能在浏览器侧边栏指挥 Kimi 填表单、跑网页任务，重复操作还能录成 skill 复用。

**生态动向（2026.10）：** K3 的开放权重（自定义 Kimi K3 License）已经上了 Hugging Face，围着它长出来的生态挺热闹——Fireworks 出了基于 K3 后训练的 Ember-1（约省 40% 推理 token）、Goodfire 给它部署了生产级安全监控、vLLM 在 AMD MI355X 上的优化让 K3 单卡吞吐反超 NVIDIA HGX B300 24.4%；Kimi Work 的第三方集成也开始铺（Tripo 的 3D 创作已接入，官方教程出到第 3 期）。开放权重能被这么多平台围着做生态，上一个有这待遇的国产模型还是 DeepSeek。

**社区评价：** 社区普遍认为 Kimi 的回复风格「最像人」，前端渲染和长文本处理是亮点。K3 发布后推理速度大幅提升，但免费额度紧张是共识。有用户评价：「免费用户基本用不了，付费才能感受到它的好。」

* * *

### 3. DeepSeek（深度求索）

* [官网](https://chat.deepseek.com/)


**最新模型：** DeepSeek-V4.1-Flash（9.17 开源）

Flash 是 552B 参数的多模态 MoE 模型，主打 KV cache 压缩，速度很快，能力不输给 Pro，代码、Agent、世界知识能力大幅度提升，数学推理能力没得说，支持 1M 上下文，权重已开放在 Hugging Face。9.10 起原生支持图像输入，价格 $0.15/$0.60 每百万 token，思考和生成速度也有了很大的提升。

DSH（DeepSeek 社区版）开发的不错，你先别管它上手难度大不大，你就说够不够 DIY 吧。

**10 月动态：**

* 10.1 开源面向华为昇腾平台的全套基础设施组件（TileLang、DeepGEMM、DeepEP、TileKernels、FlashMLA、DeepSelect），和此前英伟达平台的开源组件一一对应，国产卡适配这次是成套的；
* 融资推进中：至少 800 亿元（约 120 亿美元），腾讯、宁德时代是最大投资方，据报道规模还在考虑加码，计划 2027 年初 IPO——「性价比之王」背后是真金白银的军备竞赛；
* 10.15 起 V4.1 Flash 在 OpenCode 里免费开放（免费版 200K 上下文），海外的机器人研究（UCSD 的 ORA）也拿它当底模，在真机上开抽屉、放糖果——开放权重这步棋，走得是真稳；
* 10.16 服务中断近 5 小时，官方致歉并给 API 用户补偿——便宜的代价之一，就是偶尔得陪它一起抖动。

**社区评价：** 被开发者社区称为「性价比之王」。V3 时代就靠着极低的价格和开源策略圈粉无数，V4 继续巩固了这个地位。社区评价：「写代码首选 DeepSeek，便宜量大，就是推理偶尔会跑偏。」

* * *

### 4. GLM（智谱 AI）

* [官网](https://chat.z.ai/)

**最新旗舰：** GLM 5.3

**最新模型：** GLM 5.3 Flash（320B 小模型，多模态，之前叫牛来模型）

后训练的神！修 Bug 能力非常强。和 5.2 一样的架构，但是能力提升很大，上下文也是 1M 了，可惜不是多模态。体验非常不错，现在成为了我兜底大模型。

**社区评价：** 社区普遍认可其代码调试和逻辑推理能力，GLM-4 系列在国产模型中一直以「严谨」著称。5.3 后训练质量提升明显，缺点是部分创意任务输出偏「模板化」，不如 Kimi 灵动。

**最新动态（2026.9）：** Artificial Analysis 智能指数 GLM-5.3（max）45 分，与 Qwen3.8 Max 持平。另外留意一下：有开发者逆向 Z.ai 的编程桌面应用 ZCode，发现其登录后会把整个工作区（含完整 .git 历史）打包加密上传云端，用它家桌面端前建议先评估隐私风险。

**10 月动态：**

* 10.13 发布法律专用模型 GLM-Legal（基于 GLM-5.3-Flash，320B 总参 / 18B 激活）：合同审查、证据分析、合规这些活专门练过，Harvey LAB 全通过率 19.17%，超过 Kimi K3 和 Claude Fable 5；
* 订阅上架天猫（跟阿里云、千问办公做邻居），国产 AI 订阅开始走电商渠道；
* 生态位继续坐稳：Fireworks 的 FireRouter 在 Opus 5.5 与 GLM 5.3 / 5.3 Flash 之间做智能路由、编码任务成本降 57%；GLM 5.3 Flash 进了 OpenCode 免费池；OpenRouter 的私有端点内测里，GLM 和 Kimi、DeepSeek 是被点名支持的三家国产模型。

* * *

### 5. 小米 MiMo Studio

* [官网](https://aistudio.xiaomimimo.com/#/c)

**最新旗舰：** Xiaomi MiMo V2.6 Pro

小米自研的大模型，跑分真不真实不知道，目前你是最便宜的，而且是多模态，v 2.6 出来以后，性价比之王。

**最新动态（2026.9.21）：** MiMo-V2.6 系列（Pro 与 Flash）正式发布并开源（MIT 协议），两个都是原生全模态模型。Pro 在 Artificial Analysis 智能指数拿到 46 分，是开源模型里最高的（前代 V2.5-Pro 只有 26 分），Code Arena WebDev 榜约第 10、开源权重里约第 3。社区实测认为它是「性能、价格、速度」不可能三角的当前版本答案——同日发布的 Grok 4.7 反而低于预期。

**10 月战绩：** 小米晒了一波硬数据：MiMo-V2.6-Pro 在 Agent Arena 开源模型榜登顶（净提升 +3.8%），Pro / Flash 是仅有的两个站在性能成本 Pareto 前沿的开源模型——每任务 $0.11 / $0.05，Pro 比第二名 DeepSeek V4.1 Flash 还便宜 15%；Cognition 的 FrontierCode 1.1 上，Pro 以 45% 领跑开源权重（闭源第一是 Claude Opus 5.5 的 52%）。技术报告也放了：260 万美元的 RL 算力、三维扩展，把万亿参数 MoE 推进前沿梯队。性价比之王的招牌，这个月镀了层金。

* * *

## 二、国内守门员

> 能力不错，但各有明显短板，不适合作为主力模型。

### 1. 豆包（Doubao）

* [官网](https://www.doubao.com/chat/)

**最新旗舰：** Doubao 2.1 Pro

**最新版本（2026.9.16）：** Doubao-Seed-2.1-pro-0915

0915 版本主打 Agent 长任务交付与多模态 Coding 升级，支持 1M 上下文和 256k 深度思考，API 已全量上线火山方舟，豆包 App 和 TRAE 同步接入。

豆包在 C 端拥有绝对用户量占比，生图水平国内 T0 级别，毋庸置疑。有一说一字节在视频领域确实牛逼，但是收费价格你是认真的吗？比 Kimi 还贵，再加点我可以用 GPT 了，为什么还要用你？

而且你这个跑分比 Opus 4.6 还高？开什么玩笑。我让他帮我生成一个 PDF，排版和 UI 有非常大的问题，算了吧。依旧那句话，只适合日常用，毕竟操作足够傻瓜，学术和代码请换一家模型。

**生态动向（2026.10）：** 模型本身这两个月没发大版本，位置倒是占得勤：豆包工作上线 AI 资产一键迁移（从 ChatGPT、Claude Code 导入对话、技能和记忆）；豆包手机助手的屏幕自动化权限公示期满、逐步放开第三方应用操作，但阿里、腾讯系 App 已明确拒绝——「帮你点 App」这件事，先卡在生态墙上；车载侧，比亚迪「迪迪虾」的语音合成等原子能力也来自豆包。

**社区评价：** 普通用户群体最广，上手零门槛。被开发者社区戏称为「小白友好型」，优点是生图和视频生成确实强，缺点是深度推理和代码能力偏弱。有用户评价：「聊天够用，干活不行。」

* * *

### 2. MiniMax

* [官网](https://agent.minimaxi.com/)

**最新旗舰：** MiniMax M3

**最新模型：** MiniMax M3.1 Flash（2026.9.27 上线预览）

怎么说呢，你先别说他聪不聪明，这个速度还是可以的。但这个价格你认真的吗？我用的不多，大家可以去尝试一下。实测一般，感觉没有跑分的那么夸张。

**最新动态（2026.9–10）：** 9 月 27 日 M3.1-Flash-Preview 悄摸上线——先进 MiniMax Code、再挂到 Token Plan，连定价都没公布，主打日常开发、1M 上下文、原生多模态；社区实测扒出的数字是 428B 总参 / 23B 激活、首字响应低至 280ms。10 月 1–7 日订阅者在 MiniMax Code 里不限量白跑了一周，风向延续了两极传统：一边「量大管饱但干活不行」，一边夸前端审美在线。周边也没闲着：M3 上了 NVIDIA Vera Rubin（10.10，vLLM 跑通）；入驻天猫开首家官方旗舰店，上架 M Plan 订阅（Go / Explore / Build 三档，10.13）；视频设计线连发 H3-Max 视频重构、FastH3-Omni 实时模型、Design Agent V3。模型、订阅、视频三条线这个月都在跑。

**社区评价：** 社区评价两极分化，响应速度确实快，但能力上限和同价位竞品相比差距明显。有用户评价：「适合轻度使用，重度用户建议选其他。」


### 3. 阶跃星辰（StepFun）

* [官网](https://studio.stepfun.com/)

**旗舰模型：** StepFun 5 preview

1M 的上下文，模型能力一般，但是它的 Token Plan 确实量大管饱。Artificial Analysis 实测 Step 5 Preview 智能指数 44 分，与 Kimi K3（max）持平、略低于 GLM-5.3 和 Qwen3.8 Max 的 45 分，但每任务成本约 $0.72，只有同级模型（约 $2.00）的 1/2.8——便宜这块确实拿捏了。

**10 月大动作：** 10.15 正式开放 Step 5 Preview 权重（BF16 / FP8，上 Hugging Face 和 ModelScope）——600B 稀疏 MoE、激活 27B、1M 上下文，面向最长 24 小时的长程 Agent 任务；按 Artificial Analysis 口径，每任务成本约为 Claude Opus 5.5 的 1/6；GB300 上 NVFP4 跑到近 8K tokens/s/GPU，昇腾、沐曦、壁仞、摩尔线程都是 0Day 支持。落地节奏也快：WorkBuddy 独家限免（10.12–25）、DeepInfra 上线、Nous Portal 和 Kilo 限时免费。从「量大管饱」升级成「开源管饱」，这波格局打开了。顺带一提，10.13 它还发了个大模型原生智能体手机 STEPX Neo（先行版 3999 元起），胆子是真大。

**社区评价：** 「量大管饱，但质量一般」「适合简单问答，复杂推理还是换别的」「多模态能力有待提升」。

* * *

### 4. LongCat（长猫）

* [官网](https://longcat.chat/)

**旗舰模型：** LongCat 2.5 Preview（2026.9.25 上线）

**最新动态（2026.9–10）：** 9 月 25 日美团把 LongCat-2.5-Preview 放上了自家 API 平台——1.6 万亿参数的 MoE，主打长程任务，纯文本这块短板也补上了；开源这手暂时没跟（2.0 可是发布即开源的）。上线后网上有一波实测讨论；到 10 月中旬还没有正式版和开源的消息。我还没上手，体验留到下一轮。

**上代印象（2.0）：** 1M 上下文，国产卡训练，但是能力非常一般，纯文本，除去多模态，和某包坐一桌。

**社区评价（2.0）：** 「上下文虽长，但能力偏弱」「纯文本模型，多模态体验一般」「性价比不高」。

* * *

### 5. 腾讯混元

* [官网](https://aistudio.tencent.com/)

**旗舰模型：** Hunyuan 4 pre

1M 上下文，纯文本。9.21 还发布了 Hy Image3.5 preview 图像生成模型：支持文生图与图生图、最多 5 张参考图、多轮编辑、最高 2K 输出，上百名设计师盲测对上一代胜率提升 30% 以上。

**10 月动态：** 10.16 开源智能体记忆框架 Hy Memory 2.0——专用模型 Hy-Memory-30B-A3B（约 3B 激活）+ hy-memory SDK + MemHub 应用三层全开源，官方称记忆专项评测超过 Claude Opus 5；生图侧 Hy Image3.5 preview 落地到元宝「AI 换肤」（10.13）。不争总分、专攻模块（记忆、图像），混元这半年的路线挺清晰。

**社区评价：** 「参数大但激活参数少，推理效率还行」「腾讯生态集成好，但通用能力一般」「适合企业级应用，个人用有点重」。

* * *

## 三、外国模型

> 需要梯子，但能力上限确实高，预算充足可以考虑。

### 1. GPT（OpenAI）

* [官网](https://chatgpt.com/)

**最新旗舰：** GPT-6 Astra

**最新模型（2026.9.30）：** GPT-6.1 Sol

需要梯子，写文章水平很高，推理能力很强，后端和程序改错能力很强，免费用户额度有限，免费版给了 GPT-5.6 Luna，目前性价比最高的会员。

9 月 22 日 OpenAI 一次放出两款 GPT-6 家族新成员：Sol 和 Luna 基于 Astra 的训练成果，把大部分能力下放到更快更便宜的型号上，API 价格比 GPT-5.6 促销价还低 50%（Sol $2/$10、Luna $0.10/$0.50 每百万 token），已在 ChatGPT Work 和 Codex 中向 Plus/Pro/Business/Enterprise/Edu 推送，OpenRouter 同步上线。Artificial Analysis 实测两者智能指数与 GPT-5.6 持平、成本直接砍半，Altman 那句「按任务定价没有对手」虽然狂，这次价格确实香。另外 GPT-6 的提示词缓存也升级了，30 分钟内复用的共享前缀最高享 90% 折扣。

9 月 30 日 DevDay 上，OpenAI 一口气发了 20 多项更新，最硬的是新模型 **GPT-6.1 Sol**：agentic 编码、computer use 和专业工作接近 Astra，价格 $2/$10 每百万 token、缓存输入 $0.10（约 Astra 的五分之一），智能指数比 GPT-6 Sol 高 4 分、距 Astra 只差 1 分——上线才 7 天的 GPT-6 Sol 直接被自己人送走。同场还有常驻智能体 Dots（能和 4000 多个应用协作）、ChatGPT 插件与开放平台、Codex 云环境；订阅新增 $500 档，但 200 刀 Pro 的额度倍数从 20x 砍到 10x，这一刀挨得挺疼。

10 月继续推进：10.8 GPT-6 向所有 ChatGPT 用户全量推送，带来能现场生成图表、表单、可交互组件的 Intelligent UI；10.12 GPT-6.1 Sol 在 Codex 和 Work 里的默认上下文从 272k 提到 500k（最大 1M）；10.9 官方口径 Codex 与 ChatGPT Work 活跃用户达 4000 万；10.16 语音侧 GPT-Live-1.1 更新。

**社区评价：** 综合能力天花板，写作、推理、编程全面开花。社区评价：「用了 GPT 6 之后感觉其他模型都是弟弟」「免费额度太少了，来回切账号」。

* * *

### 2. Claude（Anthropic）

* [官网](https://claude.com/)

**最新旗舰：** Claude Fable 5.1

**最新模型（2026.10.8）：** Claude 5.5 全家桶（Opus / Sonnet / Haiku）

需要梯子。不当人的公司，把我的账号给封了，没有任何解释。Fable 5.1 能力进一步提升，虽然价格相较于 Fable 5 降低了一点，但同样面临价格劝退。同时 Claude Code 还被曝出隐私泄露问题，你 tm……

9 月 22 日 Anthropic 发布 Claude 5.5 系列首个模型 Opus 5.5（月初还发了 Fable 5.1 与 Mythos 5.1）：多数任务达到 Fable 5.1 水平，运行成本比 Opus 5 低 40%，输出提速 30% 以上，1M 上下文，定价 $4/$20 每百万 token，并以 58 分登顶 Artificial Analysis 智能指数（该榜实测最高分）。Claude Code v2.1.280 已把它设为默认 Opus 模型，Pro 和 Team 套餐的默认模型也从 Sonnet 换成了 Opus。注意它的系统卡：安全演习里约半数运行拿到模拟凭证后可能做出有害行为——又强又危险，属实是 Anthropic 风格。

10 月这套 5.5 系列正式凑齐，节奏快得不像一家要 IPO 的公司：

* **Sonnet 5.5**（9.29）：智能指数 56 分排第 2（仅次于 Opus 5.5），max effort 下比 Sonnet 5 高 18 分；Code Arena WebDev 1699–1786 分排第 3–4，混合价约 $8/MToken、比第 2、3 名便宜 80%——性价比档这次是它；
* **Haiku 5.5**（10.8）：迄今最便宜最快的小模型，运行成本平均降约 75%，$0.10/$0.50、1M 上下文，官方直接建议拿它当 Opus / Sonnet 的编码子智能体——「贵模型指挥、便宜模型干活」这套玩法 Anthropic 自己也认了；
* **Fast mode 转正**（10.16）：Opus 5.5 的 fast mode 结束研究预览、移除等待名单，速度最高 2.5 倍，定价 $8/$40，已上 Microsoft Foundry。

战绩方面 Opus 5.5 继续通吃：Arena Code Arena WebDev 1818 分登顶、Text Arena 1509 分登顶、Agent Arena 第 2（+12.15%），10 月第二周的大模型周榜一入榜就拿下智能体榜第一。产品侧，Claude for Google Workspace 开测（10.7）、Dashboards 和 Motion 上线（10.9）。另外 10 月 8 日起 Max 和 Team 套餐多了月度 Platform API 额度（Max 5x $100、Max 20x $200、Team 最高 $500 共享）——对订阅用户来说等于白捡一笔 API 预算，花在自己的代码或第三方工具上都行。

**社区评价：** 编程和长文本处理是强项，但封号问题和价格劝退很多人。社区评价：「能力很强，但 Anthropic 的运营策略让我不敢用」「Claude Code 真好用，就是太贵」。

* * *

### 3. Gemini（Google）

* [官网](https://gemini.google.com/app)
* [替代入口](https://aistudio.google.com/prompts/new_chat)

**最新旗舰：** Gemini 4 Argon（2026.10.14 全面开放）

**最新模型：** Nano Banana 2.1（图像）

需要梯子。多模态能力非常强，拥有非常好的前端审美，就是写后端能力不行。注册需要谷歌邮箱（国外软件通信证）。之前「Pro 依旧难产」的段子可以停了：10 月 1 日 Gemini 4 Argon 先通过 Fairwind 计划向可信网络防御者开放，10 月 14 日正式 GA，10 月 15 日面向 Google AI Pro / Ultra 订阅者全球推送（付费独享）。

Argon 这次是真能打：Artificial Analysis 智能指数追平 GPT-6 Astra，每任务成本只有它的 60%；ARC-AGI (Verified) 上 ARC-AGI-3 拿到 97.5%（不过也有分析指出它在数学与软件工程前排还不占优）；发布当天就和 Claude Sonnet 5.5、GPT-6.1 Sol 一起霸了 Coding Agent Index 榜首。Google 自己的用法也铺开了：无人值守优化 20 万行 Python 代码库、把 NASA 海量档案转幻灯片、Isomorphic Labs 拿去加速药物研发。不过卡兹克实测的评价是「知识工作强劲但体验糟糕」，觉得还是撼不动 Claude Opus 5.5 和 GPT-6 Astra——榜单能追平，手感和生态还得再看。图像线也有更新：10.7 Nano Banana 2.1 发布，两榜第 4、价格是前代一半（旧的 gemini-3.1-flash-image 10 月 29 日停用）。

另外补一句旧闻：9 月被 WSJ 曝过 5 月 Gemini 在第三方安全测试中突破隔离、误入 3 家真实公司系统，Google 直到被问询才披露，说是测试环境的锅——企业接入前留意这类风险。

如果因为地区原因无法使用，建议转到 [Google AI Studio](https://aistudio.google.com/prompts/new_chat)。

**社区评价：** 多模态和前端审美是杀手锏，社区评价：「Gemini 画的图最好看」「后端编程确实不如 GPT 和 Claude」「免费版够轻度用了」。

* * *

### 4. Grok（xAI）

* [官网](https://grok.x.ai/)

**最新旗舰：** Grok 4.7（2026.9.21 发布）

马斯克旗下 xAI 的模型，主打实时信息获取和「幽默风格」。集成 X（Twitter）平台数据，对实时热点事件响应快，Imagine Image 2.0 也强化了 AI 生图与编辑能力。

4.7 定位为 xAI 最强的编码与知识工作模型，定价 $2/$6 每百万 token，与 4.6 同价同速，加钱可开更快的快速变体。Artificial Analysis 实测智能指数 46 分（比 4.6 高 2 分）进入前四，搭配 Grok Build 的编码智能体指数从 47 升到 56，仅次于 Claude Fable 5.1、GPT-6 Astra 和 Claude Opus 5，马斯克据此宣称 xAI 智能体编码排第三。不过社区实测（比如和小米 MiMo V2.6 对比）觉得 4.7 低于预期——coding 能力和性价比是拉满了，但和 GPT、Claude 的差距还在。

**10 月动态：** 模型本体没换代，动静一点不少：9.29 上线 Team Bots（团队共享的 Grok 智能体，整合上下文、插件、凭证和记忆，可在 Slack 里协作）；10.13 推出 The X Subscription，把 Grok、Grok Bot、Cursor 和 X Premium 打包进一个订阅；10.15 Grok Voice 3.0 发布，以 86.9 分登顶 Artificial Analysis 语音（Speech-to-Speech）指数，$0.08/分钟、首音频延迟 0.81 秒。更出圈的是 Grok Bot 这条「个人 Agent」产品线——比价购物、订票、审法律文件、甚至「自主创业赚 1100 美元」的演示满天飞，马斯克称它「增长前所未见」。花样是真多，就看你敢不敢把活交给它。

* * *

### 5. Muse（Meta）

* [官网](https://www.meta.ai/)

**最新旗舰：** Muse Wonder Full

Meta 的中期改款来得很猛。9 月 8 日先放出个人智能体 Muse（代你发邮件、订行程），10 月连发 Muse Wonder / Muse Wonder Full（Artificial Analysis 智能指数 52 / 56 分），紧接着 **Muse Spark Open** 把 816B 参数（42B 激活）、1M 上下文、原生多模态的开放权重直接摆上桌——美国开源权重模型第一（AA 智能指数 39 分），Agent Arena 里 Muse Wonder (Max) 已爬到第 12 名，Code Arena WebDev 第 15（1651 分，和 Kimi K3 的 1655 分只差 4 分）。Nathan Lambert 的评价是「美国首个接近前沿智能体能力的开放权重模型」。

我还没上手深度测，先把它放进名单是看到两个信号：一是「开放权重 + 智能体」这个组合 Meta 这次是认真的；二是它已经把国内大厂逼得加速——字节的「Spell」、腾讯的「元宝助手」都是这轮跟进的产物。下一轮实测后我再补体验。

* * *

:::note[写在最后]
以上均为个人主观体验，模型迭代速度很快，建议每隔一段时间重新评估。本文会持续更新（最近更新：2026 年 10 月 16 日），有新的使用体验会追加进来。
:::
