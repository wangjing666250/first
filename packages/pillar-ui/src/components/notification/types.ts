export interface NotificationItem {
  id: number | string;
  title: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}
