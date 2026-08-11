### [embabel-agent](https://github.com/embabel/embabel-agent) ![GitHub Repo stars](https://img.shields.io/github/stars/embabel/embabel-agent?style=social)

# Embabel Agent Framework 功能总结

Embabel 是一个基于 JVM（Kotlin/Java）的智能体流编排框架，由 Spring 创始人创建，可无缝混合 LLM 提示交互与代码及领域模型。

## 核心概念

- **Action（动作）**：智能体执行的步骤
- **Goal（目标）**：智能体试图达成的目的
- **Condition（条件）**：执行动作前或判断目标是否达成前的评估条件
- **Plan（计划）**：系统动态生成的动作序列，执行完每个动作后自动重新规划（OODA 循环）

## 主要特性

1. **智能规划**：采用 GOAP（目标导向动作规划）算法，可进行动态决策和并行化，而非简单的 FSM 顺序执行
2. **动态扩展**：添加新的动作、目标、条件无需修改现有代码即可扩展系统能力
3. **强类型 + 面向对象**：基于领域模型，支持完整重构，无"魔法 Map"
4. **多模式执行**：
   - Focused：用户代码指定运行特定智能体
   - Closed：按意图分类选择智能体
   - Open：平台自主评估意图并编排所有可用资源
5. **LLM 混合**：灵活混合不同模型，支持本地模型（Ollama、Docker、LMStudio）与云模型（OpenAI、Anthropic、MiniMax 等）
6. **MCP 支持**：可作为 MCP Server 被 Claude Desktop 等客户端调用，也支持消费外部 MCP 服务器
7. **A2A 协议**：支持 Google A2A 协议连接其他智能体
8. **可观测性**：零代码接入 OpenTelemetry tracing（Zipkin、Langfuse）

## 使用方式

- **注解模型**：类似 Spring MVC，使用 `@Agent`、`@Goal`、`@Condition`、`@Action` 注解
- **Kotlin DSL**：使用 `agent { }`、`action { }` 块编写

## 典型应用

示例包括星座新闻查找、旅行规划（Tripper）、深度研究等。支持 Spring Boot 集成，易于单元测试和集成测试。