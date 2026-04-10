import type { ComponentSpec } from './component-spec';

export const tableSpec: ComponentSpec = {
  key: 'table',
  title: 'Table 表格',
  attributes: [
    { name: 'columns', description: '列配置', type: '{ key: string; title: string }[]', default: '[]' },
    { name: 'data', description: '表格数据', type: 'Record<string, unknown>[]', default: '[]' },
    { name: 'striped', description: '是否斑马纹', type: 'boolean', default: 'false' },
    { name: 'bordered', description: '是否显示边框', type: 'boolean', default: 'true' },
  ],
  events: [],
  slots: [],
};

