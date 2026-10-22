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

页面中的分类修改会立即保存到 SQLite。自动分类建议与最终分类分开保存，人工分类不会被自动分类任务覆盖。点击页面右上角“添加项目”，输入 GitHub 仓库地址并选择分类即可手动登记项目；弹窗默认勾选“同时调用 LLM 生成简介”，添加请求会立即返回，简介在后台复用 `make gene` 的流程异步生成，页面会自动轮询刷新结果（生成中显示“生成中…”）。若生成失败或对简介不满意，点击该行的“生成简介 / 重新生成 / 重试简介”按钮即可再次调用 LLM，也可随时运行 `make gene`。不选分类时会进入待审核，交给 `make cate` 生成建议。可以删除单个项目或批量删除选中项目；删除前会二次确认，删除会从 SQLite 项目库移除记录，且不可撤销。删除或修改分类后，点击页面中的“生成 Markdown”，或运行 `make build`，将最新项目库输出到 `notes/github`。

生成简介依赖 `.env` 配置：`OPENAI_API` / `OPENAI_API_KEY` / `OPENAI_MODEL` 用于调用 LLM，`GITHUB_TOKEN` 用于拉取 README。若 `GITHUB_TOKEN` 未配置或仍是占位值 `your_github_token_here`，会自动改用匿名请求（受 GitHub 60 次/小时限制）；若填的是含换行/空格等非法字符的 token，请求会直接报 `LocalProtocolError`。生成失败时页面会显示“生成失败”，悬停可看具体原因，修正 `.env` 后点击“重试简介”或运行 `make gene` 重新生成。管理服务在每次生成简介前会重新读取 `.env` 中的 `GITHUB_TOKEN`，因此只改 token 无需重启服务。

运行管理 API 回归测试：

```bash
make test
```
