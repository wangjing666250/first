# AutoComplete 自动完成

用于根据输入内容联想候选项，支持键盘导航、匹配高亮和空状态插槽。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'Vite', value: 'vite' },
  { label: 'Vitest', value: 'vitest' },
  { label: 'TypeScript', value: 'typescript' },
];
</script>

<XxAutoComplete v-model="value" :options="options" placeholder="请输入关键字">
  <template #empty>
    <span style="color: #f56c6c">没有匹配结果</span>
  </template>
</XxAutoComplete>

## 示例代码

```vue
<template>
  <XxAutoComplete v-model="value" :options="options" placeholder="请输入关键字">
    <template #empty>
      <span style="color: #f56c6c">没有匹配结果</span>
    </template>
  </XxAutoComplete>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 绑定值 | `string` | `''` |
| options | 选项列表 | `{ label: string; value: string }[]` | `[]` |
| placeholder | 占位符 | `string` | `''` |
| debounce | 防抖时间（ms） | `number` | `200` |
| highlight | 是否高亮关键词 | `boolean` | `true` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 值更新时触发 | `(value: string)` |
| select | 选中候选项时触发 | `(option)` |

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| empty | 无匹配项时的自定义内容 |

## 自定义

AutoComplete 常见定制点是输入框与候选面板：

- `.xx-autocomplete__input` 定制输入区视觉
- `.xx-autocomplete__panel` / `.xx-autocomplete__list` 控制面板阴影与列表间距
- `.xx-autocomplete__empty` 配合 `empty` 插槽做空态展示

```css
.xx-autocomplete__panel {
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
}

.xx-autocomplete__empty {
  color: #9ca3af;
}
```
