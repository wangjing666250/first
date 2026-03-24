import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Color from '../Color.vue';

describe('XxColor', () => {
  it('emits change when picker updates', async () => {
    const wrapper = mount(Color);
    await wrapper.find('input[type="color"]').setValue('#000000');

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['#000000']);
    expect(wrapper.emitted('change')?.[0]).toEqual(['#000000']);
  });
});
