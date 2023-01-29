<script setup lang="ts">
import { onMounted } from 'vue'
import { useMainStore } from './stores/main'

onMounted(() => {
  useMainStore().setTheme()
})
</script>

<template>
  <RouterView />
</template>
