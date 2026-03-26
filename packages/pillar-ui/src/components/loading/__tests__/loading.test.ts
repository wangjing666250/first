import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Loading from '../Loading.vue';

describe('XxLoading', () => {
  it('renders loading mask when loading is true', () => {
    const wrapper = mount(Loading, {
      props: { loading: true, text: 'loading...' },
      slots: { default: '<div>content</div>' },
    });
    expect(wrapper.text()).toContain('loading...');
  });
});
