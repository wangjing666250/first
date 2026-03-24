import type { App } from 'vue';
import Icon from './Icon.vue';

export { Icon };

export const XxIcon = Object.assign(Icon, {
  install(app: App): void {
    app.component('XxIcon', Icon);
  },
});
