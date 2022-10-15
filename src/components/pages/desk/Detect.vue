<template>
  <div></div>
</template>

<script setup>
import { get, set } from 'idb-keyval'
import { useMainStore } from '~/stores/index.js'
import { useAlerts } from '~/stores/alerts/alerts.js'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const mainStore = useMainStore()
const storeAlerts = useAlerts()
const startTime = performance.now()

const emit = defineEmits(['status'])
const minLimit = 3 // min 4 sec

checkFile()

async function checkFile () {
  const file = await get('currentUploadedFile').then((val) => JSON.parse(val))
  let app

  if (file.includes('height="28" alt="Instagram"')) {
    app = 'instagram'
  } else if (file.includes('Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.')) {
    app = 'whatsapp'
  } else if (file.includes('"Here is the data you requested. Remember: Telegram is ad free,')) {
    app = 'telegram'
  } else {
    app = false
  }

  app ? storeUploadedFileInIndexDB(file, app) : fileItsTrash()
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}

async function storeUploadedFileInIndexDB (fileContent, app) {
  const file = mainStore.$state.file
  if (!file.isFileExistInRecents) {
    // I create a file template and after this push information to it
    const tempFile = { name: file.fileName, size: file.fileSize, application: app, lastModified: file.fileLastModified, content: fileContent }

    // Get files from IndexDB
    const files = await get('allUploadedFiles').then(val => JSON.parse(val))

    // Add our file into files
    console.log(files)
    files[useFileNameSplitter(file.fileName, 'name').value + '_' + file.fileSize + '_' + file.fileLastModified] = tempFile
    console.log(files, tempFile)

    // Set files into IndexDB
    console.log('now?')
    set('allUploadedFiles', JSON.stringify(files))
  }
  // set file in temp localstorage
  localStorage.setItem('temporaryInfoFile', JSON.stringify({ application: app, extension: mainStore.$state.file.fileType }))
}

// This function is executed when user uploads a wrong file
function fileItsTrash () {
  storeAlerts.addNewAlert({ title: i18n.t('alertError'), description: i18n.t('alertErrorDescription'), type: 'error', button: false, duration: 12000, alertType: 0 })
  mainStore.resetFileValues()

  setTimeout(() => {
    useRouter().push('./')
  }, 3000)
}
</script>
