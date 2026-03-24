import type { App } from 'vue';
import Switch from './Switch.vue';
import './style.css';

export { Switch };

export const XxSwitch = Object.assign(Switch, {
  install(app: App): void {
    app.component('XxSwitch', Switch);
  },
});
