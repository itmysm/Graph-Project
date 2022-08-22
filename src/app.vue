<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { provide } from 'vue'


const appInfo = reactive({ screenSize: 0, timeSpend: 0 })

onBeforeMount(() => {
  if (!localStorage.getItem('register')) {
    const userData = {}
    userData.userTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' // getting browser theme
    userData.userId = new Date().getTime() // date register
    userData.userDevice = navigator.userAgent
    userData.userLanguage = navigator.language
    localStorage.setItem('register', JSON.stringify(userData))
    useRouter().push('/welcome')
  } else {
    useRouter().push('/')
  }
})
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
