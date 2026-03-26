# Input 输入框

用于录入文本内容，支持前后缀插槽和一键清空。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<XxInput v-model="value" clearable placeholder="请输入内容">
  <template #prefix>🔍</template>
  <template #suffix>{{ value.length }}/20</template>
</XxInput>

## 示例代码

```vue
<template>
  <XxInput v-model="value" clearable placeholder="请输入内容">
    <template #prefix>🔍</template>
    <template #suffix>{{ value.length }}/20</template>
  </XxInput>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 绑定值 | `string` | `''` |
| placeholder | 占位符 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否显示清空按钮 | `boolean` | `false` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 值更新时触发 | `(value: string)` |
| input | 输入时触发 | `(value: string)` |
| clear | 点击清空按钮触发 | `-` |

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| prefix | 输入框前缀内容 |
| suffix | 输入框后缀内容 |

## 自定义

Input 可针对输入框容器与前后缀区域定制：

- `.xx-input-wrap` 控制边框、背景和禁用态视觉
- `.xx-input` 控制字体、行高、内边距
- `.xx-input__prefix` / `.xx-input__suffix` 控制图标和计数字样式

```css
.xx-input-wrap {
  border-radius: 10px;
}

.xx-input__suffix {
  color: #2563eb;
  font-weight: 600;
}
```
