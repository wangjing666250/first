# Switch 开关

用于快速切换开/关状态。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(true);
</script>

<XxSwitch v-model="value" />

## 示例代码

```vue
<template>
  <XxSwitch v-model="value" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 开关状态 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 状态变化时触发 | `(value: boolean)` |
| change | 状态变化时触发 | `(value: boolean)` |

## Slots 插槽

无

## 自定义

Switch 可针对轨道与圆点做品牌化定制：

- `.xx-switch` 调整开关轨道尺寸、颜色、圆角
- `.xx-switch__dot` 调整圆点尺寸与阴影
- 配合状态类增强开/关对比度

```css
.xx-switch {
  width: 44px;
  height: 24px;
  border-radius: 999px;
}

.xx-switch__dot {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
```
