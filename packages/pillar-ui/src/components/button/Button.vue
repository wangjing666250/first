<script setup lang="ts">
import { computed } from "vue";

type ButtonType = "default" | "primary" | "danger";
type ButtonSize = "small" | "medium" | "large";
type NativeType = "button" | "submit" | "reset";

const props = withDefaults(
  defineProps<{
    type?: ButtonType;
    size?: ButtonSize;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    loading?: boolean;
    nativeType?: NativeType;
  }>(),
  {
    type: "default",
    size: "medium",
    plain: false,
    round: false,
    circle: false,
    disabled: false,
    loading: false,
    nativeType: "button",
  }
);

const emit = defineEmits<{
  click: [MouseEvent];
}>();

const isDisabled = computed(() => props.disabled || props.loading);

const classList = computed(() => [
  "xx-button",
  `xx-button--${props.type}`,
  `xx-button--${props.size}`,
  {
    "is-plain": props.plain,
    "is-round": props.round,
    "is-circle": props.circle,
    "is-disabled": isDisabled.value,
    "is-loading": props.loading,
  },
]);

function onClick(event: MouseEvent): void {
  if (isDisabled.value) return;
  emit("click", event);
}
</script>

<template>
  <button :class="classList" :type="nativeType" :disabled="isDisabled" @click="onClick">
    <span v-if="loading" class="xx-button__loading" />
    <span v-else-if="$slots.icon" class="xx-button__icon">
      <slot name="icon" />
    </span>
    <span v-if="$slots.default" class="xx-button__text">
      <slot />
    </span>
  </button>
</template>
