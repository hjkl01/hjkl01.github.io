### [workflow_templates](https://github.com/Comfy-Org/workflow_templates) ![GitHub Repo stars](https://img.shields.io/github/stars/Comfy-Org/workflow_templates?style=social)

# workflow_templates 项目功能总结

该项目是 ComfyUI 的官方工作流模板和子图蓝图仓库，主要功能包括：

**核心内容**
- **工作流模板**：完整独立的工作流，供模板选择器使用
- **子图蓝图**：可复用的节点组件，显示在节点调色板中
- **模板网站**：Astro 静态站点，提供可浏览、可搜索的模板展示界面

**技术特性**
- 支持多种媒体类型（图像、视频、音频）及丰富的缩略图变体（图片、视频、音频、对比滑块、悬停效果等）
- 内置模型嵌入功能，用户可直接在 ComfyUI 内下载运行所需模型
- 支持 11 种语言的国际化（i18n）
- 包含节点兼容性验证和 JSON 格式校验

**开发流程**
- 提供添加新模板和新蓝图的完整指南
- 自动化 CI/CD 流程：版本管理、包构建、PyPI 发布、多环境部署（生产/测试/PR 预览）
- 支持状态过滤（approved/pending/rejected/deprecated）