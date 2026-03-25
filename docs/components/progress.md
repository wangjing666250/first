# Progress 进度条

用于任务进度展示。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const p = ref(62);
</script>

<input v-model.number="p" type="range" min="0" max="100" />
<XxProgress :percentage="p" status="success" />

## 示例代码

```vue
<template>
  <input v-model.number="p" type="range" min="0" max="100" />
  <XxProgress :percentage="p" status="success" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| percentage | 进度值 | `number` | `0` |
| status | 状态 | `default \| success \| warning \| error` | `default` |
| showText | 是否显示文字 | `boolean` | `true` |
| strokeWidth | 线条宽度 | `number` | `8` |

## Events 事件

无

## Slots 插槽

无

## 自定义

Progress 常用定制点是轨道、进度条和文本：

- `.xx-progress__track` 调整背景和圆角
- `.xx-progress__bar.is-success` 等状态类定制不同业务颜色
- `.xx-progress__text` 调整百分比文字风格

```css
.xx-progress__track {
  background: #e2e8f0;
  border-radius: 999px;
}

.xx-progress__bar.is-success {
  background: linear-gradient(90deg, #22c55e, #16a34a);
}
```
