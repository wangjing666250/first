<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    percentage?: number;
    status?: 'default' | 'success' | 'warning' | 'error';
    showText?: boolean;
    strokeWidth?: number;
  }>(),
  {
    percentage: 0,
    status: 'default',
    showText: true,
    strokeWidth: 8,
  },
);

const safePercentage = computed(() => Math.max(0, Math.min(100, props.percentage)));
</script>

<template>
  <div class="xx-progress">
    <div class="xx-progress__track" :style="{ height: `${strokeWidth}px` }">
      <span class="xx-progress__bar" :class="`is-${status}`" :style="{ width: `${safePercentage}%` }" />
    </div>
    <span v-if="showText" class="xx-progress__text">{{ safePercentage }}%</span>
  </div>
</template>

<style scoped>
.xx-progress {
  display: flex;
  align-items: center;
  gap: 8px;
}

.xx-progress__track {
  width: 100%;
  border-radius: 999px;
  background: #ebeef5;
  overflow: hidden;
}

.xx-progress__bar {
  display: block;
  height: 100%;
  background: #409eff;
}

.xx-progress__bar.is-success {
  background: #67c23a;
}

.xx-progress__bar.is-warning {
  background: #e6a23c;
}

.xx-progress__bar.is-error {
  background: #f56c6c;
}

.xx-progress__text {
  color: #606266;
  font-size: 12px;
}
</style>
