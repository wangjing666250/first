<script setup lang="ts">
import DemoCodeBlock from '../../components/DemoCodeBlock.vue';

const props = defineProps<{
  docPath: string;
  page: number;
  smallPage: number;
  demoCode: {
    pageBasic: string;
    pageSmall: string;
  };
}>();

const emit = defineEmits<{
  'update:page': [number];
  'update:smallPage': [number];
  viewDoc: [string];
}>();

function onViewDoc(path: string): void {
  emit('viewDoc', path);
}
</script>

<template>
  <section class="demo-card">
    <h3>分页 Pagination</h3>
    <p class="demo-desc">覆盖普通分页和小数据量分页边界。</p>
    <div class="demo-preview">
      <XxPagination :model-value="props.page" :total="96" :page-size="10" @update:model-value="emit('update:page', $event)" />
    </div>
    <p>当前页码：第 {{ props.page }} 页</p>
    <DemoCodeBlock :code="props.demoCode.pageBasic" :doc-path="props.docPath" @view-doc="onViewDoc" />

    <h4 class="demo-subtitle">小数据量示例（total=15, pageSize=10）</h4>
    <div class="demo-preview">
      <XxPagination
        :model-value="props.smallPage"
        :total="15"
        :page-size="10"
        @update:model-value="emit('update:smallPage', $event)"
      />
    </div>
    <p>小数据集当前页：第 {{ props.smallPage }} 页</p>
    <DemoCodeBlock :code="props.demoCode.pageSmall" :doc-path="props.docPath" @view-doc="onViewDoc" />
  </section>
</template>

