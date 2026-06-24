### [storm](https://github.com/stanford-oval/storm) ![GitHub Repo stars](https://img.shields.io/github/stars/stanford-oval/storm?style=social)

STORM：LLM系统。基于网络搜索自动从零生成带引用的维基百科式长文。
运行分两阶段：
1. 写前阶段：通过多视角提问与模拟专家对话检索信息，生成大纲。
2. 写作阶段：基于大纲与参考资料生成带引用全文。

Co-STORM：人工-AI协作增强版。
核心功能：
1. 协作对话协议：调度LLM专家、问答主持人和人类用户多轮交互。
2. 动态思维导图：实时组织信息层次，构建人机共享概念空间。

技术栈：基于`dspy`构建，高度模块化。通过`litellm`集成多种大语言模型与嵌入模型。内置接入Bing、You.com等多种搜索引擎及本地向量检索。