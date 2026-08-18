### [diagram-design](https://github.com/cathrynlavery/diagram-design) ![GitHub Repo stars](https://img.shields.io/github/stars/cathrynlavery/diagram-design?style=social)

**Diagram Design** 是一个适用于 Claude Code、Codex 和 Pi 的 AI Agent 技能插件，用于生成编辑级质量的图表。

**核心功能：**

- **27 种图表类型**：涵盖架构图、流程图、时序图、状态机、ER 图、甘特图、雷达图等
- **品牌自动适配**：读取目标网站的主色调和字体栈，60 秒内将图表配色和排版匹配为用户品牌
- **多格式输出**：每种图表提供三种变体（极简浅色、极简深色、全编辑风格），输出为自包含 HTML，可直接在浏览器打开
- **导入重绘**：支持从 draw.io 和 Mermaid 源导入并重绘，可调整格式（HTML/SVG/PNG）、尺寸、详细程度和目标受众
- **可选动画**：支持渐进式揭示、步骤播放等动画模式，同时符合无障碍标准（prefers-reduced-motion）
- **导出功能**：支持导出为 SVG（含 Google Fonts 注入）和 PNG（通过 Playwright 渲染）
- **客户配置管理**：支持保存多个品牌配置（profiles），通过项目标记文件快速切换

**设计理念：** 单强调色、每图 1-2 个焦点元素、基于 4px 网格系统，输出无需构建步骤或外部依赖。