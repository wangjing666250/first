# Upload 上传

用于上传文件，支持类型和大小校验、业务前置校验、上传结果回调。

## 基础用法

<script setup lang="ts">
const request = async ({ file }: { file: File }) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  if (!file.name.endsWith('.png')) {
    throw new Error('仅支持 png');
  }
};
</script>

<XxUpload accept=".png" :max-size="1" :request="request" />

## 示例代码

```vue
<template>
  <XxUpload accept=".png" :max-size="1" :request="request" />
</template>
```

## Attributes 属性

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| accept | 接受的文件类型 | `string` | `''` |
| multiple | 是否多选 | `boolean` | `false` |
| maxSize | 最大文件大小（MB） | `number` | `0` |
| beforeUpload | 上传前业务钩子 | `(file) => boolean \\| Promise<boolean>` | `-` |
| request | 自定义上传方法 | `({ file }) => Promise<void>` | `-` |

## Events 事件

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| success | 上传成功时触发 | `(item)` |
| error | 上传失败时触发 | `(item, error)` |
| reject | 校验失败时触发 | `({ fileName, reason })` |

## Slots 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 自定义触发上传的区域 |

## 自定义

Upload 建议分别定制触发区和文件列表：

- `.xx-upload__trigger` 定义拖拽/点击区域风格
- `.xx-upload__item` 调整文件项排版与状态色
- `default` 插槽可替换上传入口 UI

```css
.xx-upload__trigger {
  border: 1px dashed #94a3b8;
  border-radius: 10px;
}

.xx-upload__item {
  font-size: 13px;
}
```
