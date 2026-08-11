### [dockpanel](https://github.com/ovexro/dockpanel) ![GitHub Repo stars](https://img.shields.io/github/stars/ovexro/dockpanel?style=social)

DockPanel 是一款免费、自托管的服务器面板，采用 Rust 编写，原生支持 Docker。主要功能包括：

- **网站托管**：支持静态、PHP、Node.js、Python 网站及反向代理，自动配置 Nginx 和 SSL。
- **Docker 应用**：提供 153 个一键安装模板，覆盖 AI、CMS、数据库、媒体等类别，支持 GPU 直通和资源限制。
- **Git 部署**：支持推送即部署，实现零停机蓝绿部署，提供预览环境。
- **数据库管理**：内置 MySQL/PostgreSQL，支持 SQL 浏览器、结构查看和按时间点恢复。
- **备份与恢复**：支持定时备份、S3/SFTP 远程存储、一键恢复，以及 AES-256 加密的备份编排。
- **多服务器管理**：支持从单一面板管理无限数量的远程服务器。
- **安全防护**：内置 WAF（ModSecurity3 + OWASP CRS）、Fail2Ban、UFW 防火墙、SSH 加固、CVE 扫描、Passkey 无密码登录。
- **DNS 与邮件**：支持 Cloudflare 和 PowerDNS 管理；提供 Postfix+Dovecot 邮件服务和 Roundcube 网页邮箱。
- **监控与告警**：HTTP/TCP/Ping 可用性检查、SLA 追踪、Prometheus+Grafana 集成、PagerDuty 告警。
- **开发者工具**：提供 CLI 命令行、基础设施即代码（YAML 导出/导入）、文件系统管理器、终端。
- **商业功能**：支持经销商账户、白标定制、OAuth/SSO 登录、WHMCS 集成。
- **轻量资源**：面板服务仅占用约 49MB 内存，支持 x86_64 和 ARM64 架构。