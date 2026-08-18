### [prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) ![GitHub Repo stars](https://img.shields.io/github/stars/PrimeIntellect-ai/prime-agent?style=social)

**Prime Agent 功能总结**

Prime Agent 是一款开源的代码与研究代理工具，专为通用及长时间运行任务设计。核心功能包括：

- **递归语言模型（RLM）**：将上下文视为变量，工具调用视为函数调用，在持久化 REPL 中运行
- **持续训练系统（Continual Harness）**：存储补充提示、记忆、技能描述和可复用子代理规范，支持通过 `/refine` 进行证据驱动的微小更新
- **程序化操作**：内置持久化 IPython，文件操作、Shell 命令、工具调用、子代理和上下文管理均通过代码完成
- **内置子代理系统**：通过 `rlm(...)` 启动真实子代理并行或后台工作
- **技能系统**：技能为可导入 Python 包，支持创建可复用技能
- **后台会话**：基于守护进程，终端断开后继续运行，支持后续重新连接
- **代理间通信**：运行中的代理可直接交换消息并协调工作
- **长时间任务支持**：自动压缩、持久化目标、心跳、定时调度、自主模式和保留子代理等功能确保跨回合和会话的进度保持