---
sidebar_position: 2
---

# brew-service

## 用 brew services 部署 pi-web（完整记录）

把 npm 全局安装的 [`@agegr/pi-web`](https://github.com/agegr/pi-web) 做成 macOS 上**开机自启 + 崩溃自动重启**的后台服务，并能从局域网/域名访问。

最终状态：`brew services list` 里有一行 `pi-web started`，监听 `0.0.0.0:30141`，用密码登录。

## 0. 环境

| 项 | 值 |
|---|---|
| macOS | 26.7.1 (25G241) |
| Homebrew | 7.0.11，prefix `/opt/homebrew`（Apple Silicon） |
| Node | v22.22.2，通过 asdf 管理，shim 在 `~/.asdf/shims` |
| 用户 | `user` |
| pi-web | 0.12.2（`npm i -g @agegr/pi-web`） |
| 监听 | `0.0.0.0:30141` |

## 1. 为什么要自己建 tap

`brew services` **只能管理 formula**，`brew services start foo` 里的 `foo` 必须是一个 formula，而 `@agegr/pi-web` 只是 npm 全局包（`~/.asdf/shims/pi-web`），没有 formula。

所以做法是：**本地 tap 写一个只负责「包一层启动脚本 + 声明 service 块」的 formula**，真正的程序仍然由 npm 提供。

对比一下之前用 dsh 时的取舍：

| | dsh | pi-web |
|---|---|---|
| 监听地址 | 硬编码拒绝 `0.0.0.0`，报 `binding every interface would expose remote code execution` | 支持 `--hostname 0.0.0.0` / `PI_WEB_HOSTNAME` |
| 认证 | 每次启动 `randomBytes(32)` 生成一次性 token，只能用 cookie 续命 | 固定密码，`PI_WEB_PASSWORD` + 30 天 cookie |
| 结论 | 需要 Caddy 反代 + 登录页偷 token | 直接起服务即可 |

## 2. 改动文件总览

| 路径 | 动作 | 作用 |
|---|---|---|
| `/opt/homebrew/Library/Taps/user/homebrew-pi/Formula/pi-web.rb` | 新建 | formula：装 wrapper + 声明 `service do` |
| `/opt/homebrew/Library/Taps/user/homebrew-pi/data/pi-web-0.12.2.tar.gz` | 新建 | 占位源包（formula 必须声明 `url`+`sha256`） |
| `/opt/homebrew/Library/Taps/user/homebrew-pi/README.md` | 新建 | tap 说明（启动/配置/卸载） |
| `~/.pi-web.env` | 新建，`chmod 600` | 密码、监听地址、端口、域名白名单 |
| `~/Library/LaunchAgents/sh.brew.pi-web.plist` | **brew 生成，勿手改** | launchd 定义（KeepAlive / RunAtLoad / 日志路径） |
| `/opt/homebrew/var/log/pi-web.log`<br/>`/opt/homebrew/var/log/pi-web.err.log` | 运行时生成 | stdout / stderr |
| `/opt/homebrew/etc/Caddyfile` | **未改动** | dsh 时期的 `/_dsh/*` 路由已回滚，pi-web 不依赖反代 |
| `~/dockers/data/frp/frpc.toml` | **未改动** | 已有 `type = "tcp"` 的 `30141 → 30141` 映射 |

## 3. 步骤 1：建 tap

```shell
brew tap-new user/pi
# ==> Created /opt/homebrew/Library/Taps/user/homebrew-pi

cd "$(brew --repository)/Library/Taps/user/homebrew-pi"
mkdir -p Formula data
```

`brew tap-new` 自动生成 `.git/`、`.github/workflows/`、`Formula/`、`README.md`。注意目录名是 `homebrew-pi`（`homebrew-` 前缀会被 brew 当作 tap 名的一部分处理），tap 全名是 `user/pi`。

## 4. 步骤 2：Formula/pi-web.rb

```ruby
# frozen_string_literal: true

# Wraps the globally installed `@agegr/pi-web` CLI so `brew services` can run
# it as a launchd user agent at login.
class PiWeb < Formula
  desc "Web UI for the pi coding agent, run as a background service"
  homepage "https://github.com/agegr/pi-web"
  version "0.12.2"
  license "MIT"

  # Nothing to build: the npm global install provides the CLI. This tarball in
  # the tap's data/ directory is only a stable placeholder source.
  url "file://#{__dir__}/../data/pi-web-#{version}.tar.gz"
  sha256 "3a455e7c3d404ac0eab2c03a591b752a04842dc2b4739136314f1fd1aaf74e0d"

  def install
    (buildpath/"pi-web-service").write <<~SH
      #!/bin/bash
      # brew services entry point for pi-web.
      #
      # Settings live in ~/.pi-web.env (chmod 600), so the password never has to
      # be repeated on the command line or in the launchd plist:
      #
      #   PI_WEB_PASSWORD='<long random password>'   # browser login (user: pi)
      #   PI_WEB_HOSTNAME=0.0.0.0                   # bind every interface
      #   PORT=30141                                # or pass --port below
      #
      # pi-web reads PI_WEB_HOSTNAME / PORT itself; --no-open keeps login
      # sessions from stealing focus. Extra args are forwarded.
      set -a
      if [ -f "$HOME/.pi-web.env" ]; then . "$HOME/.pi-web.env"; fi
      set +a
      export PATH="$HOME/.asdf/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
      exec "$HOME/.asdf/shims/pi-web" --no-open "$@"
    SH
    chmod 0755, "pi-web-service"
    bin.install "pi-web-service"
  end

  service do
    run [opt_bin/"pi-web-service"]
    keep_alive true
    working_dir Dir.home
    process_type :background
    log_path var/"log/pi-web.log"
    error_log_path var/"log/pi-web.err.log"
  end

  test do
    assert_predicate bin/"pi-web-service", :executable?
  end
end
```

逐字段说明：

| 字段 | 说明 |
|---|---|
| `url` + `sha256` | 只为满足 formula 必须声明源的要求；`__dir__` 是 formula 所在目录，指向 tap 内的 `data/` |
| `install` | 不编译任何东西，只生成一个 bash wrapper 装进 `bin/` |
| wrapper 里的 `$HOME` | **必须用运行时 `$HOME`**，不能写 `#{Dir.home}` —— 安装时 Homebrew 会把 HOME 重定向到 `/private/tmp/.../.brew_home`，写死就变成不存在的路径 |
| wrapper 里的 `set -a` | 让 source 进环境文件的变量自动 `export` 给 pi-web |
| `export PATH` | launchd 不读 `~/.zshrc`，node/asdf shims 必须显式加进来 |
| `exec ... --no-open "$@"` | 转发额外参数，例如 `pi-web-service --port 8080` |
| `service do run [...]` | 生成 plist 的 `ProgramArguments`，`opt_bin` = `/opt/homebrew/opt/pi-web/bin` |
| `keep_alive true` | 崩溃/被 kill 自动拉起（`KeepAlive`） |
| `working_dir Dir.home` | 工作目录 `~`，pi-web 要读 `~/.pi` 会话数据 |
| `process_type :background` | CPU/IO 降优先级，不抢前台 |
| `log_path` / `error_log_path` | 分别对应 `StandardOutPath` / `StandardErrorPath` |

## 5. 步骤 3：占位源包

formula 必须有 `url` + `sha256`，否则：

```text
Error: Formulae found in multiple taps ... / Error: formula requires at least a URL
```

既然不下载任何东西，就造一个空包占位：

```shell
cd "$(brew --repository)/Library/Taps/user/homebrew-pi"
tar -czf data/pi-web-0.12.2.tar.gz -T /dev/null      # 空包；本仓库实际打入了 README.md
shasum -a 256 data/pi-web-0.12.2.tar.gz
# 3a455e7c3d404ac0eab2c03a591b752a04842dc2b4739136314f1fd1aaf74e0d
```

这个 sha256 必须和 formula 里的一致；**改了包但没改 sha256，`brew install` 会报 `reports different checksum`**。

## 6. 步骤 4：~/.pi-web.env

配置全放这里，改密码不用重装 formula：

```shell
openssl rand -base64 32 | tr -d '/+=' | cut -c1-32      # 生成 32 位密码

cat > ~/.pi-web.env <<'EOF'
# pi-web service environment (sourced by /opt/homebrew/opt/pi-web/bin/pi-web-service)
PI_WEB_PASSWORD='<32位随机密码>'
PI_WEB_HOSTNAME=0.0.0.0
PORT=30141
# 走反向代理/域名访问时，把域名加进来（裸域名，不要端口）
PI_WEB_ALLOWED_HOSTS=mpi.sudo.website
EOF

chmod 600 ~/.pi-web.env
```

| 变量 | 作用 |
|---|---|
| `PI_WEB_PASSWORD` | 浏览器登录密码；HTTP Basic Auth 用户名固定 `pi`。**不设密码 = 完全无认证** |
| `PI_WEB_HOSTNAME` | 监听地址，`0.0.0.0` = 所有网卡 |
| `PORT` | 监听端口（也可用 `--port` 传参） |
| `PI_WEB_ALLOWED_HOSTS` | Host 头白名单，逗号分隔，用于反代/域名访问；`localhost`、IP 字面量默认放行 |

> 注意：仓库是公开站点，真实密码不要写进笔记。

## 7. 步骤 5：安装 + 启动

```shell
brew install --build-from-source user/pi/pi-web
brew services start user/pi/pi-web
```

`--build-from-source`：本地占位包没有 bottle，必须显式源码安装。

安装后实际落地的文件：

```shell
$ brew list pi-web
/opt/homebrew/Cellar/pi-web/0.12.2/sh.brew.pi-web.plist          # service 定义
/opt/homebrew/Cellar/pi-web/0.12.2/INSTALL_RECEIPT.json
/opt/homebrew/Cellar/pi-web/0.12.2/bin/pi-web-service            # wrapper
/opt/homebrew/Cellar/pi-web/0.12.2/.brew/pi-web.rb
/opt/homebrew/Cellar/pi-web/0.12.2/sbom.spdx.json
/opt/homebrew/Cellar/pi-web/0.12.2/README
/opt/homebrew/Cellar/pi-web/0.12.2/sh.brew.pi-web.service

$ ls -l /opt/homebrew/opt/pi-web
/opt/homebrew/opt/pi-web -> ../Cellar/pi-web/0.12.2
```

`brew services start` 把 plist 链接到 `~/Library/LaunchAgents/` 并 `launchctl bootstrap`：

```shell
$ brew services info user/pi/pi-web
pi-web (sh.brew.pi-web)
Running: true
Loaded: true
Schedulable: false
User: user
PID: 54849

$ lsof -nP -iTCP:30141 -sTCP:LISTEN
COMMAND   PID    USER   FD   TYPE   DEVICE SIZE/OFF NODE NAME
node    54849 user   12u  IPv4 0x...      0t0  TCP *:30141 (LISTEN)
```

## 8. 步骤 6：生成的 launchd plist

`~/Library/LaunchAgents/sh.brew.pi-web.plist`（**由 brew 生成，不要手改**，改 formula 后 `brew reinstall` 再 `restart`）：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>KeepAlive</key><true/>
	<key>Label</key><string>sh.brew.pi-web</string>
	<key>LimitLoadToSessionType</key>
	<array>
		<string>Aqua</string>
		<string>Background</string>
		<string>LoginWindow</string>
		<string>StandardIO</string>
		<string>System</string>
	</array>
	<key>ProcessType</key><string>Background</string>
	<key>ProgramArguments</key>
	<array><string>/opt/homebrew/opt/pi-web/bin/pi-web-service</string></array>
	<key>RunAtLoad</key><true/>
	<key>StandardErrorPath</key><string>/opt/homebrew/var/log/pi-web.err.log</string>
	<key>StandardOutPath</key><string>/opt/homebrew/var/log/pi-web.log</string>
	<key>WorkingDirectory</key><string>/Users/user</string>
</dict>
</plist>
```

对应关系：`RunAtLoad` = 开机（登录）自启，`KeepAlive` = 崩溃自动重启，两者都由 `service do` 块生成，**不需要自己写 plist**。

## 9. 验证

| 检查 | 命令 | 实际结果 |
|---|---|---|
| 服务状态 | `brew services info user/pi/pi-web` | `Running: true`，有 PID |
| 端口 | `lsof -nP -iTCP:30141 -sTCP:LISTEN` | `node ... TCP *:30141 (LISTEN)` |
| 未登录访问首页 | `curl -si http://127.0.0.1:30141/` | `307` → `Location: /login` |
| 登录页 | `curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:30141/login` | `200` |
| 密码登录 | `curl -si -X POST -H 'Content-Type: application/json' -d '{"password":"..."}' http://127.0.0.1:30141/api/web-auth` | `200` + `Set-Cookie: pi_web_session=...` |
| 带 cookie 打开首页 | `curl -b jar -o /dev/null -w '%{http_code}' http://127.0.0.1:30141/` | `200` |
| Basic Auth（脚本用） | `curl -u "pi:$PW" http://127.0.0.1:30141/api/sessions` | `200` |
| 错误密码 | 同上，密码写错 | `401`，连错会 `429`（限流） |
| 局域网访问 | 另一台机器 `curl 10.0.0.2:30141/login` | `200` |
| Host 白名单 | `curl -H 'Host: evil.example' http://127.0.0.1:30141/` | `403 Untrusted request` |
| KeepAlive | `kill -9 <next pid>` 后再看 PID | 3 秒内换成新 PID，旧 cookie 仍有效 |
| 日志 | `tail /opt/homebrew/var/log/pi-web.log` | `✓ Ready in 484ms` / `- Network: http://0.0.0.0:30141` |

`pi-web status` 也认这个实例（它读 `~/.pi/agent/pi-web-run/*.json` 里的运行记录）：

```shell
$ pi-web status
Running pi-web servers:
  http://127.0.0.1:30141  pid 54849  v0.12.2  started 2026-10-29T06:06:35.431Z
```

## 10. 踩坑清单

| 现象 | 原因 | 解决 |
|---|---|---|
| `exec .../.brew_home/.asdf/shims/pi-web: No such file or directory` | wrapper 里写了 `#{Dir.home}`，安装时 HOME 被重定向到 `/private/tmp/.../.brew_home` | wrapper 用运行时 `$HOME` |
| `formula requires at least a URL` | 没声明 `url`/`sha256` | 用 `data/` 下的占位包 |
| `reports different checksum` | 改了占位包没更新 sha256 | `shasum -a 256` 后同步 formula |
| 服务反复重启、日志空 | launchd 环境没有 node/asdf 的 PATH | wrapper 里显式 `export PATH`，asdf shims 放最前 |
| `timeout: command not found` | macOS 无 GNU `timeout` | `brew install coreutils` 用 `gtimeout`，或自己写轮询 |
| 改了 wrapper 但行为没变 | `restart` 只重启进程，不会重新渲染脚本 | `brew reinstall --build-from-source user/pi/pi-web` |
| `pi-web status` 说 `No pi-web server is running` | 该命令内部对 `http://127.0.0.1:30141` 做 2 秒健康检查，刚重启时 Next 还在编译会超时 | 等 10 秒再看；不影响服务本身 |
| 端口被占（`EADDRINUSE`） | 有旧实例没退 | `lsof -nP -iTCP:30141 -sTCP:LISTEN` 找到 PID 后 `kill`，再 `brew services restart` |
| 域名访问 `403 Untrusted request` | 反代把 `Host` 改写成了白名单以外的名字 | 反代透传原始 Host（Caddy 默认就是透传），或把域名加进 `PI_WEB_ALLOWED_HOSTS` |
| 启动告警 `password authentication over HTTP` | 明文 HTTP 传密码 | 局域网内可接受；外网走 HTTPS 反代或 Tailscale |

## 11. 日常运维

```shell
brew services list                            # 全部服务状态
brew services info user/pi/pi-web          # Running / PID / plist
brew services start user/pi/pi-web         # 启动 + 注册开机自启
brew services stop user/pi/pi-web          # 停止 + 取消开机自启
brew services restart user/pi/pi-web       # 改完 ~/.pi-web.env 后用这个
brew services run user/pi/pi-web           # 只启动，不注册开机自启

tail -f /opt/homebrew/var/log/pi-web.log      # stdout
tail -f /opt/homebrew/var/log/pi-web.err.log  # stderr

launchctl print gui/$(id -u)/sh.brew.pi-web   # 看 launchd 视角的状态
pi-web status                                 # pi-web 自己记录的实例列表
```

升级 pi-web：

```shell
npm i -g @agegr/pi-web@latest
# formula 里的 version 只是壳，不改也行；要让 brew 记录同步则改 version + 重打占位包
brew services restart user/pi/pi-web
```

## 12. 卸载

```shell
brew services stop user/pi/pi-web
brew uninstall pi-web
brew untap user/pi
npm uninstall -g @agegr/pi-web
rm -f ~/.pi-web.env
```

## 13. 远程访问

pi-web 自己就能绑 `0.0.0.0`，所以局域网直连即可：`http://10.0.0.2:30141`。

用域名/HTTPS 时在前面加一层 Caddy，关键是**透传原始 Host**：

```caddyfile
mpi.example.com {
	reverse_proxy 127.0.0.1:30141 {
		header_up Host {http.request.host}
		header_up X-Forwarded-Proto {http.request.scheme}
	}
}
```

Caddy 默认就是透传 Host 的，写出来只是为了排除 `header_up Host {upstream_hostport}` 之类的改写；域名同时要加进 `PI_WEB_ALLOWED_HOSTS`。

pi-web 的流式输出是 SSE，Caddy 对 `text/event-stream` 会自动关闭缓冲，不用额外配置；WebSocket 也开箱支持。

## 相关

- 反向代理 / 证书：[caddy](/notes/docker/caddy)
- 内网穿透：[frp](/notes/docker/frp)
