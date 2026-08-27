---
title: agent 工具
pubDate: 2026-06-24T10:33:00.000Z
updatedDate: 2026-08-27T10:57:46.838Z
draft: false
pinned: true
description: 
category: 工具使用
categories:
  - 工具使用
slugId: agent-工具
---

事情是这样的。很多新的框架出来了，有些已经消失了。前段时间一直在折腾各种 AI 编程工具，从 Trae 到 Codex 到 Claude Code 到各家国产 CLI，基本上市面上能叫得上名字的我都试了一遍。

怎么说呢，踩了不少坑，也发现了一些真的很好用的东西。我觉得还是值得把这些经历整理一下，给也在挑工具的朋友们一个参考。毕竟每个人的情况不一样，有人有 GPT Plus，有人有学生认证，有人啥都没有就想白嫖，选择真的差很多。

这篇我重新核对了一遍最新的动态（截至 2026 年 8 月底），之前写的一些内容已经过时了，这次全部修正。

好，一个一个来聊。

* * *

## Trae / TraeWork

* [官网](https://www.trae.cn/)

字节跳动出的 AI 原生 IDE，基于 VS Code 改的，是国内首款 AI 原生 IDE。官方月活已经超百万，在国内工具里算是跑出来的那一个。

现在的 Trae 已经不只是个编程工具了。打开 trae.cn 你会看到一句话：「复杂工作，就用 TraeWork」。整个产品升级成了一个 AI 工作台，**Work、Code、Design 三种模式一键切换**：

* **Code 模式**：就是原来的 AI 编程 IDE，SOLO 智能体自己读需求、写代码、跑验证；
* **Work 模式**：TraeWork，自动生成 PPT、数据分析、深度研究、写文档那一套，能调用飞书、微信、钉钉的插件；
* **Design 模式**：设计向的。

**价格方面有个好消息和一个坏消息。**

好消息：国内版 **SOLO 模式完全免费**，从去年 11 月底上线等到今年 1 月正式全量放开，SOLO Coder 里内置了好几个模型随便切换，包括字节自研的 Doubao-Seed-Code、智谱的 GLM-4.7 / GLM-4.6 等，全部免费。免费档每个月还有 500 积分、支持 2 个云端任务并行（Seed 模型还打 2.5 折）。

坏消息：最近 TRAE 国内版**悄悄上线了对话限额**，免费账号和 Pro 套餐都受影响，限制维度是每日、每周、每月的累计次数上限。也就是说"完全免费"还在，但"无限白嫖"没有了。免费用户高峰期响应还是会慢一些——高峰期优先响应现在是付费权益。

我的感受没变：它依然是目前国内最值得当主力免费工具的选择之一，但如果你是我这种一天重度对话几百轮的人，额度烧起来会肉疼。

:::tip[小结]Trae 国内版依然是免费党的首选，SOLO 全免 + 多个国产大模型内置。但注意已经上了对话限额，「白嫖」的黄金期过去了。国外的 trae.ai 不推荐，性价比太低。:::

* * *

## 办公 Agent 三强：WorkBuddy、豆包工作、千问办公

编程卷完了，大厂开始卷办公。今年这条赛道直接打成三国杀。先看数据（易观二季度报告）：腾讯 WorkBuddy 6 月单月访问量 2097 万次，断层第一，比第二、三名加起来还多；字节系（Trae）第二，1279 万次；阿里 QoderWork 第三，788 万次。我把三家都摸了一遍：

* [腾讯 WorkBuddy](https://www.workbuddy.cn/)：目前跑得最快的那个。主打「一人指挥，全行业专家执行」，多个 Agent 并行协作，能切 5 家主流模型，桌面、微信小程序、主流 IM 全平台免部署即用，甚至能用手机远程指挥家里电脑干活。最近又发了企业版和覆盖 20 多个垂直场景的 Agent Suite，配上管理后台。经 2000 多个腾讯内部员工实测，号称 10 分钟上手。
* [豆包工作](https://technews.tw/2026/08/25/bytedance-launches-doubao-work/)：字节 8 月 25 号刚发布的全新品牌。写文档、做 PPT、搞表格、整理会议纪要是基本功，还能搭系统、操作虚拟桌面和浏览器，配了定时任务、技能（Skills）和连接器体系。最大的差异化是用飞书账号登录后直接继承你在飞书里的全部工作上下文——字节是想拿豆包 3.82 亿的 C 端月活往 B 端撕口子。
* [千问办公 QwenWork](https://www.aliyun.com/product/qwenwork)：阿里的打法是「三合一」，由 QoderWork、MuleRun 和悟空整合而来，业内第一个同时覆盖桌面端 Agent、云端 Agent、企业协同 Agent 三种形态的产品。PPT、数据分析、网页生成到在线发布一条龙，桌面版已上线，后面会深度内置钉钉。公测当天阿里还顺手发了 Qwen3.8 旗舰模型（2.4 万亿总参数的稀疏 MoE）给它当底座。

机构预估 2026 年中国企业级 AI 智能体市场规模有 449 亿元。我的感受是：三家真正在抢的是「任务分配权」——以后你的指令到底是发给聊天框还是发给一个 Agent 工作台，这件事它们都想说了算。

:::tip[小结]个人轻度使用先试 WorkBuddy 或豆包工作；重度飞书用户选豆包工作；公司用钉钉和阿里云的，等千问办公内置钉钉后再上车不迟。:::

* * *

## GitHub Copilot / Codespaces

* [Copilot 官网](https://github.com/features/copilot) / [Codespaces 官网](https://github.com/features/codespaces)

这玩意儿曾经对学生是真的香。教育邮箱认证拿 GitHub Pro，再蹭 Codespaces 的云开发环境和模型额度，简直捡到了宝。

但后面的剧情大家也猜到了。**2026 年 6 月 1 号起，GitHub Copilot 全线套餐转成了按用量计费**：原来的「高级请求次数」（premium request units）没了，换成按模型和 token 消耗算钱的 GitHub AI Credits。订阅费本身没涨（Free 还是 0 刀，Pro 还是 10 刀，Pro+ 39 刀，Business 19 刀），但你实际花多少，取决于你用什么模型、烧多少 token。

我说个真实的数据感受：按 token 算钱之后，一个小 bug 的修复就能吃掉一大笔 Credits。那点额度，修几个 bug 就没了。

Codespaces 本身倒还活着，个人账号每月仍有免费的计算和存储额度，学生认证还能更多。但你要是想在里面跑大模型做 AI 编程，那些免费额度真的扛不住按 token 的消耗。

不过要说 GitHub 这边的进展，**Copilot CLI 反而值得看一眼**：今年的 Build 大会上 Copilot CLI 大版本刷新，橡皮鸭调试、定时排队提示词、语音输入这些能力都正式可用了；Copilot coding agent 也进了 Enterprise Cloud 还支持数据驻留；甚至能在 Slack 里直接@它干活。微软是把 Agent 往整个开发流程里塞。
:::warning
对想白嫖 GPT/Gemini 写代码的学生党来说，Codespaces + Copilot 的红利期基本结束了，按用量计费之后只适合轻度使用。可以说是基本用不了
:::

* * *

## OpenAI Codex

* [官网](https://openai.com/index/codex/)

注意这个 Codex 是那个 Agent 编程工具，不是 2021 年那个废弃的 Codex 模型，别搞混了。

当前版本，真的，真神。

如果你有 GPT 账号，买个 Plus 会员，日常额度就挺够用的，尤其是配合 Cursor 或者终端里跑。

先理一下它的模型节奏，这一年多是真快：

* **2025 年 9 月**：GPT-5-Codex，第一个专门为 Codex 调优的编程特化模型；
* **2026 年 2 月**：GPT-5.3-Codex，比上一代快约 25%；
* **2026 年 4 月**：GPT-5.5 家族进 API；
* **2026 年 8 月初**：GPT-5.6 已在 ChatGPT 推开，Plus / Pro 用户可用。

坏消息也有一个：**GPT-5.4 和 GPT-5.4-mini 将在 8 月 31 号从 Codex 里退役**。要是你的项目配置还锁着老模型，记得趁早切到新的，不然月底直接报错给你看。

我的建议一直没变：有 Plus 就无脑入，目前综合体验排前列的编程 Agent。没有 GPT 账号的，也可以看看后面智谱那段，用国产模型接到各种工具里曲线救国。

:::tip[推荐]Codex 是目前综合体验最好的 AI 编程 Agent 之一，有 GPT Plus 的话无脑入。8 月底前记得把手里的 5.4 系列模型换掉。:::

* * *

## Claude Code

* [官网](https://code.claude.com/)

Anthropic 出的终端 AI 编程框架。怎么说呢，目前我用过的工具里功能最完善、体验最好的，这一点到现在也没变。调度一堆子 Agent 并行干活、互相检查的那套玩法，它依然是玩得最溜的。

最近几个月值得知道的几件事：

* **Auto 模式成了默认**：8 月中旬开始，Pro / Max / Team 的新会话默认启用 Auto 模式，权限判断交给它自己来，不用每个命令都手动批；
* **API 促销价**：8 月 31 号前 API 有促销价，输入 $2 / 输出 $10 每百万 token，需要 v2.1.197 以上版本——这个价格对重度 API 用户来说是真便宜；
* **记忆系统打通**：8 月下旬云端 Memory 已经跨聊天和 Cowork 生效，跨设备接着上次干活的体验好了不少。

但是。

封号风险是真的存在的。官方的登录方式如果你走非官方渠道，比如第三方中转 API、共享账号这些，被封的概率很大。我自己就踩过这个坑，具体怎么安装怎么配置我之前发过教程，这里就不多说了。

另外提醒一句：它烧 token 也是真的猛，喜提过「硅谷第一烧钱包」的外号。价格 Pro 20 刀一个月，Max 100 到 200 刀。如果怕封号风险又想用，那就走官方正规渠道，别乱跳 IP，问题不大。预算有限的，可以考虑下面的智谱方案把 GLM 接进来替它打工，成本能砍一个数量级。

:::warning
Claude Code 功能最强，但封号风险和 Token 成本都高。建议走官方渠道，预算紧的组合拳是用第三方兼容端点接国产模型。
:::

* * *

## Qoder CN（原通义灵码）

* [官网](https://lingma.aliyun.com/) / [更新日志](https://help.aliyun.com/zh/lingma/qoder-cn-update-log)

阿里的，以前叫通义灵码。**2026 年 5 月 20 号正式更名为 Qoder CN**，注意这不只是改名——跟着一起来的还有收费模式调整，以前一部分免费敞开用的 AI 编程功能收进了会员体系里。是的，国产厂商也开始收缩免费额度了，这点后面行业趋势那节细说。

产品本身底子还是有的：

* **Qwen-Coder-Qoder 模型**：今年 2 月引入的编程特化模型，就是官网默认那套底座；
* **NES 行间预测**：光标还没动它就在猜你下一行要写什么，预测准的时候很爽；
* **自定义模型接入**：IDE 端可以用自己的 API Key 接阿里系模型，个人专业版玩得动；
* 迭代速度快，8 月 25 号刚发了 v1.26.0，JetBrains 端的编程智能体也有了任务规划、消息排队这些能力。

另外阿里的办公 Agent 线就是 **千问办公（QwenOffice）**，主攻 B 端企业市场。在易观那份二季度的桌面办公智能体报告里，QoderWork 系排在第三名。

跟 Trae 比，Qoder CN 的优势是不用抢高峰资源、模型底子是自家最强的编程模型；劣势是免费的部分越来越少了。适合拿 Qwen 当主力模型的开发者。

:::tip[小结]Qoder CN 产品力在线、迭代勤快，但 5 月改名之后免费力度明显收敛。想白嫖的去 Trae，正经干活的可以试试它的专业版。:::

* * *

## Cursor

* [官网](https://cursor.com/)

海外这边必须单独说一下 Cursor，因为它已经不是"又一个 VS Code 套壳"了。

两个关键动作：

* **自研模型一路狂奔**：从 Composer 1.0 开始脱离对 Anthropic/OpenAI API 的依赖，到现在的 **Composer 2.5**，主打自主 Agent 批量干活，迭代速度快到离谱（1.5 到 2.5 就隔了几个月）；
* **Origin 代码托管**：8 月 13 号上线的，Cursor 直接做起了代码托管平台，编辑器只是入口，它想把你的整个仓库生命周期都留在自己生态里。

资本市场也给面子，最新一轮估值到了 290 亿美元左右，是独立 AI 编程公司里的天花板。20 刀一个月的订阅，对能榨出效率的人来说回本很快。

:::tip[小结]Cursor 目前是"商用成熟度 + 自研模型进度"平衡得最好的一个，订阅制明码标价不整乱七八糟的幺蛾子，适合愿意付费的主力开发者。:::

* * *

## 其他值得关注的新东西

### **AWS Kiro**

亚马逊的入局之作，2025 年 7 月发布，打法跟别人不一样：**Spec 驱动开发**——你先用自然语言描述需求，它先给你生成需求文档、设计文档、任务拆解，然后才动手写代码，相当于把"软件工程流程"灌进了 AI。有 IDE 和 CLI 两形态，还有一个能全自主跑完整任务的 Autonomous Agent（网页预览版）。路透社去年报道过亚马逊内部要求工程师优先用 Kiro、不再支持第三方 AI 编程工具。定价 Free 给 50 credits，往上 Pro 20 刀到 Power 200 刀。适合被"vibe 出来一堆屎山"坑过的团队。

### **Cognition / Devin Desktop**

Cognition 去年收购 Windsurf 之后，今年 6 月 2 号把编辑器整包升级成了 **Devin Desktop**，原 Cascade 引擎 7 月 1 号退役，换成了 Rust 重写的 Devin Local。等于 Windsurf 这个牌子彻底消失，变成了 Devin 的桌面指挥台。资本层面更夸张：D 轮刚融了 10 亿美元、估值 260 亿，8 月中旬 TechCrunch 又曝出新一轮谈判估值 400 亿往上。如果你想要的是"提需求，等结果"的全自主路线，它是目前最接近这个愿景的产品。

### **Lovable**

8 月 12 号 Reuters 确认拿了 4 亿美元的 C 轮，估值 133 亿。主打纯聊天式建站，月访问量 6 亿。非程序员做出能用的东西的最短路径，评价两极分化很严重——爱的人当神，恨的人喊骗局。

### **Replit Agent 3**

今年 3 月估值冲到 90 亿美元，半年翻了三倍。云端的 vibe coding 平台，Agent 3 能自己建数据库、自己测试自己部署。公司据说今年要冲 10 亿美元营收。适合从零到一快速做个能上线的小产品。

### **Cloudflare Kitesurf**

8 月上旬发的，很有意思的方向：**给 AI Agent 专用的浏览器**。跑在 Workers 的 V8 isolate 里，压根不是 Chromium，官方称 CPU 和内存占用比 Chromium 低 3 到 7 倍。beta 期间通过 Browser Run 免费用。你自己搭 Agent 管线需要浏览器自动化时可以直接上。

* * *

## 国产编程 Agent 大乱斗：dsh、Kimi Code、ZCode、MiMo Code、MMX-CLI

这一块可能是今年国内变化最大的地方。各家模型厂都想明白了一件事：光有模型不够，还得有自己的 Agent 运行时框架——圈子里管这个叫 harness，「模型决定上限，harness 决定下限」。挨个说：

### DeepSeek Harness（dsh）

8 月 13 号刚发生的重磅事件：DeepSeek 开源了它的首款智能体框架 **Harness**，命令行叫 `dsh`，MIT 协议。核心理念很激进——**「一切皆插件」（Everything is a Plugin）**。它没打算模仿 Claude Code 的交互形态，而是给你一套「Model + Harness = Agent」的底层执行框架，想怎么拼装随你。社区对它的定位是给开发者的 Agent 运行时底座，喜欢 DIY 的人这波有福了。

### Kimi Code

月之暗面的开源终端编程 Agent（前身是 1024 程序员节放出的 Kimi CLI），Apache 2.0 真开源、不绑定模型，能读写代码、执行 Shell 命令、搜文件、抓网页，还有 VS Code 插件。模型线一直猛更：K2.6 号称能连续编码 13 小时、单任务改 4000 多行代码，最新的专用编程模型是 K2.7 Code（256K 上下文）。但老问题还是那个老问题——价格对免费用户一如既往地不友好。

### ZCode

智谱出品的 AI 编程工具，定位很明确：**GLM 旗舰模型的官方 Harness**（官网原话）。去年 12 月底首发，现在已迭代到 ZCode 3.0——换上了全自研的 Agent 内核，深度适配自家 GLM 模型，分组任务工作区、Zread 知识库、Git 分支图这些都配齐了，走的是 Agentic Development Environment 的路子。

配套的 **GLM Coding Plan** 必须重点讲：Lite 连续包月 118 元（海外版只要 $10），Pro 538 元起，能直接接进 Claude Code、Cursor、Cline 这些主流工具当模型底座。以国产价格买到接近旗舰的编码能力，依然是预算敏感型的最优解。不过注意年初调过一次价，早期 20 块一个月的白菜价一去不复返了。

### 小米 MiMo Code

比较新的玩家：开源的终端 AI 编程助手，官方口号「始于编程，不止于编程」，内置限时免费的旗舰多模态模型，全中文界面，两步装完就能跑。主打卖点是持久记忆系统，专治长任务干着干着忘事的老毛病。免费是真免费，但我还是那句话：便宜的代价你得心里有数，复杂活儿别抱太高期待，轻度使用配合小米家的 Token Plan 正合适。

### MiniMax Code / MMX-CLI

MiniMax 双线出击：一边是桌面端的 **MiniMax Code**，把对话、项目工作区、文件操作、终端、浏览器、记忆、自动化任务全塞进同一个本地应用，Mac 和 Windows 都能装；另一边是 4 月发布的命令行工具 **MMX-CLI**，让 Agent 在终端里调它家全套多模态能力（文本、图像、视频、音乐、语音都能使唤）。模型底座 M2/M2.1 挺能打，在多语言软件工程榜单上拿过 49.4% 的成绩，价格只有海外旗舰的零头。速度确实可以，但重度实测下来适合中等强度的活儿，冲量之前记得看清楚 Coding Plan 资费。

### 其他值得留名的

* **Qwen Code**（通义实验室）：Apache 2.0 开源，对标 Claude Code 的思路，喜欢自己折腾管线的人可以魔改；
* **百度文心快码（Comate）**：免费、中文场景友好，官方口径代码采用率 44%，持续加全局 Rules 和多模型接入，轻度使用足够；
* **OpenCode**：严格说不是国产（SST 团队出品），但必须提一嘴——终端/IDE/桌面三端的开源 Agent，GitHub 近 20 万 Star、900 多位贡献者，支持 75+ 模型零锁定，今年初还接入了 GitHub Copilot 权限。想要一个谁都不绑定的自由底座，就是它了。

:::tip[补充]腾讯的 **CodeBuddy** 也在这波里：年初 CodeBuddy Code 2.0 里 90% 的代码是自己写的（四个工程师 58 天出货 79 个版本），还有面向研发全流程的云端智能体 NPC，腾讯内部 90% 的员工都在用。混元底子 + 腾讯云生态，企业用户可以关注。:::

* * *

## 已消失或被整合的工具

这个名单一直在变长，这也是这个行业的残酷之处：

* **Windsurf（原 Codeium）**：先被 Google 用 24 亿美元挖走 CEO 和核心团队，剩余资产被 Cognition 收购。2026 年 6 月品牌正式退役，变成 Devin Desktop，Cascade 引擎 7 月 1 号停服。
* **iFlow CLI（心流）**：阿里的免费终端智能体，号称国产 Claude Code，2026 年 4 月 17 号正式关停。免费的东西说没就没。
* **Gemini CLI / Gemini Code Assist（免费个人版）**：2026 年 6 月 18 号起停止对免费个人用户服务，全员迁去 Antigravity。
* **Amazon CodeWhisperer**：早已更名为 Amazon Q Developer，原品牌退役。
* **OpenAI Operator**：已并入 ChatGPT，不再作为独立产品。
* **豆包 MarsCode**：字节早期的 AI 编程产品，已被 Trae 取代。
* **通义灵码**：2026 年 5 月更名为 Qoder CN。

* * *

## 2026 行业格局：四个正在发生的变化

如果你半年没关注这个圈子，下面这几件事可能会颠覆你的认知。

**1. 单点工具集体消失，平台开始互相吞噬**

这是今年最大的主题。Google 把 Gemini CLI 和 Code Assist 整个吞进了 Antigravity；Cognition 把 Windsurf 吃掉变成 Devin Desktop；微软在推进把 Copilot 各端合成一个统一应用；字节把 Trae 升级成 Code/Work/Design 三模式的 TraeWork 大平台。单独存在的"AI 编程插件"这条路已经走到头了，大家都在拼全家桶。

**2. 办公 Agent 成了新战场**

前面已经单独聊过 WorkBuddy、豆包工作、千问办公的三强争霸了。补充一个视角：这是三大厂头一回在同一个新品类里贴身肉搏——腾讯靠社交流量入口，阿里死磕 B 端基建加钉钉，字节指望豆包 3.82 亿月活往企业市场撕口子。谁赢都不意外，但「AI 替你上班」这个心智一旦立住，桌面入口的价值会被重新定价。

**3. 免费时代正式结束了**

上半年好几件事叠在一起：GitHub Copilot 全面转按用量计费；智谱 Coding Plan 涨价改成积分制；TRAE 给免费用户上对话限额；通义灵码更名后收缩免费功能。去年那种"零成本白嫖旗舰模型"的好日子没有了，现在的问题是各家都在摸索怎么把你变成付费用户。

**4. 从补全助手到自治工程**

所有人都在往"全自主"冲：Cursor 的 Composer 2.5 主打批量自主 Agent、Kiro 把自治 Agent 做成独立产品线、Devin Local 在本地无监督干活、Anthropic 让 Auto 模式当默认。你负责说清楚需求，剩下的交给它——这条路的尽头大概就是文本框即开发环境。当然翻车的案例也不少，去年底那次因为 Agent 权限放太开导致的宕机事故，算是给全行业提了个醒。

* * *

## 横评总结与选择建议

| 工具  | 核心优势 | 主要缺点 | 适合人群 | 费用  |
| --- | --- | --- | --- | --- |
| Trae 国内版 | SOLO 全免、国产模型多、三模式工作台 | 新增对话限额、高峰限速 | 白嫖党、轻度使用 | 免费/积分制 |
| Cursor | 自研 Composer 2.5、Origin 托管生态 | 只能付费玩 | 正经主力开发者 | $20/月起 |
| OpenAI Codex | 模型迭代最快、GPT-5.6 已上线 | 5.4 系列即将退役需迁移 | GPT Plus 用户 | Plus 内含 |
| Claude Code | 体验天花板、子 Agent 调度最强 | 封号风险、烧钱猛 | 重度开发者、不差钱 | $20~200/月 |
| Qoder CN | Qwen 编程模型自研、迭代快 | 免费额度收缩 | Qwen 生态用户 | 专业版收费 |
| Copilot CLI | GitHub 全家桶联动、Slack 集成 | 按 token 计费烧 Credits | 已有 GitHub 订阅者 | $10~39/月 |
| Devin Desktop | 全自主愿景最近的产品 | 贵、企业向 | 不想写代码的团队 | 企业级 |
| AWS Kiro | Spec 驱动、工程规范派 | 学习成本、绑定 AWS | 规范型团队 | $20~200/月 |
| Lovable / Replit | 聊天式出品即上线 | 复杂项目不可控 | 非程序员、Demo 党 | 订阅制 |
| DeepSeek dsh | MIT 开源、「一切皆插件」随便魔改 | 太新，生态要等 | 折腾型开发者、DIY 党 | 免费开源 |
| ZCode + GLM 套餐 | 官方 Harness、GLM 深度适配、性价比之王 | 绑定智谱体系 | 预算敏感的技术党 | ¥118/月起 |
| Kimi Code | Apache 2.0 真开源、K2.7 Code 能扛长任务 | 价格对免费党不友好 | 开源爱好者 | 按模型计费 |
| 小米 MiMo Code | 免费、持久记忆系统、中文友好 | 复杂任务能力有限 | 轻度使用者 | 免费/Token Plan |
| MiniMax Code | 桌面全家桶、M2.1 性价比高 | 重度使用费钱，要看紧钱包 | 中等强度开发 | Coding Plan 套餐 |
| OpenCode | 近 20 万 Star、75+ 模型零锁定 | 得自己动手配 | 自由派极客 | 免费开源 |
| 办公 Agent 三强 | WorkBuddy / 豆包工作 / 千问办公各占一头 | 入口割据得选边站 | 想让 AI 替自己上班的人 | 免费为主+企业版 |

:::note[写在最后]AI 编程工具迭代太快了，这篇文章上周核对的行情这周就可能变。上半年的主旋律是「洗牌」：免费的变少了、独立的消失了、活下来的都变成了平台。我的建议是——留一个免费的当备胎（目前是 Trae），花钱买一个当主力（按预算选 Codex / Claude Code / Cursor），预算紧的组合拳是 GLM Coding Plan 接任意 CLI。本文会持续更新，有新的使用体验会追加进来。:::

* * *

## 主要参考来源

* [TRAE 官方定价页](https://www.trae.cn/pricing) · [火山引擎：SOLO 模式全量免费公告](https://developer.volcengine.com/articles/7598410727946682418)
* [财联社：AI 办公三强争霸卡位战](https://www.cls.cn/detail/2463325)
* [GitHub 官方博客：Copilot 转 ChatGPT 式按用量计费](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
* [OpenAI 模型发布记录](https://help.openai.com/en/articles/9624314-model-release-notes) · [ChatGPT 8 月更新说明](https://help.openai.com/am-et/articles/6825453-chatgpt-release-notes)
* [Claude Code 官方 Weekly Updates](https://code.claude.com/docs/en/whats-new/2026-w27) · [Anthropic 产品发布记录](https://support.claude.com/en/articles/12138966-release-notes)
* [InfoWorld：Google 统一旗下 AI 编程工具至 Antigravity](https://www.infoworld.com/article/4175416/google-to-unify-ai-coding-tools-under-antigravity.html)
* [Devin 官方博客：Windsurf 变身 Devin Desktop](https://devin.ai/blog/windsurf-is-now-devin-desktop) · [TechCrunch：Cognition 洽谈 400 亿估值](https://techcrunch.com/2026/08/12/ai-coding-startup-cognition-reportedly-already-in-talks-to-raise-at-40b-valuation/)
* [Cloudflare 博客：发布 Agent 专用浏览器 Kitesurf](https://blog.cloudflare.com/kitesurf/) · [Replit 融资公告](https://replit.com/news/funding-announcement)
* [InfoQ：通义灵码更名 Qoder CN](https://xie.infoq.cn/article/75bc1250a8a4783902a0de1ce) · [Qoder CN 官方更新日志](https://help.aliyun.com/zh/lingma/qoder-cn-update-log)
* [智谱 GLM Coding Plan 官方文档](https://docs.bigmodel.cn/cn/coding-plan/overview) · [新浪财经：CodeBuddy Code 2.0 发布](https://finance.sina.com.cn/stock/t/2026-01-22/doc-inhieikt4685574.shtml)
* [知乎专栏：DeepSeek Harness 深度研究](https://zhuanlan.zhihu.com/p/2071546145608880421)
* [腾讯 WorkBuddy 官网](https://www.workbuddy.cn/) · [ZCode 官网](https://zcode.z.ai/cn) · [OSCHINA：ZCode 3.0 发布](https://www.oschina.net/news/458812)
* [月之暗面开放平台（K2.7 Code）](https://platform.kimi.com/) · [小米 MiMo Code 发布公告](https://mimo.mi.com/docs/zh-CN/news/latest/mimocode)
* [MiniMax Code 官方文档](https://agent.minimaxi.com/docs/code/welcome) · [品玩：MiniMax 发布 MMX-CLI](https://www.pingwest.com/w/312786) · [OpenCode 官网](https://opencode.ai/zh)
