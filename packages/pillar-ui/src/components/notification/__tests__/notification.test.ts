import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Notification from '../Notification.vue';

describe('XxNotification', () => {
  it('emits close when close button clicked', async () => {
    const wrapper = mount(Notification, {
      props: {
        list: [{ id: 1, title: 't', message: 'm', type: 'info' }],
      },
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('close')?.[0]).toEqual([1]);
  });
});
