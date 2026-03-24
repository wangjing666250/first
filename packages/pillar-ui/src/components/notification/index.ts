import type { App } from 'vue';
import Notification from './Notification.vue';

export type { NotificationItem } from './types';
export { Notification };

export const XxNotification = Object.assign(Notification, {
  install(app: App): void {
    app.component('XxNotification', Notification);
  },
});
