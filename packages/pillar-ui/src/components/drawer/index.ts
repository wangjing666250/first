import type { App } from 'vue';
import Drawer from './Drawer.vue';
import './style.css';

export { Drawer };

export const XxDrawer = Object.assign(Drawer, {
  install(app: App): void {
    app.component('XxDrawer', Drawer);
  },
});
