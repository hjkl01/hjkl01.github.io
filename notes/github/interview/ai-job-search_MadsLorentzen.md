### [ai-job-search](https://github.com/MadsLorentzen/ai-job-search) ![GitHub Repo stars](https://img.shields.io/github/stars/MadsLorentzen/ai-job-search?style=social)

该项目是一款基于 Claude Code 的 AI 求职辅助框架。核心功能包括：
1. **档案构建**：通过 `/setup` 整合简历、学历、经历与技能素材，自动生成结构化个人画像。
2. **职位检索与筛选**：支持多招聘平台数据抓取，利用 `/rank` 批量评估岗位契合度并生成排序清单。
3. **自动化申请**：运行 `/apply` 后，AI 自动评估匹配度，撰写定制化 LaTeX 简历与求职信，并采用“起草-评审”双 Agent 机制交叉校验，确保内容真实严谨、绝不虚构。
4. **排版与 ATS 验证**：自动编译 PDF 并严格校验页面布局（强制控制页数），提取文本层进行 ATS 解析兼容性测试及关键词覆盖度评分。
5. **扩展能力**：内置技能差距分析与学习规划 (`/upskill`)、公开资料补充 (`/expand`)、自定义 LaTeX 模板注册 (`/add-template`)、本地招聘网站插件生成 (`/add-portal`) 及薪资基准查询等功能。

整体工作流高度模块化，核心逻辑支持跨语言与国家市场切换，系统化提升求职材料的针对性、专业性与投递效率。