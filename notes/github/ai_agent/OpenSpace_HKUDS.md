### [OpenSpace](https://github.com/HKUDS/OpenSpace) ![GitHub Repo stars](https://img.shields.io/github/stars/HKUDS/OpenSpace?style=social)

# OpenSpace 项目功能总结

**OpenSpace** 是 AI Agent 的技能管理层（Skill Management Layer），帮助 Agent 检索、评估、共享和演进技能。

## 核心能力

**1. 技能评估** — 基于真实任务结果衡量技能质量，追踪工具的可靠性和任务的完成情况，用实际执行记录替代主观描述。

**2. 可控演进** — 通过 FIX（修复）、DERIVED（衍生）、CAPTURED（捕获）三种方式演进技能，新版本需经过独立验证才能成为可信技能，变更全程可追溯。

**3. 本地优先共享** — 技能在本地运行，云端用于发现和浏览；通过 Package 组织云端技能，导入本地后才可复用。

**4. 质量记录运行时** — 每次执行都生成可追溯的记录（任务历史、工具结果、文件变更），作为技能评估和演进的依据。

## 版本对比

- **v1**：赋予 Agent 持久技能记忆，从成功和失败中学习，结构化演进技能，共享经验。
- **v2**：在 v1 基础上引入质量层，以任务结果驱动技能评估和演进，支持云端 Package 浏览和本地导入。

## 使用方式

- 接入 Claude Code、Codex、OpenClaw 等支持 MCP 的 Agent
- 命令行交互（`openspace`）
- Python API 集成
- 本地 Dashboard 可视化技能演进历史