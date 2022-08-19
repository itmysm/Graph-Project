<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { provide } from 'vue'

useRouter().push('/welcome')
const appInfo = reactive({ screenSize: 0, timeSpend: 0 })

onMounted(() => {
  const body = document.querySelector('body')
  body.setAttribute('data-theme', 'light')
  body.setAttribute('dir', 'ltr')

  window.addEventListener(window, () => {
    appInfo.screenSize = window.innerWidth
  })

  setTimeout(() => {
    appInfo.timeSpend++
  }, 1000)
})

provide('appInfo', appInfo)
</script>
