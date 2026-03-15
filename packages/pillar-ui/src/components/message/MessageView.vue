<script setup lang="ts">
defineProps<{
  message: string;
  type: 'info' | 'success' | 'error';
}>();
</script>

<template>
  <div class="xx-message" :class="`xx-message--${type}`">
    {{ message }}
  </div>
</template>
