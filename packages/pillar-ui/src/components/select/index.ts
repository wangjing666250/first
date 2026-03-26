import type { App } from 'vue';
import Select from './Select.vue';
import './style.css';

export { Select };

export const XxSelect = Object.assign(Select, {
  install(app: App): void {
    app.component('XxSelect', Select);
  },
});
