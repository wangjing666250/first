import type { App } from 'vue';
import Progress from './Progress.vue';

export { Progress };

export const XxProgress = Object.assign(Progress, {
  install(app: App): void {
    app.component('XxProgress', Progress);
  },
});
