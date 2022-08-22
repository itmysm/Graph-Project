<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
onBeforeMount(() => {
  userHandler()
})
onMounted(() => {
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
</script>
