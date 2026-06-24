### [MiniCPM-V](https://github.com/OpenBMB/MiniCPM-V) ![GitHub Repo stars](https://img.shields.io/github/stars/OpenBMB/MiniCPM-V?style=social)

该项目是一个面向端侧部署的多模态大模型系列，核心包括 **MiniCPM‑V** 和 **MiniCPM‑o**：

- **MiniCPM‑V 4.6**：主打高效图文/视频理解，参数量仅 13 亿，支持单图、多图、视频与文本输入；通过视觉早期压缩技术将视觉编码计算开销降低 50% 以上，并支持 4x/16x 混合视觉 token 压缩，在速度与精度间灵活权衡；可在 iOS、Android、HarmonyOS 部署，且提供开源端侧适配代码。  
- **MiniCPM‑o 4.5**：主打实时全模态交互，参数量 90 亿，支持视频+音频流式输入及文本+语音输出，具备**全双工**能力（听、看、说可同时进行，互不阻塞），支持实时主动提醒等主动交互；具备中英双语实时语音对话、可配置音色、语音克隆与角色扮演能力，并兼顾高分辨率图像、高帧率视频理解和文档/OCR能力。  

项目同时提供完整生态：  
支持 Transformers、vLLM、SGLang、llama.cpp、Ollama、FlagOS 等推理框架，支持 LLaMA-Factory、SWIFT 微调，提供多种量化版本（GGUF/BNB/AWQ/GPTQ）、可本地部署的 Web Demo，以及 MiniCPM‑V 4.6 与 MiniCPM‑o 4.5 的 API（含 MiniCPM‑V 4.6 免费公开 API Key）。