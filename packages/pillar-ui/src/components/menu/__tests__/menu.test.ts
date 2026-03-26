import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Menu from '../Menu.vue';

describe('XxMenu', () => {
  it('emits select and update:active when item clicked', async () => {
    const wrapper = mount(Menu, {
      props: {
        items: [
          { key: 'a', label: 'A' },
          { key: 'b', label: 'B' },
        ],
      },
    });

    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.emitted('update:active')?.[0]).toEqual(['b']);
    expect(wrapper.emitted('select')?.[0]).toEqual(['b']);
  });
});
