### [koharu](https://github.com/mayocream/koharu) ![GitHub Repo stars](https://img.shields.io/github/stars/mayocream/koharu?style=social)

**Koharu** 是一款基于机器学习的开源漫画翻译工具，使用 Rust 编写。

**核心功能：**
- 自动检测文本区域、对话框和清理遮罩
- OCR 识别漫画对话、标题及页面文字
- Inpainting 去除原文文字
- 支持本地或远程 LLM 进行翻译
- 支持竖排 CJK 和 RTL 文字的先进排版渲染
- 导出可编辑文字的分层 PSD 文件

**特点：**
- 本地优先：视觉模型和 LLM 均在本地运行，保障数据隐私
- GPU 加速：支持 CUDA、ROCm/HIP、Metal 和 Vulkan，CPU 作为备选
- 多模型支持：整合多种先进的检测和翻译模型
- 跨平台：提供 Windows、macOS 和 Linux 预编译版本
- 多翻译后端：支持本地模型及 Atlas Cloud、OpenAI、Gemini、Claude、DeepSeek 等云服务，以及 DeepL、Google Translate、彩云等专用机器翻译 API