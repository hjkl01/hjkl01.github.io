### [knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) ![GitHub Repo stars](https://img.shields.io/github/stars/anthropics/knowledge-work-plugins?style=social)

该项目是一个面向 Claude（主要用于 Claude Cowork，也兼容 Claude Code）的“知识工作插件”集合，目标是让 Claude 按不同岗位成为专业助手，并结合团队与公司的实际流程输出更一致、更高质量的结果。

项目开源了 11 类插件，覆盖生产力、销售、客服、产品管理、市场、法务、财务、数据分析、企业搜索、生物科研，以及插件管理。每个插件都打包了该岗位所需的能力模块、斜杠命令、子代理和外部工具连接（如 Slack、Notion、Jira、HubSpot、Snowflake 等），可直接用于任务执行（如写方案、查数据、工单分流、合同审阅、财务对账等）。

插件采用统一文件结构（manifest、连接配置、commands、skills），无须写代码或搭建基础设施；安装后会自动触发相关技能，也可手动使用斜杠命令。项目强调“可定制”：可替换连接器、补充公司术语和流程、调整工作流，或创建新插件，使 Claude 更贴合组织实际工作方式。