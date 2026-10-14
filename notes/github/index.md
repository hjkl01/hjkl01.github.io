---
sidebar_position: 0
sidebar_label: GitHub 项目
---

# GitHub 项目集

GitHub 项目由 SQLite 统一管理。构建时会在 \`generated/github\` 下为每个分类生成一个独立的 Markdown 文件，并生成本分类目录页；Docusaurus 对外仍使用 \`notes/github\` 路由。

- \`make crawl\`：抓取 GitHub Trending，并将新仓库直接写入 \`data/github-projects.db\`
- \`make gene\`：为数据库中尚无简介的项目生成简介
- \`make cate\`：对数据库中尚未分类的项目进行分类
- \`make export\`：将旧的 \`notes/github/**/*.md\` 数据迁移到 SQLite；数据库非空时不会覆盖已有数据
- \`make build\`：按分类生成 Markdown 页面并构建网站
- 项目简介、分类和显示顺序保存在 SQLite；Star 数由浏览器加载 Shields.io 动态显示

## 页面生成规则

- \`index.md\` 是分类目录页，列出分类名称和项目数量
- 每个分类对应一个独立的 Markdown 文件，文件中只包含该分类的项目
- 分类删除或重命名后，构建会清理不再对应数据库分类的旧生成文件
- \`generated/github\` 是自动生成目录，请勿手动编辑其中的文件
