# Table 表格

用于结构化展示二维数据。

## 基础用法

<script setup lang="ts">
const columns = [
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
];

const data = [
  { name: '张三', role: '管理员', status: '启用' },
  { name: '李四', role: '运营', status: '禁用' },
];
</script>

<XxTable :columns="columns" :data="data" />

## 示例代码

```vue
<template>
  <XxTable :columns="columns" :data="data" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| columns | 列定义 | `{ key: string; title: string }[]` | `[]` |
| data | 表格数据 | `Record<string, unknown>[]` | `[]` |
| striped | 是否斑马纹 | `boolean` | `false` |
| bordered | 是否边框 | `boolean` | `true` |

## Events 事件

无

## Slots 插槽

无

## 自定义

Table 可通过表格根类和状态类实现主题化：

- `.xx-table` 调整整体边框、字号和头部背景
- `.xx-table.is-striped` 定义斑马纹色值
- `.xx-table.is-bordered` 控制边框强度

```css
.xx-table {
  border-radius: 10px;
  overflow: hidden;
}

.xx-table.is-striped tbody tr:nth-child(2n) {
  background: #f8fafc;
}
```
