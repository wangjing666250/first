import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Icon from '../Icon.vue';

describe('XxIcon', () => {
  it('emits click with icon name', async () => {
    const wrapper = mount(Icon, { props: { name: '⭐' } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')?.[0]).toEqual(['⭐']);
  });
});
