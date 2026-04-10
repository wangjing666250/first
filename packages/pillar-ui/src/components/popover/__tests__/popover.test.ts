import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Popover from '../Popover.vue';

describe('XxPopover', () => {
  it('shows panel on hover trigger', async () => {
    const wrapper = mount(Popover, {
      props: { content: 'hello', trigger: 'hover' },
      slots: { default: 'trigger' },
    });
    await wrapper.trigger('mouseenter');
    expect(wrapper.text()).toContain('hello');
  });
});
