import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Tree from '../Tree.vue';

describe('XxTree', () => {
  it('emits node-click when clicking node', async () => {
    const wrapper = mount(Tree, {
      props: {
        data: [{ key: 'a', label: 'A', children: [{ key: 'a1', label: 'A1' }] }],
      },
    });

    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('node-click')).toBeTruthy();
  });
});
