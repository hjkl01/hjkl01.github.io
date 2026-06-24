### [fsnotify](https://github.com/fsnotify/fsnotify) ![GitHub Repo stars](https://img.shields.io/github/stars/fsnotify/fsnotify?style=social)

fsnotify 是一个 Go 语言的跨平台文件系统通知库，支持在 Windows、Linux、macOS、BSD 和 illumos 上监听文件变更（需要 Go 1.23+）。

核心功能与特点：
- 提供统一的文件/目录变更监听接口，可接收事件流（`Events`）和错误流（`Errors`）。
- 支持创建 watcher、添加监听路径、按事件类型（如写入）过滤处理。
- 目前已支持后端：Linux(inotify)、BSD/macOS(kqueue)、Windows(ReadDirectoryChangesW)、illumos(FEN)。
- 尚未实现或待支持：Linux fanotify、macOS FSEvents、Windows USN Journals、全平台轮询模式。

使用与行为要点：
- 默认不递归监听子目录，需要手动为每个目录添加监听（递归监听在路线图中）。
- 文件被移动到其他目录后不会继续被原监听跟踪，除非目标位置也被监听。
- 不建议只监听单个文件，建议监听父目录并通过 `Event.Name` 过滤目标文件。
- 某些环境（NFS/SMB/FUSE、/proc、/sys）因底层系统协议限制，通知可能不可用。

平台注意事项：
- Linux：删除文件时，可能先收到 `CHMOD`，在文件描述符关闭后才收到 `REMOVE`；并受 `fs.inotify.max_user_watches`、`fs.inotify.max_user_instances` 限制。
- macOS/BSD（kqueue）：每个被监听文件都占用文件描述符，容易触发系统最大打开文件数限制（`kern.maxfiles`、`kern.maxfilesperproc`）。