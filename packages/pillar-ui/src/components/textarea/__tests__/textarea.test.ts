import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Textarea from '../Textarea.vue';

describe('XxTextarea', () => {
  it('emits update:modelValue and input on typing', async () => {
    const wrapper = mount(Textarea);
    await wrapper.find('textarea').setValue('hello');

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['hello']);
    expect(wrapper.emitted('input')?.[0]).toEqual(['hello']);
  });
});
