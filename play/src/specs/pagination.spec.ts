import type { ComponentSpec } from './component-spec';

export const paginationSpec: ComponentSpec = {
  key: 'pagination',
  title: 'Pagination 分页',
  attributes: [
    { name: 'modelValue', description: '当前页码', type: 'number', default: '1' },
    { name: 'total', description: '总条数', type: 'number', default: '0' },
    { name: 'pageSize', description: '每页条数', type: 'number', default: '10' },
  ],
  events: [
    { name: 'update:modelValue', description: '页码变化', type: '(page: number) => void', default: '--' },
    { name: 'change', description: '分页变更', type: '(page: number) => void', default: '--' },
  ],
  slots: [],
};

