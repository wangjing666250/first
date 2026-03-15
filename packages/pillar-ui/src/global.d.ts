import 'vue';
import type { MessageOptions, MessageHandler } from './components/message';

declare module 'vue' {
  interface ComponentCustomProperties {
    $message: (options: MessageOptions) => MessageHandler;
  }
}
