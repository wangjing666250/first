import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Badge from '../Badge.vue';

describe('XxBadge', () => {
  it('renders max+ when value exceeds max', () => {
    const wrapper = mount(Badge, {
      props: { value: 120, max: 99 },
      slots: { default: 'content' },
    });
    expect(wrapper.text()).toContain('99+');
  });
});
