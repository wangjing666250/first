import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Switch from '../Switch.vue';

describe('XxSwitch', () => {
  it('toggles value when clicked', async () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
    expect(wrapper.emitted('change')?.[0]).toEqual([true]);
  });
});
