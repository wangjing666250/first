import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Pillar UI',
  description: 'Vue3 + TypeScript 中后台组件库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' },
      { text: '指南', link: '/guide/quickstart' },
      { text: '更新日志', link: '/changelog' },
    ],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Textarea 文本域', link: '/components/textarea' },
            { text: 'Space 间距', link: '/components/space' },
            { text: 'Color 颜色', link: '/components/color' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Switch 开关', link: '/components/switch' },
          ],
        },
        {
          text: '表单组件',
          items: [
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
            { text: 'Date Picker 日期选择', link: '/components/date-picker' },
            { text: 'Form Pro 高级表单', link: '/components/form-pro' },
            { text: 'Checkbox 多选框', link: '/components/checkbox' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'AutoComplete 自动完成', link: '/components/autocomplete' },
            { text: 'Upload 上传', link: '/components/upload' },
          ],
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Message 消息提示', link: '/components/message' },
            { text: 'Modal 弹窗', link: '/components/modal' },
            { text: 'Confirm 二次确认', link: '/components/confirm' },
            { text: 'Popover 气泡提示', link: '/components/popover' },
            { text: 'Notification 通知', link: '/components/notification' },
            { text: 'Loading 加载', link: '/components/loading' },
            { text: 'Drawer 抽屉', link: '/components/drawer' },
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: 'Badge 徽章', link: '/components/badge' },
            { text: 'Table 表格', link: '/components/table' },
            { text: 'Tree 树形控件', link: '/components/tree' },
            { text: 'Menu 菜单', link: '/components/menu' },
            { text: 'Progress 进度条', link: '/components/progress' },
            { text: 'Tabs 标签页', link: '/components/tabs' },
            { text: 'Pagination 分页', link: '/components/pagination' },
          ],
        },
      ],
      '/guide/': [
        {
          text: '开发指南',
          items: [
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '按需引入', link: '/guide/import' },
            { text: '主题定制', link: '/guide/theme' },
          ],
        },
      ],
    },
  },
});