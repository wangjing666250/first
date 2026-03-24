# Modal 弹窗

用于展示需要用户确认的浮层内容。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const visible = ref(false);
</script>

<XxButton type="primary" @click="visible = true">打开弹窗</XxButton>
<XxModal v-model="visible" title="提示">
  这是一个基础弹窗内容。
</XxModal>

## 示例代码

```vue
<template>
  <XxModal v-model="visible" title="提示">
    这是一个基础弹窗内容。
  </XxModal>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 是否显示 | `boolean` | `false` |
| title | 标题 | `string` | `'提示'` |
| width | 内容宽度 | `string` | `'520px'` |
| closeOnMask | 点击蒙层是否关闭 | `boolean` | `true` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 显隐变化时触发 | `(value: boolean)` |
| confirm | 点击确认触发 | `-` |
| cancel | 点击取消触发 | `-` |

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 弹窗主体内容 |
| footer | 自定义底部操作区 |

## 自定义

Modal 可对蒙层、面板和底部操作区分别定制：

- `.xx-modal__mask` 控制背景遮罩透明度
- `.xx-modal__panel` 调整宽度、圆角和阴影
- `.xx-modal__footer` 配合 `footer` 插槽定义按钮布局

```css
.xx-modal__panel {
  border-radius: 14px;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.2);
}
```
