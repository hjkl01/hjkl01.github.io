### [CodeWhale](https://github.com/Hmbown/CodeWhale) ![GitHub Repo stars](https://img.shields.io/github/stars/Hmbown/CodeWhale?style=social)

Codewhale 是一个开源的终端编码代理工具，核心功能包括：

1. **多模型支持**：兼容 30+ 提供商（DeepSeek、Claude、GPT、Kimi、GLM 等），支持第三方 vLLM、SGLang、Ollama 本地部署，可为每个角色独立配置模型。

2. **智能编码**：自动读取代码、编辑文件、执行命令并验证结果，可在任务完成后停止或等待用户干预。

3. **灵活交互**：提供终端 TUI 界面，支持模型切换（/model）、任务编排（/fleet）、回滚（/undo、/restore）等操作；也支持命令行无头模式运行。

4. **安全控制**：默认只读模式，权限审批机制，支持 Seatbelt（macOS）和 bubblewrap（Linux）沙盒，可配置仓库级宪法规则。

5. **角色定制**：用户可自定义角色文件和行为规范（constitution），形成专属工作流。

6. **中断恢复**：任务步骤记录在追加账本中，支持 `fleet resume` 断点续跑。

7. **集成扩展**：提供 DeepSeek Harness 连接、VS Code 插件集成、本地 Web 客户端等功能。