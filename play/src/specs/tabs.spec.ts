import type { ComponentSpec } from './component-spec';

export const tabsSpec: ComponentSpec = {
  key: 'tabs',
  title: 'Tabs 标签页',
  attributes: [
    { name: 'modelValue', description: '当前激活 tab 值', type: 'string', default: `''` },
    { name: 'items', description: '选项配置', type: '{ label: string; value: string; disabled?: boolean }[]', default: '[]' },
  ],
  events: [
    { name: 'update:modelValue', description: '切换 tab 时触发', type: '(value: string) => void', default: '--' },
    { name: 'change', description: '切换 tab 时触发', type: '(value: string) => void', default: '--' },
  ],
  slots: [],
};

