import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Checkbox from '../Checkbox.vue';

describe('XxCheckbox', () => {
  it('emits boolean value on change', async () => {
    const wrapper = mount(Checkbox, {
      slots: { default: 'Agree' },
    });

    await wrapper.find('input').setValue(true);
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
    expect(wrapper.emitted('change')?.[0]).toEqual([true]);
  });
});
