import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Dropdown from '../Dropdown.vue';

describe('XxDropdown', () => {
  it('emits update and change on select', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        options: [
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
        ],
      },
    });
    await wrapper.find('select').setValue('b');

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b']);
    expect(wrapper.emitted('change')?.[0]).toEqual(['b']);
  });
});
