import type { App } from 'vue';
import Table from './Table.vue';
import './style.css';

export type { TableColumn } from './types';
export { Table };

export const XxTable = Object.assign(Table, {
  install(app: App): void {
    app.component('XxTable', Table);
  },
});
