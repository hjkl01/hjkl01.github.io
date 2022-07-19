---
sidebar_position: 12
---

# npm yarn


## yarn/npm 设置国内源

```shell 
# 查询源
yarn config get registry

# 更换国内源
yarn config set registry https://registry.npmmirror.com

# 恢复官方源
yarn config set registry https://registry.yarnpkg.com

# 删除注册表
yarn config delete registry


# HUAWEI
https://repo.huaweicloud.com/repository/npm/
# Tencent
http://mirrors.cloud.tencent.com/npm/
# 浙江大学
http://mirrors.zju.edu.cn/npm/
# 南京邮电
https://mirrors.njupt.edu.cn/nexus/repository/npm/
# npmjs
https://registry.npmjs.org
```

## old
```shell
# 临时
npm --registry https://registry.npm.taobao.org install express
```

```shell
# 写入文件
yarn config set registry 'https://registry.npm.taobao.org'
yarn config get registry

npm config set registry https://registry.npm.taobao.org
npm config get registry
```

#### use yrm
```shell
npm install -g yrm
# yarn global add yrm
yrm ls
yrm use taobao
yrm test
```
