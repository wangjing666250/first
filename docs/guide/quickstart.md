# 快速开始

## 安装

```bash
pnpm add @pillar-ui/pillar-ui @pillar-ui/theme
```

## 全量引入

```ts
import { createApp } from 'vue';
import App from './App.vue';
import PillarUI from '@pillar-ui/pillar-ui';
import '@pillar-ui/pillar-ui/style.css';

createApp(App).use(PillarUI).mount('#app');
```

## 本地开发（仓库）

```bash
pnpm install
pnpm -w run dev
```

## 工程校验

```bash
pnpm -w run lint
pnpm -w run typecheck
pnpm -w run test:run
pnpm -w run build
pnpm run docs:build
```
