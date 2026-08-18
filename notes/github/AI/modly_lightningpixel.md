### [modly](https://github.com/lightningpixel/modly) ![GitHub Repo stars](https://img.shields.io/github/stars/lightningpixel/modly?style=social)

**Modly 功能总结**

Modly 是一款本地开源、AI 驱动的桌面应用程序，可将任意照片生成为 3D 网格模型。它在用户 GPU 上完全离线运行，支持 Windows、Linux 及 Apple Silicon macOS 平台。核心功能包括：
- 通过工作流节点连接（如“图片→生成网格→添加至场景”）完成图像到 3D 模型的转换。
- 提供扩展系统，可安装并集成多种开源 AI 模型（如 Hunyuan3D、TripoSG、Trellis2 等）。
- 内置网格平滑与减面工具，优化后的结果直接保存至工作区。
- 提供命令行界面（CLI），便于脚本和 Agent 自动化调用，支持健康检查、模型管理、工作流执行及导出等功能。
- 开发环境启动简单，通过 npm 安装依赖并运行 Python 后端即可。