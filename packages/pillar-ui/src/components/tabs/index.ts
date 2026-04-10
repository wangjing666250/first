import type { App } from 'vue';
import Tabs from './Tabs.vue';
import './style.css';

export type { TabItem } from './types';
export { Tabs };

export const XxTabs = Object.assign(Tabs, {
  install(app: App): void {
    app.component('XxTabs', Tabs);
  },
});
