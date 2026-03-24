import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Modal from '../Modal.vue';

describe('XxModal', () => {
  it('renders when modelValue is true', () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true,
      },
      slots: {
        default: 'content',
      },
      global: {
        stubs: { teleport: true },
      },
    });

    expect(wrapper.text()).toContain('content');
  });

  it('emits cancel when mask clicked', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: { teleport: true },
      },
    });

    await wrapper.find('.xx-modal__mask').trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
  });
});
