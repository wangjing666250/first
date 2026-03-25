<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    value?: string | number;
    type?: 'primary' | 'success' | 'warning' | 'danger';
    dot?: boolean;
    max?: number;
  }>(),
  {
    value: '',
    type: 'primary',
    dot: false,
    max: undefined,
  },
);

const displayValue = computed(() => {
  if (typeof props.value === 'number' && typeof props.max === 'number' && props.value > props.max) {
    return `${props.max}+`;
  }
  return props.value;
});
</script>

<template>
  <span class="xx-badge-wrap">
    <slot />
    <sup class="xx-badge" :class="[`is-${type}`, { 'is-dot': dot }]">
      <template v-if="!dot">{{ displayValue }}</template>
    </sup>
  </span>
</template>

<style scoped>
.xx-badge-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.xx-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  min-width: 18px;
  height: 18px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  font-size: 11px;
  color: #fff;
  box-sizing: border-box;
}

.xx-badge.is-dot {
  min-width: 8px;
  width: 8px;
  height: 8px;
  padding: 0;
  right: -4px;
}

.xx-badge.is-primary {
  background: #409eff;
}

.xx-badge.is-success {
  background: #67c23a;
}

.xx-badge.is-warning {
  background: #e6a23c;
}

.xx-badge.is-danger {
  background: #f56c6c;
}
</style>
