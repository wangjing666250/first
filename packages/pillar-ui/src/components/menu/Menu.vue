<script setup lang="ts">
import type { MenuItem } from './types';

withDefaults(
  defineProps<{
    active?: string;
    items?: MenuItem[];
    mode?: 'horizontal' | 'vertical';
    collapsed?: boolean;
  }>(),
  {
    active: '',
    items: () => [],
    mode: 'horizontal',
    collapsed: false,
  },
);

const emit = defineEmits<{
  select: [string];
  'update:active': [string];
}>();

function onSelect(item: MenuItem): void {
  if (item.disabled) return;
  emit('update:active', item.key);
  emit('select', item.key);
}
</script>

<template>
  <nav class="xx-menu" :class="[`is-${mode}`, { 'is-collapsed': collapsed }]">
    <button
      v-for="item in items"
      :key="item.key"
      class="xx-menu__item"
      :class="{ 'is-active': active === item.key, 'is-disabled': item.disabled }"
      type="button"
      @click="onSelect(item)"
    >
      {{ item.label }}
    </button>
  </nav>
</template>

<style scoped>
.xx-menu {
  display: inline-flex;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}

.xx-menu.is-vertical {
  display: grid;
}

.xx-menu__item {
  border: 0;
  background: #fff;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 12px;
  color: #606266;
}

.xx-menu__item + .xx-menu__item {
  border-left: 1px solid #e4e7ed;
}

.xx-menu.is-vertical .xx-menu__item + .xx-menu__item {
  border-left: 0;
  border-top: 1px solid #e4e7ed;
}

.xx-menu__item.is-active {
  background: #409eff;
  color: #fff;
}

.xx-menu__item.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>
