<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
  }>(),
  {
    modelValue: "",
    placeholder: "",
    disabled: false,
    clearable: false,
  }
);

const emit = defineEmits<{
  "update:modelValue": [string];
  input: [string];
  clear: [];
}>();

const showClear = computed(
  () => props.clearable && !props.disabled && !!props.modelValue
);

function onInput(event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
  emit("input", value);
}

function onClear(): void {
  emit("update:modelValue", "");
  emit("input", "");
  emit("clear");
}
</script>

<template>
  <div class="xx-input-wrap" :class="{ 'is-disabled': disabled }">
    <span v-if="$slots.prefix" class="xx-input__prefix">
      <slot name="prefix" />
    </span>

    <input
      class="xx-input"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput"
    />

    <button v-if="showClear" class="xx-input__clear" type="button" @click="onClear">
      ×
    </button>

    <span v-if="$slots.suffix" class="xx-input__suffix">
      <slot name="suffix" />
    </span>
  </div>
</template>
