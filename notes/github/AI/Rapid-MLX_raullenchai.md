### [Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) ![GitHub Repo stars](https://img.shields.io/github/stars/raullenchai/Rapid-MLX?style=social)

Rapid-MLX 是一个面向 Apple Silicon Mac（M1/M2/M3/M4）的本地 AI 推理与服务框架，核心功能是让用户在本机高速运行大模型，并以 OpenAI 兼容 API（`/v1`）对外提供服务，无需云端和 API 费用。

主要能力包括：  
- **本地模型部署与推理**：支持大量文本/代码/推理模型（含 MoE、大上下文模型），提供模型别名与按内存分级推荐。  
- **高性能优化**：基于 MLX + Metal，主打高吞吐与低首字延迟；提供 KV 缓存、DeltaNet 状态快照、推测解码（DFlash/SuffixDecoding）、缓存量化等加速能力。  
- **工具调用（Tool Calling）**：完整 OpenAI 风格工具调用，内置 **17 种解析器**，并支持量化模型输出异常时的自动恢复。  
- **推理内容分离**：对支持思维链的模型，将 reasoning 与最终回答分字段输出。  
- **多模态扩展**：可选支持视觉、音频（TTS/STT）、视频理解与 embeddings。  
- **智能云路由**：超长上下文请求可按阈值自动切换到云模型。  
- **广泛生态兼容**：可直接对接 Cursor、Continue、LangChain、PydanticAI、Aider、Open WebUI、Claude/OpenAI 兼容客户端等。  
- **工程与可维护性**：提供 `doctor` 自检、丰富 CLI、3200+ 测试、基准测试与回归测试体系。  
- **隐私与遥测**：遥测默认关闭，仅在用户显式开启后上传匿名统计，不采集提示词与生成内容。