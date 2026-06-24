### [TabPFN](https://github.com/PriorLabs/TabPFN) ![GitHub Repo stars](https://img.shields.io/github/stars/PriorLabs/TabPFN?style=social)

TabPFN 是一个面向表格数据的基础模型项目，提供基于 PyTorch/CUDA 的本地快速推理能力，支持**分类与回归**任务（默认使用 TabPFN-3，也可切换到旧版本如 2.6/2）。项目可通过 `pip install tabpfn` 快速使用，首次训练会自动下载模型权重。

其核心定位是高质量的小到中大规模表格学习，并强调 GPU 推理（CPU 仅适合小数据）。默认模型支持较大规模数据（如最高可到 1,000,000×200，行列上限可权衡）。使用建议包括：批量预测、尽量不做缩放/独热预处理、按推荐数据规模使用。

生态方面包含：
- **TabPFN Client**：云端推理 API；
- **TabPFN Extensions**：可解释性、异常检测与合成数据、嵌入、多分类扩展等；
- **TabPFN UX**：无代码图形界面。

工程能力上支持：离线下载模型、环境变量配置（鉴权/缓存/CPU限制等）、已训练模型保存与加载、缺失值处理。另提供企业版能力（更低延迟蒸馏推理与商业支持）。

许可方面：TabPFN-2.5/2.6/3 权重为非商用许可；代码与 v2 权重基于 Prior Labs License（Apache 2.0 + 署名附加要求）。遥测为**默认关闭**且匿名。