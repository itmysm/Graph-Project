<template>
  <div class="layout">
    <slot v-if="!loading"/>
    <TheLoading v-if="loading" />
    <TheUnsupported v-if="false"/>
  </div>
</template>

<script setup>
const loading = ref(true)

onMounted(() => {
  loading.value = false
})
</script>
