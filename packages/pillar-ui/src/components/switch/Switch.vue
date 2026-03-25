<script setup lang="ts">
const props = withDefaults(
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

function toggle(): void {
  if (props.disabled) return;
  const next = !props.modelValue;
  emit('update:modelValue', next);
  emit('change', next);
}
</script>

<template>
  <button
    class="xx-switch"
    :class="{ 'is-checked': modelValue, 'is-disabled': disabled }"
    type="button"
    @click="toggle"
  >
    <span class="xx-switch__dot" />
  </button>
</template>
