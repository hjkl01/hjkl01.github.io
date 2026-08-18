### [osv-scanner](https://github.com/google/osv-scanner) ![GitHub Repo stars](https://img.shields.io/github/stars/google/osv-scanner?style=social)

OSV-Scanner 是一个开源漏洞扫描工具，主要用于检测项目依赖中存在的安全漏洞。核心功能包括：

1. **依赖漏洞扫描**：递归扫描源码目录，检测支持的语言生态（C/C++、Go、Java、Python、JavaScript 等）和包管理器的依赖漏洞。

2. **容器扫描**：对容器镜像进行分层扫描，检测操作系统包（Alpine、Debian、Ubuntu）及语言依赖的漏洞。

3. **许可证扫描**：检查依赖组件的软件许可证，支持与白名单比对。

4. **离线扫描**：支持下载本地 OSV 数据库后进行离线扫描，无需网络连接。

5. **引导修复**（实验性功能）：根据依赖深度、严重级别、修复策略等条件，自动建议并执行安全的依赖版本升级。

6. **调用分析**：通过代码调用分析确认漏洞函数是否实际使用，减少误报。

底层数据来源于开放的 OSV.dev 漏洞数据库，覆盖大多数开源语言和操作系统生态。