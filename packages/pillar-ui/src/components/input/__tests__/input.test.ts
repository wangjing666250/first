import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Input from '../Input.vue';

describe('XxInput', () => {
  it('emits update:modelValue on input', async () => {
    const wrapper = mount(Input, {
      props: { modelValue: '' },
    });

    const input = wrapper.find('input');
    await input.setValue('hello');

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['hello']);
    expect(wrapper.emitted('input')?.[0]).toEqual(['hello']);
  });

  it('shows clear button when clearable and has value', () => {
    const wrapper = mount(Input, {
      props: { modelValue: 'abc', clearable: true },
    });

    expect(wrapper.find('.xx-input__clear').exists()).toBe(true);
  });

  it('emits clear and empty value when click clear', async () => {
    const wrapper = mount(Input, {
      props: { modelValue: 'abc', clearable: true },
    });

    await wrapper.find('.xx-input__clear').trigger('click');

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['']);
    expect(wrapper.emitted('clear')).toHaveLength(1);
  });

  it('does not show clear button when disabled', () => {
    const wrapper = mount(Input, {
      props: { modelValue: 'abc', clearable: true, disabled: true },
    });

    expect(wrapper.find('.xx-input__clear').exists()).toBe(false);
  });
});
