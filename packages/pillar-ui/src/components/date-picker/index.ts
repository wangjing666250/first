import type { App } from 'vue';
import DatePicker from './DatePicker.vue';

export { DatePicker };

export const XxDatePicker = Object.assign(DatePicker, {
  install(app: App): void {
    app.component('XxDatePicker', DatePicker);
  },
});
