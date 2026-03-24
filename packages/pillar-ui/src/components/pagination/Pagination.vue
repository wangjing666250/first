<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: number;
    total?: number;
    pageSize?: number;
  }>(),
  {
    modelValue: 1,
    total: 0,
    pageSize: 10,
  },
);

const emit = defineEmits<{
  'update:modelValue': [number];
  change: [number];
}>();

const totalPages = computed(() => Math.max(1, Math.ceil(props.total / props.pageSize)));
const pages = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1));

function setPage(page: number): void {
  const next = Math.max(1, Math.min(totalPages.value, page));
  if (next === props.modelValue) return;
  emit('update:modelValue', next);
  emit('change', next);
}

function prev(): void {
  setPage(props.modelValue - 1);
}

function next(): void {
  setPage(props.modelValue + 1);
}
</script>

<template>
  <div class="xx-pagination">
    <button class="xx-pagination__btn" type="button" :disabled="modelValue <= 1" @click="prev">
      Prev
    </button>
    <button
      v-for="p in pages"
      :key="p"
      class="xx-pagination__btn"
      :class="{ 'is-active': p === modelValue }"
      type="button"
      @click="setPage(p)"
    >
      {{ p }}
    </button>
    <button
      class="xx-pagination__btn"
      type="button"
      :disabled="modelValue >= totalPages"
      @click="next"
    >
      Next
    </button>
  </div>
</template>
