---
sidebar_position: 1
---


# k8s

## install

```shell
brew install kubectl
brew install minikube
# https://github.com/kubernetes/minikube/releases

docker pull kicbase/stable:v0.0.44
# tag list: https://hub.docker.com/r/kicbase/stable/tags
minikube start --base-image="kicbase/stable:v0.0.44"

```
