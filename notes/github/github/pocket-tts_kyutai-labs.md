### [pocket-tts](https://github.com/kyutai-labs/pocket-tts) ![GitHub Repo stars](https://img.shields.io/github/stars/kyutai-labs/pocket-tts?style=social)

Pocket TTS 是一个轻量级、以 CPU 为核心的文本转语音（TTS）项目，主打“无需 GPU、无需在线 API”，通过 `pip install` 后即可用 Python API 或命令行快速生成语音。

核心功能包括：  
- 在 CPU 上高效运行（约 1 亿参数），低延迟流式合成（首段音频约 200ms），速度可达实时的约 6 倍；  
- 支持多语言语音合成：英语、法语、德语、葡萄牙语、意大利语、西班牙语；  
- 支持无限长度文本输入；  
- 支持语音克隆（可用本地音频或预置音色），并可将音色状态导出为 safetensors 以加速后续加载；  
- 提供三种主要使用方式：CLI 生成音频（`generate`）、本地 HTTP 服务（`serve`）、音色导出（`export-voice`）；  
- 提供网页端直接体验，并有社区实现可在浏览器（WebAssembly/JavaScript）端运行。

项目兼容 Python 3.10–3.14，依赖 PyTorch 2.5+（不需要 GPU 版 PyTorch）。目前尚不支持文本中显式插入停顿和 int8 量化。