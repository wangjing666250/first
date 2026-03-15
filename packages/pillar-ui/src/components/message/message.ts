import { createApp, h } from 'vue';
import MessageView from './MessageView.vue';
import './style.css';

export interface MessageOptions {
  message: string;
  type?: 'info' | 'success' | 'error';
  duration?: number;
}

export interface MessageHandler {
  close: () => void;
}

export function createMessage(options: MessageOptions): MessageHandler {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const app = createApp({
    render() {
      return h(MessageView, {
        message: options.message,
        type: options.type ?? 'info',
      });
    },
  });

  app.mount(container);

  const close = (): void => {
    app.unmount();
    container.remove();
  };

  const duration = options.duration ?? 2200;
  if (duration > 0) {
    window.setTimeout(close, duration);
  }

  return { close };
}
