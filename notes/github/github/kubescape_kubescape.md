### [kubescape](https://github.com/kubescape/kubescape) ![GitHub Repo stars](https://img.shields.io/github/stars/kubescape/kubescape?style=social)

Kubescape 是一个开源的 Kubernetes 安全平台，覆盖从开发到运行时的全生命周期安全防护，核心能力包括：  
- **配置与合规扫描**：扫描集群、YAML、Helm 和代码仓库中的配置错误，支持 NSA-CISA、MITRE ATT&CK、CIS 等基准。  
- **镜像漏洞管理**：基于 Grype 扫描容器镜像 CVE，并可通过 Copacetic 自动修补漏洞镜像。  
- **自动修复**：可对 Kubernetes 清单中的错误配置执行自动修复。  
- **准入控制**：通过 Kubernetes Validating Admission Policies (VAP) 强制执行安全策略。  
- **运行时安全**：基于 eBPF（Inspektor Gadget）进行运行时监控与威胁检测。  
- **持续安全（Operator 模式）**：在集群内持续执行配置扫描、漏洞扫描、运行时分析、网络策略生成，并支持 Prometheus 指标。  
- **AI 集成**：提供 MCP Server，将漏洞与配置扫描结果提供给 AI 助手进行自然语言查询。  

项目提供完整 CLI（如 scan、fix、patch、vap、operator 等），支持离线/隔离环境使用，可集成 GitHub Actions、GitLab CI、Jenkins、VS Code、Lens，适用于从 IDE、CI/CD 到生产运行时的 Kubernetes 安全治理。