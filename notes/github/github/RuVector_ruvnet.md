### [RuVector](https://github.com/ruvnet/RuVector) ![GitHub Repo stars](https://img.shields.io/github/stars/ruvnet/RuVector?style=social)

RuVector 是一个开源（MIT）、永久免费、可本地部署的“自学习向量数据库 + 图数据库 + AI 运行时 + 分布式系统 + 容器化平台”的一体化 Agentic AI 操作系统。其核心是：系统会从每次查询和反馈中持续学习，在毫秒级内自动优化检索、路由与模型行为，让搜索结果越来越好。

项目主要能力包括：
- **自学习检索**：HNSW + GNN + SONA，自适应重排与参数调优，支持会话级与长期学习（含防遗忘机制）。
- **高级检索与 RAG**：混合检索（稀疏+稠密）、Graph RAG、多向量检索、DiskANN、量化压缩、Matryoshka 等。
- **图能力**：内置 Cypher 图查询、超边、图变换模块，支持复杂关系与多跳推理。
- **本地 AI 推理**：内置 ruvllm，可在 CPU/GPU/WebGPU/Metal/CUDA/ANE 上运行本地 LLM，无云 API 调用成本。
- **PostgreSQL 深度集成**：可作为 pgvector 替代，提供大量 SQL 向量/图/数学/学习函数，便于无缝接入现有数据库。
- **跨平台部署**：支持 Rust、Node.js、浏览器 WASM、边缘设备、IoT、裸机；可单文件运行。
- **RVF 认知容器**：用单个 `.rvf` 文件封装向量、模型、图状态与运行环境，快速启动服务，支持分支、审计链和抗篡改追踪。
- **分布式与运维**：Raft、一致性复制、多主同步、自动分片、快照、可观测性指标。
- **安全与可信**：密码学见证链、后量子签名、可验证训练与证明门控写入，增强可追溯与安全性。
- **行业扩展场景**：覆盖 AI 代理编排、OCR、DAG 工作流、交易、神经形态计算、量子相关算法、基因组分析（rvDNA）等。