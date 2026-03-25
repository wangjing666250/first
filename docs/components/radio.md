# Radio 单选框

用于多个选项中单选。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('a');
</script>

<XxRadio v-model="value" value="a">选项 A</XxRadio>
<XxRadio v-model="value" value="b" style="margin-left: 12px">选项 B</XxRadio>

## 示例代码

```vue
<template>
  <XxRadio v-model="value" value="a">选项 A</XxRadio>
  <XxRadio v-model="value" value="b" style="margin-left: 12px">选项 B</XxRadio>
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 当前值 | `string \\| number` | `''` |
| value | 当前 radio 对应值 | `string \\| number` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 选中变化时触发 | `(value: string \\| number)` |
| change | 选中变化时触发 | `(value: string \\| number)` |

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 单选框文本内容 |

## 自定义

Radio 建议与 Checkbox 使用一致的间距和字号体系：

- `.xx-radio` 控制对齐与点击区域
- `.xx-radio.is-disabled` 定义禁用态
- 利用 `default` 插槽传入富文本标签

```css
.xx-radio {
  gap: 8px;
  font-size: 14px;
}

.xx-radio.is-disabled {
  opacity: 0.6;
}
```
