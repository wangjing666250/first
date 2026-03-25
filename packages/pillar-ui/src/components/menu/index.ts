import type { App } from 'vue';
import Menu from './Menu.vue';

export type { MenuItem } from './types';
export { Menu };

export const XxMenu = Object.assign(Menu, {
  install(app: App): void {
    app.component('XxMenu', Menu);
  },
});
