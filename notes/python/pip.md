---
sidebar_position: 1
---

# pip


### virtualenv

```shell
python3 -m venv some_dir

# (sudo) pip install virtualenv
# virtualenv -p /usr/bin/python3.7 ~/.virtualenv/py3
# pip freeze > requirements.txt
```

### pip.conf config mirror

```shell
# 一次
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple fastapi

# poetry
# pyproject.toml 文件
[[tool.poetry.source]]
name = "aliyun"
url = "http://mirrors.aliyun.com/pypi/simple"
default = true

# 全局
# 清华源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# 阿里源
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
# 腾讯源
pip config set global.index-url http://mirrors.cloud.tencent.com/pypi/simple
# 豆瓣源
pip config set global.index-url http://pypi.douban.com/simple/

# or

# linux:`~/.pip/pip.conf`
# windows:`%HOMEPATH%\pip\pip.ini）`

[global]
  index-url = http://mirrors.aliyun.com/pypi/simple/
[install]
  trusted-host=mirrors.aliyun.com

# locale.Error: unsupported locale setting
export LC_ALL=C
```

## poetry

### set mirror

```
poetry config repositories.pypi https://mirrors.aliyun.com/pypi/simple/
poetry config --list

# add to pyproject.toml
[[tool.poetry.source]]
name = "aliyun"
url = "https://mirrors.aliyun.com/pypi/simple/"
```

### pyproject.toml to requirements.txt

```
pip install pip-tools
python -m piptools compile -o requirements.txt pyproject.toml
pip install -r requirements.txt
```
