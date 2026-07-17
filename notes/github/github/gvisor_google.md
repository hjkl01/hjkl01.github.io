### [gvisor](https://github.com/google/gvisor) ![GitHub Repo stars](https://img.shields.io/github/stars/google/gvisor?style=social)

gVisor是一个基于Go语言编写的用户态应用内核，主要为容器提供强隔离的沙箱安全层。它通过实现Linux兼容接口运行于用户空间，在保持轻量、启动快、资源占用低的同时，有效限制容器对宿主机内核的访问以防范容器逃逸。项目内置OCI运行时`runsc`，可无缝集成Docker和Kubernetes等主流容器工具。