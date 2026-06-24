### [ladder](https://github.com/everywall/ladder) ![GitHub Repo stars](https://img.shields.io/github/stars/everywall/ladder?style=social)

Ladder为HTTP网页代理工具。用于测试分析网站付费墙与内容分发行为。模拟各类客户端环境。拦截并修改请求与响应。

核心功能：
- 按域名应用规则集。
- 增删改请求与响应头（CORS、CSP等）。
- 网页注入或删除自定义HTML/CSS/JS代码。
- 重写请求URL（参数、域名、路径）。
- 自定义User-Agent与X-Forwarded-For IP。
- 提供API与获取原生HTML功能。
- 集成FlareSolverr绕过Cloudflare与反爬虫验证。
- 支持基础访问认证、访问日志、域名限制。
- 跨平台部署（Docker、Linux、Mac、Windows）。