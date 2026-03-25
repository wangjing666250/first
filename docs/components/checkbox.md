# Checkbox 多选框

用于布尔值场景选择。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const checked = ref(false);
</script>

<XxCheckbox v-model="checked">是否开启</XxCheckbox>

## 示例代码

```vue
<template>
  <XxCheckbox v-model="checked">是否开启</XxCheckbox>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 是否选中 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 状态变化时触发 | `(value: boolean)` |
| change | 状态变化时触发 | `(value: boolean)` |

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 复选框文本内容 |

## 自定义

Checkbox 可通过状态类统一选中和禁用风格：

- `.xx-checkbox` 调整行高与间距
- `.xx-checkbox.is-disabled` 定义禁用态对比
- 配合 `default` 插槽自定义标签文本结构

```css
.xx-checkbox {
  gap: 8px;
  font-size: 14px;
}

.xx-checkbox.is-disabled {
  opacity: 0.6;
}
```
