# WSL


https://github.com/sileshn/ArchWSL2
https://wiki.archlinuxcn.org/wiki/%E5%9C%A8_WSL_%E4%B8%8A%E5%AE%89%E8%A3%85_Arch_Linux

> 此版本支持systemctl

## 常用命令
```shell
wsl -l -v
wsl --shutdown

wsl --update
wsl --install -d archlinux --name Arch --location D:\WSLOS\Arch

https://geo.mirror.pkgbuild.com/wsl/latest/

wsl --install --from-file C:\Users\用户名\Downloads\archlinux-2025.04.01.121271.wsl

wsl --install --from-file E:\Downloads\archlinux.wsl --name Arch --location E:\wares\Arch
```

## 限制CPU和内存
```shell
# ~/.wslconfig

[wsl2]
processors=2
memory=2GB
swap=2GB
```

## 指定用户登录
```shell
# /etc/wsl.conf
[user]
default=username
```
