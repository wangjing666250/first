import type { App } from 'vue';
import AutoComplete from './AutoComplete.vue';
import './style.css';

export type { AutoCompleteOption } from './types';
export { AutoComplete };

export const XxAutoComplete = Object.assign(AutoComplete, {
  install(app: App): void {
    app.component('XxAutoComplete', AutoComplete);
  },
});
