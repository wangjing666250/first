import type { App } from 'vue';
import Tree from './Tree.vue';

export type { TreeNode } from './types';
export { Tree };

export const XxTree = Object.assign(Tree, {
  install(app: App): void {
    app.component('XxTree', Tree);
  },
});
