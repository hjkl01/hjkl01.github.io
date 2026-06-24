### [cups-web](https://github.com/hanxi/cups-web) ![GitHub Repo stars](https://img.shields.io/github/stars/hanxi/cups-web?style=social)

CUPS Web 是一个基于 CUPS 的网页打印管理工具，面向家庭和小型办公场景，支持通过浏览器远程上传文件、预览并提交打印任务。项目核心能力包括：多格式打印（PDF、图片、Office、OFD、文本）、服务端自动转 PDF（含多图合并）、丰富打印参数设置（份数、单双面、彩色、纸张、页码、缩放等）和实时预览。

系统提供多用户与权限管理（admin/user）、默认管理员初始化、完整打印记录追踪（文件与打印参数、状态）、后台按用户与时间筛选记录，以及按保留策略自动清理历史数据与文件。安全方面采用 Session（securecookie）认证、CSRF 防护和 bcrypt 密码加密。

部署方式支持 Docker（推荐，一键运行 CUPS + Web）和二进制运行（对接已有 CUPS），并提供数据库、上传文件、CUPS 配置持久化。配套内置大量通用与厂商打印机驱动（含多架构支持），降低驱动安装门槛；同时支持通过 CUPS 管理界面补充自定义 PPD。整体技术栈为 Go + SQLite + Vue 3，通过 IPP 与 CUPS 通信，实现轻量、可自托管的网页打印管理。