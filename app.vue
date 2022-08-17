<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

onMounted(() => {
  document.querySelector('body').setAttribute('data-theme', 'light')
})
</script>
