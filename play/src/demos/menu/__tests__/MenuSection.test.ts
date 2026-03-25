import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import MenuSection from '../MenuSection.vue';

const menuItems = [
  { key: 'dashboard', label: '工作台' },
  { key: 'users', label: '用户管理' },
  { key: 'settings', label: '系统设置' },
] as const;

const demoCode = {
  menuBasic: '<XxMenu />',
  menuDark: '<XxMenu class="dark" />',
  menuBrand: '<XxMenu class="brand" />',
  menuVertical: '<XxMenu mode="vertical" />',
};

describe('MenuSection', () => {
  it('emits update event when selecting menu item', async () => {
    const wrapper = mount(MenuSection, {
      props: {
        docPath: '/components/menu',
        menuItems: [...menuItems],
        menuActive: 'dashboard',
        menuDarkActive: 'dashboard',
        menuBrandActive: 'dashboard',
        menuVerticalActive: 'dashboard',
        demoCode,
      },
    });

    const menuButtons = wrapper.findAll('.xx-menu__item');
    expect(menuButtons.length).toBeGreaterThan(0);
    await menuButtons[1]?.trigger('click');
    expect(wrapper.emitted('update:menuActive')).toBeTruthy();
  });
});

