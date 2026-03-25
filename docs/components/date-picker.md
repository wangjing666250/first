# Date Picker 日期选择

用于日期/时间输入。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const date = ref('');
const dateTime = ref('');
</script>

<XxDatePicker v-model="date" type="date" />
<XxDatePicker v-model="dateTime" type="datetime-local" style="margin-left: 8px;" />

## 示例代码

```vue
<template>
  <XxDatePicker v-model="date" type="date" />
  <XxDatePicker v-model="dateTime" type="datetime-local" style="margin-left: 8px" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 日期值 | `string` | `''` |
| type | 类型 | `date \| datetime-local` | `date` |
| disabled | 是否禁用 | `boolean` | `false` |
| min | 最小日期 | `string` | `''` |
| max | 最大日期 | `string` | `''` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 值更新 | `(value: string)` |
| change | 变化触发 | `(value: string)` |

## Slots 插槽

无

## 自定义

DatePicker 以输入框样式为主，通常与输入组件保持一致：

- `.xx-date-picker` 调整高度、边框、圆角
- `:focus` 增加聚焦视觉反馈
- 通过 `min/max` 配合业务规则限制可选范围

```css
.xx-date-picker {
  height: 36px;
  border-radius: 10px;
}

.xx-date-picker:focus {
  border-color: #2563eb;
}
```
