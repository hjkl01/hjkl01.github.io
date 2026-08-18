### [skill-up](https://github.com/alibaba/skill-up) ![GitHub Repo stars](https://img.shields.io/github/stars/alibaba/skill-up?style=social)

skill-up 是阿里巴巴开源的 Agent Skills 评估与演进工具。主要功能：

- **自动化评估**：通过声明式 YAML 配置（eval.yaml + cases/*.yaml）定义评估环境、引擎、模型和测试用例
- **多引擎支持**：内置支持 Qoder CLI、Claude Code、Codex，以及自定义 Agent
- **灵活判题**：支持规则判定（rule_based）、脚本判定（script）和 Agent 判定（agent_judge）三种评估策略
- **结构化报告**：输出 Anthropic 兼容格式的 grading.json、benchmark.json、JUnit XML 和 HTML 报告
- **迭代演进**：通过 skill-upper Agent 自动诊断失败原因，修复 Skill 或扩展评估用例，形成持续改进循环
- **CI/CD 集成**：提供 GitHub Action，支持在每次 PR 时自动执行跨引擎评估
- **Anthropic 兼容**：支持导入 Anthropic 的 evals.json 格式

核心流程：创建评估用例 → 运行评估 → 分析失败 → 自动修复 Skill 或扩展用例 → 重新评估，循环迭代直到通过。