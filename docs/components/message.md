# Message 消息提示

用于全局轻量反馈，支持函数式调用。

## 基础调用

```ts
import { Message } from '@pillar-ui/pillar-ui';

Message({
  message: '操作成功',
  type: 'success',
  duration: 2000,
});
```

## 其他类型

```ts
Message({ message: '普通提示', type: 'info' });
Message({ message: '操作成功', type: 'success' });
Message({ message: '操作失败', type: 'error' });
```

## Attributes 参数

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| message | 消息内容 | `string` | `''` |
| type | 消息类型 | `'info' \\| 'success' \\| 'error'` | `'info'` |
| duration | 展示时长（ms） | `number` | `2200` |

## Events 事件

无

## Slots 插槽

无

## 自定义

Message 是函数式调用，通常通过全局样式覆盖消息类名：

- `.xx-message` 定义容器字号、圆角、阴影
- `.xx-message--success/.xx-message--error` 定义不同语义色
- 可在业务层二次封装统一调用参数（如默认 `duration`）

```css
.xx-message {
  border-radius: 10px;
  font-weight: 500;
}

.xx-message--success {
  background: #ecfdf5;
  color: #166534;
}
```
