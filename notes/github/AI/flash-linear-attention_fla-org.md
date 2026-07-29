### [flash-linear-attention](https://github.com/fla-org/flash-linear-attention) ![GitHub Repo stars](https://img.shields.io/github/stars/fla-org/flash-linear-attention?style=social)

Flash Linear Attention (FLA) 是一个高效、跨平台的线性注意力序列模型库，提供多种架构实现与训练支持：
1. **核心功能**：涵盖线性注意力（如 RetNet/GLA）、状态空间模型（Mamba）、稀疏注意力及混合架构。
2. **硬件兼容**：支持 NVIDIA、AMD、Intel 后端，通过 Triton 优化内核；提供融合模块（如交叉熵计算）以提升训练效率与内存利用率。
3. **生态集成**：兼容 HuggingFace Transformers，预置生成 API，并适配分布式训练框架 Flame，支持长上下文任务评估（如 RULER）。