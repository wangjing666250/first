import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Select from '../Select.vue';

describe('XxSelect', () => {
  it('emits update and change when selecting option', async () => {
    const wrapper = mount(Select, {
      props: {
        options: [
          { label: 'Vue', value: 'vue' },
          { label: 'React', value: 'react' },
        ],
      },
    });

    await wrapper.find('select').setValue('react');

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['react']);
    expect(wrapper.emitted('change')?.[0]).toEqual(['react']);
  });
});
