<template>
  <div class="instagram--temp"></div>
</template>

<script setup>
import { get } from 'idb-keyval'
import { countMessages } from '~~/src/scripts/calculations/countMessages'
import { timeSentMessagesFunc } from '~~/src/scripts/calculations/timeSentMessages'

const startTime = performance.now()
const emit = defineEmits(['status'])

let dataChat = reactive({})
const result = reactive({})
// const fileInfo = JSON.parse(localStorage.getItem('temporaryInfoFile'))
const minLimit = 4

onMounted(async () => {
  dataChat = await get('file').then((val) => JSON.parse(val))
  console.log(dataChat)
  countAllMessages()
})

function countAllMessages () {
  result.messages = countMessages(dataChat)
  console.log(result.messages)
  timeSentMessages() // call next func
}

// Calculate the time of sending messages
function timeSentMessages () {
  timeSentMessagesFunc(dataChat)
  finish()
}

function finish () {
  localStorage.setItem('result', JSON.stringify(result))
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}
</script>
