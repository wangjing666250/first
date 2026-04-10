import type { ComponentSpec } from './component-spec';

export const inputSpec: ComponentSpec = {
  key: 'input',
  title: 'Input 输入框',
  attributes: [
    { name: 'modelValue', description: '绑定值', type: 'string', default: `''` },
    { name: 'placeholder', description: '占位文本', type: 'string', default: `''` },
    { name: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
    { name: 'clearable', description: '是否显示清空按钮', type: 'boolean', default: 'false' },
  ],
  events: [
    { name: 'update:modelValue', description: '输入值变化', type: '(value: string) => void', default: '--' },
    { name: 'input', description: '输入时触发', type: '(value: string) => void', default: '--' },
    { name: 'clear', description: '点击清空触发', type: '() => void', default: '--' },
  ],
  slots: [
    { name: 'prefix', description: '前缀内容', type: '--', default: '--' },
    { name: 'suffix', description: '后缀内容', type: '--', default: '--' },
  ],
};

