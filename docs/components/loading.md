# Loading 加载

用于区域或页面加载状态覆盖。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const loading = ref(true);
</script>

<XxButton @click="loading = !loading">{{ loading ? '关闭' : '开启' }}加载</XxButton>
<XxLoading :loading="loading" text="加载中...">
  <div style="margin-top: 10px; height: 80px; border: 1px dashed #dcdfe6; border-radius: 6px;" />
</XxLoading>

## 示例代码

```vue
<template>
  <XxLoading :loading="loading" text="加载中...">
    <div style="height: 80px; border: 1px dashed #dcdfe6; border-radius: 6px;" />
  </XxLoading>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| loading | 是否加载中 | `boolean` | `false` |
| text | 加载文案 | `string` | `加载中...` |
| fullscreen | 全屏遮罩 | `boolean` | `false` |

## Slots

| 名称 | 说明 |
| ---- | ---- |
| default | 被加载覆盖的内容 |

## 自定义

Loading 主要定制遮罩层与加载指示器：

- `.xx-loading-mask` 控制遮罩颜色和透明度
- `.xx-loading-spinner` 自定义尺寸、边框和动画速度
- `.xx-loading-wrap.is-fullscreen` 调整全屏层级和定位

```css
.xx-loading-mask {
  background: rgba(15, 23, 42, 0.35);
}

.xx-loading-spinner {
  width: 20px;
  height: 20px;
}
```
