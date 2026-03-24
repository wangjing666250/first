import type { App } from 'vue';
import Badge from './Badge.vue';

export { Badge };

export const XxBadge = Object.assign(Badge, {
  install(app: App): void {
    app.component('XxBadge', Badge);
  },
});
