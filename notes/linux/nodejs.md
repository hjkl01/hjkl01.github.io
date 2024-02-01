# nodejs

# npm yarn

## yarn upgrade packages

```shell
yarn upgrade-interactive --latest
```

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

## ~/.yarnrc

```shell
registry "https://registry.npmmirror.com"
sass_binary_site "https://npmmirror.com/mirrors/node-sass/"
phantomjs_cdnurl "https://cdn.npmmirror.com/binaries/phantomjs"
electron_mirror "https://cdn.npmmirror.com/binaries/electron/"
sqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"
chromedriver_cdnurl "https://cdn.npmmirror.com/binaries/chromedriver"
```
