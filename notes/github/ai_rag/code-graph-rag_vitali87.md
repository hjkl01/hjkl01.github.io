### [code-graph-rag](https://github.com/vitali87/code-graph-rag) ![GitHub Repo stars](https://img.shields.io/github/stars/vitali87/code-graph-rag?style=social)

**Code-Graph-RAG 功能总结**

Code-Graph-RAG 是一个多语言代码库分析与辅助工具，主要功能包括：

1. **代码解析与图谱构建**：使用 Tree-sitter 解析多语言代码库，提取函数、类、方法、模块及其关系，构建知识图谱存储于 Memgraph。

2. **自然语言查询**：支持用自然语言提问代码库相关问题，AI 自动转换为 Cypher 查询并基于图谱结构返回答案。

3. **代码检索**：可通过名称或功能描述获取任意函数、类或方法的源码。

4. **智能代码编辑**：基于 AST 模式进行精准代码修改，提供 diff 预览后再应用变更。

5. **代码优化**：根据语言最佳实践或自定义编码规范优化代码。

6. **死代码检测**：从入口点遍历调用和引用关系，识别未使用的代码。

7. **结构搜索与替换**：使用 ast-grep 按 AST 模式匹配和改写代码，支持跨文件批量重构。

8. **数据流追踪**：支持 C#、Java、C、Go 等语言的污点边追踪，追踪值通过赋值、函数调用和 I/O 的流向。

9. **MCP Server 支持**：可作为 MCP 服务器运行，供 Claude Code 等工具直接查询和编辑代码库。

支持的语言包括 Python、TypeScript、JavaScript、Rust、Go、Java、C/C++、C#、PHP、Lua、Dart，以及通过 ast-grep 支持 Ruby。