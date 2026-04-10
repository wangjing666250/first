# Dropdown 下拉菜单

用于承载一组关联操作。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const options = [
  { label: '新建项目', value: 'create' },
  { label: '复制链接', value: 'copy' },
  { label: '归档项目', value: 'archive' },
];
</script>

<XxDropdown v-model="value" :options="options" placeholder="请选择操作" />
<p>当前选择：{{ value || '未选择' }}</p>

## 禁用状态

<XxDropdown :options="options" disabled />

## 示例代码

```vue
<template>
  <XxDropdown v-model="value" :options="options" placeholder="请选择操作" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 当前值 | `string` | `''` |
| options | 菜单项 | `{ label: string; value: string }[]` | `[]` |
| placeholder | 占位文本 | `string` | `请选择` |
| disabled | 是否禁用 | `boolean` | `false` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 值更新 | `(value: string)` |
| change | 选择变化 | `(value: string)` |

## Slots 插槽

无

## 自定义

下面示例对应本页「基础用法 / 禁用状态」：

```vue
<template>
  <div class="dropdown-custom-demo">
    <XxDropdown v-model="value" :options="options" placeholder="请选择操作" />
  </div>
</template>

<style scoped>
.dropdown-custom-demo :deep(.xx-dropdown) {
  min-width: 220px;
  border-radius: 10px;
}

.dropdown-custom-demo :deep(.xx-dropdown:focus) {
  border-color: #2563eb;
}
</style>
```
