<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string;
    size?: number | string;
    color?: string;
  }>(),
  {
    name: '',
    size: 16,
    color: 'currentColor',
  },
);

const emit = defineEmits<{
  click: [string];
}>();

function onClick(): void {
  emit('click', props.name);
}
</script>

<template>
  <span
    class="xx-icon"
    :style="{ fontSize: typeof size === 'number' ? `${size}px` : size, color }"
    role="img"
    :aria-label="name"
    @click="onClick"
  >
    <slot>{{ name }}</slot>
  </span>
</template>

<style scoped>
.xx-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: pointer;
}
</style>
