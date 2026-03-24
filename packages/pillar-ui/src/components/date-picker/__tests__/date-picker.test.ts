import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import DatePicker from '../DatePicker.vue';

describe('XxDatePicker', () => {
  it('emits update and change when date selected', async () => {
    const wrapper = mount(DatePicker, { props: { type: 'date' } });
    await wrapper.find('input').setValue('2026-03-24');

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2026-03-24']);
    expect(wrapper.emitted('change')?.[0]).toEqual(['2026-03-24']);
  });
});
