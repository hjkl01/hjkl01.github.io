### [OmniVoice-Studio](https://github.com/debpalash/OmniVoice-Studio) ![GitHub Repo stars](https://img.shields.io/github/stars/debpalash/OmniVoice-Studio?style=social)

OmniVoice Studio 是一款完全本地化运行的开源桌面语音处理套件，旨在提供免订阅、无云端的 ElevenLabs 替代方案。核心功能如下：

- **语音克隆与设计**：支持 3 秒零样本语音克隆，可精细调节性别、年龄、口音、音调、情绪与方言，原生覆盖 646 种语言。
- **实时听写与视频配音**：提供全局快捷键悬浮听写小部件；支持端到端视频配音流水线（自动转录→翻译→重配→时间轴对齐→导出 MP4）。
- **长篇音频编辑**：内置有声书编辑器（支持文本/EPUB/PDF 导入、自动分章、响度标准化与 .m4b 导出）及多角色故事编辑器。
- **多引擎与硬件自适应**：内置 14 款 TTS 引擎与 9 款以上 ASR 引擎，自动检测并路由至 CUDA/MPS/ROCm 或 CPU；支持 Demucs 语音分离、Pyannote 说话人日志、批量任务队列、AI 隐形水印及无长度限制的流式合成。
- **开放接口与 Agent 集成**：提供开箱即用的 OpenAI 兼容本地 REST API 及 MCP Server，可无缝对接 Claude、Cursor 等 AI 代理；支持自定义扩展引擎与远程后端部署。

全程数据严格保留在本地设备，无需注册账号、API Key 或支付月费，支持 macOS、Windows、Linux 及 Docker 跨平台运行。