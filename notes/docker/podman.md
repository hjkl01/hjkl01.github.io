---
sidebar_position: 1
---

# podman

## mirror


### cat /etc/containers/registries.conf

```shell
[[registry]]
prefix = "docker.io"
insecure = true
location = "registry-1.docker.io"

[[registry.mirror]]
location = "m.daocloud.io"

[[registry]]
prefix = "registry.k8s.io"
insecure = true
location = "registry.k8s.io"

[[registry.mirror]]
location = "m.daocloud.io"

[[registry]]
prefix = "k8s.gcr.io"
insecure = true
location = "k8s.gcr.io"

[[registry.mirror]]
location = "m.daocloud.io"

[[registry]]
prefix = "gcr.io"
insecure = true
location = "gcr.io"

[[registry.mirror]]
location = "m.daocloud.io"

[[registry]]
prefix = "ghcr.io"
insecure = true
location = "ghcr.io"

[[registry.mirror]]
location = "m.daocloud.io"

[[registry]]
prefix = "quay.io"
insecure = true
location = "quay.io"

[[registry.mirror]]
location = "m.daocloud.io"
````
