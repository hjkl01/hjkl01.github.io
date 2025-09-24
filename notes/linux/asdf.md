# asdf

### install asdf

```shell
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0

# add following to ~/.zshrc
# mac
# . /usr/local/opt/asdf/libexec/asdf.sh

# linux
. $HOME/.asdf/asdf.sh
```

### install plugin example

```shell
asdf plugin add nodejs
asdf list all nodejs
asdf install nodejs lts
# asdf install nodejs latest
asdf list nodejs
asdf global nodejs lts
```

### asdf 安装Python加速

# 找到需要安装的[对应版本](https://mirrors.cernet.edu.cn/list/pythonxy) 如3.11.12
```
example:
https://mirrors.ustc.edu.cn/python/3.11.12/Python-3.11.12.tar.xz

# https://mirrors.aliyun.com/python-release/source

# 分别替换GitHub和Python的地址
vi ~/.asdf/plugins/python/pyenv/plugins/python-build/share/python-build/3.11.12
```
