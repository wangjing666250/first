# Button 按钮

用于触发一个即时操作。

## 在线示例

<script setup lang="ts">
const onClick = () => {
  console.log('button click');
};
</script>

<XxButton type="primary" @click="onClick">Primary</XxButton>
<XxButton style="margin-left: 8px;">Default</XxButton>
<XxButton type="danger" style="margin-left: 8px;">Danger</XxButton>

## 代码示例

```vue
<template>
  <XxButton type="primary">Primary</XxButton>
  <XxButton>Default</XxButton>
  <XxButton type="danger">Danger</XxButton>
</template>