---
sidebar_position: 1
---

# Mac

## brew

### 安装

```shell
# 安装
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"

# 从清华镜像下载安装脚本并安装 Homebrew / Linuxbrew

git clone --depth=1 https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/install.git brew-install
/bin/bash brew-install/install.sh
rm -rf brew-install

# 也可从 GitHub 获取官方安装脚本安装 Homebrew / Linuxbrew

/bin/bash -c "$(curl -fsSL https://github.com/Homebrew/install/raw/master/install.sh)"

# 替换现有仓库上游

export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
for tap in core cask{,-fonts,-drivers,-versions} command-not-found; do
brew tap --custom-remote --force-auto-update "homebrew/${tap}" "https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-${tap}.git"
done
brew update

# 复原仓库上游

# brew 程序本身，Homebrew / Linuxbrew 相同

unset HOMEBREW_BREW_GIT_REMOTE
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew

# 以下针对 macOS 系统上的 Homebrew

unset HOMEBREW_CORE_GIT_REMOTE
BREW_TAPS="$(BREW_TAPS="$(brew tap 2>/dev/null)"; echo -n "${BREW_TAPS//$'\n'/:}")"
for tap in core cask{,-fonts,-drivers,-versions} command-not-found; do
if [[":${BREW_TAPS}:" == *":homebrew/${tap}:"*]]; then # 只复原已安装的 Tap
brew tap --custom-remote "homebrew/${tap}" "https://github.com/Homebrew/homebrew-${tap}"
fi
done
brew update
```

```shell
# software
iredis
pgcli
mycli
scrcpy
viu
proxychains-ng
```

## brew cask

### iterm2

> shell

### iina

> 视频播放器

### tableplus

> sql 可视化管理

### vnc-viewer

> vnc 客户端, 比 Mac 自带的流畅

### font-fira-code font-fira-code-nerd-font

> 字体

### aldente

> 控制电池充电量

### rectangle

> 窗口管理

### mos

> 平滑鼠标滚动

### ttygif

> Mac 终端录屏

```shell
# https://github.com/icholy/ttygif
brew install ttygif
ttyrec myrecording

# On OSX optionally you can set a -f flag which will bypass cropping which is needed for terminal apps which aren't full screen. Both standard Terminal and iTerm apps are supported.
ttygif myrecording -f
```

### LyricsX

> 在 touch bar 上显示歌词
> https://github.com/ddddxxx/LyricsX
