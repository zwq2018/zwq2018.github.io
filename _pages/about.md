---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>


# About Me    
I am a final year Ph.D candidate in the College of Computer Science and Technology at Zhejiang University, under the supervision of Prof. [Weiming Lu](https://person.zju.edu.cn/lwm) and Prof. [Yueting Zhuang](https://person.zju.edu.cn/yzhuang). Meanwhile, I am a research intern at Alibaba DAMO Academy, supervised by Xin Li, Lidong Bing. Previously, I received my master's and bachelor's degrees also from Zhejiang University. 

# Research Interests  
My research interest includes Large language models, Multi-modal models, and their applications in the field of Embodied Intelligence. I have published over 10 papers at top international AI conferences for natural language processing.  

- LLM Agent: LLM-powered autonomous agents, particularly in their cognitive reasoning, task-planning and self-evolution capabilities.

- Embodied Intelligence: Combine VLM, robot control, and reinforcement learning to build an embodied robot for daily tasks, e.g. obstacle avoidance, navigation, and manipulation.

- AI for Education: Deploying LLMs for fundamental education, such as mathematics and psychology, to improve the performance of LLMs in education domains.  



# 🔥 News
- *2025.06*: &nbsp;🎉 Our Multimodal Textbook is accepted by ICCV 2025 [Multimodal Textbook](https://www.arxiv.org/abs/2501.00958), ranks #2 in Huggingface Trending, over 24k downloads in Huggingface.
- *2025.05*: &nbsp;🎉 Two papers are accepted by ACL 2025, about SQL generation ([STaR-SQL](https://arxiv.org/pdf/2502.13550)) and Social Reasoning LLM.
- *2025.03*: &nbsp;🎉 We release an Embodied Reasoning model. [Embodied-Reasoner: Synergizing Visual Search, Reasoning, and Action for Embodied Interactive Tasks](https://arxiv.org/abs/2503.21696)
- *2024.11*: &nbsp;🎉 I am honored to be awarded the distinguished reviewer award of CIKM 2024. 
- *2024.10*: &nbsp;🎉 One papers are accepted by NIPS 2024, focusing on benchmarking LLM's task planning ability ([TaskBench](https://arxiv.org/abs/2311.18760)). 
- *2024.10*: &nbsp;🎉 Two papers are accepted by EMNLP 2024, focusing on multimodal data synthesis ([Multimodal Self-instruct](https://arxiv.org/abs/2407.07053)) and [LLM O1-style reasoning](https://arxiv.org/pdf/2407.00390) 
- *2024.05*: &nbsp;🎉 Four papers are accepted by ACL 2024 about LLM reflection ([Self-contrast](https://arxiv.org/pdf/2401.02009)), self-evolving agent ([Agent-Pro](https://arxiv.org/pdf/2402.17574)), time perception ([Time-ToM](https://arxiv.org/pdf/2407.01455?)), and [PEFT](https://aclanthology.org/2024.acl-long.222.pdf).
- *2024.05*: &nbsp;🎉 One papers are accepted by IEEE-ACM Transactions on Audio Speech and Language Processing, focusing on [math reasoning](https://ieeexplore.ieee.org/abstract/document/10552332). 
- *2023.10*: &nbsp;🎉 [Data-Copilot](https://github.com/zwq2018/Data-Copilot) has been accepted by Outstanding Paper of LLM Agent Workshop@ICLR 2024. 




# 📝 Selected Publications


(# indicates corresponding author)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><video src='images/multimodal textbook.mp4' alt="sym" width="100%" controls></video></div></div>

<div class='paper-box-text' markdown="1">

[2.5 Years in Class: A Multimodal Textbook for Vision-Language Pretraining](https://www.arxiv.org/abs/2501.00958)  
**Wenqi Zhang**, Hang Zhang, Xin Li, Jiashuo Sun, Yongliang Shen, Weiming Lu, Deli Zhao, Yueting Zhuang, Lidong Bing

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://www.arxiv.org/abs/2501.00958) 
[![Github](https://img.shields.io/github/stars/DAMO-NLP-SG/multimodal_textbook?style=social&label=stars)](https://github.com/DAMO-NLP-SG/multimodal_textbook)
[![Huggingface](https://img.shields.io/badge/HuggingFace-Datasets-orange.svg)](https://huggingface.co/datasets/DAMO-NLP-SG/multimodal_textbook)
[![Pages](https://img.shields.io/badge/Project-Page-0F88EB.svg)](https://multimodal-interleaved-textbook.github.io/)
[![知乎](https://img.shields.io/badge/知乎-Article-007bff.svg)](https://zhuanlan.zhihu.com/p/16512014215) 
- Interleaved image-text pretraining corpus from instructional videos
- All the images and text are extracted from online instructional videos (22,000 class hours), covering multiple fundamental subjects, e.g., mathematics, physics, and chemistry.
- Our textbook corpus providing a more coherent context and richer knowledge for image-text aligning.
- More than 20,000 downloads within one month (Rank #2 in Huggingface Trending)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Embodied Reasoning</div><video src='images/video_en_subtitle.mp4' alt="sym" width="100%" controls></video></div></div>


<div class='paper-box-text' markdown="1">

[Embodied-Reasoner: Synergizing Visual Search, Reasoning, and Action for Embodied Interactive Tasks
](https://arxiv.org/abs/2503.21696)  
**Wenqi Zhang**, Mengna Wang, Gangao Liu, Xu Huixin, Yiwei Jiang, Yongliang Shen, Guiyang Hou, Zhe Zheng, Hang Zhang, Xin Li, Weiming Lu, Peng Li, Yueting Zhuang

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2503.21696) 
[![Github](https://img.shields.io/github/stars/zwq2018/embodied_reasoner?style=social&label=stars)](https://github.com/zwq2018/embodied_reasoner)
[![Huggingface](https://img.shields.io/badge/HuggingFace-Datasets-orange.svg)](https://huggingface.co/datasets/zwq2018/embodied_reasoner)
[![Pages](https://img.shields.io/badge/Project-Page-0F88EB.svg)](https://embodied-reasoner.github.io/)
[![B站视频](https://img.shields.io/badge/B%E7%AB%99-%E8%A7%86%E9%A2%91-ff69b4.svg)](https://www.bilibili.com/video/BV1Cs7Hz4ETk?t=28.7)
[![机器之心](https://img.shields.io/badge/机器之心-Article-007bff.svg)](https://www.sohu.com/a/889469911_129720)



- O1-style Embodied Reasoning Model 
- Interactive Embodied Scenario and Long-horizon Tasks
- Autonomous Environment Exploration, Hidden Object Search, and Deep Reflection
- Open-source dataset: 9.3K *Observation-Reasoning-Action* interleaved trajectories with 64K images
</div>
</div>






<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Outstanding Paper@ICLR LLM Agent workshop</div><img src='images/video1.GIF' alt="sym" width="100%"></div></div>

<div class='paper-box-text' markdown="1">

[Data-Copilot: Bridging Billions of Data and Humans with Autonomous Workflow](https://arxiv.org/abs/2306.07209)  
**Wenqi Zhang**, Yongliang Shen, Weiming Lu, Yueting Zhuang

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2306.07209) 
[![Github](https://img.shields.io/github/stars/zwq2018/data-copilot?style=social&label=stars)](https://github.com/zwq2018/Data-Copilot)
[![Hugginface Spaces](https://img.shields.io/badge/%F0%9F%A4%97-Open%20in%20Spaces-blue)](https://huggingface.co/spaces/zwq2018/Data-Copilot)
[![知乎](https://img.shields.io/badge/知乎-Video-0F88EB.svg)](https://zhuanlan.zhihu.com/p/636906119)
[![机器之心](https://img.shields.io/badge/机器之心-Article-007bff.svg)](https://www.jiqizhixin.com/articles/2023-06-26-2) 
- LLM-powered autonomous data analysis agent   
- Automated data querying, analysis, and visualization   
- Enterprise-level scenario  
- Over 1.4k stars on Github
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2024 Oral</div><img src='images/multimodal self-instruct.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Multimodal Self-Instruct: Synthetic Abstract Image and Visual Reasoning Instruction Using Language Model](https://arxiv.org/abs/2407.07053)  
**Wenqi Zhang**, Zhenglin Cheng, Yuanyu He, Mengna Wang, Yongliang Shen, Zeqi Tan, Guiyang Hou, Mingqian He, Yanna Ma, Weiming Lu, Yueting Zhuang

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2407.07053) 
[![Github](https://img.shields.io/github/stars/zwq2018/multi-modal-self-instruct?style=social)](https://github.com/zwq2018/Multi-modal-Self-instruct)
[![Project](https://img.shields.io/badge/Project-Website-blue.svg)](https://multi-modal-self-instruct.github.io)
[![Huggingface](https://img.shields.io/badge/HuggingFace-Datasets-orange.svg)](https://huggingface.co/datasets/zwq2018/Multi-modal-Self-instruct)
[![新智元](https://img.shields.io/badge/新智元-Article-007bff.svg)](https://www.thepaper.cn/newsDetail_forward_28346662) 
- Multimodal data engine
- Synthetic massive abstract chart data   
- Enhance the abstract image perception and reasoning ability of multimodal models
- Over 13k downloads on Huggingface
</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2024</div><img src='images/self-constrast.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Self-Contrast: Better Reflection Through Inconsistent Solving Perspectives](https://arxiv.org/abs/2401.02009)  
**Wenqi Zhang**, Yongliang Shen, Linjuan Wu, Qiuying Peng, Jun Wang, Yueting Zhuang, Weiming Lu 

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2401.02009) 
[![MIT科技评论](https://img.shields.io/badge/MIT科技评论-Article-007bff.svg)](https://www.mittrchina.com/news/detail/13106) 
[![PaperWeekly](https://img.shields.io/badge/PaperWeekly-Article-007bff.svg)](https://bendi.news/wxnews/cls46zk260023lpnyhyekusue)
- Investigate LLM's self-reflection ability 
- Break the blind faith in LLM's self-reflection ability
- Inference time scale-up for better reasoning ability
</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2024</div><img src='images/agent-pro.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Agent-Pro: Learning to Evolve via Policy-Level Reflection and Optimization](https://arxiv.org/pdf/2402.17574f)  
**Wenqi Zhang**, Ke Tang, Hai Wu, Mengna Wang, Yongliang Shen, Guiyang Hou, Zeqi Tan, Peng Li, Yueting Zhuang, Weiming Lu    

[![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b.svg)](https://arxiv.org/abs/2402.17574) 
[![Github](https://img.shields.io/github/stars/zwq2018/Agent-Pro?style=social)](https://github.com/zwq2018/Agent-Pro) 
[![量子位](https://img.shields.io/badge/量子位-Article-007bff.svg)](https://www.qbitai.com/2024/03/127294.html) 
[![将门创投](https://img.shields.io/badge/将门创投-Article-007bff.svg)](https://mp.weixin.qq.com/s/gD4pZc6pvX8f_62uiPJacg)
- Self-evolving LLM agent
- Policy-level reflection and optimization
- Dynamic environment and game scenarios
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2022</div><img src='images/nav.png' alt="sym" width="100%"></div></div>
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


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arxiv2406</div><img src='images/videollama2.png' alt="sym" width="100%"></div></div>
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
- **2024.10** Distinguished Reviewer Award @ 33rd ACM International Conference on Information and Knowledge Management (CIKM 2024)
- **2024.05** Outstanding Paper @ ICLR2024 LLM Agent Workshop (TOP 3%)
- **2021-2022**, **2022-2023**, **2023-2024** Excellent Postgraduate Student Scholarship of Zhejiang University
- **2013.09** First Prize of Zhejiang University Research and Innovation Scholarship
- **2012.11** First Prize of Zhejiang Province "Challenge Cup" College Student Business Plan Competition
- **2012.05** The Best Project of Zhejiang University "Challenge Cup" College Student Business Plan Competition


# 📖 Educations
- 2021.09 - 2025.06, Ph.D., Zhejiang University, China, Advisor: Prof. [Weiming Lu](https://person.zju.edu.cn/lwm), Prof. [Yueting Zhuang](https://person.zju.edu.cn/yzhuang)
- 2015.09 - 2018.06, M.S., Zhejiang University, China, Advisor: Prof. [Kaichen Song](https://person.zju.edu.cn/kcsong)
- 2009.09 - 2013.06, B.S., Zhejiang University, China, Advisor: Prof. [Hong Zhou](https://person.zju.edu.cn/zhouhong)



# 💻 Experience
- 2024.05 - now, Research Intern, Alibaba DAMO Academy, Supervisor: Xin Li, Lidong Bing
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