### [xianyu-auto-reply](https://github.com/zhinianboke/xianyu-auto-reply) ![GitHub Repo stars](https://img.shields.io/github/stars/zhinianboke/xianyu-auto-reply?style=social)

# 闲鱼自动回复系统功能总结

本项目是一个基于 FastAPI + React + MySQL + Redis + Playwright 的闲鱼多账号自动化管理系统，包含主系统和返佣子系统两部分。

## 主系统功能

- **多账号管理**：支持多个闲鱼账号登录、状态切换、Cookie 维护与登录续期
- **消息处理**：自动回复（文本/图片关键词、默认回复、商品专属回复）、AI 智能回复、在线聊天
- **自动发货**：支持卡券、虚拟商品自动发送、补发及发送记录
- **商品管理**：素材库、地址库、单品/批量发布、发布日志
- **订单管理**：订单拉取、自动评价、求小红花、状态跟踪
- **分销功能**：Goofish 采集、货源管理、对接记录、结算链路
- **风控通知**：消息通知、风控日志、系统反馈与公告管理

## 返佣子系统功能

- **返佣账号管理**：登录、状态管理、Cookie 维护
- **选品与发布**：按规则抓取候选商品、定时发布返佣商品、定时删除已发布商品
- **素材管理**：标题、图片、详情、淘口令、短链、库存、发布状态管理
- **补偿任务**：已发布商品 ID 回写、短链修复、卡券补偿

## 技术架构

- **后端**：FastAPI + SQLAlchemy + APScheduler + Loguru
- **前端**：React 18 + TypeScript + Vite + TailwindCSS
- **自动化**：Playwright 浏览器自动化（登录、发布等）
- **存储**：MySQL 8.0 + Redis 7
- **部署**：Docker / Docker Compose 容器化部署，支持一键部署脚本