import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@pillar-ui/theme',
        replacement: resolve(__dirname, '../theme/src/index.css'),
      },
    ],
  },
  plugins: [
    vue(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.json'),
      entryRoot: resolve(__dirname, 'src'),
      outDir: resolve(__dirname, 'dist'),
      include: [resolve(__dirname, 'src')],
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        button: resolve(__dirname, 'src/components/button/index.ts'),
        input: resolve(__dirname, 'src/components/input/index.ts'),
        textarea: resolve(__dirname, 'src/components/textarea/index.ts'),
        space: resolve(__dirname, 'src/components/space/index.ts'),
        color: resolve(__dirname, 'src/components/color/index.ts'),
        icon: resolve(__dirname, 'src/components/icon/index.ts'),
        select: resolve(__dirname, 'src/components/select/index.ts'),
        dropdown: resolve(__dirname, 'src/components/dropdown/index.ts'),
        'date-picker': resolve(__dirname, 'src/components/date-picker/index.ts'),
        'form-pro': resolve(__dirname, 'src/components/form-pro/index.ts'),
        checkbox: resolve(__dirname, 'src/components/checkbox/index.ts'),
        radio: resolve(__dirname, 'src/components/radio/index.ts'),
        switch: resolve(__dirname, 'src/components/switch/index.ts'),
        autocomplete: resolve(__dirname, 'src/components/autocomplete/index.ts'),
        upload: resolve(__dirname, 'src/components/upload/index.ts'),
        badge: resolve(__dirname, 'src/components/badge/index.ts'),
        message: resolve(__dirname, 'src/components/message/index.ts'),
        modal: resolve(__dirname, 'src/components/modal/index.ts'),
        confirm: resolve(__dirname, 'src/components/confirm/index.ts'),
        popover: resolve(__dirname, 'src/components/popover/index.ts'),
        notification: resolve(__dirname, 'src/components/notification/index.ts'),
        loading: resolve(__dirname, 'src/components/loading/index.ts'),
        table: resolve(__dirname, 'src/components/table/index.ts'),
        tree: resolve(__dirname, 'src/components/tree/index.ts'),
        menu: resolve(__dirname, 'src/components/menu/index.ts'),
        progress: resolve(__dirname, 'src/components/progress/index.ts'),
        tabs: resolve(__dirname, 'src/components/tabs/index.ts'),
        pagination: resolve(__dirname, 'src/components/pagination/index.ts'),
        drawer: resolve(__dirname, 'src/components/drawer/index.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => (format === 'cjs' ? `${entryName}.cjs` : `${entryName}.js`),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
