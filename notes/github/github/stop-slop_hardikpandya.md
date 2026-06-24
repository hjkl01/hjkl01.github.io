### [stop-slop](https://github.com/hardikpandya/stop-slop) ![GitHub Repo stars](https://img.shields.io/github/stars/hardikpandya/stop-slop?style=social)

Stop Slop 是一个用于“去除 AI 写作痕迹”的技能包，目标是让 Claude 或其他大语言模型识别并删改常见的 AI 文风套路，使文本更自然、直接、有人味。

项目核心功能包括：
- 提供核心规则（`SKILL.md`），可直接接入 Claude Code、Claude Projects、自定义指令或 API 系统提示词；
- 提供按需参考库：
  - `phrases.md`：需避免/删除的典型词句（如空泛开场、强调口头禅、商业套话、副词堆砌、元评论等）；
  - `structures.md`：需避免的结构陈词滥调（如二元对立、否定式罗列、碎片化煽动句式、被动和“远距离旁白”语气等）；
  - `examples.md`：前后改写示例；
- 设定句级约束：避免 Wh- 句首、避免破折号、避免断裂短句和极端偷懒表达，要求多用主动语态；
- 提供 5 个维度的 1–10 分评分体系（直接性、节奏、可信度、真实性、信息密度），总分低于 35/50 需重写。