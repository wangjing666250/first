<script setup lang="ts">
import { Message } from "@xx-ui/pillar-ui";

import { ref } from "vue";
const inputValue = ref("");
const keyword = ref("");
// const buttonTemplate = `<XxButton type="primary">Primary</XxButton>`;

// async function copyButtonTemplate(): Promise<void> {
//   try {
//     await navigator.clipboard.writeText(buttonTemplate);
//     Message({ message: "Button 模板已复制", type: "success" });
//   } catch {
//     Message({ message: "复制失败，请检查浏览器权限", type: "error" });
//   }
// }
const options = [
  { label: "Vue", value: "vue" },
  { label: "Vite", value: "vite" },
  { label: "Vitest", value: "vitest" },
  { label: "TypeScript", value: "typescript" },
];

function showMessage(): void {
  Message({
    message: "Hello from XX-UI",
    type: "success",
  });
}

async function fakeUpload({ file }: { file: File }): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (!file.name.endsWith(".png")) {
    throw new Error("Only .png is accepted in demo");
  }
}
</script>

<template>
  <main>
    <h1>XX-UI Playground</h1>

    <section class="demo-card">
      <h3>Button + Message</h3>
      <div class="demo-row">
        <XxButton type="primary" @click="showMessage">Primary</XxButton>
        <XxButton type="danger">Danger</XxButton>
      </div>
    </section>
    <section class="demo-card">
      <h3>Button States</h3>
      <div class="demo-row">
        <XxButton type="primary">Primary</XxButton>
        <XxButton type="primary" plain>Primary Plain</XxButton>

        <XxButton round>Round</XxButton>
        <XxButton circle>
          <template #icon>+</template>
        </XxButton>
        <XxButton type="danger" :loading="true">Loading</XxButton>
        <XxButton :disabled="true">Disabled</XxButton>
      </div>
    </section>

    <section class="demo-card">
      <h3>Input</h3>
      <div class="demo-row" style="width: 520px">
        <XxInput v-model="inputValue" placeholder="Type something" clearable>
          <template #prefix>🔍</template>
          <template #suffix>{{ inputValue.length }}/20</template>
        </XxInput>
      </div>
      <p>value: {{ inputValue }}</p>
    </section>

    <section class="demo-card">
      <h3>AutoComplete</h3>
      <div class="demo-row">
        <XxAutoComplete v-model="keyword" :options="options" placeholder="search">
          <template #empty>
            <span style="color: #f56c6c">没有匹配结果</span>
          </template>
        </XxAutoComplete>
        <span>selected: {{ keyword }}</span>
      </div>
    </section>

    <section class="demo-card">
      <h3>Upload</h3>
      <XxUpload :max-size="0.1" :request="fakeUpload" />
    </section>
  </main>
</template>
