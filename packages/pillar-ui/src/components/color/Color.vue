<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string;
    disabled?: boolean;
    showPreset?: boolean;
    presets?: string[];
  }>(),
  {
    modelValue: '#409eff',
    disabled: false,
    showPreset: true,
    presets: () => ['#409eff', '#67c23a', '#e6a23c', '#f56c6c', '#909399'],
  },
);

const emit = defineEmits<{
  'update:modelValue': [string];
  change: [string];
}>();

function updateColor(value: string): void {
  emit('update:modelValue', value);
  emit('change', value);
}

function onInput(event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  updateColor(value);
}
</script>

<template>
  <div class="xx-color">
    <input class="xx-color__picker" type="color" :value="modelValue" :disabled="disabled" @input="onInput" />
    <span class="xx-color__value">{{ modelValue }}</span>
    <div v-if="showPreset" class="xx-color__preset">
      <button
        v-for="item in presets"
        :key="item"
        class="xx-color__dot"
        type="button"
        :style="{ background: item }"
        :disabled="disabled"
        @click="updateColor(item)"
      />
    </div>
  </div>
</template>

<style scoped>
.xx-color {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.xx-color__picker {
  width: 28px;
  height: 28px;
  border: 0;
  background: transparent;
  padding: 0;
}

.xx-color__value {
  min-width: 68px;
  font-size: 12px;
  color: #606266;
}

.xx-color__preset {
  display: inline-flex;
  gap: 6px;
}

.xx-color__dot {
  width: 14px;
  height: 14px;
  border: 1px solid #dcdfe6;
  border-radius: 50%;
  cursor: pointer;
}
</style>
