---
sidebar_position: 0
---

# linux

## 我的配置文件

- https://github.com/hjkl01/dotfiles

## zsh

```
# run command background
1. setopt NO_HUP
2. nohup <command> & disown
```

## find

```shell
# find by name
find . -name "*.log"

# 查找内容
grep "hello" example.txt
grep -r "hello" my_directory
find directory | xargs grep "string"

# udpate filename
find . -type f -name 'some.*' | while read FILE; do
    newfile="$(echo ${FILE} | sed -e 's/some/result/')"
    mv "${FILE}" "${newfile}"
done

# delte size < 1k
find -size 1k -delete

# linux
sed -i 's/oo/kk/g' testfile
# Mac
sed -i "" 's/oo/kk/g' testfile
```
