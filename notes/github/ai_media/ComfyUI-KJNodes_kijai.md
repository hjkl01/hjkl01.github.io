### [ComfyUI-KJNodes](https://github.com/kijai/ComfyUI-KJNodes) ![GitHub Repo stars](https://img.shields.io/github/stars/kijai/ComfyUI-KJNodes?style=social)

# KJNodes for ComfyUI

这是一个 ComfyUI 插件，提供实用工具、模型优化和质量提升节点，依赖最小化。

## 核心功能

**Set/Get 节点系统（2.0 版本重写）：**
- 兼容节点 2.0 和旧版本
- 支持跨子图边界的 Set/Get 操作
- 支持链接与 Set/Get 对的相互转换
- 支持批量转换节点输出为 Set/Get
- 类型自动推断和颜色标记
- 双击 Get 节点可跳转到配对的 Set 节点

**JS 快捷键扩展：**
- 节点插入（默认快捷键 D）
- 断开节点连接（摇动）
- 节点交换（默认快捷键 S）

**可视化与交互：**
- 画布右键菜单
- 拖拽连接时添加 Set/Get
- Shift+中键创建节点
- 连接显示设置（从不/选中时/始终）
- Ctrl+Shift+L 强制显示所有连接

**设置选项：**
- 默认控件值设置
- 链接转换设置
- 设置归类于 KJNodes > Set & Get 和 KJNodes > General