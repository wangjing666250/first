import type { App } from 'vue';
import { XxAutoComplete } from './components/autocomplete';
import { XxButton } from './components/button';
import { XxInput } from './components/input';
import { Message } from './components/message';
import { XxUpload } from './components/upload';
import './style.css';

const components = [
  ['XxButton', XxButton],
  ['XxInput', XxInput],
  ['XxAutoComplete', XxAutoComplete],
  ['XxUpload', XxUpload],
] as const;

export { XxButton } from './components/button';
export { XxInput } from './components/input';
export { XxAutoComplete } from './components/autocomplete';
export { XxUpload } from './components/upload';
export { Message } from './components/message';
export type { MessageHandler, MessageOptions } from './components/message';

export default {
  install(app: App): void {
    components.forEach(([name, component]) => {
      app.component(name, component);
    });
    app.config.globalProperties.$message = Message;
  },
};
