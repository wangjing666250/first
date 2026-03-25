import type { App } from 'vue';
import FormPro from './FormPro.vue';

export { FormPro };

export const XxFormPro = Object.assign(FormPro, {
  install(app: App): void {
    app.component('XxFormPro', FormPro);
  },
});
