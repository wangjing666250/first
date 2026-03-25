import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Tabs from '../Tabs.vue';

describe('XxTabs', () => {
  it('emits change when selecting tab', async () => {
    const wrapper = mount(Tabs, {
      props: {
        modelValue: 'a',
        items: [
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
        ],
      },
    });

    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b']);
    expect(wrapper.emitted('change')?.[0]).toEqual(['b']);
  });

  it('does not emit when disabled tab clicked', async () => {
    const wrapper = mount(Tabs, {
      props: {
        modelValue: 'a',
        items: [
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b', disabled: true },
        ],
      },
    });

    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });
});
