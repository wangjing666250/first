<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    title?: string;
    size?: string;
    placement?: 'left' | 'right';
    closeOnMask?: boolean;
  }>(),
  {
    modelValue: false,
    title: '抽屉',
    size: '360px',
    placement: 'right',
    closeOnMask: true,
  },
);

const emit = defineEmits<{
  'update:modelValue': [boolean];
  close: [];
}>();

function close(): void {
  emit('update:modelValue', false);
  emit('close');
}

function onMask(): void {
  if (!props.closeOnMask) return;
  close();
}
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="xx-drawer">
      <div class="xx-drawer__mask" @click="onMask" />
      <aside class="xx-drawer__panel" :class="`is-${placement}`" :style="{ width: size }">
        <header class="xx-drawer__header">
          <strong>{{ title }}</strong>
          <button class="xx-drawer__close" type="button" @click="close">×</button>
        </header>
        <section class="xx-drawer__body">
          <slot />
        </section>
      </aside>
    </div>
  </Teleport>
</template>
