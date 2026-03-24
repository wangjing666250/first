import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Pagination from '../Pagination.vue';

describe('XxPagination', () => {
  it('emits next page on click', async () => {
    const wrapper = mount(Pagination, {
      props: {
        modelValue: 1,
        total: 30,
        pageSize: 10,
      },
    });

    const buttons = wrapper.findAll('button');
    await buttons[2].trigger('click'); // page 2
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2]);
  });

  it('disables prev button on first page', () => {
    const wrapper = mount(Pagination, {
      props: {
        modelValue: 1,
        total: 20,
      },
    });

    expect(wrapper.findAll('button')[0].attributes('disabled')).toBeDefined();
  });
});
