<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { provide } from 'vue'

const minimumScreenSize = 992 // px
const isUserDeviceSupported = ref(true)

onBeforeMount(() => {
  userHandler()
})
onMounted(() => {
  checkUserDevice()

  window.addEventListener('resize', () => {
    checkUserDevice()
  })

  setupApp()
})

function userHandler () {
  if (!localStorage.getItem('register')) {
    // create profile for new user
    const userData = {}
    userData.userTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' // getting browser theme
    userData.userId = new Date().getTime()
    userData.userDevice = navigator.userAgent
    userData.userLanguage = navigator.language

    localStorage.setItem('register', JSON.stringify(userData))
    // redirect to welcome page
    useRouter().push('/welcome')
  } else {
    useRouter().push('/')
  }
}

function setupApp () {
  const userData = useLocalStorageDecode('register').value
  const body = document.querySelector('body')
  body.setAttribute('data-theme', userData.userTheme)
  body.setAttribute('dir', useDirectionDetector(userData.language).value)
}

function checkUserDevice () {
  window.innerWidth < minimumScreenSize ? isUserDeviceSupported.value = false : isUserDeviceSupported.value = true
}

provide('isUserDeviceSupported', isUserDeviceSupported)
</script>

<style lang="scss">
html, body {
  max-height: 100vh;
  overflow: hidden;
}
</style>
