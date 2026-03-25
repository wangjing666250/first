import type { App } from 'vue';
import Radio from './Radio.vue';
import './style.css';

export { Radio };

export const XxRadio = Object.assign(Radio, {
  install(app: App): void {
    app.component('XxRadio', Radio);
  },
});
