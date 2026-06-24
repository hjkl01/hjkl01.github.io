### [CLI-Anything](https://github.com/HKUDS/CLI-Anything) ![GitHub Repo stars](https://img.shields.io/github/stars/HKUDS/CLI-Anything?style=social)

CLI-Anything 是一个让“任何有代码库的软件”快速变成“可被 AI Agent 直接调用的命令行工具（CLI）”的项目。它提供两大能力：

1. **CLI-Hub 生态管理**：通过 `cli-anything-hub` 一站式浏览、搜索、安装、更新、卸载和启动社区构建的各类 CLI（含第三方公开 CLI），并支持 Agent 通过 meta-skill 自主发现和安装合适工具。  
2. **自动化 CLI 生成**：通过 `/cli-anything` 等命令执行 7 阶段流水线（分析、设计、实现、测试规划、测试编写、文档、发布），为目标软件自动生成可安装、可测试、支持 REPL 与 JSON 输出的 Agent-Native CLI，并可用 `/refine` 持续补齐能力覆盖。

项目强调**真实后端集成**（直接调用 Blender、LibreOffice 等真实软件而非玩具替代）、**统一交互体验**（标准命令+REPL）、**Agent 友好结构化输出**（`--json`）、以及**生产级可靠性**（大规模单测与 E2E 测试全通过）。同时支持 Claude Code、Pi、OpenClaw、Codex、OpenCode、Copilot CLI 等多平台接入，并通过自动生成 `SKILL.md` 提升 Agent 的能力发现与编排。