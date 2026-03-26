# Badge 徽章

用于消息提醒和数字标记。

## 基础用法

<XxBadge :value="12">
  <XxButton>待处理</XxButton>
</XxBadge>
<XxBadge dot type="danger" style="margin-left: 12px;">
  <XxButton plain>新消息</XxButton>
</XxBadge>

## 示例代码

```vue
<template>
  <XxBadge :value="12">
    <XxButton>待处理</XxButton>
  </XxBadge>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| value | 徽章值 | `string \| number` | `''` |
| type | 类型 | `primary \| success \| warning \| danger` | `primary` |
| dot | 点状徽章 | `boolean` | `false` |
| max | 最大值阈值 | `number` | `--` |

## Slots

| 名称 | 说明 |
| ---- | ---- |
| default | 被包裹内容 |

## Events 事件

无

## 自定义

Badge 可分别定制数值态与点状态：

- `.xx-badge` 调整数字徽章背景、字体和圆角
- `.xx-badge.is-dot` 控制点状徽章大小
- `.xx-badge-wrap` 调整与业务内容的对齐关系

```css
.xx-badge {
  min-width: 20px;
  height: 20px;
  border-radius: 999px;
}
```
