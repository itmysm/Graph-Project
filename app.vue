<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useRouter().push('/welcome')

onMounted(() => {
  document.querySelector('body').setAttribute('data-theme', 'light')
})
</script>
