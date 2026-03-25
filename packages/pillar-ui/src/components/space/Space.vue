<script setup lang="ts">
import { computed } from 'vue';
import type { CSSProperties } from 'vue';

const props = withDefaults(
  defineProps<{
    size?: number;
    direction?: 'horizontal' | 'vertical';
    wrap?: boolean;
  }>(),
  {
    size: 12,
    direction: 'horizontal',
    wrap: false,
  },
);

const styleObject = computed<CSSProperties>(() => ({
  display: 'flex',
  gap: `${props.size}px`,
  flexDirection: props.direction === 'vertical' ? 'column' : 'row',
  flexWrap: props.wrap ? 'wrap' : 'nowrap',
  alignItems: props.direction === 'vertical' ? 'stretch' : 'center',
}));
</script>

<template>
  <div class="xx-space" :style="styleObject">
    <slot />
  </div>
</template>

<style scoped>
.xx-space {
  width: fit-content;
}
</style>
