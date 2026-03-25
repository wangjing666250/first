<script setup lang="ts">
import { computed } from 'vue';

type Rule = {
  field: string;
  required?: boolean;
  validator?: (value: unknown, model: Record<string, unknown>) => string | null;
  message?: string;
};

const props = withDefaults(
  defineProps<{
    model?: Record<string, unknown>;
    rules?: Rule[];
    layout?: 'inline' | 'vertical';
    labelWidth?: number | string;
  }>(),
  {
    model: () => ({}),
    rules: () => [],
    layout: 'vertical',
    labelWidth: 96,
  },
);

const emit = defineEmits<{
  submit: [Record<string, unknown>];
  'validate-error': [string[]];
}>();

const labelWidthStyle = computed(() => ({
  width: typeof props.labelWidth === 'number' ? `${props.labelWidth}px` : props.labelWidth,
}));

function runValidate(): string[] {
  const errors: string[] = [];
  props.rules.forEach((rule) => {
    const value = props.model[rule.field];
    if (rule.required && (value === '' || value === undefined || value === null)) {
      errors.push(rule.message ?? `${rule.field} 必填`);
      return;
    }
    if (rule.validator) {
      const msg = rule.validator(value, props.model);
      if (msg) errors.push(msg);
    }
  });
  return errors;
}

function onSubmit(): void {
  const errors = runValidate();
  if (errors.length > 0) {
    emit('validate-error', errors);
    return;
  }
  emit('submit', props.model);
}
</script>

<template>
  <div class="xx-form-pro" :class="`is-${layout}`">
    <div class="xx-form-pro__content">
      <slot :label-width-style="labelWidthStyle" />
    </div>
    <div class="xx-form-pro__actions">
      <slot name="actions">
        <button type="button" class="xx-form-pro__submit" @click="onSubmit">提交</button>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.xx-form-pro {
  display: grid;
  gap: 12px;
}

.xx-form-pro.is-inline .xx-form-pro__content {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.xx-form-pro__submit {
  border: 1px solid #409eff;
  border-radius: 4px;
  background: #409eff;
  color: #fff;
  height: 32px;
  padding: 0 12px;
  cursor: pointer;
}
</style>
