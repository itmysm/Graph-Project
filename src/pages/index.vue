<template>
  <div class="hideJustScrollBar max-w-[100%] w-full overflow-x-hidden mt-14 px-10">
    <PagesDashboardRecentFiles @recent-file="setUploadedFileInIndexDB($event); updateFile($event); updateFileStatusInStore($event);" />
    <commonUploadFile class="mt-5" @fileUpdated="updateFile" @is-file-allowed="notificationSender($event)" />
    <PagesDashboardTelegramChatsList @deactivate-component="nextStage"  v-if="telegramChatsList"/>
  </div>
</template>

<script setup>
import { set } from 'idb-keyval'
import { useMainStore } from '~/stores/index.js'
import { useAlerts } from '~/stores/alerts/alerts.js'
import { useI18n } from 'vue-i18n'
// eslint-disable-next-line no-undef
definePageMeta({
  layout: 'default'
})

const i18n = useI18n()
const storeAlerts = useAlerts()
const mainStore = useMainStore()
// eslint-disable-next-line prefer-const
let file = reactive({})
const telegramChatsList = ref(false)

function notificationSender (isFileAllowed) {
  if (isFileAllowed) {
    storeAlerts.addNewAlert({ title: i18n.t('alertUploadSuccessTitle'), description: i18n.t('alertUploadSuccessDescription'), type: 'success', button: false, duration: 2000, alertType: 0 })
    updateFileStatusInStore()
    isUploadedFileForTelegram()
  } else {
    storeAlerts.addNewAlert({ title: i18n.t('alertUploadErrorTitle'), description: 'alertUploadErrorDescription', type: 'error', button: false, duration: 5000, alertType: 0 })
  }
} // send a notification and update file

async function isUploadedFileForTelegram () {
  const fileContent = file.lastModifiedDate !== undefined ? await file.text() : JSON.stringify(file.content)
  if (fileContent.includes('Here is the data you requested. Remember: Telegram is ad free')) {
    telegramChatsList.value = true
  } else {
    nextStage()
  }
}

async function updateFileStatusInStore () {
  // prevent to update file when user upload repetitive file
  if (mainStore.$state.file.fileSize !== file.size) {
    mainStore.fileUpdate(file)
    if (file.lastModifiedDate !== undefined) setUploadedFileInIndexDB() // lastModifiedDate just exist in uploaded file not rewcent files
  }
  isUploadedFileForTelegram()
}

async function setUploadedFileInIndexDB (argFile = null) {
  const newFile = argFile == null ? await file.text() : argFile.content // File variable comes from two components, RecentFiles and FileUpload, that's why we used the condition.
  set('currentUploadedFile', JSON.stringify(newFile))
}

function updateFile (newFile) {
  file = newFile
} // update file content when user upload a new file

function nextStage (telegramChatsListStatus = null) {
  if (telegramChatsListStatus !== null) telegramChatsList.value = telegramChatsListStatus
  storeAlerts.addNewAlert({ title: i18n.t('alertChangeStageToDeskTitle'), description: i18n.t('alertChangeStageToDesk'), type: 'success', button: false, duration: 4000, alertType: 0 })

  setTimeout(() => {
    useRouter().push('/desk')
  }, 2000)
} // take the user to desk page
</script>

<style lang="scss" scoped>
</style>
