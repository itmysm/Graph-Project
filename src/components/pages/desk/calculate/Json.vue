<template>
  <div class="instagram--temp"></div>
</template>

<script setup>
import { get } from 'idb-keyval'
import { sortMessages } from '~~/src/scripts/calculations/sortMessages'
import { countMessages } from '~~/src/scripts/calculations/countMessages'
import { getDates } from '~~/src/scripts/calculations/dateMessagesSent'
import { whichTimeOfDay } from '~~/src/scripts/calculations/time/timeOfDay'

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
  sortAllMessages()
})

function sortAllMessages () {
  result.sortedMessages = sortMessages(dataChat)
  console.log(result.sortedMessages)
  countAllMessages() // call next func
}

function countAllMessages () {
  result.messages = countMessages(dataChat)
  dateMessagesSent() // call next func
}

// Calculate the time of sending messages
function dateMessagesSent () {
  result.messagesInMonths = getDates(dataChat)
  console.log(result.messagesInMonths)
  WhatTimeOfDayMessagesSent()
}

function WhatTimeOfDayMessagesSent () {
  result.time = { timeOfDay: whichTimeOfDay(dataChat) }
  console.log(result.time)
  finish()
}

function finish () {
  localStorage.setItem('result', JSON.stringify(result))
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}
</script>
