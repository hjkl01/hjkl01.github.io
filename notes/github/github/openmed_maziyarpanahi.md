### [openmed](https://github.com/maziyarpanahi/openmed) ![GitHub Repo stars](https://img.shields.io/github/stars/maziyarpanahi/openmed?style=social)

**OpenMed** — 本地优先医疗AI，将临床文本转换为结构化信息，零数据上传。

**核心功能：**
- **实体提取**：1000+专业医疗模型，支持疾病、药物、解剖、基因等实体识别
- **PII去标识化**：检测并脱敏18类HIPAA敏感标识符，支持12种语言247个检查点
- **完全本地运行**：支持CPU/CUDA/Apple MLX，模型和数据永不离开设备

**部署方式：**
- Python一行代码调用
- Docker REST服务
- 批处理管道
- iOS/macOS原生应用（OpenMedKit）

**技术亮点：**
- Apple Silicon加速（MLX），比CPU快24-33倍
- 离线/气隙部署支持
- Apache-2.0开源，无厂商锁定