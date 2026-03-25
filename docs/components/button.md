# Button 按钮

用于触发一个即时操作。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const onClick = () => {
  console.log('button click');
};
const submitCount = ref(0);
</script>

<XxButton type="primary" @click="onClick">Primary</XxButton>
<XxButton style="margin-left: 8px;">Default</XxButton>
<XxButton type="danger" style="margin-left: 8px;">Danger</XxButton>

## 按钮形态

<XxButton round>Round</XxButton>
<XxButton circle style="margin-left: 8px">🚀</XxButton>
<XxButton plain style="margin-left: 8px">Plain</XxButton>
<XxButton disabled style="margin-left: 8px">Disabled</XxButton>
<XxButton type="danger" :loading="true" style="margin-left: 8px">Loading</XxButton>

## 原生类型与图标插槽

<form @submit.prevent="submitCount += 1">
  <XxButton native-type="submit" type="primary">
    <template #icon>✅</template>
    提交表单
  </XxButton>
  <span style="margin-left: 8px">提交次数：{{ submitCount }}</span>
</form>

## 示例代码

```vue
<template>
  <XxButton type="primary" @click="onClick">Primary</XxButton>
  <XxButton round style="margin-left: 8px">Round</XxButton>
  <XxButton disabled style="margin-left: 8px">Disabled</XxButton>
  <XxButton type="danger" :loading="true" style="margin-left: 8px">Loading</XxButton>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| type | 按钮类型 | `default \| primary \| danger` | `default` |
| size | 按钮尺寸 | `small \| medium \| large` | `medium` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| plain | 朴素按钮 | `boolean` | `false` |
| round | 圆角按钮 | `boolean` | `false` |
| circle | 圆形按钮 | `boolean` | `false` |
| nativeType | 原生 `button` 的 `type` | `button \| submit \| reset` | `button` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| click | 点击按钮时触发 | `(event: MouseEvent)` |

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 按钮文本内容 |
| icon | 左侧图标内容（`loading=true` 时不显示） |

## 自定义

下面示例与本页「基础用法 / 按钮形态」对应，外层加业务类名避免全局污染：

```vue
<template>
  <div class="button-custom-demo">
    <XxButton type="primary">Primary</XxButton>
    <XxButton round style="margin-left: 8px">Round</XxButton>
  </div>
</template>

<style scoped>
.button-custom-demo :deep(.xx-button--primary) {
  background: #2563eb;
  border-color: #2563eb;
}

.button-custom-demo :deep(.xx-button.is-round) {
  border-radius: 999px;
}
</style>
```