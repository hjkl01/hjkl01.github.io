### [waza](https://github.com/microsoft/waza) ![GitHub Repo stars](https://img.shields.io/github/stars/microsoft/waza?style=social)

Waza 是一个用于评估 AI Agent 技能的 Go 命令行工具，核心功能包括：快速搭建技能与评测工程（scaffold）、运行基准评测、对比不同模型结果，并提供从开发到上线的完整评测工作流。

项目主要能力：
- **工程初始化与脚手架生成**：创建 `skills/` 与 `evals/` 结构，支持新建 skill、从 `SKILL.md` 自动生成 eval、从真实 prompt 录制生成任务。
- **评测执行与分析**：运行评测套件（支持并行、多次试验、任务过滤、缓存、基线 A/B、多模型运行、结果解释、JUnit/JSON 输出等）。
- **结果对比与覆盖检查**：对比多次运行或多模型结果，生成技能-评测覆盖矩阵，识别评测缺口。
- **质量与就绪性检查**：`check` 检查技能提交就绪度（规范、token 预算、评测完整性、建议项），`quality` 用 LLM 进行多维质量评估，`dev` 辅助迭代优化 skill frontmatter。
- **Token 管理**：统计、对比、结构剖析并给出压缩建议，支持 CI 阈值门禁。
- **结果可视化与会话追踪**：内置 dashboard 服务查看任务级结果、分数分布和模型对比；支持 session 日志的查看与回放。
- **独立评分能力**：可对历史运行结果单独执行 graders（`grade`），无需重新跑 agent。
- **云端结果管理**：支持自动上传到 Azure Blob Storage，并可列出与对比云端运行结果，便于团队协作与历史追踪。
- **CI/CD 集成完善**：提供安装方式、GitHub Actions 示例、标准退出码与可复用工作流，适合自动化回归与发布前验证。
- **丰富评分器生态**：内置 code/text/file/diff/behavior/action_sequence/skill_invocation/prompt/trigger_tests 等多种 grader，覆盖输出质量、行为约束与流程正确性。