import type { App } from 'vue';
import Modal from './Modal.vue';
import './style.css';

export { Modal };

export const XxModal = Object.assign(Modal, {
  install(app: App): void {
    app.component('XxModal', Modal);
  },
});
