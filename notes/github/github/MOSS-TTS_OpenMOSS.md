### [MOSS-TTS](https://github.com/OpenMOSS/MOSS-TTS) ![GitHub Repo stars](https://img.shields.io/github/stars/OpenMOSS/MOSS-TTS?style=social)

MOSS-TTS Family 是 OpenMOSS/MOSI.AI 开源的语音与声音生成模型家族，面向高保真、高表现力和复杂真实场景，支持长文本稳定合成、多说话人对话、语音克隆、角色音色设计、环境音效生成与实时流式 TTS。

核心能力与模型包括：
- **MOSS-TTS（v1.5）**：旗舰级 TTS，支持零样本语音克隆、长语音生成、拼音/音素/时长精细控制、多语言与中英混说；v1.5 增强多语言效果、克隆稳定性、标点韵律跟随，并支持 `[pause X.Ys]` 显式停顿。
- **MOSS-TTSD**：面向高表现力、多角色、超长对话的语音对话生成模型，主客观评测表现领先，且在部分评测中优于 Doubao、Gemini 等闭源模型。
- **MOSS-VoiceGenerator**：无需参考音频，仅通过文本描述即可生成多样音色与风格，可独立用于语音设计或作为下游 TTS 前置层。
- **MOSS-TTS-Realtime**：面向实时语音助手的低延迟流式合成模型，支持多轮上下文一致性，TTFB 约 180ms。
- **MOSS-SoundEffect / v2.0**：音效生成模型，覆盖自然、城市、生物、人类动作、音乐片段等类别；v2.0 基于 DiT+Flow Matching，可生成最高 48kHz、最长 30 秒双语音效。

技术与部署特性：
- 提供 `MossTTSDelay`、`MossTTSLocal`、`MossTTSRealtime` 三类架构，分别侧重长上下文稳定与生产效率、轻量灵活与流式表现、实时交互能力。
- 支持 **31 种语言**（v1.5），并支持多语言克隆与跨语言合成。
- 支持标准 PyTorch 推理与微调，也支持 **llama.cpp + ONNX Runtime/TensorRT 的无 PyTorch 部署**（含 GGUF 量化权重），以及 **SGLang 加速推理**（约 3 倍吞吐提升）。
- 提供 **MOSS-TTS-Nano（约 0.1B）**，可在 4 核 CPU 上实现实时流式语音生成。
- 配套 **MOSS-Audio-Tokenizer（1.6B）** 作为统一离散音频接口，服务整个模型家族，兼顾高压缩率、高重建质量与流式低延迟。