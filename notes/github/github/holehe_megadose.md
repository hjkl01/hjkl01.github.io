### [holehe](https://github.com/megadose/holehe) ![GitHub Repo stars](https://img.shields.io/github/stars/megadose/holehe?style=social)

**Holehe OSINT 功能总结：**

Holehe 是一个基于 Python 的开源 OSINT 工具，用于通过电子邮件地址查询目标在 120 多个网站（如 Twitter、Instagram、Imgur、GitHub 等）上是否注册了账户。

核心功能：
- 利用 forgotten password（忘记密码）功能检索信息
- 不向目标发送邮件，不会惊动对方
- 支持命令行和 Python 代码嵌入两种方式
- 返回标准化 JSON 格式结果，包含账户是否存在、恢复邮箱/手机号等信息
- 提供 Maltego 变换模块集成
- 支持 Docker 容器化部署

该项目基于 GNU GPL v3.0 许可，仅供教育用途。