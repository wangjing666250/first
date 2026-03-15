import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import AutoComplete from '../AutoComplete.vue';

describe('XxAutoComplete', () => {
  it('filters options and emits selection', async () => {
    vi.useFakeTimers();
    const wrapper = mount(AutoComplete, {
      props: {
        options: [
          { label: 'Vue', value: 'vue' },
          { label: 'React', value: 'react' },
        ],
        debounce: 0,
      },
    });

    const input = wrapper.find('input');
    await input.setValue('vu');
    vi.runAllTimers();
    await wrapper.vm.$nextTick();

    const item = wrapper.find('.xx-autocomplete__item');
    expect(item.text()).toContain('Vue');

    await item.trigger('mousedown');
    expect(wrapper.emitted('select')).toBeTruthy();

    vi.useRealTimers();
  });

  it('shows empty slot when no option matched', async () => {
    vi.useFakeTimers();
    const wrapper = mount(AutoComplete, {
      props: {
        options: [{ label: 'Vue', value: 'vue' }],
        debounce: 0,
      },
      slots: {
        empty: '<span class="custom-empty">No data from slot</span>',
      },
    });

    const input = wrapper.find('input');
    await input.setValue('zzz');
    vi.runAllTimers();
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.custom-empty').exists()).toBe(true);
    vi.useRealTimers();
  });

  it('closes panel when pressing Escape', async () => {
    vi.useFakeTimers();
    const wrapper = mount(AutoComplete, {
      props: {
        options: [{ label: 'Vue', value: 'vue' }],
        debounce: 0,
      },
    });

    const input = wrapper.find('input');
    await input.trigger('focus');
    await input.setValue('v');
    vi.runAllTimers();
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.xx-autocomplete__panel').exists()).toBe(true);

    await input.trigger('keydown', { key: 'Escape' });
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.xx-autocomplete__panel').exists()).toBe(false);
    vi.useRealTimers();
  });

  it('renders mark tag when highlight is enabled', async () => {
    vi.useFakeTimers();
    const wrapper = mount(AutoComplete, {
      props: {
        options: [{ label: 'Vitest', value: 'vitest' }],
        debounce: 0,
        highlight: true,
      },
    });

    const input = wrapper.find('input');
    await input.setValue('vi');
    vi.runAllTimers();
    await wrapper.vm.$nextTick();

    expect(wrapper.find('mark').exists()).toBe(true);
    vi.useRealTimers();
  });
});
