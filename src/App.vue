<script setup lang="ts">
import { onMounted } from 'vue'
import { useMainStore } from './stores/main'
import { setLocation } from '@/utils/getUserLocation'

onMounted(async () => {
  await setLocation()
  useMainStore().setTheme()
})
</script>

<template>
  <RouterView />
</template>
