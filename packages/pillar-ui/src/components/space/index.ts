import type { App } from 'vue';
import Space from './Space.vue';

export { Space };

export const XxSpace = Object.assign(Space, {
  install(app: App): void {
    app.component('XxSpace', Space);
  },
});
