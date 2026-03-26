# Icon 图标

用于图标展示与点击交互。

## 基础用法

<XxIcon name="⭐" :size="20" />
<XxIcon name="🚀" :size="20" style="margin-left: 8px;" />
<XxIcon name="✅" :size="20" style="margin-left: 8px;" />

## 示例代码

```vue
<template>
  <XxIcon name="⭐" :size="20" />
  <XxIcon name="🚀" :size="20" style="margin-left: 8px;" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| name | 图标名称/字符 | `string` | `''` |
| size | 大小 | `number \| string` | `16` |
| color | 颜色 | `string` | `currentColor` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| click | 点击图标 | `(name: string)` |

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 自定义图标内容（默认渲染 `name`） |

## 自定义

Icon 可以在统一图标系统中控制尺寸与交互态：

- `.xx-icon` 设置默认字号、对齐和颜色
- `:hover` 增加可点击反馈
- 使用 `default` 插槽时可注入 SVG 或自定义字符

```css
.xx-icon {
  color: #334155;
  transition: color 0.2s ease;
}

.xx-icon:hover {
  color: #2563eb;
}
```
