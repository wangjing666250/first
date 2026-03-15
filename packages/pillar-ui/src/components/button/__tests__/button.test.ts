import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Button from '../Button.vue';

describe('XxButton', () => {
  it('emits click when enabled', async () => {
    const wrapper = mount(Button, { slots: { default: 'Click' } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Click' },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('does not emit click when loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Click' },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('applies plain/round/circle classes', () => {
    const wrapper = mount(Button, {
      props: { plain: true, round: true, circle: true },
      slots: { default: 'C' },
    });
    expect(wrapper.classes()).toContain('is-plain');
    expect(wrapper.classes()).toContain('is-round');
    expect(wrapper.classes()).toContain('is-circle');
  });

  it('sets native button type', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' },
      slots: { default: 'Submit' },
    });
    expect(wrapper.attributes('type')).toBe('submit');
  });
});