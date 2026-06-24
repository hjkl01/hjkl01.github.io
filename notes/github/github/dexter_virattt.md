### [dexter](https://github.com/virattt/dexter) ![GitHub Repo stars](https://img.shields.io/github/stars/virattt/dexter?style=social)

Dexter 是一个面向金融研究的自主智能体，能将复杂金融问题自动拆解为分步研究计划，结合实时市场数据（如利润表、资产负债表、现金流量表）执行分析，并通过自检与迭代优化结果，输出更有依据的结论。项目具备工具自动选择与调用、任务闭环执行、循环检测与步数限制等安全机制。

它支持交互式运行与开发模式，内置评测框架（基于 LangSmith 与 LLM 评分）用于批量测试金融问答表现；同时提供完整调试能力，会将查询过程、工具调用结果和推理步骤记录到 scratchpad 文件，便于追踪与复盘。项目还支持通过 WhatsApp 网关进行对话式使用。整体定位为教育、信息与学习用途，不用于真实投资交易。