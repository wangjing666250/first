import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import FormPro from '../FormPro.vue';

describe('XxFormPro', () => {
  it('emits validate-error when required field is missing', async () => {
    const wrapper = mount(FormPro, {
      props: {
        model: { name: '' },
        rules: [{ field: 'name', required: true, message: 'name required' }],
      },
    });

    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('validate-error')?.[0]).toEqual([['name required']]);
  });
});
