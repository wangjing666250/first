import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Drawer from '../Drawer.vue';

describe('XxDrawer', () => {
  it('renders content when opened', () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: { default: 'drawer content' },
      global: { stubs: { teleport: true } },
    });

    expect(wrapper.text()).toContain('drawer content');
  });

  it('emits close when clicking close button', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      global: { stubs: { teleport: true } },
    });

    await wrapper.find('.xx-drawer__close').trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
    expect(wrapper.emitted('close')).toBeTruthy();
  });
});
