<script setup lang="ts">
import type { DropdownOption } from './types';

withDefaults(
  defineProps<{
    modelValue?: string;
    options?: DropdownOption[];
    placeholder?: string;
    disabled?: boolean;
  }>(),
  {
    modelValue: '',
    options: () => [],
    placeholder: '请选择',
    disabled: false,
  },
);

const emit = defineEmits<{
  'update:modelValue': [string];
  change: [string];
}>();

function onChange(event: Event): void {
  const value = (event.target as HTMLSelectElement).value;
  emit('update:modelValue', value);
  emit('change', value);
}
</script>

<template>
  <select class="xx-dropdown" :value="modelValue" :disabled="disabled" @change="onChange">
    <option value="" disabled>{{ placeholder }}</option>
    <option v-for="item in options" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<style scoped>
.xx-dropdown {
  min-width: 180px;
  height: 32px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 8px;
  color: #303133;
  background: #fff;
}
</style>
