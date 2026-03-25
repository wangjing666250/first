import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Progress from '../Progress.vue';

describe('XxProgress', () => {
  it('clamps percentage to 0-100', () => {
    const wrapper = mount(Progress, { props: { percentage: 120 } });
    expect(wrapper.text()).toContain('100%');
  });
});
