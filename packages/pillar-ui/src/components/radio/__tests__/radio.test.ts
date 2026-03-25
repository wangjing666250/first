import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Radio from '../Radio.vue';

describe('XxRadio', () => {
  it('emits selected value', async () => {
    const wrapper = mount(Radio, {
      props: {
        modelValue: 'a',
        value: 'b',
      },
      slots: { default: 'B' },
    });

    await wrapper.find('input').trigger('change');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b']);
    expect(wrapper.emitted('change')?.[0]).toEqual(['b']);
  });
});
