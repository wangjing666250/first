<script setup lang="ts">
import Button from '../button/Button.vue';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    title?: string;
    content?: string;
    confirmType?: 'primary' | 'danger';
    closeOnMask?: boolean;
  }>(),
  {
    modelValue: false,
    title: '请确认',
    content: '',
    confirmType: 'primary',
    closeOnMask: false,
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
  emit('update:modelValue', false);
}
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="xx-confirm">
      <div class="xx-confirm__mask" @click="closeByMask" />
      <div class="xx-confirm__panel">
        <header class="xx-confirm__header">{{ title }}</header>
        <section class="xx-confirm__body">{{ content }}</section>
        <footer class="xx-confirm__footer">
          <Button @click="onCancel">取消</Button>
          <Button :type="confirmType" @click="onConfirm">确认</Button>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.xx-confirm {
  position: fixed;
  inset: 0;
  z-index: 2100;
}

.xx-confirm__mask {
  position: absolute;
  inset: 0;
  background: rgb(0 0 0 / 45%);
}

.xx-confirm__panel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
}

.xx-confirm__header {
  padding: 14px 16px;
  border-bottom: 1px solid #ebeef5;
  font-weight: 600;
}

.xx-confirm__body {
  padding: 18px 16px;
  color: #606266;
}

.xx-confirm__footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid #ebeef5;
}
</style>
