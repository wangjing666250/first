import type { App } from 'vue';
import Upload from './Upload.vue';
import './style.css';

export type { UploadFileItem, UploadRequestOption } from './types';
export { Upload };

export const XxUpload = Object.assign(Upload, {
  install(app: App): void {
    app.component('XxUpload', Upload);
  },
});
