import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Space from '../Space.vue';

describe('XxSpace', () => {
  it('applies gap style from size prop', () => {
    const wrapper = mount(Space, {
      props: { size: 20 },
      slots: { default: '<span>a</span>' },
    });
    expect(wrapper.attributes('style')).toContain('gap: 20px');
  });
});
