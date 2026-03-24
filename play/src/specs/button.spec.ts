import type { ComponentSpec } from './component-spec';

export const buttonSpec: ComponentSpec = {
  key: 'button',
  title: 'Button 按钮',
  attributes: [
    { name: 'type', description: '按钮类型', type: `'default' | 'primary' | 'danger'`, default: `'default'` },
    { name: 'size', description: '按钮尺寸', type: `'small' | 'medium' | 'large'`, default: `'medium'` },
    { name: 'plain', description: '是否朴素按钮', type: 'boolean', default: 'false' },
    { name: 'round', description: '是否圆角按钮', type: 'boolean', default: 'false' },
    { name: 'circle', description: '是否圆形按钮', type: 'boolean', default: 'false' },
    { name: 'loading', description: '是否加载中', type: 'boolean', default: 'false' },
    { name: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
    { name: 'nativeType', description: '原生按钮类型', type: `'button' | 'submit' | 'reset'`, default: `'button'` },
  ],
  events: [{ name: 'click', description: '点击按钮触发', type: '(event: MouseEvent) => void', default: '--' }],
  slots: [
    { name: 'default', description: '按钮文本内容', type: '--', default: '--' },
    { name: 'icon', description: '图标内容（配合 circle 或普通按钮）', type: '--', default: '--' },
  ],
};

