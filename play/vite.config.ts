import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

const componentMap: Record<string, string> = {
  XxButton: '@xx-ui/pillar-ui/button',
  XxInput: '@xx-ui/pillar-ui/input',
  XxAutoComplete: '@xx-ui/pillar-ui/autocomplete',
  XxUpload: '@xx-ui/pillar-ui/upload',
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
        find: /^@xx-ui\/pillar-ui$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/index.ts'),
      },
      {
        find: /^@xx-ui\/pillar-ui\/style\.css$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/style.css'),
      },
      {
        find: /^@xx-ui\/pillar-ui\/button$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/button/index.ts'),
      },
      {
        find: /^@xx-ui\/pillar-ui\/input$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/input/index.ts'),
      },
      {
        find: /^@xx-ui\/pillar-ui\/autocomplete$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/autocomplete/index.ts'),
      },
      {
        find: /^@xx-ui\/pillar-ui\/upload$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/upload/index.ts'),
      },
      {
        find: /^@xx-ui\/pillar-ui\/message$/,
        replacement: resolve(__dirname, '../packages/pillar-ui/src/components/message/index.ts'),
      },
    ],
  },
});