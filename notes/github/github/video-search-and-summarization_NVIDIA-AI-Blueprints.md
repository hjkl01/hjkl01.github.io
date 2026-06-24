### [video-search-and-summarization](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization) ![GitHub Repo stars](https://img.shields.io/github/stars/NVIDIA-AI-Blueprints/video-search-and-summarization?style=social)

该项目是 NVIDIA 的“视频搜索与摘要（VSS）”AI 蓝图实现，用于构建可处理海量视频（历史与实时流）的视觉智能代理。其核心能力包括：自然语言视频检索、视频摘要、视觉问答、告警生成与校验、异常检测、视频片段/快照检索及报告生成。

项目采用分层架构：
1. **实时视频智能层**：对视频流进行特征提取、语义嵌入与场景理解，并将结果发布到消息系统；  
2. **下游分析层**：将检测元数据进一步加工为轨迹、事件和可验证告警；  
3. **代理与离线处理层**：通过 MCP 统一调用多种视觉工具，支持搜索、问答、长视频摘要等编排能力。

项目提供多种参考工作流：问答与报告生成、告警校验、实时告警、视频语义搜索、长视频摘要。技术上结合 NVIDIA NIM 微服务、VLM 与 LLM（如 Cosmos-Reason2-8B、Nemotron-Nano-9B-v2），并提供完整代码与部署体系（agent、deployments、scripts、skills、ui），支持快速上手和深度定制，适用于视频分析工程师、IT 工程师及 GenAI/机器学习开发者。