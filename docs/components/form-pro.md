# Form Pro 高级表单

用于中后台复杂表单的统一提交流程。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const model = ref({ name: '', email: '' });
const rules = [
  { field: 'name', required: true, message: '姓名不能为空' },
  {
    field: 'email',
    validator: (v: unknown) =>
      typeof v === 'string' && v.includes('@') ? null : '邮箱格式不正确',
  },
];
</script>

<XxFormPro :model="model" :rules="rules">
  <XxInput v-model="model.name" placeholder="姓名" />
  <XxInput v-model="model.email" placeholder="邮箱" />
</XxFormPro>

## 示例代码

```vue
<template>
  <XxFormPro :model="model" :rules="rules">
    <XxInput v-model="model.name" placeholder="姓名" />
    <XxInput v-model="model.email" placeholder="邮箱" />
  </XxFormPro>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| model | 表单模型 | `Record<string, unknown>` | `{}` |
| rules | 校验规则 | `Rule[]` | `[]` |
| layout | 布局模式 | `inline \| vertical` | `vertical` |
| labelWidth | 标签宽度 | `number \| string` | `96` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| submit | 校验通过并提交 | `(model)` |
| validate-error | 校验失败 | `(errors: string[])` |

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 表单项内容（可使用 `label-width-style`） |
| actions | 底部操作区域 |

## 自定义

Form Pro 推荐按布局块分层定制：

- `.xx-form-pro__content` 控制表单项区域间距
- `.xx-form-pro__actions` 调整底部按钮排版
- `.xx-form-pro__submit` 定义默认提交按钮风格

```css
.xx-form-pro__actions {
  justify-content: flex-end;
  gap: 12px;
}

.xx-form-pro__submit {
  border-radius: 8px;
}
```
