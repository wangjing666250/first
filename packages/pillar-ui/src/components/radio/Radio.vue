<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    value?: string | number;
    disabled?: boolean;
  }>(),
  {
    modelValue: '',
    value: '',
    disabled: false,
  },
);

const emit = defineEmits<{
  'update:modelValue': [string | number];
  change: [string | number];
}>();

function onChange(): void {
  emit('update:modelValue', props.value);
  emit('change', props.value);
}
</script>

<template>
  <label class="xx-radio" :class="{ 'is-disabled': disabled }">
    <input
      type="radio"
      :checked="props.modelValue === props.value"
      :disabled="disabled"
      @change="onChange"
    />
    <span><slot /></span>
  </label>
</template>
