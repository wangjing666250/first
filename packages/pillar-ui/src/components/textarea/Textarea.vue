<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    rows?: number;
    placeholder?: string;
    disabled?: boolean;
    maxlength?: number;
  }>(),
  {
    modelValue: '',
    rows: 4,
    placeholder: '',
    disabled: false,
    maxlength: undefined,
  },
);

const emit = defineEmits<{
  'update:modelValue': [string];
  input: [string];
}>();

function onInput(event: Event): void {
  const value = (event.target as HTMLTextAreaElement).value;
  emit('update:modelValue', value);
  emit('input', value);
}
</script>

<template>
  <textarea
    class="xx-textarea"
    :value="modelValue"
    :rows="rows"
    :placeholder="placeholder"
    :disabled="disabled"
    :maxlength="maxlength"
    @input="onInput"
  />
</template>

<style scoped>
.xx-textarea {
  width: 100%;
  min-height: 96px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  padding: 10px 12px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  color: #303133;
  resize: vertical;
}

.xx-textarea:focus {
  border-color: #409eff;
  outline: none;
}

.xx-textarea:disabled {
  background: #f5f7fa;
  color: #909399;
  cursor: not-allowed;
}
</style>
