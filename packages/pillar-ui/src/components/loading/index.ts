import type { App } from 'vue';
import Loading from './Loading.vue';

export { Loading };

export const XxLoading = Object.assign(Loading, {
  install(app: App): void {
    app.component('XxLoading', Loading);
  },
});
