<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { provide } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMainStore } from './stores/index.js'
import { set } from 'idb-keyval'
const minimumScreenSize = 992 // px
const isUserDeviceSupported = ref(true)
const i18n = useI18n()

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
    registerUser()
    registerIndexDB()
    // create profile for new user
    useMainStore().setDefaultSettingOnLocaleStorage()
    // redirect to welcome page
    useRouter().push('/welcome')
  } else {
    useMainStore().setSettingsOnState()
    useRouter().push('/')
  }
}

function setupApp () {
  const settings = useLocalStorageDecode('settings').value
  selectAppLang(settings.language)
  applayTheme(settings.themes)
}

function checkUserDevice () {
  window.innerWidth < minimumScreenSize ? isUserDeviceSupported.value = false : isUserDeviceSupported.value = true
  if (window.indexedDB === null) {
    alert("this browser dosen't support indexDB! \n * update your browser to last version and try again!")
  }
}

function selectAppLang (languages) {
  const html = document.querySelector('html')
  // eslint-disable-next-line array-callback-return
  languages.map(language => {
    if (language.default) {
      html.setAttribute('dir', language.direction)
      html.setAttribute('lang', language.lang)
      i18n.locale.value = language.lang
      language.lang === 'fa' ? document.querySelector('body').classList.add('font-sans') : document.querySelector('body').classList.add('font-sans')
    }
  })
}

function applayTheme (themes) {
  const body = document.querySelector('body')
  const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  // eslint-disable-next-line array-callback-return
  themes.map(theme => {
    if (theme.default) {
      body.setAttribute('data-theme', theme.name === 'defaultMode' ? systemTheme : theme.name.toLocaleLowerCase().split('mode')[0])
    }
  })
}

function registerUser () {
  const userData = {}
  userData.userId = new Date().getTime()
  userData.userDevice = navigator.userAgent
  userData.userLanguage = navigator.language
  localStorage.setItem('register', JSON.stringify(userData))
}

function registerIndexDB () {
  set('currentUploadedFile', JSON.stringify({})) // for current uploaded file
  set('allUploadedFiles', JSON.stringify({})) // store all uploaded file in indexDB
}

provide('isUserDeviceSupported', isUserDeviceSupported)
</script>

<style lang="scss">
html,
body {
  max-height: 100vh;
  overflow: hidden;
}
</style>
