### [plugins](https://github.com/openai/plugins) ![GitHub Repo stars](https://img.shields.io/github/stars/openai/plugins?style=social)

该项目是一个 **Codex 插件示例合集仓库**，用于展示和组织不同类型的插件实现方式。  
每个插件位于 `plugins/<name>/` 目录下，必须包含 `.codex-plugin/plugin.json` 清单文件，并可选包含 `skills/`、`.app.json`、`.mcp.json`、插件级 `agents/`、`commands/`、`hooks.json`、`assets/` 等配套文件。

仓库重点示例包括：

- **figma**：支持 `use_figma`、代码到画布（Code to Canvas）、Code Connect、设计系统规则；
- **notion**：支持规划、调研、会议与知识沉淀；
- **build-ios-apps**：支持 SwiftUI 开发、重构、性能优化与调试；
- **build-macos-apps**：支持 macOS 的 SwiftUI/AppKit 工作流、构建/运行/调试循环与打包指导；
- **build-web-apps**：支持部署、UI、支付与数据库工作流；
- **expo**：支持 Expo/React Native 应用、SDK 升级、EAS 工作流与 Codex Run 操作；
- **netlify、remotion、google-slides**：提供更多基于公共技能与 MCP 的插件组合。