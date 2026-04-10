import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TableSection from '../TableSection.vue';

describe('TableSection', () => {
  it('renders all table showcase blocks', () => {
    const wrapper = mount(TableSection, {
      props: {
        docPath: '/components/table',
        columns: [
          { key: 'name', title: '姓名' },
          { key: 'role', title: '角色' },
        ],
        tableData: [{ name: '张三', role: '管理员' }],
        demoCode: {
          tableStriped: '<XxTable striped />',
          tableBorderless: '<XxTable :bordered="false" />',
          tableEmpty: '<XxTable :data="[]" />',
        },
      },
    });

    expect(wrapper.text()).toContain('边框 + 斑马纹');
    expect(wrapper.text()).toContain('无边框（bordered = false）');
    expect(wrapper.text()).toContain('空数据态');
  });
});

