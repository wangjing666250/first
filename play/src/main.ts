import { createApp } from 'vue';
import PillarUI from '@xx-ui/pillar-ui';
// 开发态直接引源码样式，避免 alias 到 index.ts 后的子路径解析歧义
import '../../packages/pillar-ui/src/style.css';
import App from './App.vue';
import './play.css';

createApp(App).use(PillarUI).mount('#app');
