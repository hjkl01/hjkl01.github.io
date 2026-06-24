### [quant-mind](https://github.com/LLMQuant/quant-mind) ![GitHub Repo stars](https://img.shields.io/github/stars/LLMQuant/quant-mind?style=social)

**项目名称：** QuantMind

**核心功能：** 智能金融知识提取与检索框架。将非结构化金融内容（论文、新闻、博客、报告）转化为可查询的语义知识图谱，通过自然语言实现AI驱动的规模化研究。

**主要能力：**
- **知识提取**：从PDF、网页、API等来源自动收集、解析、结构化金融信息，自动分类主题领域
- **智能理解**：使用金融领域专用的LLM处理内容
- **语义存储**：基于向量嵌入存储为知识图谱
- **自然语言检索**：支持DeepResearch多跳推理、RAG问答等多种检索模式

**技术架构：**
- Stage 1（知识提取）：来源接入 → 智能解析 → 工作流编排 → 结构化知识库
- Stage 2（智能检索）：知识库 → 向量嵌入 → 多种检索场景

**目标用户：** 机构投资者、对冲基金、量化研究团队

**环境要求：** Python 3.8+