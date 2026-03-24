<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  code: string;
  docPath?: string;
}>();

const emit = defineEmits<{
  'view-doc': [string];
}>();

const showCode = ref(false);
const copied = ref(false);

function toggleCode(): void {
  showCode.value = !showCode.value;
}

async function copyCode(): Promise<void> {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    window.setTimeout(() => {
      copied.value = false;
    }, 1200);
  } catch {
    copied.value = false;
  }
}

function onViewDoc(): void {
  if (!props.docPath) return;
  emit('view-doc', props.docPath);
}
</script>

<template>
  <div class="demo-code-block">
    <pre v-if="showCode" class="demo-code-block__pre"><code>{{ props.code }}</code></pre>
    <div class="demo-code-block__toolbar">
      <button class="demo-code-block__action" type="button" :disabled="!props.docPath" @click="onViewDoc">
        查看文档
      </button>
      <span class="demo-code-block__sep" />
      <button class="demo-code-block__action" type="button" @click="copyCode">
        {{ copied ? '已复制' : '复制代码' }}
      </button>
      <span class="demo-code-block__sep" />
      <button class="demo-code-block__action" type="button" @click="toggleCode">
        {{ showCode ? '隐藏代码' : '显示代码' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.demo-code-block {
  margin-top: 0;
  border: 1px solid #eef0f3;
  border-top: 0;
  border-radius: 0 0 6px 6px;
  background: #fff;
}

.demo-code-block__toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 10px;
  height: 36px;
  border-top: 1px solid #eef0f3;
  background: #fafbfc;
}

.demo-code-block__action {
  border: 0;
  background: transparent;
  color: #909399;
  font-size: 12px;
  cursor: pointer;
}

.demo-code-block__action:hover {
  color: #409eff;
}

.demo-code-block__action:disabled {
  cursor: not-allowed;
  color: #c0c4cc;
}

.demo-code-block__sep {
  width: 1px;
  height: 12px;
  background: #dcdfe6;
}

.demo-code-block__pre {
  margin: 0;
  padding: 10px 12px;
  border-bottom: 1px solid #eef0f3;
  background: #f8f9fb;
  color: #2c3e50;
  font-size: 12px;
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre-wrap;
}
</style>
