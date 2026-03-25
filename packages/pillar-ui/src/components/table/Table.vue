<script setup lang="ts">
import type { TableColumn } from './types';

withDefaults(
  defineProps<{
    columns?: TableColumn[];
    data?: Record<string, unknown>[];
    striped?: boolean;
    bordered?: boolean;
  }>(),
  {
    columns: () => [],
    data: () => [],
    striped: false,
    bordered: true,
  },
);
</script>

<template>
  <table class="xx-table" :class="{ 'is-striped': striped, 'is-bordered': bordered }">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.key">
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="column in columns" :key="column.key">
          {{ row[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
