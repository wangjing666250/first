import type { App } from 'vue';
import Input from './Input.vue';
import './style.css';

export { Input };

export const XxInput = Object.assign(Input, {
  install(app: App): void {
    app.component('XxInput', Input);
  },
});
