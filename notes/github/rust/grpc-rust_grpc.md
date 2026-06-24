### [grpc-rust](https://github.com/grpc/grpc-rust) ![GitHub Repo stars](https://img.shields.io/github/stars/grpc/grpc-rust?style=social)

Tonic 是一个用 Rust 实现的高性能 gRPC（基于 HTTP/2）框架，面向生产系统，强调异步 async/await 支持、互操作性与灵活性。项目核心由三部分组成：通用 gRPC 实现、高性能 HTTP/2 实现（基于 hyper/tokio）、以及基于 prost 的 protobuf 代码生成（可从 proto 定义生成客户端和服务端）。

主要功能包括：双向流式通信、高性能异步 I/O、TLS（rustls）、负载均衡、自定义元数据、认证、健康检查。  
配套子项目提供：代码生成（tonic-build）、gRPC 类型工具（tonic-types）、标准健康检查服务（tonic-health）、gRPC 反射（tonic-reflection）、示例与互操作测试。  
使用上提供从入门到完整功能的教程（helloworld、routeguide）；MSRV 为 Rust 1.88，部分构建流程依赖 protoc。