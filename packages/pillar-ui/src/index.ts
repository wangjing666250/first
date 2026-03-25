import type { App } from 'vue';
import { XxAutoComplete } from './components/autocomplete';
import { XxButton } from './components/button';
import { XxColor } from './components/color';
import { XxConfirm } from './components/confirm';
import { XxDatePicker } from './components/date-picker';
import { XxDropdown } from './components/dropdown';
import { XxCheckbox } from './components/checkbox';
import { XxFormPro } from './components/form-pro';
import { XxIcon } from './components/icon';
import { XxInput } from './components/input';
import { XxLoading } from './components/loading';
import { Message } from './components/message';
import { XxMenu } from './components/menu';
import { XxModal } from './components/modal';
import { XxNotification } from './components/notification';
import { XxPopover } from './components/popover';
import { XxProgress } from './components/progress';
import { XxRadio } from './components/radio';
import { XxSelect } from './components/select';
import { XxSpace } from './components/space';
import { XxSwitch } from './components/switch';
import { XxTable } from './components/table';
import { XxTextarea } from './components/textarea';
import { XxTree } from './components/tree';
import { XxTabs } from './components/tabs';
import { XxPagination } from './components/pagination';
import { XxDrawer } from './components/drawer';
import { XxUpload } from './components/upload';
import { XxBadge } from './components/badge';
import './style.css';

const components = [
  ['XxButton', XxButton],
  ['XxInput', XxInput],
  ['XxTextarea', XxTextarea],
  ['XxSpace', XxSpace],
  ['XxColor', XxColor],
  ['XxIcon', XxIcon],
  ['XxSwitch', XxSwitch],
  ['XxSelect', XxSelect],
  ['XxDropdown', XxDropdown],
  ['XxDatePicker', XxDatePicker],
  ['XxFormPro', XxFormPro],
  ['XxCheckbox', XxCheckbox],
  ['XxRadio', XxRadio],
  ['XxAutoComplete', XxAutoComplete],
  ['XxUpload', XxUpload],
  ['XxBadge', XxBadge],
  ['XxModal', XxModal],
  ['XxConfirm', XxConfirm],
  ['XxPopover', XxPopover],
  ['XxNotification', XxNotification],
  ['XxLoading', XxLoading],
  ['XxTable', XxTable],
  ['XxTree', XxTree],
  ['XxMenu', XxMenu],
  ['XxProgress', XxProgress],
  ['XxTabs', XxTabs],
  ['XxPagination', XxPagination],
  ['XxDrawer', XxDrawer],
] as const;

export { XxButton } from './components/button';
export { XxInput } from './components/input';
export { XxTextarea } from './components/textarea';
export { XxSpace } from './components/space';
export { XxColor } from './components/color';
export { XxIcon } from './components/icon';
export { XxSwitch } from './components/switch';
export { XxSelect } from './components/select';
export { XxDropdown } from './components/dropdown';
export { XxDatePicker } from './components/date-picker';
export { XxFormPro } from './components/form-pro';
export { XxCheckbox } from './components/checkbox';
export { XxRadio } from './components/radio';
export { XxAutoComplete } from './components/autocomplete';
export { XxUpload } from './components/upload';
export { XxBadge } from './components/badge';
export { XxModal } from './components/modal';
export { XxConfirm } from './components/confirm';
export { XxPopover } from './components/popover';
export { XxNotification } from './components/notification';
export { XxLoading } from './components/loading';
export { XxTable } from './components/table';
export { XxTree } from './components/tree';
export { XxMenu } from './components/menu';
export { XxProgress } from './components/progress';
export { XxTabs } from './components/tabs';
export { XxPagination } from './components/pagination';
export { XxDrawer } from './components/drawer';
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
