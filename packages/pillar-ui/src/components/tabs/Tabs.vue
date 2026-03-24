<script setup lang="ts">
import type { TabItem } from './types';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    items?: TabItem[];
  }>(),
  {
    modelValue: '',
    items: () => [],
  },
);

const emit = defineEmits<{
  'update:modelValue': [string];
  change: [string];
}>();

function onSelect(item: TabItem): void {
  if (item.disabled) return;
  emit('update:modelValue', item.value);
  emit('change', item.value);
}
</script>

<template>
  <div class="xx-tabs">
    <button
      v-for="item in props.items"
      :key="item.value"
      class="xx-tabs__tab"
      :class="{ 'is-active': modelValue === item.value, 'is-disabled': item.disabled }"
      type="button"
      @click="onSelect(item)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
