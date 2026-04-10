import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Table from '../Table.vue';

describe('XxTable', () => {
  it('renders headers and rows', () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { key: 'name', title: 'Name' },
          { key: 'role', title: 'Role' },
        ],
        data: [
          { name: 'Alice', role: 'Admin' },
          { name: 'Bob', role: 'User' },
        ],
      },
    });

    expect(wrapper.findAll('thead th')).toHaveLength(2);
    expect(wrapper.findAll('tbody tr')).toHaveLength(2);
    expect(wrapper.text()).toContain('Alice');
  });
});
