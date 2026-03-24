<script setup lang="ts">
import DemoCodeBlock from '../../components/DemoCodeBlock.vue';

interface ColumnItem {
  key: string;
  title: string;
}

interface RowItem {
  [key: string]: unknown;
}

const props = defineProps<{
  docPath: string;
  columns: ColumnItem[];
  tableData: RowItem[];
  demoCode: {
    tableStriped: string;
    tableBorderless: string;
    tableEmpty: string;
  };
}>();

const emit = defineEmits<{
  viewDoc: [string];
}>();

function onViewDoc(path: string): void {
  emit('viewDoc', path);
}
</script>

<template>
  <section class="demo-card">
    <h3>表格 Table</h3>
    <p class="demo-desc">覆盖默认边框、斑马纹、空数据态。</p>

    <h4 class="demo-subtitle">边框 + 斑马纹</h4>
    <div class="demo-preview">
      <XxTable :columns="props.columns" :data="props.tableData" striped />
    </div>
    <DemoCodeBlock :code="props.demoCode.tableStriped" :doc-path="props.docPath" @view-doc="onViewDoc" />

    <h4 class="demo-subtitle">无边框（bordered = false）</h4>
    <div class="demo-preview">
      <XxTable :columns="props.columns" :data="props.tableData" :bordered="false" />
    </div>
    <DemoCodeBlock :code="props.demoCode.tableBorderless" :doc-path="props.docPath" @view-doc="onViewDoc" />

    <h4 class="demo-subtitle">空数据态</h4>
    <div class="demo-preview">
      <XxTable :columns="props.columns" :data="[]" />
    </div>
    <DemoCodeBlock :code="props.demoCode.tableEmpty" :doc-path="props.docPath" @view-doc="onViewDoc" />
  </section>
</template>

