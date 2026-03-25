# Confirm 二次确认

用于高风险操作的确认弹窗。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const visible = ref(false);
</script>

<XxButton type="danger" @click="visible = true">删除</XxButton>
<XxConfirm
  v-model="visible"
  title="二次确认"
  content="删除后不可恢复，请确认是否继续？"
  confirm-type="danger"
/>

## 示例代码

```vue
<template>
  <XxConfirm
    v-model="visible"
    title="二次确认"
    content="删除后不可恢复，请确认是否继续？"
    confirm-type="danger"
  />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 是否显示 | `boolean` | `false` |
| title | 标题 | `string` | `请确认` |
| content | 内容 | `string` | `''` |
| confirmType | 确认按钮类型 | `primary \| danger` | `primary` |
| closeOnMask | 点击遮罩关闭 | `boolean` | `false` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 显示状态更新 | `(visible: boolean)` |
| confirm | 确认事件 | `()` |
| cancel | 取消事件 | `()` |

## Slots 插槽

无

## 自定义

Confirm 可在风险操作场景中突出语义颜色：

- `.xx-confirm__panel` 定义弹层容器视觉
- `.xx-confirm__header` / `.xx-confirm__body` 调整信息层级
- `.xx-confirm__footer` 统一按钮布局与间距

```css
.xx-confirm__header {
  color: #b91c1c;
  font-weight: 700;
}
```
