# Notification 通知

用于系统级通知列表展示。

## 基础用法

<script setup lang="ts">
const list = [
  { id: 1, title: '成功通知', message: '保存成功', type: 'success' },
  { id: 2, title: '普通通知', message: '系统更新完成', type: 'info' },
];
</script>

<XxNotification :list="list" />

## 示例代码

```vue
<template>
  <XxNotification :list="list" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| list | 通知数据列表 | `NotificationItem[]` | `[]` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| close | 关闭通知 | `(id: number \| string)` |

## Slots 插槽

无

## 自定义

Notification 可按消息类型进行分级视觉定制：

- `.xx-notification__item` 定义卡片基础样式
- `.xx-notification__item.is-success/.is-warning/.is-error` 定制语义色
- `.xx-notification__header` 调整标题与关闭按钮位置

```css
.xx-notification__item.is-success {
  border-left: 4px solid #16a34a;
}

.xx-notification__header button:hover {
  color: #111827;
}
```
