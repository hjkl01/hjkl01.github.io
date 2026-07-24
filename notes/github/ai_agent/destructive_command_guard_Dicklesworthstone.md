### [destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) ![GitHub Repo stars](https://img.shields.io/github/stars/Dicklesworthstone/destructive_command_guard?style=social)

**dcg (Destructive Command Guard)** 是一款专为 AI 编程代理设计的高性能命令拦截 Hook，旨在防止 AI 误执行破坏性命令导致数据丢失或系统损坏。

**核心功能：**

- **实时拦截**：在命令执行前自动检测并阻止危险操作（如 `rm -rf`、`git reset --hard`、数据库删除语句等），并提供安全的替代建议。
- **广泛兼容**：原生支持 Claude Code、Codex CLI、Gemini CLI、GitHub Copilot、Cursor、Hermes Agent、Grok 等主流 AI 编程工具。
- **模块化防护**：提供 50+ 安全策略包，覆盖 Git、文件系统、数据库、容器、Kubernetes、云服务、CI/CD、密钥管理等场景，可按需启用。
- **高性能低延迟**：采用 SIMD 加速和双正则引擎，实现亚毫秒级判断，不影响开发体验。
- **智能上下文识别**：能区分注释/数据中的危险字符串与实际执行的命令，减少误报。
- **Hereditoc/脚本扫描**：支持检测嵌入的 shell 脚本、Python 内联代码等隐蔽的破坏性指令。
- **CI 与预提交集成**：提供 `dcg scan` 命令，可在代码审查阶段发现仓库中已提交的危险命令。
- **灵活配置**：支持白名单、临时放行、自定义策略包和环境变量配置，适应不同信任等级和工作流需求。
- **跨平台支持**：提供 Linux、macOS、Windows 预编译二进制及一键安装脚本。