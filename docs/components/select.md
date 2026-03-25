# Select 选择器

用于从预设选项中选择一个值。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
];
</script>

<XxSelect v-model="value" :options="options" placeholder="请选择框架" />
<p>当前值：{{ value || '未选择' }}</p>

## 禁用状态

<XxSelect :options="options" disabled />

## 示例代码

```vue
<template>
  <XxSelect v-model="value" :options="options" placeholder="请选择框架" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 当前值 | `string` | `''` |
| options | 选项列表 | `{ label: string; value: string }[]` | `[]` |
| placeholder | 占位提示 | `string` | `'请选择'` |
| disabled | 是否禁用 | `boolean` | `false` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 值变化时触发 | `(value: string)` |
| change | 选项变更时触发 | `(value: string)` |

## Slots 插槽

无

## 自定义

下面示例对应本页「基础用法 / 禁用状态」：

```vue
<template>
  <div class="select-custom-demo">
    <XxSelect v-model="value" :options="options" placeholder="请选择框架" />
  </div>
</template>

<style scoped>
.select-custom-demo :deep(.xx-select) {
  height: 36px;
  border-radius: 10px;
}

.select-custom-demo :deep(.xx-select:disabled) {
  background: #f3f4f6;
  color: #9ca3af;
}
</style>
```
