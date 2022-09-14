<template>
  <div></div>
</template>

<script setup>
import { get } from 'idb-keyval'
import { useMainStore } from '~/stores/index.js'

const mainStore = useMainStore()
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
  }

  localStorage.setItem('temporaryInfoFile', JSON.stringify({ application: app, extension: mainStore.$state.file.fileType }))
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}
</script>
