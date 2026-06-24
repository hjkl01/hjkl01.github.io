### [BPB-Wizard](https://github.com/bia-pain-bache/BPB-Wizard) ![GitHub Repo stars](https://img.shields.io/github/stars/bia-pain-bache/BPB-Wizard?style=social)

BPB Wizard 是一个用于简化 BPB Panel 部署和管理流程的工具，目的是降低用户在部署时出错的概率。它支持 Cloudflare Workers 和 Pages 两种部署方式，用户只需要准备一个 Cloudflare 账号即可使用。

该工具可在 Windows、macOS、Android（Termux）和 Linux 上运行。它可以帮助用户新建面板或修改已有面板：新建时会引导用户完成一系列配置，并为每项设置预生成安全的默认值；修改时会列出已部署的 Workers 和 Pages 项目，方便选择需要更新或删除的项目。

此外，BPB Wizard 还支持面板更新功能。用户只需重新运行向导并选择修改现有项目，即可将指定项目升级到最新稳定版本或直接删除。