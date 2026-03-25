import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

const componentMap: Record<string, string> = {
  XxButton: '@pillar-ui/pillar-ui/button',
  XxInput: '@pillar-ui/pillar-ui/input',
  XxTextarea: '@pillar-ui/pillar-ui/textarea',
  XxSpace: '@pillar-ui/pillar-ui/space',
  XxColor: '@pillar-ui/pillar-ui/color',
  XxIcon: '@pillar-ui/pillar-ui/icon',
  XxSelect: '@pillar-ui/pillar-ui/select',
  XxDropdown: '@pillar-ui/pillar-ui/dropdown',
  XxDatePicker: '@pillar-ui/pillar-ui/date-picker',
  XxFormPro: '@pillar-ui/pillar-ui/form-pro',
  XxCheckbox: '@pillar-ui/pillar-ui/checkbox',
  XxRadio: '@pillar-ui/pillar-ui/radio',
  XxSwitch: '@pillar-ui/pillar-ui/switch',
  XxAutoComplete: '@pillar-ui/pillar-ui/autocomplete',
  XxUpload: '@pillar-ui/pillar-ui/upload',
  XxBadge: '@pillar-ui/pillar-ui/badge',
  XxModal: '@pillar-ui/pillar-ui/modal',
  XxConfirm: '@pillar-ui/pillar-ui/confirm',
  XxPopover: '@pillar-ui/pillar-ui/popover',
  XxNotification: '@pillar-ui/pillar-ui/notification',
  XxLoading: '@pillar-ui/pillar-ui/loading',
  XxTable: '@pillar-ui/pillar-ui/table',
  XxTree: '@pillar-ui/pillar-ui/tree',
  XxMenu: '@pillar-ui/pillar-ui/menu',
  XxProgress: '@pillar-ui/pillar-ui/progress',
  XxTabs: '@pillar-ui/pillar-ui/tabs',
  XxPagination: '@pillar-ui/pillar-ui/pagination',
  XxDrawer: '@pillar-ui/pillar-ui/drawer',
};

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        (name) => {
          const from = componentMap[name];
          if (!from) return;
          return { name, from };
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@pillar-ui\/pillar-ui$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/style\.css$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/style.css'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/button$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/button/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/input$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/input/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/textarea$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/textarea/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/space$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/space/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/color$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/color/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/icon$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/icon/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/select$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/select/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/dropdown$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/dropdown/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/date-picker$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/date-picker/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/form-pro$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/form-pro/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/checkbox$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/checkbox/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/radio$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/radio/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/switch$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/switch/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/autocomplete$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/autocomplete/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/upload$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/upload/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/badge$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/badge/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/message$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/message/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/modal$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/modal/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/confirm$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/confirm/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/popover$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/popover/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/notification$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/notification/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/loading$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/loading/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/table$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/table/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/tree$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/tree/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/menu$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/menu/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/progress$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/progress/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/tabs$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/tabs/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/pagination$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/pagination/index.ts'),
      },
      {
        find: /^@pillar-ui\/pillar-ui\/drawer$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/drawer/index.ts'),
      },
    ],
  },
});