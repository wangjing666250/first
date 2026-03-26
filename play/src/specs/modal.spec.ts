import type { ComponentSpec } from './component-spec';

export const modalSpec: ComponentSpec = {
  key: 'modal',
  title: 'Modal 弹窗',
  attributes: [
    { name: 'modelValue', description: '是否显示弹窗', type: 'boolean', default: 'false' },
    { name: 'title', description: '标题文本', type: 'string', default: `'提示'` },
    { name: 'width', description: '弹窗宽度', type: 'string', default: `'520px'` },
    { name: 'closeOnMask', description: '点击遮罩是否关闭', type: 'boolean', default: 'true' },
  ],
  events: [
    { name: 'update:modelValue', description: '显示状态变化', type: '(visible: boolean) => void', default: '--' },
    { name: 'confirm', description: '点击确认触发', type: '() => void', default: '--' },
    { name: 'cancel', description: '点击取消或遮罩关闭触发', type: '() => void', default: '--' },
  ],
  slots: [
    { name: 'default', description: '弹窗内容区域', type: '--', default: '--' },
    { name: 'footer', description: '底部按钮区域', type: '--', default: '内置取消/确认' },
  ],
};

