### [lance](https://github.com/lance-format/lance) ![GitHub Repo stars](https://img.shields.io/github/stars/lance-format/lance?style=social)

Lance 是一个面向多模态 AI 的开源 Lakehouse 格式，提供文件格式、表格式与目录规范，可直接构建基于对象存储的完整数据湖仓，用于 AI/ML 工作流。

核心功能包括：
- **混合检索**：在同一数据集上融合向量检索、全文检索（BM25）与 SQL 分析，并支持加速索引。
- **高速随机访问**：随机读性能显著提升（号称较 Parquet/Iceberg 可达 100 倍），同时保持扫描性能。
- **原生多模态支持**：统一存储图像、视频、音频、文本与向量嵌入，支持高效 blob 编码与懒加载。
- **数据演进能力**：可高效新增列并回填数据，无需整表重写，适合特征工程。
- **零拷贝版本管理**：内置 ACID 事务、时间旅行、标签与分支，无需额外基础设施。
- **生态集成丰富**：兼容 Apache Arrow、Pandas、Polars、DuckDB、Spark、Ray、Trino、Flink 及多种开放 Catalog。

项目同时提供 Python 快速使用能力（安装、数据转换、读取、DuckDB 查询、向量索引与近邻搜索），并包含 Rust 核心实现及 Python/Java 绑定。整体定位是将 AI 优先能力直接纳入 Lakehouse，弥补传统格式在向量检索、随机访问与多模态管理上的不足。