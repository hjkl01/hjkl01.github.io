### [sglang-omni](https://github.com/sgl-project/sglang-omni) ![GitHub Repo stars](https://img.shields.io/github/stars/sgl-project/sglang-omni?style=social)

**SGLang-Omni 功能总结**

SGLang-Omni 是基于 SGLang 的高性能 omni 模型和多模态模型服务框架，用于编排多阶段推理流水线，提供低延迟和 OpenAI 兼容 API。

核心能力：
- **多阶段流水线编排**：灵活调度预处理、自回归引擎、编解码器、声码器等异构阶段，跨进程和 GPU 运行，每个阶段独立调度器针对各自瓶颈优化
- **高性能推理**：集成 SGLang 的 RadixAttention、连续批处理、CUDA Graph 等优化
- **OpenAI 兼容 API**：提供 `/v1/audio/speech` 和 `/v1/chat/completions` 端点，支持实时流式输出
- **广泛模型支持**：兼容 Higgs Audio、Fish Audio S2-Pro、Voxtral TTS、Qwen3 TTS、MOSS-TTS、Qwen3-Omni、Ming-Omni、LLaDA2.0-Uni 等 TTS 和多模态模型