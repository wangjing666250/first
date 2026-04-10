import type { App } from 'vue';
import Confirm from './Confirm.vue';

export { Confirm };

export const XxConfirm = Object.assign(Confirm, {
  install(app: App): void {
    app.component('XxConfirm', Confirm);
  },
});
