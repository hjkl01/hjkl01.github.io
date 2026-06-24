### [microservices-demo](https://github.com/GoogleCloudPlatform/microservices-demo) ![GitHub Repo stars](https://img.shields.io/github/stars/GoogleCloudPlatform/microservices-demo?style=social)

Online Boutique 是一个面向云原生的微服务电商示例应用：用户可在网页中浏览商品、加入购物车并下单购买。项目由 11 个使用不同语言实现的微服务组成，服务间通过 gRPC 通信，运行在 Kubernetes 集群（不仅限于 GKE）上，用于演示企业应用现代化实践。

核心服务包括：前端展示、购物车存取（Redis）、商品目录与搜索、货币转换、支付（模拟）、运费估算与发货（模拟）、订单确认邮件（模拟）、结账编排、商品推荐、广告投放及压测流量生成。  
该项目同时展示了与 Google Cloud 技术栈的集成能力，如 GKE、Cloud Service Mesh、Cloud Operations、Spanner、Memorystore、AlloyDB 和 Gemini，并支持通过 Terraform、Istio/服务网格、Kustomize 等方式进行多种部署与定制。