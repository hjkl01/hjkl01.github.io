### [editor](https://github.com/pascalorg/editor) ![GitHub Repo stars](https://img.shields.io/github/stars/pascalorg/editor?style=social)

# Pascal Editor 功能总结

**Pascal Editor** 是一个基于 React Three Fiber 和 WebGPU 的 3D 建筑编辑器，支持在浏览器中创建、编辑和可视化建筑场景。

## 核心功能

- **建筑场景管理**：支持站点（Site）、建筑（Building）、楼层（Level）、墙体（Wall）、楼板（Slab）、天花板、屋顶、区域（Zone）等节点层级结构
- **多种编辑工具**：选择工具、墙体绘制、区域创建、物品放置、楼板生成
- **节点系统**：以扁平字典存储节点，通过父子关系定义层级
- **实时更新**：脏节点机制，仅重算变更节点，提升渲染性能
- **撤销/重做**：支持 50 步历史记录
- **数据持久化**：自动保存到 IndexedDB
- **空间验证**：内置碰撞检测和放置验证
- **插件扩展**：支持自定义节点类型、渲染器和工具面板

## 技术架构

- Monorepo 结构，核心包分离：`core`（状态管理）、`viewer`（3D 渲染）、`editor`（编辑工具）、`nodes`（内置节点）
- 使用 Zustand 管理场景状态
- 支持 Three.js WebGPU 渲染器
- 可扩展插件系统，允许第三方开发自定义节点和工具