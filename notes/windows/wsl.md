# WSL


https://github.com/sileshn/ArchWSL2

> 此版本支持systemctl

## 常用命令
```shell
wsl -l -v
wsl --shutdown
```

## 限制CPU和内存
```shell
# ~/.wslconfig

[wsl2]
processors=2
memory=2GB
swap=2GB
```
