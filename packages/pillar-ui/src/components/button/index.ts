import type { App } from 'vue';
import Button from './Button.vue';
import './style.css';

export type { ComponentPublicInstance } from 'vue';
export { Button };

export const XxButton = Object.assign(Button, {
  install(app: App): void {
    app.component('XxButton', Button);
  },
});
