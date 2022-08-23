<template>
  <div class="layout">
    <slot v-if="isUserDeviceSupported"/>
    <TheLoading v-if="loading" />
    <TheUnsupported v-if="!isUserDeviceSupported"/>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const loading = ref(true)
const isUserDeviceSupported = inject('isUserDeviceSupported')

onMounted(() => {
  loading.value = false
})
</script>
