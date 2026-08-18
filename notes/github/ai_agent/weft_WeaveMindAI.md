### [weft](https://github.com/WeaveMindAI/weft) ![GitHub Repo stars](https://img.shields.io/github/stars/WeaveMindAI/weft?style=social)

# Weft 项目功能总结

Weft 是一门专为 AI 系统设计的编程语言，将 LLM、人类、API 和基础设施作为基础元素，开发者可直接编排组合，编译器自动检查架构并生成可视化程序图。

**核心特性：**
- **人类优先交互**：程序可暂停并向人类发送表单，等待响应后精确恢复，无需 webhook 或状态管理
- **递归折叠**：任意节点组可折叠为单一节点，大规模系统顶部仍保持简洁
- **端到端类型系统**：支持泛型、联合类型、类型变量和空传播，编译器在运行前捕获所有连接和类型错误
- **持久化执行**：基于 Restate，程序可跨崩溃和重启恢复，长时间等待与即时执行使用同一套代码
- **内置丰富节点**：覆盖 LLM、代码执行、HTTP、多种通讯渠道（Discord/Slack/Telegram/WhatsApp/Email/X）、Postgres、网络搜索、语音识别等
- **双视图渲染**：同一程序可同时以紧凑代码和图形化节点图两种形式呈现，编辑任一视图自动同步

**项目定位：** 当前处于 MVP 开发阶段（预计 2026 年 8 月发布），主分支暂不活跃，适合用作构建基础而非生产就绪产品。