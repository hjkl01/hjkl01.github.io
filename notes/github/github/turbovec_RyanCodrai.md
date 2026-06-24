### [turbovec](https://github.com/RyanCodrai/turbovec) ![GitHub Repo stars](https://img.shields.io/github/stars/RyanCodrai/turbovec?style=social)

turbovec 是一个基于 Rust（并提供 Python 绑定）的本地向量检索库，实现了 Google Research 的 TurboQuant 量化算法，主打**高压缩、低内存、低延迟**的向量搜索。

核心功能：
- 将大规模向量库从 FP32 大幅压缩到 2-bit/4-bit 表示（如 1536 维可达约 16 倍压缩），显著降低内存占用。
- 支持**在线增量写入**：新增向量即可索引，无需训练 codebook、无需单独训练阶段、无需重建索引。
- 提供高性能 SIMD 检索内核（ARM NEON、x86 AVX-512/AVX2），速度可与或优于 FAISS FastScan。
- 支持**查询时过滤**（allowlist/位掩码），在内核内直接执行过滤，避免先全量检索再丢弃，选择性过滤场景更高效。
- 支持持久化读写索引，以及 `IdMapIndex` 外部稳定 ID（支持按 ID O(1) 删除、删除后 ID 稳定）。
- 适配 RAG 场景，可完全本地部署（数据不出机/VPC），并可与开源 embedding 模型配合构建隐私友好方案。
- 提供 LangChain、LlamaIndex、Haystack、Agno 的可替换集成，便于无缝接入现有检索流水线。

算法与效果特点：
- 通过归一化、随机旋转、按坐标校准（TQ+）、Lloyd-Max 标量量化、位打包和长度重标定实现高效压缩与检索。
- 不依赖数据训练 codebook，且在召回率上与 FAISS PQ 对比具有竞争力，多数配置下表现更优或接近。