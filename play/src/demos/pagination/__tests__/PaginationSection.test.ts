import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import PaginationSection from '../PaginationSection.vue';

describe('PaginationSection', () => {
  it('emits update events on page changes', async () => {
    const wrapper = mount(PaginationSection, {
      props: {
        docPath: '/components/pagination',
        page: 1,
        smallPage: 2,
        demoCode: {
          pageBasic: '<XxPagination v-model="page" />',
          pageSmall: '<XxPagination v-model="smallPage" />',
        },
      },
    });

    const buttons = wrapper.findAll('.xx-pagination__btn');
    expect(buttons.length).toBeGreaterThan(0);
    await buttons[1]?.trigger('click');
    expect(wrapper.emitted('update:page')).toBeTruthy();
  });
});

