### [kage](https://github.com/tamnd/kage) ![GitHub Repo stars](https://img.shields.io/github/stars/tamnd/kage?style=social)

kage 是网站离线克隆工具。通过真实 Chrome 渲染页面，捕获最终 DOM，剥离所有 JavaScript，下载并本地化 CSS、图片、字体，生成无脚本可离线浏览的静态镜像。核心命令：`clone` 爬取渲染（支持断点续传、范围限定），`serve` 本地预览，`pack` 打包为 ZIM 文件或独立可执行文件（支持原生窗口），`open` 离线阅读 ZIM。特点：无 JS、无追踪、开放标准 ZIM 格式。