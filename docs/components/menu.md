# Menu 菜单

用于导航入口组织。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const active = ref('dashboard');
const items = [
  { key: 'dashboard', label: '工作台' },
  { key: 'users', label: '用户管理' },
  { key: 'settings', label: '系统设置' },
];
</script>

<XxMenu v-model:active="active" :items="items" />
<p>当前激活：{{ active }}</p>

## 示例代码

```vue
<template>
  <XxMenu v-model:active="active" :items="items" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| active | 当前激活项 | `string` | `''` |
| items | 菜单项 | `{ key: string; label: string; disabled?: boolean }[]` | `[]` |
| mode | 方向 | `horizontal \| vertical` | `horizontal` |
| collapsed | 是否折叠 | `boolean` | `false` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:active | 激活项更新 | `(key: string)` |
| select | 选择菜单 | `(key: string)` |

## Slots 插槽

无

## 自定义

Menu 支持按导航风格调整选中态和禁用态：

- `.xx-menu__item.is-active` 定义当前菜单视觉
- `.xx-menu__item.is-disabled` 调整不可点状态
- `.xx-menu.is-vertical` 调整纵向菜单分隔方式

```css
.xx-menu__item.is-active {
  background: #1d4ed8;
  color: #fff;
}

.xx-menu__item.is-disabled {
  opacity: 0.5;
}
```
