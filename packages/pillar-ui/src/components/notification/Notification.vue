<script setup lang="ts">
import type { NotificationItem } from './types';

withDefaults(
  defineProps<{
    list?: NotificationItem[];
  }>(),
  {
    list: () => [],
  },
);

const emit = defineEmits<{
  close: [number | string];
}>();

function onClose(id: number | string): void {
  emit('close', id);
}
</script>

<template>
  <div class="xx-notification">
    <article v-for="item in list" :key="item.id" class="xx-notification__item" :class="`is-${item.type ?? 'info'}`">
      <header class="xx-notification__header">
        <strong>{{ item.title }}</strong>
        <button type="button" @click="onClose(item.id)">×</button>
      </header>
      <p>{{ item.message }}</p>
    </article>
  </div>
</template>

<style scoped>
.xx-notification {
  display: grid;
  gap: 8px;
}

.xx-notification__item {
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  background: #fff;
  padding: 10px;
}

.xx-notification__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.xx-notification__header button {
  border: 0;
  background: transparent;
  color: #909399;
  cursor: pointer;
}

.xx-notification__item p {
  margin: 0;
  color: #606266;
  font-size: 12px;
}

.xx-notification__item.is-success {
  border-color: #b3e19d;
  background: #f0f9eb;
}

.xx-notification__item.is-warning {
  border-color: #f3d19e;
  background: #fdf6ec;
}

.xx-notification__item.is-error {
  border-color: #fab6b6;
  background: #fef0f0;
}
</style>
