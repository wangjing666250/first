<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { AutoCompleteOption } from "./types";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    options?: AutoCompleteOption[];
    placeholder?: string;
    debounce?: number;
    highlight?: boolean;
  }>(),
  {
    modelValue: "",
    options: () => [],
    placeholder: "",
    debounce: 200,
    highlight: true,
  }
);

const emit = defineEmits<{
  "update:modelValue": [string];
  select: [AutoCompleteOption];
}>();

const keyword = ref(props.modelValue);
const open = ref(false);
const activeIndex = ref(-1);
let timer: ReturnType<typeof setTimeout> | null = null;

watch(
  () => props.modelValue,
  (value) => {
    keyword.value = value;
  }
);

const filteredOptions = computed(() => {
  const source = props.options ?? [];
  if (!keyword.value.trim()) return source;
  const k = keyword.value.toLowerCase();
  return source.filter((item) => item.label.toLowerCase().includes(k));
});

const hasOptions = computed(() => filteredOptions.value.length > 0);

function onInput(event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  keyword.value = value;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    emit("update:modelValue", value);
    open.value = true;
    activeIndex.value = -1;
  }, props.debounce);
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === "Escape") {
    open.value = false;
    return;
  }

  if (!open.value || filteredOptions.value.length === 0) return;

  if (event.key === "ArrowDown") {
    event.preventDefault();
    activeIndex.value = (activeIndex.value + 1) % filteredOptions.value.length;
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    activeIndex.value =
      activeIndex.value <= 0 ? filteredOptions.value.length - 1 : activeIndex.value - 1;
  } else if (event.key === "Enter" && activeIndex.value >= 0) {
    event.preventDefault();
    onSelect(filteredOptions.value[activeIndex.value]);
  }
}

function onSelect(option: AutoCompleteOption): void {
  keyword.value = option.label;
  emit("update:modelValue", option.value);
  emit("select", option);
  open.value = false;
}

function onBlur(): void {
  setTimeout(() => {
    open.value = false;
  }, 120);
}

function renderLabel(label: string): string {
  if (!props.highlight || !keyword.value.trim()) return label;
  const escaped = keyword.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const reg = new RegExp(`(${escaped})`, "ig");
  return label.replace(reg, "<mark>$1</mark>");
}
</script>

<template>
  <div class="xx-autocomplete">
    <input
      class="xx-autocomplete__input"
      :value="keyword"
      :placeholder="placeholder"
      @input="onInput"
      @keydown="onKeydown"
      @focus="open = true"
      @blur="onBlur"
    />

    <div v-if="open" class="xx-autocomplete__panel">
      <ul v-if="hasOptions" class="xx-autocomplete__list">
        <li
          v-for="(option, index) in filteredOptions"
          :key="option.value"
          :class="['xx-autocomplete__item', { 'is-active': index === activeIndex }]"
          @mousedown.prevent="onSelect(option)"
        >
          <span v-html="renderLabel(option.label)" />
        </li>
      </ul>

      <div v-else class="xx-autocomplete__empty">
        <slot name="empty">No matching data</slot>
      </div>
    </div>
  </div>
</template>
