# Tabs 标签页

用于在同区域切换不同内容视图。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('a');
const items = [
  { label: 'Tab A', value: 'a' },
  { label: 'Tab B', value: 'b' },
  { label: 'Disabled', value: 'c', disabled: true },
];
</script>

<XxTabs v-model="value" :items="items" />

## 示例代码

```vue
<template>
  <XxTabs v-model="value" :items="items" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 当前值 | `string` | `''` |
| items | 标签列表 | `{ label: string; value: string; disabled?: boolean }[]` | `[]` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 值变化时触发 | `(value: string)` |
| change | 切换时触发 | `(value: string)` |

## Slots 插槽

无

## 自定义

Tabs 可以围绕标签按钮状态做定制：

- `.xx-tabs__tab` 调整标签外观与间距
- 选中态类（如 `is-active`）定制激活视觉
- 禁用项可通过 `disabled` 对应样式降低对比度

```css
.xx-tabs__tab.is-active {
  color: #1d4ed8;
  border-bottom-color: #1d4ed8;
}
```
