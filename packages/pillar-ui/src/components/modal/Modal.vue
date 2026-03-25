<script setup lang="ts">
import Button from '../button/Button.vue';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    title?: string;
    width?: string;
    closeOnMask?: boolean;
  }>(),
  {
    modelValue: false,
    title: '提示',
    width: '520px',
    closeOnMask: true,
  },
);

const emit = defineEmits<{
  'update:modelValue': [boolean];
  confirm: [];
  cancel: [];
}>();

function closeByMask(): void {
  if (!props.closeOnMask) return;
  emit('update:modelValue', false);
  emit('cancel');
}

function onCancel(): void {
  emit('update:modelValue', false);
  emit('cancel');
}

function onConfirm(): void {
  emit('confirm');
}
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="xx-modal">
      <div class="xx-modal__mask" @click="closeByMask" />
      <div class="xx-modal__panel" :style="{ width }">
        <header class="xx-modal__header">
          <strong>{{ title }}</strong>
        </header>
        <section class="xx-modal__body">
          <slot />
        </section>
        <footer class="xx-modal__footer">
          <slot name="footer">
            <Button @click="onCancel">取消</Button>
            <Button type="primary" @click="onConfirm">确认</Button>
          </slot>
        </footer>
      </div>
    </div>
  </Teleport>
</template>
