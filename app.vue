<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

onMounted(() => {
  document.querySelector('body').setAttribute('data-theme', 'light')
})

// import "@/assets/css/tailwind.css";
// import "@/assets/css/app.css";
</script>
