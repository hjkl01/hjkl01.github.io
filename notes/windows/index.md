---
sidebar_position: 1
---

# Windows

## ISO

- download from [microsoft](https://www.microsoft.com/zh-cn/software-download), (switch browser user-agent)

- magnet

  | name       | version           | time       | magnet                                                                  |
  | ---------- | ----------------- | ---------- | ----------------------------------------------------------------------- |
  | Windows 10 | consumer editions | 2025-10-21 | [address](magnet:?xt=urn:btih:aed8ca03ed278466c4a35d509bf864051b533011) |
  | Windows 11 | consumer editions | 2025-11-18 | [address](magnet:?xt=urn:btih:afcf7cd029be077521db30cf5ef66fa6d0daad9e) |

- download tool: https://github.com/agalwood/Motrix/releases

- others: https://github.com/Atlas-OS/Atlas

## 激活

```shell
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr /skms kms.03k.org
slmgr /ato
```

## Autologon

[address](https://learn.microsoft.com/en-us/sysinternals/downloads/autologon)
[download](https://download.sysinternals.com/files/AutoLogon.zip)

## 开机启动文件夹 start

- win+R shell:Common Startup
- C：\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp

## 复制字符串到剪切板

```shell
echo Hello | clip
```

## 开机启动 退出CMD窗口

```vbs
# start_mihomo.vbs

Set WshShell = CreateObject("WScript.Shell")

' 杀死已有进程（0=隐藏窗口，True=等待执行完）
WshShell.Run "cmd /c taskkill /F /IM mihomo.exe >nul 2>&1", 0, True

' 等待1秒
WScript.Sleep 1000

' 后台启动 mihomo（0=隐藏，False=不等待）
WshShell.Run """D:\Program Files\mihomo\mihomo.exe"" -f ""D:\Program Files\mihomo\config.yaml""", 0, False

Set WshShell = Nothing
```

## 更改程序默认按照路径

- 设置 系统 存储 更新内容的保存位置

## 更改录屏保存位置

- 视频 属性 移动

## [ssh server](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=powershell)

## 和android共享文件

```shell
https://github.com/localsend/localsend/releases
```

## 优化工具 [Dism++](https://github.com/Chuyu-Team/Dism-Multi-language)

## [最新Microsoft Visual C++ 可再发行版本](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170)
