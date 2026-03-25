# Textarea 文本域

用于多行文本输入。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const text = ref('');
const readonlyText = ref('这是一段只读展示效果的文案。');
</script>

<XxTextarea v-model="text" :rows="5" placeholder="请输入详细描述..." />
<p>当前字数：{{ text.length }}</p>

## 禁用与最大长度

<XxTextarea
  v-model="readonlyText"
  :maxlength="50"
  disabled
  placeholder="禁用状态"
/>

## 示例代码

```vue
<template>
  <XxTextarea v-model="text" :rows="5" placeholder="请输入详细描述..." />
  <XxTextarea v-model="readonlyText" :maxlength="50" disabled />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 绑定值 | `string` | `''` |
| rows | 行数 | `number` | `4` |
| placeholder | 占位文本 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| maxlength | 最大长度 | `number` | `--` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 输入更新 | `(value: string)` |
| input | 输入时触发 | `(value: string)` |

## Slots 插槽

无

## 自定义

下面示例对应本页「基础用法 / 禁用与最大长度」：

```vue
<template>
  <div class="textarea-custom-demo">
    <XxTextarea v-model="text" :rows="5" placeholder="请输入详细描述..." />
  </div>
</template>

<style scoped>
.textarea-custom-demo :deep(.xx-textarea) {
  border-radius: 10px;
  min-height: 120px;
}

.textarea-custom-demo :deep(.xx-textarea:focus) {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
}
</style>
```
