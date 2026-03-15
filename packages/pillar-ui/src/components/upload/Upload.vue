<script setup lang="ts">
import { ref } from "vue";
import type { UploadFileItem, UploadRejectPayload, UploadRequestOption } from "./types";

const props = withDefaults(
  defineProps<{
    accept?: string;
    multiple?: boolean;
    maxSize?: number; // MB
    beforeUpload?: (file: File) => boolean | Promise<boolean>;
    request?: (option: UploadRequestOption) => Promise<void>;
  }>(),
  {
    accept: "",
    multiple: false,
    maxSize: 0,
    beforeUpload: undefined,
    request: undefined,
  }
);

const emit = defineEmits<{
  success: [UploadFileItem];
  error: [UploadFileItem, unknown];
  reject: [UploadRejectPayload];
}>();

const fileList = ref<UploadFileItem[]>([]);

function createUid(): string {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function parseAcceptList(accept: string): string[] {
  return accept
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

function matchAccept(file: File, accept: string): boolean {
  if (!accept) return true;

  const rules = parseAcceptList(accept);
  const fileName = file.name.toLowerCase();
  const fileType = file.type.toLowerCase();

  return rules.some((rule) => {
    if (rule.startsWith(".")) return fileName.endsWith(rule);
    if (rule.endsWith("/*")) return fileType.startsWith(rule.replace("/*", "/"));
    return fileType === rule;
  });
}

function rejectFile(file: File, reason: string): void {
  fileList.value.push({
    uid: createUid(),
    name: file.name,
    status: "rejected",
    reason,
  });
  emit("reject", { fileName: file.name, reason });
}

async function runUpload(file: File): Promise<void> {
  const item: UploadFileItem = {
    uid: createUid(),
    name: file.name,
    status: "ready",
  };
  fileList.value.push(item);

  try {
    if (props.request) {
      await props.request({ file });
    }
    item.status = "success";
    emit("success", item);
  } catch (error) {
    item.status = "error";
    emit("error", item, error);
  }
}

async function validateFile(file: File): Promise<boolean> {
  if (!matchAccept(file, props.accept)) {
    rejectFile(file, "File type is not accepted");
    return false;
  }

  if (props.maxSize > 0) {
    const sizeMb = file.size / 1024 / 1024;
    if (sizeMb > props.maxSize) {
      rejectFile(file, `File exceeds ${props.maxSize}MB limit`);
      return false;
    }
  }

  if (props.beforeUpload) {
    const valid = await props.beforeUpload(file);
    if (!valid) {
      rejectFile(file, "Rejected by beforeUpload");
      return false;
    }
  }

  return true;
}

async function onChange(event: Event): Promise<void> {
  const input = event.target as HTMLInputElement;
  const files = Array.from(input.files ?? []);

  for (const file of files) {
    const valid = await validateFile(file);
    if (!valid) continue;
    await runUpload(file);
  }

  input.value = "";
}
</script>

<template>
  <div class="xx-upload">
    <label class="xx-upload__trigger">
      <slot>
        <span>Select File</span>
      </slot>
      <input
        class="xx-upload__input"
        type="file"
        :accept="accept"
        :multiple="multiple"
        @change="onChange"
      />
    </label>

    <ul class="xx-upload__list">
      <li v-for="file in fileList" :key="file.uid" class="xx-upload__item">
        <span>{{ file.name }}</span>
        <em :class="`is-${file.status}`">
          {{ file.status }}<template v-if="file.reason"> ({{ file.reason }})</template>
        </em>
      </li>
    </ul>
  </div>
</template>
