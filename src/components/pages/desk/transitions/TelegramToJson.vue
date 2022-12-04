<!-- This file extracts the information from the text file and converts it into an object/json -->

<template>
  <div class="telegram--temp"></div>
</template>

<script setup>
import { get, set } from 'idb-keyval'
const startTime = performance.now()
const emit = defineEmits(['status'])

const fileInfo = JSON.parse(localStorage.getItem('temporaryInfoFile'))
const minLimit = fileInfo.application === 'telegram' ? 5 : 1 // These numbers set the minimum duration of the operation

let data = reactive({})

onMounted(async () => {
  if (fileInfo.application === 'telegram') {
    data = await get('currentUploadedFile').then((val) => JSON.parse(JSON.parse(val)))
    data = content.chats.list[+localStorage.getItem('telegramSelectedChatIndex')]
  }
  finish()
})

function finish () {
  set('file', JSON.stringify(data))
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}
</script>
