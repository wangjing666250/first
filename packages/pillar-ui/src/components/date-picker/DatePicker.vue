<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string;
    type?: 'date' | 'datetime-local';
    disabled?: boolean;
    min?: string;
    max?: string;
  }>(),
  {
    modelValue: '',
    type: 'date',
    disabled: false,
    min: '',
    max: '',
  },
);

const emit = defineEmits<{
  'update:modelValue': [string];
  change: [string];
}>();

function onChange(event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
  emit('change', value);
}
</script>

<template>
  <input
    class="xx-date-picker"
    :type="type"
    :value="modelValue"
    :disabled="disabled"
    :min="min || undefined"
    :max="max || undefined"
    @input="onChange"
  />
</template>

<style scoped>
.xx-date-picker {
  height: 32px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 8px;
  color: #303133;
  box-sizing: border-box;
}
</style>
