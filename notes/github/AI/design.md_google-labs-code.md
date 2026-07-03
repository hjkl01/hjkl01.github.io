### [design.md](https://github.com/google-labs-code/design.md) ![GitHub Repo stars](https://img.shields.io/github/stars/google-labs-code/design.md?style=social)

该项目提供了一套用于向编程智能体描述视觉身份的设计规范格式（DESIGN.md）及其配套工具。主要功能包括：

1. **结构化设计定义**：结合机器可读的 YAML 设计令牌（Tokens）和人类可读的 Markdown 设计理由，为智能体提供持久、结构化的设计系统理解。
2. **CLI 工具支持**：提供命令行界面用于验证、比较和导出设计规范。
    - **Lint**：校验 DESIGN.md 文件的结构正确性、引用完整性及 WCAG 对比度，并输出结构化 JSON 结果。
    - **Diff**：比较两个 DESIGN.md 文件，检测令牌级别的变更和回归。
    - **Export**：将设计规范导出为 Tailwind v3/v4 配置或 W3C DTCG 标准格式。
3. **严格规范与规则**：定义了明确的文件结构、令牌类型、章节顺序及组件映射规则，并通过九项内置规则进行自动化检查。