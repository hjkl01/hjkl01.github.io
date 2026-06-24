### [eino](https://github.com/cloudwego/eino) ![GitHub Repo stars](https://img.shields.io/github/stars/cloudwego/eino?style=social)

Eino 是一个遵循 Go 语言习惯的 LLM 应用开发框架，核心目标是帮助开发者高效构建 AI Agent、工作流与可复用组件体系。项目主要功能包括：

- 提供标准化组件抽象与生态：如 ChatModel、Tool、Retriever、Embedding、ChatTemplate 等，并支持 OpenAI、Claude、Gemini、Ark、Ollama、Elasticsearch 等实现。
- 提供 ADK（Agent Development Kit）：可快速构建具备工具调用、多 Agent 协作、上下文管理、Human-in-the-loop（中断/恢复）能力的智能体。
- 提供 DeepAgent：面向复杂任务进行步骤拆解、子 Agent 委派与进度跟踪，并可结合 Shell、Python、Web 搜索等工具执行任务。
- 提供 compose 编排能力：可将组件连接为图和工作流，实现精确执行控制；同时支持将工作流封装成工具供 Agent 按需调用，实现“确定性流程 + 自主决策”结合。
- 内置流式处理机制：自动处理流数据在节点间的拼接、合并、复制与传递，降低流式编程复杂度。
- 提供回调切面机制：可在统一生命周期节点注入日志、追踪、监控指标等能力。
- 支持中断/恢复：Agent 或工具可暂停等待人工输入，并从检查点继续执行，框架负责状态持久化与路由。

整体框架由 Eino（核心框架）、EinoExt（组件实现与扩展）、Eino Devops（可视化开发调试）、EinoExamples（示例与最佳实践）共同构成。