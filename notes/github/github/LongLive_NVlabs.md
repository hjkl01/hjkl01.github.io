### [LongLive](https://github.com/NVlabs/LongLive) ![GitHub Repo stars](https://img.shields.io/github/stars/NVlabs/LongLive?style=social)

LongLive 2.0 是一个面向长视频生成的 **NVFP4 并行基础设施**，覆盖训练与推理全流程。核心功能包括：

- **训练侧**
  - 支持 AR（自回归）训练的均衡序列并行（teacher-forcing）。
  - 支持多镜头（multi-shot）与单镜头视频的 AR 训练。
  - 支持在 AR 训练与少步蒸馏中使用 **NVFP4 或 BF16** 精度。

- **推理侧**
  - 支持 **NVFP4 推理（W4A4）** 与 NVFP4 KV Cache。
  - 支持多镜头 attention sink。
  - 支持序列并行推理与异步解码。
  - 通过一系列内核与缓存优化提升吞吐，最新版本整体吞吐提升 **18.6%**。

- **性能与模型**
  - 提供 LongLive-2.0-5B 及其 NVFP4 多版本模型（如 4-step、2-step）。
  - 在速度与质量上兼顾：最高可达 **45.7 FPS**，并支持多镜头生成。

- **项目定位**
  - LongLive 1.0 侧重“实时交互式长视频生成”；
  - LongLive 2.0 在此基础上重点提供高效并行与低比特量化（NVFP4）能力，用于更快、更长、更实用的长视频生成。