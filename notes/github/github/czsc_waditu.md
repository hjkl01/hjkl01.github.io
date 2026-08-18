### [czsc](https://github.com/waditu/czsc) ![GitHub Repo stars](https://img.shields.io/github/stars/waditu/czsc?style=social)

# CZSC 项目功能总结

**CZSC（缠中说禅技术分析工具）** 是一款基于 Rust + Python 混合架构的量化交易分析库，专注于缠论技术的自动化实现。

## 核心功能

- **缠论算法识别**：自动识别分型、笔、中枢等缠论核心结构（Rust 实现）
- **信号函数体系**：提供 220+ 信号函数，支持"信号-事件-交易"逻辑组合
- **K线合成分析**：多周期 K 线自动生成与联立分析
- **策略回测**：权重序列回测、批量品种研究、持仓回放
- **可视化输出**：自包含 HTML 图表（plotly + lightweight-charts），支持离线查看
- **多数据源接入**：天勤期货、Tushare A股、CCXT数字货币等连接器

## 技术特点

- 1.0 版本核心算法全面迁移至 Rust，性能显著提升
- 与 wbt（回测引擎）、wmr（权重管理）等生态项目形成完整量化闭环
- 支持 Python 3.10+，提供模拟数据便于快速上手