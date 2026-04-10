import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Confirm from '../Confirm.vue';

describe('XxConfirm', () => {
  it('emits confirm on confirm button click', async () => {
    const wrapper = mount(Confirm, {
      props: { modelValue: true, content: 'sure?' },
      global: { stubs: { teleport: true } },
    });
    const buttons = wrapper.findAll('button');
    await buttons[1].trigger('click');

    expect(wrapper.emitted('confirm')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
  });
});
