<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useRouter().push('/welcome')

onMounted(() => {
  const body = document.querySelector('body')
  body.setAttribute('data-theme', 'light')
  body.setAttribute('dir', 'ltr')
})
</script>
