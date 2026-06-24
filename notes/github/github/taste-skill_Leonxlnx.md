### [taste-skill](https://github.com/Leonxlnx/taste-skill) ![GitHub Repo stars](https://img.shields.io/github/stars/Leonxlnx/taste-skill?style=social)

Taste Skill 是一个面向 AI 代码代理（如 Codex、Cursor、Claude）的可移植前端技能集合，核心目标是让 AI 生成的界面摆脱“模板感”，提升布局、排版、动效和留白质量。项目同时提供两类能力：一类是直接产出前端实现代码的实现型技能，另一类是只产出设计参考图的图像生成技能（网页、多端移动端、品牌视觉板），可与 ChatGPT Images 等工具配合后再交给编码代理落地。

项目支持通过 `npx skills add` 统一安装全部或单个技能，默认主技能为 `design-taste-frontend`（v2 实验版，较 v1 大幅重写），并保留 `design-taste-frontend-v1` 供兼容旧流程。技能体系覆盖通用高质量前端生成、GPT/Codex 强约束风格、图生码流程、旧项目重设计、极简/柔和/工业粗野等视觉方向，以及“强制完整输出”能力。  
其中主技能可通过 3 个可调参数控制设计输出：布局变化度（DESIGN_VARIANCE）、动效强度（MOTION_INTENSITY）、视觉密度（VISUAL_DENSITY）。

整体上，这是一个框架无关（支持 React/Vue/Svelte 等）、可组合的 AI 前端设计与实现增强工具库，强调反重复、反平庸、可控风格与高完成度输出。