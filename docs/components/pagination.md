# Pagination 分页

用于长列表分段展示与快速翻页。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const page = ref(1);
const smallTotalPage = ref(2);
</script>

<XxPagination v-model="page" :total="96" :page-size="10" />
<p>当前页：{{ page }}</p>

## 小数据量

<XxPagination v-model="smallTotalPage" :total="15" :page-size="10" />

## 示例代码

```vue
<template>
  <XxPagination v-model="page" :total="96" :page-size="10" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 当前页码 | `number` | `1` |
| total | 数据总量 | `number` | `0` |
| pageSize | 每页条数 | `number` | `10` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 页码变化时触发 | `(page: number)` |
| change | 页码变化时触发 | `(page: number)` |

## Slots 插槽

无

## 自定义

下面示例对应本页「基础用法 / 小数据量」：

```vue
<template>
  <div class="pagination-custom-demo">
    <XxPagination v-model="page" :total="96" :page-size="10" />
  </div>
</template>

<style scoped>
.pagination-custom-demo :deep(.xx-pagination__btn.is-active) {
  background: #2563eb;
  border-color: #2563eb;
  color: #fff;
}

.pagination-custom-demo :deep(.xx-pagination__btn:disabled) {
  opacity: 0.45;
}
</style>
```
