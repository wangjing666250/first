# Popover 气泡提示

用于展示轻量说明信息。

## 基础用法

<XxPopover content="这里是气泡内容">
  <XxButton>鼠标悬停查看</XxButton>
</XxPopover>

## 示例代码

```vue
<template>
  <XxPopover content="这里是气泡内容">
    <XxButton>鼠标悬停查看</XxButton>
  </XxPopover>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| content | 气泡文本 | `string` | `''` |
| trigger | 触发方式 | `hover \| click` | `hover` |
| placement | 弹出方向 | `top \| bottom \| left \| right` | `top` |

## Slots

| 名称 | 说明 |
| ---- | ---- |
| default | 触发元素 |
| content | 自定义气泡内容 |

## Events 事件

无

## 自定义

Popover 可针对弹层和箭头方向样式进行扩展：

- `.xx-popover__panel` 调整背景、边框和阴影
- `.xx-popover__panel.is-top/.is-bottom` 细分不同方向样式
- 通过 `content` 插槽自定义复杂提示内容

```css
.xx-popover__panel {
  border-radius: 10px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.14);
}
```
