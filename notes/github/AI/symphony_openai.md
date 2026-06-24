### [symphony](https://github.com/openai/symphony) ![GitHub Repo stars](https://img.shields.io/github/stars/openai/symphony?style=social)

Symphony 是一个将项目工作拆分为隔离、自治的实现任务的系统，帮助团队从“监督编码代理”转向“管理工作本身”。它可监控任务看板（如 Linear），自动生成代理处理任务，并产出可验证的工作证明（如 CI 状态、PR 评审反馈、复杂度分析、讲解视频）；任务被接受后，代理可安全合并 PR，从而让工程师以更高层级管理研发流程。  
项目目前处于面向可信环境测试的低调工程预览阶段。  
使用方式包括两种：按 SPEC.md 自行实现（任意语言），或使用其 Elixir 实验性参考实现（见 elixir/README.md）。  
项目采用 Apache License 2.0 开源许可。