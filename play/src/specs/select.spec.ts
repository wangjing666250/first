import type { ComponentSpec } from './component-spec';

export const selectSpec: ComponentSpec = {
  key: 'select',
  title: 'Select 选择器',
  attributes: [
    { name: 'modelValue', description: '当前值', type: 'string', default: `''` },
    { name: 'options', description: '选项列表', type: '{ label: string; value: string }[]', default: '[]' },
    { name: 'placeholder', description: '占位提示', type: 'string', default: `'请选择'` },
    { name: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
  ],
  events: [
    { name: 'update:modelValue', description: '值变化时触发', type: '(value: string) => void', default: '--' },
    { name: 'change', description: '选项变更时触发', type: '(value: string) => void', default: '--' },
  ],
  slots: [],
};

