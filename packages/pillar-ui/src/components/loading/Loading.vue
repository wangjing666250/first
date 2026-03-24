<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading?: boolean;
    text?: string;
    fullscreen?: boolean;
  }>(),
  {
    loading: false,
    text: '加载中...',
    fullscreen: false,
  },
);
</script>

<template>
  <div class="xx-loading-wrap" :class="{ 'is-fullscreen': fullscreen }">
    <slot />
    <div v-if="loading" class="xx-loading-mask">
      <span class="xx-loading-spinner" />
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<style scoped>
.xx-loading-wrap {
  position: relative;
}

.xx-loading-wrap.is-fullscreen {
  position: fixed;
  inset: 0;
  z-index: 2000;
}

.xx-loading-mask {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgb(255 255 255 / 85%);
  font-size: 13px;
  color: #606266;
}

.xx-loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid #dcdfe6;
  border-top-color: #409eff;
  border-radius: 50%;
  animation: xx-loading-spin 0.8s linear infinite;
}

@keyframes xx-loading-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
