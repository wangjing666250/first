# Drawer 抽屉

用于从页面边缘滑出的辅助信息面板。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const visible = ref(false);
</script>

<XxButton type="primary" @click="visible = true">打开抽屉</XxButton>
<XxDrawer v-model="visible" title="用户详情">
  这里是抽屉内容区域。
</XxDrawer>

## 示例代码

```vue
<template>
  <XxDrawer v-model="visible" title="用户详情">
    这里是抽屉内容区域。
  </XxDrawer>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 是否显示 | `boolean` | `false` |
| title | 标题 | `string` | `'抽屉'` |
| size | 抽屉宽度 | `string` | `'360px'` |
| placement | 出现方向 | `'left' \\| 'right'` | `'right'` |
| closeOnMask | 点击遮罩是否关闭 | `boolean` | `true` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 显隐变化时触发 | `(value: boolean)` |
| close | 关闭时触发 | `-` |

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 抽屉主体内容 |

## 自定义

Drawer 可围绕侧边面板和遮罩做样式扩展：

- `.xx-drawer__panel` 调整抽屉宽度、阴影、背景
- `.xx-drawer__header` / `.xx-drawer__body` 调整内容结构
- `.xx-drawer__mask` 控制遮罩强度

```css
.xx-drawer__panel {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
```
