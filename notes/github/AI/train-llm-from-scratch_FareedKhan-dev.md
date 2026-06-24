### [train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) ![GitHub Repo stars](https://img.shields.io/github/stars/FareedKhan-dev/train-llm-from-scratch?style=social)

这是一个用 PyTorch 从零实现并训练大语言模型的项目，核心基于 Transformer 和《Attention is All You Need》论文，支持在单张 GPU 上训练百万级到十亿级参数模型。项目提供完整流程，包括数据下载、预处理、模型搭建、训练、保存和文本生成，训练数据主要使用 The Pile，并使用 `tiktoken` 进行分词、HDF5 存储训练数据。

项目不仅覆盖预训练，还扩展了完整的后训练与对齐能力，包括 SFT、奖励模型、PPO、DPO、GRPO/RLVR，全部使用纯 PyTorch 手写实现，不依赖 `trl`、`peft` 或 `transformers`。同时支持单卡和多卡训练（DDP + bf16），并提供 Streamlit 可视化界面、MkDocs 文档站点以及分阶段教程，适合学习从基础语言模型到对齐推理模型的完整实现过程。