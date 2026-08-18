### [Soup](https://github.com/MakazhanAlpamys/Soup) ![GitHub Repo stars](https://img.shields.io/github/stars/MakazhanAlpamys/Soup?style=social)

**Soup 项目功能总结**

Soup 是一个简化大语言模型（LLM）微调的命令行工具，核心特点是只需一个配置文件和一条命令即可完成训练，无需 SSH 远程连接和复杂配置。

主要功能：

- **轻量级微调**：支持在 4GB 显存笔记本 GPU 上训练 8B 参数模型，采用层流式技术将冻结基座模型从 VRAM 中卸载，逐层流式传输到 GPU
- **多训练任务**：支持监督微调（SFT）、偏好优化（DPO/ORPO/SimPO/KTO/GRPO/PPO）等多种训练方法
- **量化优化**：内置 4bit NF4 量化，模型存储体积缩减约 4 倍
- **自动化配置**：自动检测 GPU、自动调整批量大小，开箱即用
- **完整工作流**：提供从训练、评估、聊天测试到模型导出（GGUF/ONNX/TensorRT 等）的全流程工具
- **本地优先**：可在本地 GPU 完成训练，无需云服务
- **Docker 支持**：无需本地安装 CUDA 或 PyTorch 即可运行
- **模型生态**：兼容 HuggingFace Hub 上万模型，内置 100+ 预置模型配方
- **合规与治理**：提供 HIPAA/SOC2/EU-AI-Act 合规模板、审计日志、供应链控制等功能

适用于希望在消费级硬件上高效微调 LLM 的个人开发者和团队。