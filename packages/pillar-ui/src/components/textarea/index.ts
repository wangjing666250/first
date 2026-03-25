import type { App } from 'vue';
import Textarea from './Textarea.vue';

export { Textarea };

export const XxTextarea = Object.assign(Textarea, {
  install(app: App): void {
    app.component('XxTextarea', Textarea);
  },
});
