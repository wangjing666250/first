# 按需引入

## 全量引入

```ts
import { createApp } from 'vue';
import PillarUI from '@pillar-ui/pillar-ui';
import '@pillar-ui/pillar-ui/style.css';

createApp(App).use(PillarUI).mount('#app');
```

## 按需引入

```ts
import { XxButton } from '@pillar-ui/pillar-ui/button';
import { XxInput } from '@pillar-ui/pillar-ui/input';
```

## 自动按需导入

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';

export default {
  plugins: [
    Components({
      resolvers: [
        (name) => {
          if (!name.startsWith('Xx')) return;
          const map = {
            XxButton: '@pillar-ui/pillar-ui/button',
            XxInput: '@pillar-ui/pillar-ui/input',
          };
          const from = map[name as keyof typeof map];
          return from ? { name, from } : undefined;
        },
      ],
    }),
  ],
};
```
