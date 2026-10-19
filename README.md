# hjkl01.github.io

个人网站项目仓库。

本项目基于 [Docusaurus](https://docusaurus.io/) 构建，是一个现代化的静态网站，用于发布文档、文章和个人内容。

## ✨ Features

- 🚀 基于 Docusaurus 的快速静态网站
- 📝 支持 Markdown / MDX 内容编写
- 🔍 内置搜索与文档导航能力
- 🌐 支持 GitHub Pages 自动部署
- 🎨 可扩展主题与插件体系

## 🛠️ Development

### 环境要求

建议使用：

- Node.js >= 18
- Yarn >= 1.x

### 安装依赖

```bash
yarn
```

### 本地运行

```bash
yarn start
```

启动后，浏览器会自动打开本地开发地址。修改文件后页面通常会自动刷新。

## 📦 Build

生成生产环境静态文件：

```bash
yarn build
```

构建结果会输出到 `build` 目录，可部署到任意静态网站托管服务。

## 🚀 Deployment

部署到 GitHub Pages：

使用 SSH：

```bash
USE_SSH=true yarn deploy
```

使用 HTTPS：

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

该命令会自动构建网站，并将生成内容推送到 `gh-pages` 分支。

## 📁 Project Structure

```text
.
├── docs/          # 文档内容
├── blog/          # 博客文章
├── src/           # 页面与组件
├── static/        # 静态资源
├── docusaurus.config.js
└── package.json
```

## 📄 License

本项目内容版权归作者所有，代码部分遵循仓库声明的开源协议。

## GitHub 项目分类管理

项目分类统一保存在 `data/github-projects.db` 的 `projects` 表中。使用本地 Web 页面管理项目、搜索和筛选分类、批量调整分类，并确认自动分类建议：

```bash
make review
```

默认在浏览器打开 `http://127.0.0.1:8765`。服务仅监听本机地址，按 `Ctrl+C` 停止。端口占用时可指定其他端口：

```bash
GITHUB_REVIEW_PORT=8766 make review
```

页面中的分类修改会立即保存到 SQLite。自动分类建议与最终分类分开保存，人工分类不会被自动分类任务覆盖。可以删除单个项目或批量删除选中项目；删除前会二次确认，删除会从 SQLite 项目库移除记录，且不可撤销。删除或修改分类后，点击页面中的“生成 Markdown”，或运行 `make build`，将最新项目库输出到 `notes/github`。

运行管理 API 回归测试：

```bash
make test
```
