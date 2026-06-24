### [harness](https://github.com/revfactory/harness) ![GitHub Repo stars](https://img.shields.io/github/stars/revfactory/harness?style=social)

Harness 是一个面向 Claude Code 的“团队架构工厂”插件：用户用一句自然语言描述项目需求后，它会自动生成适配该领域的多代理团队与技能文件（`.claude/agents/`、`.claude/skills/`），并完成编排与验证流程。  
核心能力包括：基于 6 种预定义团队架构模式（流水线、扇出/扇入、专家池、生产者-审查者、监督者、分层委派）进行团队设计；自动生成技能（含渐进式信息披露）；支持代理间数据传递、错误处理与协作协议；提供触发校验、干跑测试及有/无技能对比测试。  
它定位于 Claude Code 生态的 L3 元工厂层“团队架构子层”，重点解决“如何设计协作型代理团队”，可与偏运行时确定性配置的工具（如 Archon）互补组合使用。