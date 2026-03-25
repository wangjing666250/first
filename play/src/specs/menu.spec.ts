import type { ComponentSpec } from './component-spec';

export const menuSpec: ComponentSpec = {
  key: 'menu',
  title: 'Menu 菜单',
  attributes: [
    { name: 'active', description: '当前激活菜单', type: 'string', default: `''` },
    { name: 'mode', description: '菜单模式', type: `'horizontal' | 'vertical'`, default: `'horizontal'` },
    { name: 'collapsed', description: '是否折叠', type: 'boolean', default: 'false' },
    {
      name: 'items',
      description: '菜单项数据',
      type: '{ key: string; label: string; disabled?: boolean }[]',
      default: '[]',
    },
  ],
  events: [
    { name: 'update:active', description: '激活项更新', type: '(key: string) => void', default: '--' },
    { name: 'select', description: '选择菜单项', type: '(key: string) => void', default: '--' },
  ],
  slots: [],
};

