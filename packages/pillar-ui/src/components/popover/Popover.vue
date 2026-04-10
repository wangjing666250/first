<script setup lang="ts">
import { ref } from 'vue';

withDefaults(
  defineProps<{
    content?: string;
    trigger?: 'hover' | 'click';
    placement?: 'top' | 'bottom' | 'left' | 'right';
  }>(),
  {
    content: '',
    trigger: 'hover',
    placement: 'top',
  },
);

const visible = ref(false);

function show(): void {
  visible.value = true;
}

function hide(): void {
  visible.value = false;
}

function toggle(): void {
  visible.value = !visible.value;
}
</script>

<template>
  <span
    class="xx-popover"
    @mouseenter="trigger === 'hover' ? show() : undefined"
    @mouseleave="trigger === 'hover' ? hide() : undefined"
  >
    <span class="xx-popover__reference" @click="trigger === 'click' ? toggle() : undefined">
      <slot />
    </span>
    <span v-if="visible" class="xx-popover__panel" :class="`is-${placement}`">
      <slot name="content">{{ content }}</slot>
    </span>
  </span>
</template>

<style scoped>
.xx-popover {
  position: relative;
  display: inline-flex;
}

.xx-popover__panel {
  position: absolute;
  z-index: 10;
  min-width: 120px;
  padding: 8px 10px;
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  background: #fff;
  color: #606266;
  font-size: 12px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 10%);
}

.xx-popover__panel.is-top {
  left: 50%;
  bottom: calc(100% + 8px);
  transform: translateX(-50%);
}

.xx-popover__panel.is-bottom {
  left: 50%;
  top: calc(100% + 8px);
  transform: translateX(-50%);
}

.xx-popover__panel.is-left {
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.xx-popover__panel.is-right {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}
</style>
