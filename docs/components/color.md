# Color 颜色

用于颜色选择与主题配置。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const color = ref('#409eff');
</script>

<XxColor v-model="color" />
<p>当前颜色：{{ color }}</p>

## 示例代码

```vue
<template>
  <XxColor v-model="color" />
  <p>当前颜色：{{ color }}</p>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 当前颜色值 | `string` | `#409eff` |
| disabled | 是否禁用 | `boolean` | `false` |
| showPreset | 是否显示预设色板 | `boolean` | `true` |
| presets | 预设颜色 | `string[]` | 内置 5 色 |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 颜色更新 | `(value: string)` |
| change | 颜色变化 | `(value: string)` |

## Slots 插槽

无

## 自定义

Color 组件可重点定制色值展示和预设色板：

- `.xx-color__value` 调整色值文本样式
- `.xx-color__preset` / `.xx-color__dot` 控制预设色间距与形状
- `.xx-color__picker` 调整取色器尺寸

```css
.xx-color__dot {
  width: 18px;
  height: 18px;
  border-radius: 6px;
}

.xx-color__value {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
```
