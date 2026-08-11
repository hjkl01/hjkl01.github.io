### [airllm](https://github.com/lyogavin/airllm) ![GitHub Repo stars](https://img.shields.io/github/stars/lyogavin/airllm?style=social)

AirLLM 是一个大幅降低大语言模型推理显存占用的 Python 库，无需量化、蒸馏或剪枝即可在单张 4GB GPU 上运行 70B 模型，在 8GB 显存上运行 405B 模型，甚至可在不到 4GB 显存上运行 2.8T 规模的 Kimi K3 模型。

核心原理是逐层流式加载模型参数，而非整体加载，使显存需求仅取决于单层模型大小而非总参数量。支持 Llama、Qwen、DeepSeek、Mistral、Phi、Gemma、ChatGLM、Baichuan、InternLM、Yi 等主流开源模型。可选 4bit/8bit 块量化压缩，推理速度可提升约 3 倍。支持 MacOS 运行及 prefetching 性能优化。