import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'XX-UI',
  description: 'Vue3 + TypeScript 组件库',
  themeConfig: {
    nav: [{ text: '首页', link: '/' }, { text: '组件', link: '/components/button' }],
    sidebar: [
      {
        text: '组件',
        items: [{ text: 'Button 按钮', link: '/components/button' }],
      },
    ],
  },
});