import type { App } from 'vue';
import Checkbox from './Checkbox.vue';
import './style.css';

export { Checkbox };

export const XxCheckbox = Object.assign(Checkbox, {
  install(app: App): void {
    app.component('XxCheckbox', Checkbox);
  },
});
