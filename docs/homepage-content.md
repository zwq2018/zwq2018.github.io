# Homepage content sources and maintenance

Last checked: **2026-10-03** (Asia/Shanghai).

This document records the public evidence used for the homepage content update. It is a maintenance record, not additional copy to publish on the homepage. Bibliography entries should retain the exact paper titles below.

## Homepage content organization

- Keep the original academic homepage theme, navigation, sidebar, section order, typography, and existing `paper-box` styling. The user explicitly requested the original design with additional content.
- Add Spatial-Interactor, EmbodiedMemory-Bench, Embodied-Navigator, VLA-Corrector, Show, Don't Tell / ProVisE, and GFT to the existing selected-publications list. Keep each project's full introduction in one entry, alongside its authors, demonstration or figure, paper, code, and project links.
- Put media coverage badges beside the corresponding project resources. Multiple publishers covering one paper do not become separate project introductions or a new media grid. Update the existing Embodied-Reasoner entry rather than inserting a duplicate.
- News is a short dated changelog that links to the corresponding publication entry. Retain the original older publications, honors, experience, invited talks, and services.
- The two Navigator publishers supplied in the screenshot have no verified article URLs. They remain text credits in its publication entry. Add their original URLs when available.
- Keep X and the confirmed Xiaohongshu profile in the original author sidebar. The academic page again lives at `/`; `/about/`, `/about.html`, and the previous `/archive/` link redirect there.

## Evidence rules

- Prefer the paper's official proceedings page for conference venue, title, and author order. Use arXiv for the first public submission date and preprint metadata.
- A first arXiv date, a revision date, an acceptance announcement, and the proceedings publication date are different events. Do not label the first arXiv date as the conference publication date.
- Dates below follow the calendar dates displayed by arXiv. They are bibliographic labels; do not silently convert them to another time zone.
- Describe a team project only when Wenqi Zhang appears in its paper's author list, or when a directly associated team repository supplies the relevant provenance. A fork or a starred repository alone does not establish authorship.
- User-supplied screenshots are supplementary evidence for requested article titles and publishers. Real article/project URLs are the main references. Screenshots do not justify inventing a URL, date, acceptance, metric, or authorship claim.
- Video URLs are taken from official project HTML or official repository README/source. Keep a visible project-page fallback, avoid automatic playback, and recheck the source when updating the page.
- Live stars, downloads, rankings, and follower counts were deliberately excluded from the redesign. Any later use needs a date and a current source.

## Identity and profile

