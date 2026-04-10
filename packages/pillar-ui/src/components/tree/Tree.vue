<script setup lang="ts">
import { computed, ref } from 'vue';
import type { TreeNode } from './types';

const props = withDefaults(
  defineProps<{
    data?: TreeNode[];
    defaultExpandAll?: boolean;
    expandOnClickNode?: boolean;
  }>(),
  {
    data: () => [],
    defaultExpandAll: false,
    expandOnClickNode: true,
  },
);

const emit = defineEmits<{
  'node-click': [TreeNode];
  'expand-change': [TreeNode, boolean];
}>();

const expanded = ref<Record<string, boolean>>({});

const allNodeKeys = computed(() => {
  const keys: string[] = [];
  const walk = (nodes: TreeNode[]): void => {
    nodes.forEach((node) => {
      keys.push(node.key);
      if (node.children?.length) walk(node.children);
    });
  };
  walk(props.data);
  return keys;
});

if (props.defaultExpandAll) {
  allNodeKeys.value.forEach((key) => {
    expanded.value[key] = true;
  });
}

function hasChildren(node: TreeNode): boolean {
  return !!node.children?.length;
}

function isExpanded(node: TreeNode): boolean {
  return !!expanded.value[node.key];
}

function toggle(node: TreeNode): void {
  if (!hasChildren(node)) return;
  const next = !isExpanded(node);
  expanded.value[node.key] = next;
  emit('expand-change', node, next);
}

function onNodeClick(node: TreeNode): void {
  emit('node-click', node);
  if (props.expandOnClickNode) toggle(node);
}

function onChildNodeClick(node: TreeNode): void {
  emit('node-click', node);
}

function onChildExpandChange(node: TreeNode, next: boolean): void {
  emit('expand-change', node, next);
}
</script>

<template>
  <ul class="xx-tree">
    <li v-for="node in data" :key="node.key" class="xx-tree__node">
      <button class="xx-tree__label" type="button" @click="onNodeClick(node)">
        <span class="xx-tree__arrow" :class="{ 'is-empty': !hasChildren(node) }">
          {{ hasChildren(node) ? (isExpanded(node) ? '▼' : '▶') : '•' }}
        </span>
        {{ node.label }}
      </button>
      <Tree
        v-if="hasChildren(node) && isExpanded(node)"
        :data="node.children"
        :default-expand-all="defaultExpandAll"
        :expand-on-click-node="expandOnClickNode"
        @node-click="onChildNodeClick"
        @expand-change="onChildExpandChange"
      />
    </li>
  </ul>
</template>

<style scoped>
.xx-tree {
  margin: 0;
  padding-left: 14px;
  list-style: none;
}

.xx-tree__node + .xx-tree__node {
  margin-top: 4px;
}

.xx-tree__label {
  border: 0;
  background: transparent;
  padding: 0;
  font-size: 13px;
  color: #303133;
  cursor: pointer;
}

.xx-tree__arrow {
  display: inline-block;
  min-width: 14px;
  color: #909399;
}

.xx-tree__arrow.is-empty {
  color: #c0c4cc;
}
</style>
