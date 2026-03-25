<script setup lang="ts">
export interface SelectOption {
  label: string;
  value: string;
}

withDefaults(
  defineProps<{
    modelValue?: string;
    options?: SelectOption[];
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
  <select class="xx-select" :value="modelValue" :disabled="disabled" @change="onChange">
    <option value="" disabled>{{ placeholder }}</option>
    <option v-for="item in options" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>
