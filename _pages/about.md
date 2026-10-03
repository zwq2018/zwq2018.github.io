---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
  - /archive/
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>


# About Me    

I am a ZJU100 Young Professor at Zhejiang University. Previously, I interned at Alibaba DAMO Academy and worked at the Advanced Institute of Information Technology, Peking University.

# Research Interests  
My research focuses on Large Language Models, Multi-modal Models, and their applications in Embodied Intelligence. I have published over 40 papers at top international AI conferences.

- **LLM Agent**: LLM-powered autonomous agents, particularly in autonomous task execution, reasoning, and self-evolution through environmental interaction.

- **Spatial Intelligence**: Enhancing models' spatial cognition capabilities to better perceive, understand, reason, and interact within 3D environments, serving as the embodied brain.

- **Behavioral Intelligence**: Developing action generation models, such as Vision-Language-Action models (VLAs), for action generation and imitation, enabling flexible and autonomous navigation and manipulation—serving as the embodied cerebellum.

- **Social Intelligence**: Developing emotionally intelligent LLMs that not only excel in reasoning but also understand human intentions, emotions, and goals—enhancing their social capabilities for more empathetic and human-centered interactions.

<img src='/images/lab_goal.png' alt="Lab Goal" width="80%">

# 🔥 News
- *2026.09*: &nbsp;🚀 We release [Spatial-Interactor](#spatial-interactor) and [EmbodiedMemory-Bench](#embodied-memory-bench) for spatial reasoning and long-horizon embodied memory.
- *2026.08*: &nbsp;🚀 [Embodied-Navigator](#embodied-navigator) connects pixel pointing, selective reasoning, memory, and reinforcement learning for embodied navigation.
- *2026.07*: &nbsp;🚀 We release [VLA-Corrector](#vla-corrector) for corrective robot execution and [Show, Don't Tell / ProVisE](#provise) for visual spatial evaluation.
- *2026*: &nbsp;🎉 [Embodied-Reasoner](#embodied-reasoner) appears in ACL 2026 Main and [GFT](#gft) in ACL 2026 Findings.
- *2025.06*: &nbsp;🎉 Our Multimodal Textbook is accepted by ICCV 2025 Highlight [Multimodal Textbook](https://www.arxiv.org/abs/2501.00958), ranks #2 in Huggingface Trending, over 24k downloads in Huggingface.
- *2025.05*: &nbsp;🎉 Two papers are accepted by ACL 2025, about SQL generation ([STaR-SQL](https://arxiv.org/pdf/2502.13550)) and Social Reasoning LLM.
- *2025.03*: &nbsp;🎉 We release an Embodied Reasoning model. [Embodied-Reasoner: Synergizing Visual Search, Reasoning, and Action for Embodied Interactive Tasks](https://arxiv.org/abs/2503.21696)
- *2024.11*: &nbsp;🎉 I am honored to be awarded the distinguished reviewer award of CIKM 2024. 
- *2024.10*: &nbsp;🎉 One papers are accepted by NIPS 2024, focusing on benchmarking LLM's task planning ability ([TaskBench](https://arxiv.org/abs/2311.18760)). 
- *2024.10*: &nbsp;🎉 Two papers are accepted by EMNLP 2024, focusing on multimodal data synthesis ([Multimodal Self-instruct](https://arxiv.org/abs/2407.07053)) and [LLM O1-style reasoning](https://arxiv.org/pdf/2407.00390) 
- *2024.05*: &nbsp;🎉 Four papers are accepted by ACL 2024 about LLM reflection ([Self-contrast](https://arxiv.org/pdf/2401.02009)), self-evolving agent ([Agent-Pro](https://arxiv.org/pdf/2402.17574)), time perception ([Time-ToM](https://arxiv.org/pdf/2407.01455?)), and [PEFT](https://aclanthology.org/2024.acl-long.222.pdf).
- *2024.05*: &nbsp;🎉 One papers are accepted by IEEE-ACM Transactions on Audio Speech and Language Processing, focusing on [math reasoning](https://ieeexplore.ieee.org/abstract/document/10552332). 
- *2023.10*: &nbsp;🎉 [Data-Copilot](https://github.com/zwq2018/Data-Copilot) has been accepted by Outstanding Paper of LLM Agent Workshop@ICLR 2024. 




<span id="selected-publications"></span>

# 📝 Selected Publications


(# indicates corresponding author)

<div class='paper-box' id='spatial-interactor'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><video aria-label="Spatial-Interactor demonstration" src="https://zju-omniai.github.io/Spatial-Interactor/assets/presentation/spatial-interactor-intro-en.mp4?v=20260924-faithful" poster="https://zju-omniai.github.io/Spatial-Interactor/assets/presentation/spatial-interactor-intro-en-poster.webp?v=20260924-faithful" width="100%" controls playsinline preload="none"><a href="https://zju-omniai.github.io/Spatial-Interactor/">Watch on the project page</a></video></div></div>
<div class='paper-box-text' markdown="1">

[Spatial-Interactor: Learning Spatial Reasoning through Interaction with the Observable Physical World](https://arxiv.org/abs/2609.23038)<br>
Kaixiang Yao, Xu Wang, Miao Pan, Hu Xiyue, Weishi Wang, Daniel Dahlmeier, Jintao Chen, Yongliang Shen, Xuhong Zhang, **Wenqi Zhang**

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2609.23038)
[![Github](https://img.shields.io/badge/Github-Code-181717.svg)](https://github.com/ZJU-OmniAI/Spatial-Interactor)
[![Pages](https://img.shields.io/badge/Project-Page-0F88EB.svg)](https://zju-omniai.github.io/Spatial-Interactor/)
[![Huggingface](https://img.shields.io/badge/HuggingFace-Models_and_Data-orange.svg)](https://huggingface.co/collections/kagakouko/spatial-interactor)
[![X](https://img.shields.io/badge/X-Post-181717.svg)](https://x.com/spicysweet1859/status/2103547468487229515)
[![小红书](https://img.shields.io/badge/小红书-Article-007bff.svg)](https://www.xiaohongshu.com/search_result/6ab6b81d000000001303ea4f?xsec_token=ABfj0cTt3x24aofkoBmrkjGWKa7FlAmxuJUUpi0Iv8BjU=&xsec_source=)

- Learn local state transitions and long-horizon spatial reasoning from simulated and real interaction trajectories.
- Introduce the LSI-108K curriculum and combine supervised fine-tuning with on-policy distillation.

</div>
</div>


<div class='paper-box' id='embodied-memory-bench'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><video aria-label="EmbodiedMemory-Bench demonstration" src="https://zju-omniai.github.io/Embodied-Omni/EmbodiedMemoryBench/assets/reference_video_en.mp4" poster="https://zju-omniai.github.io/Embodied-Omni/EmbodiedMemoryBench/assets/video-poster-en.jpg" width="100%" controls playsinline preload="none"><a href="https://zju-omniai.github.io/Embodied-Omni/EmbodiedMemoryBench/">Watch on the project page</a></video></div></div>
<div class='paper-box-text' markdown="1">

[EmbodiedMemory-Bench: Benchmarking Embodied Memory for Long-Horizon Embodied Tasks](https://arxiv.org/abs/2609.28236)<br>
Lizhou Liang, Xinyu Zhong, Miao Pan, Xiaohe Zhou, Xuanyu Liu, Qinfeng Li, Peng Li, Jintao Chen, Xuhong Zhang, **Wenqi Zhang**

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2609.28236)
[![Github](https://img.shields.io/badge/Github-Code-181717.svg)](https://github.com/ZJU-OmniAI/Embodied-Omni/tree/main/embodied_memory)
[![Pages](https://img.shields.io/badge/Project-Page-0F88EB.svg)](https://zju-omniai.github.io/Embodied-Omni/EmbodiedMemoryBench/)
[![Huggingface](https://img.shields.io/badge/HuggingFace-Dataset-orange.svg)](https://huggingface.co/datasets/lzLiang/EmbodiedMemoryBench)
[![X](https://img.shields.io/badge/X-Post-181717.svg)](https://x.com/spicysweet1859/status/2105154714388328877)
[![小红书](https://img.shields.io/badge/小红书-Article-007bff.svg)](https://www.xiaohongshu.com/search_result/6abb33300000000018010bea?xsec_token=ABgWkBUjk6j4GFiLmjyQS_IuVTkSgo3kSOGly4VDuyOnc=&xsec_source=)

- Benchmark embodied memory through 2,554 interactive episodes across four task families.
- Introduce Embodied-Memorizer with spatial, event, and scene memories, and train the EMem-8B policy.

</div>
</div>


<div class='paper-box' id='embodied-navigator'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><video aria-label="Embodied-Navigator demonstration" src="https://zju-omniai.github.io/Embodied-Navigator/img/Introduction.mp4" poster="https://zju-omniai.github.io/Embodied-Navigator/img/introduction-poster.jpg" width="100%" controls playsinline preload="none"><a href="https://zju-omniai.github.io/Embodied-Navigator/">Watch on the project page</a></video></div></div>
<div class='paper-box-text' markdown="1">

[Embodied-Navigator: Point, Think, Memorize, and Align for Efficient Navigation](https://arxiv.org/abs/2608.17512)<br>
Hongyan Feng, Sunlai Chen, Xuanyu Liu, Miao Pan, Yangfan Xie, Yuxiang Cui, Zhongxiang Zhou, Rong Xiong, **Wenqi Zhang**, Jianwei Yin, Yueting Zhuang, Xuhong Zhang

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2608.17512)
[![Github](https://img.shields.io/badge/Github-Code-181717.svg)](https://github.com/ZJU-OmniAI/Embodied-Omni/tree/main/embodied_navigator)
[![Pages](https://img.shields.io/badge/Project-Page-0F88EB.svg)](https://zju-omniai.github.io/Embodied-Navigator/)
[![Huggingface](https://img.shields.io/badge/HuggingFace-Model-orange.svg)](https://huggingface.co/UnderTides/Embodied-Navigator-7B-GRPO)
[![微信公众号](https://img.shields.io/badge/微信公众号-Article-007bff.svg)](https://mp.weixin.qq.com/s/jATgUDfUanh0jZZh71q48A)
[![小红书](https://img.shields.io/badge/小红书-Article-007bff.svg)](https://www.xiaohongshu.com/user/profile/60edb5190000000001006e9f/6a88a299000000003800097d?xsec_token=ABDsqSF5Ky_czTURhdwASwhnykPT927ePIt-EeaN82qjQ%3D&xsec_source=pc_user)

- Bridge visual grounding and 3D navigation through pixel pointing, selective reasoning, and Anchor-Trajectory Memory.
- Align navigation decisions with Two-Level GRPO and demonstrate zero-shot deployment on a Unitree Go2 quadruped.

</div>
</div>


<div class='paper-box' id='vla-corrector'><div class='paper-box-image'><div><div class="badge">NeurIPS 2026</div><video aria-label="VLA-Corrector demonstration" src="https://github.com/user-attachments/assets/eb2b70f7-f8d9-4d18-b85a-7014949fde7b" poster="https://zju-omniai.github.io/vla-corrector/assets/images/teaser_open_loop_vs_closed_loop.webp" width="100%" controls playsinline preload="none"><a href="https://github.com/ZJU-OmniAI/vla-corrector">Watch in the official repository</a></video></div></div>
<div class='paper-box-text' markdown="1">

[VLA-Corrector: Lightweight Detect-and-Correct Inference for Adaptive Action Horizon](https://arxiv.org/abs/2607.01804)<br>
Yi Pan, Miao Pan, Qi Lu, Jiaming Huang, Man Zhang, Siteng Huang, Xin Li, Jie Zhang, Yongliang Shen, Xuhong Zhang, **Wenqi Zhang**

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2607.01804)
[![Github](https://img.shields.io/badge/Github-Code-181717.svg)](https://github.com/ZJU-OmniAI/vla-corrector)
[![Pages](https://img.shields.io/badge/Project-Page-0F88EB.svg)](https://zju-omniai.github.io/vla-corrector/)
{% include media-link.html name="机器之心" logo="synced.jpg" url="https://mp.weixin.qq.com/s/rfSPbtc2_fRpggXeBPPC3Q" %}
{% include media-link.html name="具身智能之心TechDaily" logo="techdaily.webp" url="https://mp.weixin.qq.com/s?__biz=MzkyMDY0OTc1NA==&mid=2247540637&idx=1&sn=0f177736092e21a930e0d9dc40a2a583&chksm=c093b9a1a2fe4236d9240ee5817dc7758f3725d564d87936e8f0ab95ce63509a83c22b85b3d7#rd" %}
[![小红书](https://img.shields.io/badge/小红书-Article-007bff.svg)](https://www.xiaohongshu.com/user/profile/60edb5190000000001006e9f/6a4c9a220000000006036692?xsec_token=ABFJVohFX2rPdwUyx9eqn-H8NtFZ9HtUJ8IyvPZ5SS_qA%3D&xsec_source=pc_user)

- Detect execution drift with a lightweight latent-space visual monitor while keeping the VLA backbone frozen.
- Truncate stale action chunks and trigger corrective replanning for adaptive action horizons.

</div>
</div>


<div class='paper-box' id='provise'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><video aria-label="ProVisE overview demonstration" src="https://zju-omniai.github.io/ProVisE/assets/provise-overview.mp4" poster="https://zju-omniai.github.io/ProVisE/assets/provise-overview-poster.webp" width="100%" controls playsinline preload="none"><a href="https://zju-omniai.github.io/ProVisE/">Watch on the project page</a></video></div></div>
<div class='paper-box-text' markdown="1">

[Show, Don't Tell: Evaluating Spatial Cognition in Generative Pixels Rather Than LLM Text](https://arxiv.org/abs/2607.21072)<br>
Xu Wang, Kaixiang Yao, Miao Pan, Xiaohe Zhou, Xuanyu Liu, **Wenqi Zhang**, Xuhong Zhang

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2607.21072)
[![Github](https://img.shields.io/badge/Github-Code-181717.svg)](https://github.com/ZJU-OmniAI/ProVisE)
[![Pages](https://img.shields.io/badge/Project-Page-0F88EB.svg)](https://zju-omniai.github.io/ProVisE/)
[![Huggingface](https://img.shields.io/badge/HuggingFace-Dataset-orange.svg)](https://huggingface.co/datasets/wx91726/SpatialGen-Bench)
{% include media-link.html name="机器之心" logo="synced.jpg" url="https://www.jiqizhixin.com/articles/2026-08-08-4" %}
[![X](https://img.shields.io/badge/X-Post-181717.svg)](https://x.com/spicysweet1859/status/2080675405263155431)
[![小红书](https://img.shields.io/badge/小红书-Article-007bff.svg)](https://www.xiaohongshu.com/user/profile/60edb5190000000001006e9f/6a62f47d0000000009035294?xsec_token=ABew8j_nBLxOEwDgaKzGv_jxdZxlgEK8LPqbWbu67UeJg%3D&xsec_source=pc_user)

- Evaluate spatial cognition through protocol-constrained visual answers parsed into comparable metrics.
- Introduce SpatialGen-Bench with 470 samples across 14 spatial subtasks and four capability levels.

</div>
</div>


<div class='paper-box' id='gft'><div class='paper-box-image'><div><div class="badge">ACL 2026 Findings</div><img src="https://raw.githubusercontent.com/ZJU-OmniAI/GFT/main/docs/method.png" alt="GFT method overview" width="100%" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

[GFT: From Imitation to Reward Fine-Tuning with Unbiased Group Advantages and Dynamic Coefficient Rectification](https://aclanthology.org/2026.findings-acl.1444/)<br>
Wangjie Gan, Miao Pan, Linbo Xi, **Wenqi Zhang**, Jintao Chen, Jianwei Yin, Xuhong Zhang

[![ACL 2026](https://img.shields.io/badge/ACL_2026-Paper-b31b1b.svg)](https://aclanthology.org/2026.findings-acl.1444/)
[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2604.14258)
[![Github](https://img.shields.io/badge/Github-Code-181717.svg)](https://github.com/ZJU-OmniAI/GFT)
{% include media-link.html name="青稞AI" logo="qingke.png" url="https://mp.weixin.qq.com/s/npZq21S-gWY75yxbZeSEpQ" %}
[![小红书](https://img.shields.io/badge/小红书-Article-007bff.svg)](https://www.xiaohongshu.com/search_result/6a0ae3b3000000003703600b?xsec_token=AB3qESLh3jg-uJjq22_VeKyX-ZbxAQptAa0GHeEXfFpx4=&xsec_source=)

- Use Group Advantage Learning to derive reward-based supervision from diverse response groups.
- Stabilize optimization with Dynamic Coefficient Rectification and improve the transition to subsequent reinforcement learning.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><video src='/images/multimodal textbook.mp4' alt="sym" width="100%" controls></video></div></div>

<div class='paper-box-text' markdown="1">

[2.5 Years in Class: A Multimodal Textbook for Vision-Language Pretraining](https://www.arxiv.org/abs/2501.00958)  
**Wenqi Zhang**, Hang Zhang, Xin Li, Jiashuo Sun, Yongliang Shen, Weiming Lu, Deli Zhao, Yueting Zhuang, Lidong Bing

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://www.arxiv.org/abs/2501.00958) 
[![Github](https://img.shields.io/github/stars/DAMO-NLP-SG/multimodal_textbook?style=social&label=stars)](https://github.com/DAMO-NLP-SG/multimodal_textbook)
[![Huggingface](https://img.shields.io/badge/HuggingFace-Datasets-orange.svg)](https://huggingface.co/datasets/DAMO-NLP-SG/multimodal_textbook)
[![Pages](https://img.shields.io/badge/Project-Page-0F88EB.svg)](https://multimodal-interleaved-textbook.github.io/)
[![知乎](https://img.shields.io/badge/知乎-Article-007bff.svg)](https://zhuanlan.zhihu.com/p/16512014215)
[![X](https://img.shields.io/badge/X-Post-181717.svg)](https://x.com/spicysweet1859/status/1875075137936232690)

- Interleaved image-text pretraining corpus from instructional videos
- All the images and text are extracted from online instructional videos (22,000 class hours), covering multiple fundamental subjects, e.g., mathematics, physics, and chemistry.
- Our textbook corpus providing a more coherent context and richer knowledge for image-text aligning.
- More than 20,000 downloads within one month (Rank #2 in Huggingface Trending)
</div>
</div>


<div class='paper-box' id='embodied-reasoner'><div class='paper-box-image'><div><div class="badge">ACL 2026 Main</div><video aria-label="Embodied-Reasoner demonstration" src='/images/video_en_subtitle.mp4' poster='/images/embodied-reasoner-poster.jpg' width="100%" controls playsinline preload="none"><a href="https://embodied-reasoner.github.io/">Watch on the project page</a></video></div></div>


<div class='paper-box-text' markdown="1">

[Embodied-Reasoner: Synergizing Visual Search, Reasoning, and Action for Embodied Interactive Tasks
](https://aclanthology.org/2026.acl-long.1910/)<br>
**Wenqi Zhang**, Mengna Wang, Gangao Liu, Huixin Xu, Yiwei Jiang, Yongliang Shen, Guiyang Hou, Zhe Zheng, Hang Zhang, Xin Li, Jiajun Liu, Weiming Lu, Peng Li, Yueting Zhuang

[![ACL 2026](https://img.shields.io/badge/ACL_2026-Paper-b31b1b.svg)](https://aclanthology.org/2026.acl-long.1910/)
[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2503.21696) 
[![Github](https://img.shields.io/github/stars/ZJU-OmniAI/Embodied-Omni?style=social&label=stars)](https://github.com/ZJU-OmniAI/Embodied-Omni/tree/main/embodied_reasoner)
[![Huggingface](https://img.shields.io/badge/HuggingFace-Datasets-orange.svg)](https://huggingface.co/datasets/zwq2018/embodied_reasoner)
[![Pages](https://img.shields.io/badge/Project-Page-0F88EB.svg)](https://embodied-reasoner.github.io/)
[![B站视频](https://img.shields.io/badge/B%E7%AB%99-%E8%A7%86%E9%A2%91-ff69b4.svg)](https://www.bilibili.com/video/BV1Cs7Hz4ETk?t=28.7)
{% include media-link.html name="机器之心" logo="synced.jpg" url="https://www.sohu.com/a/889469911_129720" %}
[![X](https://img.shields.io/badge/X-Post-181717.svg)](https://x.com/spicysweet1859/status/1905577302781812756)
[![小红书](https://img.shields.io/badge/小红书-Article-007bff.svg)](https://www.xiaohongshu.com/user/profile/60edb5190000000001006e9f/67e675fd000000001d01c5a1?xsec_token=ABeU3f9y5lAVLQ_HogxMpisbiM-gFz_4ulbesBTyrY6fs%3D&xsec_source=pc_user)

- O1-style Embodied Reasoning Model 
- Interactive Embodied Scenario and Long-horizon Tasks
- Autonomous Environment Exploration, Hidden Object Search, and Deep Reflection
- Open-source dataset: 9.3K *Observation-Reasoning-Action* interleaved trajectories with 64K images
</div>
</div>






<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Outstanding Paper@ICLR LLM Agent workshop</div><img src='/images/video1.GIF' alt="sym" width="100%"></div></div>

<div class='paper-box-text' markdown="1">

[Data-Copilot: Bridging Billions of Data and Humans with Autonomous Workflow](https://arxiv.org/abs/2306.07209)  
**Wenqi Zhang**, Yongliang Shen, Weiming Lu, Yueting Zhuang

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2306.07209) 
[![Github](https://img.shields.io/github/stars/zwq2018/data-copilot?style=social&label=stars)](https://github.com/zwq2018/Data-Copilot)
[![Hugginface Spaces](https://img.shields.io/badge/%F0%9F%A4%97-Open%20in%20Spaces-blue)](https://huggingface.co/spaces/zwq2018/Data-Copilot)
[![知乎](https://img.shields.io/badge/知乎-Video-0F88EB.svg)](https://zhuanlan.zhihu.com/p/636906119)
{% include media-link.html name="机器之心" logo="synced.jpg" url="https://www.jiqizhixin.com/articles/2023-06-26-2" %}
- LLM-powered autonomous data analysis agent   
- Automated data querying, analysis, and visualization   
- Enterprise-level scenario  
- Over 1.4k stars on Github
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2024 Oral</div><img src='/images/multimodal self-instruct.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Multimodal Self-Instruct: Synthetic Abstract Image and Visual Reasoning Instruction Using Language Model](https://arxiv.org/abs/2407.07053)  
**Wenqi Zhang**, Zhenglin Cheng, Yuanyu He, Mengna Wang, Yongliang Shen, Zeqi Tan, Guiyang Hou, Mingqian He, Yanna Ma, Weiming Lu, Yueting Zhuang

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2407.07053) 
[![Github](https://img.shields.io/github/stars/zwq2018/multi-modal-self-instruct?style=social)](https://github.com/zwq2018/Multi-modal-Self-instruct)
[![Project](https://img.shields.io/badge/Project-Website-blue.svg)](https://multi-modal-self-instruct.github.io)
[![Huggingface](https://img.shields.io/badge/HuggingFace-Datasets-orange.svg)](https://huggingface.co/datasets/zwq2018/Multi-modal-Self-instruct)
{% include media-link.html name="新智元" logo="xinzhiyuan.png" url="https://www.thepaper.cn/newsDetail_forward_28346662" %}
[![X](https://img.shields.io/badge/X-Post-181717.svg)](https://x.com/spicysweet1859/status/1810888293833449725)
[![AITime](https://img.shields.io/badge/AITime-Video-ff69b4.svg)](https://www.bilibili.com/video/BV1JuSqYKEnH/)

- Multimodal data engine
- Synthetic massive abstract chart data   
- Enhance the abstract image perception and reasoning ability of multimodal models
- Over 13k downloads on Huggingface
</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2024</div><img src='/images/self-constrast.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Self-Contrast: Better Reflection Through Inconsistent Solving Perspectives](https://arxiv.org/abs/2401.02009)  
**Wenqi Zhang**, Yongliang Shen, Linjuan Wu, Qiuying Peng, Jun Wang, Yueting Zhuang, Weiming Lu 

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2401.02009) 
{% include media-link.html name="MIT科技评论" logo="mittr.svg" url="https://www.mittrchina.com/news/detail/13106" wordmark=true %}
{% include media-link.html name="PaperWeekly" logo="paperweekly.jpg" url="https://bendi.news/wxnews/cls46zk260023lpnyhyekusue" %}
- Investigate LLM's self-reflection ability 
- Break the blind faith in LLM's self-reflection ability
- Inference time scale-up for better reasoning ability
</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2024</div><img src='/images/agent-pro.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Agent-Pro: Learning to Evolve via Policy-Level Reflection and Optimization](https://arxiv.org/abs/2402.17574)
**Wenqi Zhang**, Ke Tang, Hai Wu, Mengna Wang, Yongliang Shen, Guiyang Hou, Zeqi Tan, Peng Li, Yueting Zhuang, Weiming Lu    

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2402.17574) 
[![Github](https://img.shields.io/github/stars/zwq2018/Agent-Pro?style=social)](https://github.com/zwq2018/Agent-Pro) 
{% include media-link.html name="量子位" logo="qbit-wordmark.png" url="https://www.qbitai.com/2024/03/127294.html" wordmark=true %}
{% include media-link.html name="将门创投" logo="jiangmen.png" url="https://mp.weixin.qq.com/s/gD4pZc6pvX8f_62uiPJacg" wordmark=true %}
- Self-evolving LLM agent
- Policy-level reflection and optimization
- Dynamic environment and game scenarios
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2022</div><img src='/images/nav.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Closed-Loop Perception, Decision-Making and Reasoning Mechanism for Human-Like Navigation](https://arxiv.org/abs/2207.11901)  
**Wenqi Zhang**, Kai Zhao, Peng Li, Xiao Zhu, Yongliang Shen, Yanna Ma, Yingfeng Chen, Weiming Lu

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2207.11901) 
[![Github](https://img.shields.io/github/stars/zwq2018/Robot_Navigation_RL?style=social)](https://github.com/zwq2018/Robot_Navigation_RL) 
[![YouTube](https://img.shields.io/badge/YouTube-Video-FF0000.svg)](https://youtu.be/jD_7sCdMMWk) 
[![Bilibili](https://img.shields.io/badge/Bilibili-Video-00A1D6.svg)](https://www.bilibili.com/video/BV13L411H7zr/?spm_id_from=333.788.recommend_more_video.-1&vd_source=818fc4816fcb6a1d8c82455cd7851b48) 
- Autonomous navigation framework for robots
- Self-exploration for better navigation strategy
- Action-to-State inverse reasoning process
</div>
</div>  


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arxiv2406</div><img src='/images/videollama2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[VideoLLaMA 2: Advancing Spatial-Temporal Modeling and Audio Understanding in Video-LLMs](https://arxiv.org/pdf/2406.07476)  
Zesen Cheng, Sicong Leng, Hang Zhang, Yifei Xin, Xin Li, Guanzheng Chen, Yongxin Zhu, **Wenqi Zhang**, Ziyang Luo, Deli Zhao, Lidong Bing

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/pdf/2406.07476) 
[![Github](https://img.shields.io/github/stars/DAMO-NLP-SG/VideoLLaMA2?style=social)](https://github.com/DAMO-NLP-SG/VideoLLaMA2) 
[![hf_space](https://img.shields.io/badge/🤗-AV--Demo-9C276A.svg)](https://huggingface.co/spaces/lixin4ever/VideoLLaMA2-AV)
[![hf_checkpoint](https://img.shields.io/badge/🤗-Checkpoints-9C276A.svg)](https://huggingface.co/collections/DAMO-NLP-SG/videollama-2-6669b6b6f0493188305c87ed)
- Open-source Video-language model
- Over 20k downloads on Huggingface
</div>
</div>

- <span style="font-size:small; color:white; background-color:blue">`ACL 2025 Main`</span> [STaR-SQL: Self-Taught Reasoner for Text-to-SQL](https://aclanthology.org/2025.acl-long.1187/), Mingqian He, Yongliang Shen, **Wenqi Zhang**, Qiuying Peng, Jun Wang, Weiming Lu.

- <span style="font-size:small; color:white; background-color:blue">`TASLP 2406`</span> [Specialized Mathematical Solving by a Step-by-Step Expression Chain Generation](https://ieeexplore.ieee.org/document/10552332), **Wenqi Zhang**, Yongliang Shen, Guiyang Hou, Kuangyi Wang, Weiming Lu. [![Github](https://img.shields.io/github/stars/zwq2018/Math-Reasoning-With-PLMs?style=social)](https://github.com/zwq2018/Math-Reasoning-With-PLMs)

- <span style="font-size:small; color:white; background-color:blue">`ACL 2024 Findings`</span> [TimeToM: Temporal Space is the Key to Unlocking the Door of Large Language Models](https://arxiv.org/pdf/2407.01455), Guiyang Hou, **Wenqi Zhang #**, Yongliang Shen, Linjuan Wu, Weiming Lu.

- <span style="font-size:small; color:white; background-color:blue">`EMNLP 2023`</span> [An Expression Tree Decoding Strategy for Mathematical Equation Generation](https://arxiv.org/abs/2310.09619), **Wenqi Zhang**, Yongliang Shen, Qingpeng Nong, Zeqi Tan, Yanna Ma, Weiming Lu. [![Github](https://img.shields.io/github/stars/zwq2018/Math-Reasoning-With-PLMs?style=social)](https://github.com/zwq2018/Math-Reasoning-With-PLMs)


- <span style="font-size:small; color:white; background-color:blue">`EMNLP 2022 Findings`</span>[Multi-View Reasoning: Consistent Contrastive Learning for Math Word Problem](https://arxiv.org/abs/2210.11694), **Wenqi Zhang**, Yongliang Shen, Yanna Ma, Xiaoxia Cheng, Zeqi Tan, Qingpeng Nong, Weiming Lu. [![Github](https://img.shields.io/github/stars/zwq2018/Math-Reasoning-With-PLMs?style=social)](https://github.com/zwq2018/Math-Reasoning-With-PLMs)

- <span style="font-size:small; color:white; background-color:blue">`IROS 2021 Oral`</span> [Learning to Navigate in a VUCA Environment: Hierarchical Multi-expert Approach](https://arxiv.org/abs/2111.08364), **Wenqi Zhang**, Kai Zhao, Peng Li, Xiao Zhu, Faping Ye, Weijie Jiang, Huiqiao Fu, Tao Wang. [![YouTube](https://img.shields.io/badge/YouTube-Video-FF0000.svg)](https://www.youtube.com/watch?v=lAnW4QIWDoU) [![Bilibili](https://img.shields.io/badge/Bilibili-Video-00A1D6.svg)](https://www.bilibili.com/video/BV1E64y1z7vJ/?spm_id_from=333.999.0.0&vd_source=818fc4816fcb6a1d8c82455cd7851b48)


- <span style="font-size:small; color:white; background-color:blue">`arxiv2410`</span> [Entering Real Social World! Benchmarking the Theory of Mind and Socialization Capabilities of LLMs from a First-person Perspective](https://arxiv.org/pdf/2410.06195), Guiyang Hou, **Wenqi Zhang**, Yongliang Shen, Zeqi Tan, Sihao Shen, Weiming Lu.

- <span style="font-size:small; color:white; background-color:blue">`NIPS 2024`</span> [TaskBench: Benchmarking Large Language Models for Task Automation](https://arxiv.org/abs/2311.18760), Yongliang Shen, Kaitao Song, Xu Tan, **Wenqi Zhang**, Kan Ren, Siyu Yuan, Weiming Lu, Dongsheng Li, Yueting Zhuang. [![Github](https://img.shields.io/github/stars/microsoft/JARVIS?style=social)](https://github.com/microsoft/JARVIS)

- <span style="font-size:small; color:white; background-color:blue">`EMNLP 2024 Main`</span> [Advancing Process Verification for Large Language Models via Tree-Based Preference Learning](https://arxiv.org/pdf/2407.00390), Mingqian He, Yongliang Shen, **Wenqi Zhang**, Zeqi Tan, Weiming Lu.

- <span style="font-size:small; color:white; background-color:blue">`ACL 2024 Main`</span> [Learning Global Controller in Latent Space for Parameter-Efficient Fine-Tuning](https://aclanthology.org/2024.acl-long.222.pdf), Zeqi Tan, Yongliang Shen, Xiaoxia Cheng, Chang Zong, **Wenqi Zhang**, Jian Shao, Weiming Lu, Yueting Zhuang.

- <span style="font-size:small; color:white; background-color:blue">`EMNLP 2023-Findings`</span> [Enhancing Emotion Recognition in Conversation via Multi-view Feature Alignment and Memorization](https://arxiv.org/abs/2310.09619), Guiyang Hou, Yongliang Shen, **Wenqi Zhang**, Wei Xue, Weiming Lu.

- <span style="font-size:small; color:white; background-color:blue">`ACL 2023`</span> [PromptNER: Prompt Locating and Typing for Named Entity Recognition](https://arxiv.org/pdf/2305.17104), Yongliang Shen, Zeqi Tan, Shuhui Wu, **Wenqi Zhang**, Rongsheng Zhang, Yadong Xi, Weiming Lu, Yueting Zhuang.

- <span style="font-size:small; color:white; background-color:blue">`EMNLP 2022`</span> [Query-based Instance Discrimination Network for Relational Triple Extraction](https://arxiv.org/pdf/2211.01797), Zeqi Tan, Yongliang Shen, Xuming Hu, **Wenqi Zhang**, Xiaoxia Cheng, Weiming Lu, Yueting Zhuang.

- <span style="font-size:small; color:white; background-color:blue">`IJCAI 2021`</span> [Deep Reinforcement Learning for Multi-contact Motion Planning of Hexapod Robots](https://www.researchgate.net/profile/Huiqiao-Fu-2/publication/353831319_Deep_Reinforcement_Learning_for_Multi-contact_Motion_Planning_of_Hexapod_Robots/links/6167f25c8ad119749b17410c/Deep-Reinforcement-Learning-for-Multi-contact-Motion-Planning-of-Hexapod-Robots.pdf), Hui Fu, Kai-Fu Tang, Peng Li, **Wenqi Zhang**, Xinpeng Wang, Guizhou Deng, Tao Wang, Chunlin Chen. [![Video](https://img.shields.io/badge/Video-FF0000.svg)](https://videoviewpage.wixsite.com/mcrl)


# 🎖 Honors and Awards
- **2025.06** Huawei TopMinds (华为天才少年)
- **2024.10** National Scholarship (Top 1 %)
- **2024.10** Distinguished Reviewer Award @33rd ACM International Conference on Information and Knowledge Management (CIKM 2024)
- **2024.05** Outstanding Paper @ ICLR2024 LLM Agent Workshop (TOP 3%)
- **2021-2022**, **2022-2023**, **2023-2024** Excellent Postgraduate Student Scholarship of Zhejiang University



# 💻 Experience
- 2024.05, Research Intern, Alibaba DAMO Academy, Supervisor: Xin Li, Lidong Bing
  - Vision-language Pretraining
  - Developing video-language models with colleagues

- 2020.02 - 2021.08, Algorithm Engineer, Advanced Institute of Information Technology, Peking University, Leader: Peng Li, Tao Wang
  - RL-based robot motion control and navigation framework




# 💬 Invited Talks
- 2025.05, Embodied-Reasoner @智猩猩 [\[video\]](https://www.bilibili.com/video/BV1Cs7Hz4ETk?t=28.7)
- 2024.10, Multimodal Self-instruct  @AITime [\[video\]](https://www.bilibili.com/video/BV1JuSqYKEnH/?spm_id_from=333.337.search-card.all.click&vd_source=818fc4816fcb6a1d8c82455cd7851b48)
- 2024.08, LLM Agent @MetaGPT Team (DeepWisdom)
- 2024.08, How to Apply an LLM to Data Science@觅炽科技


# 📂 Services
Area Chair:
- ACL, EMNLP (ACL-ARR) 2025  

PC Member: 
- NIPS 2025, ICCV2025, IJCAI2025, ACL 2023-2025, ACM-MM 2024, ICLR 2024, WWW 2024, EMNLP 2023-2025, CIKM 2024
