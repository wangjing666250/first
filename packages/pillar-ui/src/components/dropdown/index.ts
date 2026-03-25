import type { App } from 'vue';
import Dropdown from './Dropdown.vue';

export type { DropdownOption } from './types';
export { Dropdown };

export const XxDropdown = Object.assign(Dropdown, {
  install(app: App): void {
    app.component('XxDropdown', Dropdown);
  },
});
