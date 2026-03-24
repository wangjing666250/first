# Tree 树形控件

用于展示层级结构数据。

## 基础用法

<script setup lang="ts">
const treeData = [
  { key: 'a', label: '设计规范', children: [{ key: 'a-1', label: '色彩规范' }] },
  { key: 'b', label: '业务组件', children: [{ key: 'b-1', label: '审批流' }] },
];
</script>

<XxTree :data="treeData" default-expand-all />

## 示例代码

```vue
<template>
  <XxTree :data="treeData" default-expand-all />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| data | 节点数据 | `TreeNode[]` | `[]` |
| defaultExpandAll | 默认展开全部 | `boolean` | `false` |
| expandOnClickNode | 点击节点展开 | `boolean` | `true` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| node-click | 节点点击 | `(node)` |
| expand-change | 展开状态变化 | `(node, expanded)` |

## Slots 插槽

无

## 自定义

Tree 可对节点行、箭头和层级间距进行定制：

- `.xx-tree__label` 控制节点文案行高与可点击区域
- `.xx-tree__arrow` 控制展开图标风格
- `.xx-tree__node` 调整层级间距和缩进视觉

```css
.xx-tree__label {
  padding: 2px 6px;
  border-radius: 6px;
}

.xx-tree__label:hover {
  background: #eff6ff;
}
```
