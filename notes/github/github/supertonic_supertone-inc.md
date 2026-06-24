### [supertonic](https://github.com/supertone-inc/supertonic) ![GitHub Repo stars](https://img.shields.io/github/stars/supertone-inc/supertonic?style=social)

Supertonic 是一个超高速、端侧本地运行的多语言文本转语音（TTS）系统，基于 ONNX Runtime，可在桌面端、浏览器、移动端和边缘设备离线推理，无需云端/API，兼顾隐私与低资源开销。

核心功能包括：31 种语言直接合成（支持 `lang="na"` 语言无关输入）、44.1kHz 16-bit 高质量 WAV 输出、10 种内联表达标签（如笑声/呼吸）增强自然度、批量推理、以及本地 HTTP 服务（含原生 `/v1/tts` 与 OpenAI 兼容 `/v1/audio/speech` 接口）。模型为约 99M 参数开源权重，体积小、启动快、内存占用低，且无需 GPU，适合 Raspberry Pi、电子阅读器等受限设备。

项目提供完整多语言/多平台 SDK 与示例，覆盖 Python、Node.js、WebGPU 浏览器、Java、C++、C#、Go、Swift、iOS、Rust、Flutter，便于快速集成到应用与工具链中。相比前代版本，Supertonic 3 扩展到 31 语种，并提升朗读准确率与稳定性（减少重复/漏读），同时保持与 v2 兼容的 ONNX 推理接口。