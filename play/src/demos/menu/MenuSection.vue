<script setup lang="ts">
import DemoCodeBlock from '../../components/DemoCodeBlock.vue';

interface MenuItem {
  key: 'dashboard' | 'users' | 'settings';
  label: string;
}

const props = defineProps<{
  docPath: string;
  menuItems: MenuItem[];
  menuActive: 'dashboard' | 'users' | 'settings';
  menuDarkActive: 'dashboard' | 'users' | 'settings';
  menuBrandActive: 'dashboard' | 'users' | 'settings';
  menuVerticalActive: 'dashboard' | 'users' | 'settings';
  demoCode: {
    menuBasic: string;
    menuDark: string;
    menuBrand: string;
    menuVertical: string;
  };
}>();

const emit = defineEmits<{
  'update:menuActive': ['dashboard' | 'users' | 'settings'];
  'update:menuDarkActive': ['dashboard' | 'users' | 'settings'];
  'update:menuBrandActive': ['dashboard' | 'users' | 'settings'];
  'update:menuVerticalActive': ['dashboard' | 'users' | 'settings'];
  viewDoc: [string];
}>();

function onViewDoc(path: string): void {
  emit('viewDoc', path);
}
</script>

<template>
  <section class="demo-card">
    <h3>菜单 Menu</h3>
    <p class="demo-desc">用于应用导航入口管理，支持主题色和布局定制。</p>
    <h4 class="demo-subtitle">水平菜单示例</h4>
    <div class="demo-preview">
      <XxMenu :active="props.menuActive" :items="props.menuItems" @update:active="emit('update:menuActive', $event)" />
      <p class="demo-note">当前菜单：{{ props.menuActive }}</p>
    </div>
    <DemoCodeBlock :code="props.demoCode.menuBasic" :doc-path="props.docPath" @view-doc="onViewDoc" />

    <h4 class="demo-subtitle">设置 theme 为黑色（暗色菜单）</h4>
    <div class="demo-preview menu-theme-dark">
      <XxMenu
        :active="props.menuDarkActive"
        :items="props.menuItems"
        @update:active="emit('update:menuDarkActive', $event)"
      />
    </div>
    <DemoCodeBlock :code="props.demoCode.menuDark" :doc-path="props.docPath" @view-doc="onViewDoc" />

    <h4 class="demo-subtitle">自定义颜色</h4>
    <p class="demo-desc">通过业务类名覆盖 Menu 样式，定制品牌主色。</p>
    <div class="demo-preview menu-theme-brand">
      <XxMenu
        :active="props.menuBrandActive"
        :items="props.menuItems"
        @update:active="emit('update:menuBrandActive', $event)"
      />
    </div>
    <DemoCodeBlock :code="props.demoCode.menuBrand" :doc-path="props.docPath" @view-doc="onViewDoc" />

    <h4 class="demo-subtitle">垂直模式（布局自定义）</h4>
    <div class="demo-preview menu-theme-vertical">
      <XxMenu
        :active="props.menuVerticalActive"
        :items="props.menuItems"
        mode="vertical"
        @update:active="emit('update:menuVerticalActive', $event)"
      />
    </div>
    <DemoCodeBlock :code="props.demoCode.menuVertical" :doc-path="props.docPath" @view-doc="onViewDoc" />
  </section>
</template>

