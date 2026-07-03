### [slime](https://github.com/THUDM/slime) ![GitHub Repo stars](https://img.shields.io/github/stars/THUDM/slime?style=social)

slime 是一个面向强化学习扩展的大语言模型后训练框架，具备两大核心能力：通过连接 Megatron 与 SGLang 实现高性能训练，以及通过自定义接口和基于服务器的引擎实现灵活的数据生成。该框架旨在将训练、Rollout、数据缓冲等环节无缝融合，避免系统臃肿。它原生支持参数透传，以 SGLang 作为单一 Rollout 后端以优化特定能力，并经过 GLM 系列等多款前沿模型的实战验证，具备完善的生产级稳定性、正确性检查及 CI 流程。此外，slime 拥有活跃的生态系统，衍生出多个用于智能体、多模态及特定领域研究的独立项目。