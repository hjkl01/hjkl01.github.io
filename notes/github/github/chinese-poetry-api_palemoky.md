### [chinese-poetry-api](https://github.com/palemoky/chinese-poetry-api) ![GitHub Repo stars](https://img.shields.io/github/stars/palemoky/chinese-poetry-api?style=social)

该项目是一个基于 Go 语言的高性能中国古诗词 API 服务，提供 REST 和 GraphQL 双接口支持。核心功能包括：

1. **海量数据检索**：收录唐诗、宋词、元曲等近 40 万首诗词，涵盖五言/七言绝句、律诗、乐府、诗经等多种体裁。
2. **智能搜索**：支持全文、标题、内容及作者的多维度分类搜索。
3. **简繁体切换**：同一数据库存储简繁两种格式，可通过参数一键切换。
4. **高级筛选与随机获取**：支持按朝代、作者、诗词类型进行随机抽取或列表查询。
5. **服务特性**：内置 IP 限流保护，支持 Docker 容器化部署及多架构运行。