import type { App } from 'vue';
import Pagination from './Pagination.vue';
import './style.css';

export { Pagination };

export const XxPagination = Object.assign(Pagination, {
  install(app: App): void {
    app.component('XxPagination', Pagination);
  },
});
