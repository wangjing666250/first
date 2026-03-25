import type { App } from 'vue';
import Color from './Color.vue';

export { Color };

export const XxColor = Object.assign(Color, {
  install(app: App): void {
    app.component('XxColor', Color);
  },
});
