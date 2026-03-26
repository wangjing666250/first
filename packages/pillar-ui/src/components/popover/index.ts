import type { App } from 'vue';
import Popover from './Popover.vue';

export { Popover };

export const XxPopover = Object.assign(Popover, {
  install(app: App): void {
    app.component('XxPopover', Popover);
  },
});
