# Space 间距

用于快速控制子元素间距。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const size = ref(12);
</script>

<input v-model.number="size" type="range" min="4" max="24" />
<span> {{ size }}px </span>
<XxSpace :size="size">
  <XxButton size="small">按钮 A</XxButton>
  <XxButton size="small">按钮 B</XxButton>
  <XxButton size="small">按钮 C</XxButton>
</XxSpace>

## 示例代码

```vue
<template>
  <XxSpace :size="size">
    <XxButton size="small">按钮 A</XxButton>
    <XxButton size="small">按钮 B</XxButton>
    <XxButton size="small">按钮 C</XxButton>
  </XxSpace>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| size | 间距大小 | `number` | `12` |
| direction | 排列方向 | `horizontal \| vertical` | `horizontal` |
| wrap | 是否换行 | `boolean` | `false` |

## Events 事件

无

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 需要被间距布局包裹的内容 |

## 自定义

Space 的核心在布局行为自定义：

- `.xx-space` 可设置额外内外边距
- 通过 `direction` 与 `wrap` 控制排布策略
- 在 `default` 插槽中放入任意组件形成统一间距系统

```css
.xx-space {
  align-items: center;
}
```