| Field | Current content | Evidence / scope |
| --- | --- | --- |
| Name | Wenqi Zhang / 张文祺 | Existing [personal homepage](https://zwq2018.github.io/), team project pages, and [智猩猩 speaker page](https://course.zhidx.com/c/MzVhMzczZDM3MDJjMzM5NDRjODM%3D). Use 祺, not 起 or 琪. |
| Affiliation / location | Zhejiang University / Hangzhou | Existing personal homepage. |
| English role | ZJU100 Young Professor | Existing personal homepage self-description. Do not silently replace this with a different formal rank. |
| Chinese role | 浙江大学“百人计划”研究员 | Chinese rendering used by the redesign. The preserved English role is the directly retrieved self-description; a future institutional bio should be used if a more exact formal Chinese rank is required. |
| Email | zhangwenqi@zju.edu.cn | Existing homepage, ACL papers, and official team repositories. |
| X | [@spicysweet1859](https://x.com/spicysweet1859) | User supplied this exact account; public project posts also provide corroboration. Do not use the older Twitter link on the archived site. |
| GitHub | [zwq2018](https://github.com/zwq2018) | Existing homepage and official project provenance. |
| Team GitHub | [ZJU-OmniAI](https://github.com/ZJU-OmniAI) | Official project repositories, associated papers and project pages. |
| Xiaohongshu | [码农祺的经世致用](https://www.xiaohongshu.com/user/profile/60edb5190000000001006e9f) | Profile identification supplied by the parallel social-source check. This corrects the informal spelling in the original request. |
| Google Scholar | [C6Bmfw8AAAAJ](https://scholar.google.com/citations?user=C6Bmfw8AAAAJ&hl=en) | Existing personal homepage. |
| Previous work | Alibaba DAMO Academy internship; Advanced Institute of Information Technology, Peking University | Existing homepage. Keep “interned” for Alibaba; avoid implying a permanent professorship or employment there. |

Huawei TopMinds (June 2025), CIKM 2024 Distinguished Reviewer, and ACL/EMNLP (ACL-ARR) Area Chair in 2025 are carried over from the original homepage. They are dated historical claims, not claims about a current 2026 appointment.

## Recent projects

### Spatial-Interactor

- Exact paper title: **Spatial-Interactor: Learning Spatial Reasoning through Interaction with the Observable Physical World**.
- First arXiv submission: **2026-09-19**.
- Venue: **arXiv preprint, 2026**. No conference acceptance was established.
- Wenqi Zhang is in the arXiv author list. The official project page associates the work with OmniAI Group of ZJU ACES Lab, Zhejiang University, and SAP.
- Suggested Chinese description: **从交互轨迹学习局部状态变化，并将连续变化整合为长程空间推理。**
- Suggested English description: **Learning local state transitions and long-horizon spatial reasoning from interaction trajectories.**
- [Paper](https://arxiv.org/abs/2609.23038)
- [Project](https://zju-omniai.github.io/Spatial-Interactor/)
- [Code](https://github.com/ZJU-OmniAI/Spatial-Interactor)
- [Models and data collection](https://huggingface.co/collections/kagakouko/spatial-interactor)
- [Overview video](https://zju-omniai.github.io/Spatial-Interactor/assets/presentation/spatial-interactor-intro-en.mp4?v=20260924-faithful)
- [Video poster](https://zju-omniai.github.io/Spatial-Interactor/assets/presentation/spatial-interactor-intro-en-poster.webp?v=20260924-faithful)
- [Overview figure](https://zju-omniai.github.io/Spatial-Interactor/assets/overview.webp?v=20260917)
- [Associated X announcement](https://x.com/spicysweet1859/status/2103547468487229515): 2026-09-25, as recorded by the parallel read-only X check.

Verification: arXiv title, submission history, author list, and abstract; official project page and repository; video/poster paths extracted from project HTML. The video and poster returned HTTP 200 with `video/mp4` and `image/webp` respectively.

Copy boundary: this is training from observable interaction trajectories and spatial QA. Do not describe it as an inference-time agent that actively explores a scene unless a source specifically demonstrates that deployment. LSI-108K is the interaction-derived dataset; “on-policy distillation” is 在策略蒸馏/On-Policy Distillation, not an assertion of online deployment. Avoid describing a new explicit memory system here; the paper's central claim is state-transition modeling and long-horizon integration.

### EmbodiedMemory-Bench

- Exact paper title: **EmbodiedMemory-Bench: Benchmarking Embodied Memory for Long-Horizon Embodied Tasks**.
- First arXiv submission: **2026-09-23**.
- Venue: **arXiv preprint, 2026**. No conference acceptance was established.
- Wenqi Zhang appears in the author list.
- Suggested Chinese description: **评估智能体能否记住视觉细节、更新环境状态，并将交互经验用于后续长程任务。**
- [Paper](https://arxiv.org/abs/2609.28236)
- [Canonical project](https://zju-omniai.github.io/Embodied-Omni/EmbodiedMemoryBench/)
- [Compatibility project URL](https://zju-omniai.github.io/EmbodiedMemoryBench/)
- [Code](https://github.com/ZJU-OmniAI/Embodied-Omni/tree/main/embodied_memory)
- [Dataset](https://huggingface.co/datasets/lzLiang/EmbodiedMemoryBench)
- [Overview video](https://zju-omniai.github.io/Embodied-Omni/EmbodiedMemoryBench/assets/reference_video_en.mp4)
- [Poster](https://zju-omniai.github.io/Embodied-Omni/EmbodiedMemoryBench/assets/video-poster-en.jpg)

Verification: arXiv author/date/abstract metadata; canonical project page retrieved through Jina Reader; official Embodied-Omni README. The primary paper and project both describe 2,554 episodes across four task families. The project introduces the Embodied-Memorizer baseline and EMem-8B. Keep the benchmark name separate from its baseline model name.

### Embodied-Navigator

- Exact arXiv bibliography title: **Embodied-Navigator: Point, Think, Memorize, and Align for Efficient Navigation**.
- Project-page title adds **Embodied** before **Navigation**. Use the arXiv wording in bibliography entries; the project wording is acceptable for the demo heading.
- First arXiv submission: **2026-08-18**. Revision: **2026-08-27**.
- Venue: **arXiv preprint, 2026**. No conference acceptance was established.
- Wenqi Zhang appears in the paper author list; the project page marks him as a corresponding author.
- Suggested Chinese description: **以像素点选连接视觉理解与三维导航，结合按需推理、轨迹记忆和两层 GRPO，并在 Unitree Go2 上展示实机部署。**
- [Paper](https://arxiv.org/abs/2608.17512)
- [Project](https://zju-omniai.github.io/Embodied-Navigator/)
- [Code in the series repository](https://github.com/ZJU-OmniAI/Embodied-Omni/tree/main/embodied_navigator)
- [Standalone repository](https://github.com/ZJU-OmniAI/Embodied-Navigator)
- [Model](https://huggingface.co/UnderTides/Embodied-Navigator-7B-GRPO)
- [Introduction video](https://zju-omniai.github.io/Embodied-Navigator/img/Introduction.mp4)
- [Poster](https://zju-omniai.github.io/Embodied-Navigator/img/introduction-poster.jpg)
- [Cross-scenario demo](https://zju-omniai.github.io/Embodied-Navigator/img/cross-scenario.mp4)
- [Hall demo](https://zju-omniai.github.io/Embodied-Navigator/img/hall.mp4)
- [Meeting room demo](https://zju-omniai.github.io/Embodied-Navigator/img/meeting-room.mp4)
- [Outdoors demo](https://zju-omniai.github.io/Embodied-Navigator/img/outdoors.mp4)
- [Laboratory demo](https://zju-omniai.github.io/Embodied-Navigator/img/playground.mp4)
- [Outdoors failure case](https://zju-omniai.github.io/Embodied-Navigator/img/outdoors-failed.mp4)

Verification: arXiv metadata; official project HTML; official Embodied-Omni README; released model card. Introduction video and poster returned HTTP 200 with the expected media types. The real-world videos are explicitly described by the team as representative zero-shot Unitree Go2 trials.

Copy boundary: the VLM observes RGB; the complete system uses depth for pixel-to-3D projection and odometry for memory encoding. Avoid calling the whole deployed system RGB-only. Do not turn a reported success rate into a guarantee of real-world navigation.

### VLA-Corrector

- Exact title: **VLA-Corrector: Lightweight Detect-and-Correct Inference for Adaptive Action Horizon**.
- First arXiv submission: **2026-07-02**.
- Venue: **NeurIPS 2026**, confirmed by the official conference downloads index and the official team repository. This updates the earlier evidence record that listed only an arXiv preprint.
- Acceptance announcement month in the official README: **2026-09**. The exact acceptance announcement day was not established.
- Wenqi Zhang appears in the arXiv and official project author lists.
- Suggested Chinese description: **监测动作执行中的视觉偏差，及时中断过时动作并重新规划，提高 VLA 在接触与扰动场景下的闭环反应能力。**
- [Paper](https://arxiv.org/abs/2607.01804)
- [Official NeurIPS index](https://neurips.cc/Downloads/2026)
- [Official NeurIPS poster entry](https://neurips.cc/virtual/2026/poster/149247)
- [Project](https://zju-omniai.github.io/vla-corrector/)
- [Code and acceptance announcement](https://github.com/ZJU-OmniAI/vla-corrector)
- [Drawer perturbation demo](https://zju-omniai.github.io/vla-corrector/assets/videos/drawer_alignment_perturbation.mp4)
- [Blue bowl perturbation demo](https://zju-omniai.github.io/vla-corrector/assets/videos/block_to_blue_bowl_perturbation.mp4)
- [White bowl perturbation demo](https://zju-omniai.github.io/vla-corrector/assets/videos/block_to_white_bowl_perturbation.mp4)
- [Official teaser figure used as poster](https://zju-omniai.github.io/vla-corrector/assets/images/teaser_open_loop_vs_closed_loop.webp)

Verification: exact title/author/date on arXiv; title linked on NeurIPS 2026 Downloads to poster 149247; team README News and citation; project HTML source for media. The poster event page itself was not retrieved by the web cache during the check, but the exact official conference index link was verified. Demo video and teaser figure returned HTTP 200 with the expected media types.

Copy boundary: the full VLA backbone remains frozen; the external corrector is trained. Do not describe the whole method as training-free. The official project demos are silent real-robot clips. “40M” refers approximately to the external corrector, not the complete VLA model.

### Show, Don't Tell / ProVisE

- Exact paper title: **Show, Don't Tell: Evaluating Spatial Cognition in Generative Pixels Rather Than LLM Text**.
- Framework: **ProVisE**. Diagnostic benchmark: **SpatialGen-Bench**.
- First arXiv submission: **2026-07-23**.
- Venue: **arXiv preprint, 2026**. No conference acceptance was established.
- Wenqi Zhang appears in the author list.
- Suggested Chinese description: **让生成模型在图像中标记、描画空间答案，再解析为可比较的评估指标。**
- [Paper](https://arxiv.org/abs/2607.21072)
- [Project](https://zju-omniai.github.io/ProVisE/)
- [Code](https://github.com/ZJU-OmniAI/ProVisE)
- [Dataset](https://huggingface.co/datasets/wx91726/SpatialGen-Bench)
- [Overview video](https://zju-omniai.github.io/ProVisE/assets/provise-overview.mp4)
- [Poster](https://zju-omniai.github.io/ProVisE/assets/provise-overview-poster.webp)
- [Official README video fallback](https://github.com/user-attachments/assets/3d63f668-e9fe-48ce-aaca-3a51b1940c41)
- [Associated X announcement](https://x.com/spicysweet1859/status/2080675405263155431): 2026-07-24, as recorded by the parallel read-only X check.

Verification: arXiv title/date/author/abstract; official README; project HTML media attributes recorded by the parallel project-source check. Overview video and poster returned HTTP 200. The paper describes 470 diagnostic samples, 14 subtasks, and four capability levels; omit these counts if the short homepage card does not need them.

### GFT

- Exact title: **GFT: From Imitation to Reward Fine-Tuning with Unbiased Group Advantages and Dynamic Coefficient Rectification**.
- First arXiv submission: **2026-04-15**. Latest checked revision: **2026-05-02**.
- Formal venue: **Findings of ACL 2026**, proceedings month **July 2026**. Do not call this ACL 2026 Main.
- Wenqi Zhang appears in both arXiv and ACL Anthology author lists.
- Suggested Chinese description: **通过组内奖励比较和动态系数修正，把高效知识注入与后续奖励学习更好地衔接起来。**
- [Formal paper](https://aclanthology.org/2026.findings-acl.1444/)
- [arXiv](https://arxiv.org/abs/2604.14258)
- [Code](https://github.com/ZJU-OmniAI/GFT)
- [Official method figure](https://raw.githubusercontent.com/ZJU-OmniAI/GFT/main/docs/method.png)
- [Hugging Face daily paper](https://huggingface.co/papers/2604.14258)

Verification: arXiv submission history and abstract; ACL Anthology venue and author list; official repository and the first-author explanatory article. The method figure URL is the official repository contents API's `download_url`. The repository News line `2025/04/06` alongside ACL 2026 is an apparent typo; do not reuse it as a date. No standalone project overview video was established.

### Embodied-Reasoner (existing work, updated venue)

- Exact title: **Embodied-Reasoner: Synergizing Visual Search, Reasoning, and Action for Embodied Interactive Tasks**.
- First arXiv submission: **2025-03-27**.
- Formal venue: **ACL 2026 Main Conference**, proceedings month **July 2026**. The team README reports acceptance in April 2026.
- Suggested Chinese description: **协同视觉搜索、推理与行动，完成探索环境、寻找隐藏物体等长程交互任务。**
- [Formal paper](https://aclanthology.org/2026.acl-long.1910/)
- [arXiv](https://arxiv.org/abs/2503.21696)
- [Project](https://embodied-reasoner.github.io/)
- [Canonical code](https://github.com/ZJU-OmniAI/Embodied-Omni/tree/main/embodied_reasoner)
- [Historical code URL](https://github.com/zwq2018/embodied_reasoner), now redirects to the series repository.
- [Dataset](https://huggingface.co/datasets/zwq2018/embodied_reasoner)
- [Official README demo](https://github.com/user-attachments/assets/da9c5b42-ab8e-4101-9ec0-a226590d23fc)
- [智猩猩 talk](https://www.bilibili.com/video/BV1Cs7Hz4ETk)
- [Associated X announcement](https://x.com/spicysweet1859/status/1905577302781812756), as recorded by the parallel read-only X check.

Verification: formal ACL Anthology title/author/venue; arXiv; official README; existing homepage talk link. The formal paper includes Jiajun Liu, and writes Huixin Xu; do not copy an older arXiv author list into a formal 2026 citation. The homepage card may display March 2025 as the first release date next to ACL 2026, provided this distinction remains explicit in maintenance metadata.

## Other selected publications retained

| Work | Verified paper URL | Venue / caveat |
| --- | --- | --- |
| 2.5 Years in Class: A Multimodal Textbook for Vision-Language Pretraining | [Formal ICCV paper](https://openaccess.thecvf.com/content/ICCV2025/html/Zhang_2.5_Years_in_Class_A_Multimodal_Textbook_for_Vision-Language_Pretraining_ICCV_2025_paper.html), [arXiv](https://arxiv.org/abs/2501.00958) | ICCV 2025 established by CVF proceedings. Highlight is reported by the original homepage; the CVF bibliographic page alone does not encode that distinction. First arXiv date 2025-01-01; formal proceedings month October 2025. |
| STaR-SQL: Self-Taught Reasoner for Text-to-SQL | [Formal ACL paper](https://aclanthology.org/2025.acl-long.1187/), [arXiv](https://arxiv.org/abs/2502.13550) | ACL 2025 Main, July 2025. First arXiv date 2025-02-19. |
| Multimodal Self-Instruct | [arXiv](https://arxiv.org/abs/2407.07053), [code](https://github.com/zwq2018/Multi-modal-Self-instruct) | EMNLP 2024 Oral carried over from original homepage. |
| Data-Copilot | [arXiv](https://arxiv.org/abs/2306.07209), [canonical code](https://github.com/ZJU-OmniAI/Data-Copilot) | ICLR 2024 LLM Agent Workshop Outstanding Paper reported by original homepage and 智猩猩 speaker page. This is a workshop distinction; do not label it an ICLR main-conference paper or award. |

## Media coverage and talks

The article title and publisher in user screenshots are supplementary cross-checks. Use the URLs below as the clickable homepage destinations. Keep media titles separate from research paper titles. Exact publication dates are left unfilled where the original page could not be retrieved.

| Publisher / project | Requested title or description | Exact URL | Verification and date |
| --- | --- | --- | --- |
| 机器之心 / VLA-Corrector | VLA开环盲区，终于被堵上了：40M Corrector让机器人边做边纠错 | [WeChat original](https://mp.weixin.qq.com/s/rfSPbtc2_fRpggXeBPPC3Q) | Linked under Press and September 2026 News in the official VLA-Corrector README. The user screenshot supplies additional exact-title confirmation. Day not established. |
| 具身智能之心 / VLA-Corrector | 40M补上开环盲区！VLA-Corrector让VLA学会发现并纠错（浙大&达摩院） | [WeChat original](https://mp.weixin.qq.com/s?__biz=MzkyMDY0OTc1NA==&mid=2247540637&idx=1&sn=0f177736092e21a930e0d9dc40a2a583&chksm=c093b9a1a2fe4236d9240ee5817dc7758f3725d564d87936e8f0ab95ce63509a83c22b85b3d7#rd) | Exact link and title in official VLA-Corrector README, July 2026 News. Day not established. |
| 青稞AI / GFT | ACL 2026 Findings \| 浙大提出 GFT：On-Policy SFT 视角下的奖励微调 | [WeChat original](https://mp.weixin.qq.com/s/npZq21S-gWY75yxbZeSEpQ) · [same-account CSDN version](https://blog.csdn.net/QingKeLab/article/details/161197649) | WeChat URL from official GFT README. The QingKeLab CSDN article has the exact title, first-author attribution, and corresponding paper/code. Its category listing records 2026-05-18 16:37:50. Article body shows a later recommendation date; do not substitute that for original publication. |
| 机器之心 / ProVisE | 让生成式模型「画」出空间智能，而非强迫LLM输出「坐标」! 浙大提出Agentic空间认知评估框架 | [Publisher original site](https://www.jiqizhixin.com/articles/2026-08-08-4) | Exact-title link from the publisher's 2026-08-08 archived feed. Original page presents a login shell in the reader. [Feed cross-check](https://tgmeng.com/archive/2026-08-08/platform/p-701a4d929467). A separate indexed reprint corroborates title and team association, but its certificate failed during retrieval, so do not use it as the main homepage destination. |
| 智猩猩 / Embodied-Reasoner | 具身推理模型Embodied-Reasoner让机器人学会思考与交互 | [Official speaker/course page](https://course.zhidx.com/c/MzVhMzczZDM3MDJjMzM5NDRjODM%3D) · [video talk](https://www.bilibili.com/video/BV1Cs7Hz4ETk) | Official course page: 2025-05-27 19:00. Speaker and paper association explicit. This is the verified official talk; it must not be mislabeled as a different unspecified 微信 article. |
| 机器之心Pro / Embodied-Reasoner | 具身交互推理: 图像-思考-行动交织思维链让机器人会思考、会交互 | [Publisher account on Sohu](https://www.sohu.com/a/889469911_129720) | Sohu source line identifies 机器之心Pro, published 2025-04-27 10:42. Exact arXiv/code/project association in the article. |
| AITime / Multimodal Self-Instruct | Visual reasoning data synthesis talk | [Video](https://www.bilibili.com/video/BV1JuSqYKEnH/) | Original personal homepage talk link, dated October 2024 in the source homepage. |

### Requested media with links still to supply

These two items are confirmed as requested by the user's screenshots, but an exact original URL was not located. Preserve them as maintenance TODOs. Do not use a fabricated WeChat URL, a search-results URL, or an unrelated navigation article as a destination.

1. **智猩猩社群** — “浙大&浙江人形提出高效具身导航模型，统一动作、思考、记忆与强化学习！” Associated project: Embodied-Navigator. Original URL and publication date: **pending**.
2. **视觉语言导航** — “点选-思考-记忆-对齐！Embodied-导航器：面向高效具身视觉语言导航统一框架”. Associated project: Embodied-Navigator. Original URL and publication date: **pending**.

The separately verified January 2026 [visual-language-navigation invited talk](https://www.bilibili.com/video/BV149cjz5Es5/) in the Embodied-Omni README is not evidence for the second article's URL; do not substitute it.

## Content audit from the redesign

1. Spatial-Interactor's initial “主动探索 / explore the scene” card should use the trajectory-learning description above. The research learns from interactions; the evidence does not establish active inference-time exploration.
2. Keep “ACL 2026 Main” for Embodied-Reasoner and “ACL 2026 Findings” for GFT distinct. Use NeurIPS 2026 for VLA-Corrector now that the official conference index corroborates the team announcement.
3. Prefer canonical team code links for Embodied-Reasoner and Data-Copilot. Historical GitHub URLs redirect, but canonical links expose the final destination and correct project subdirectory.
4. Prefer the official ACL/CVF publication links for papers with established proceedings. An older arXiv page may still say “Under review” and must not override the formal proceedings evidence.
5. Retain project-page links beside all videos. “Introduction / overview” and “real-robot demo” describe different media; use the correct label for each source.
6. Do not label approximate parameter counts as the full model size, infer conference acceptance from screenshots, or promote code repository update timestamps to research release dates.

## Updating this record

For each new homepage item, save its exact paper title, author association, first public date, venue source, project/code URL, media source URL, and last checked date here. Update the website's short English/Chinese summaries together. Recheck links and content types when changing media. Preserve pending media items until their real original URLs are supplied or independently located.
