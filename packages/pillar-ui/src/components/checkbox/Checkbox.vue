<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: boolean;
    disabled?: boolean;
  }>(),
  {
    modelValue: false,
    disabled: false,
  },
);

const emit = defineEmits<{
  'update:modelValue': [boolean];
  change: [boolean];
}>();

function onChange(event: Event): void {
  const checked = (event.target as HTMLInputElement).checked;
  emit('update:modelValue', checked);
  emit('change', checked);
}
</script>

<template>
  <label class="xx-checkbox" :class="{ 'is-disabled': disabled }">
    <input type="checkbox" :checked="modelValue" :disabled="disabled" @change="onChange" />
    <span><slot /></span>
  </label>
</template>
