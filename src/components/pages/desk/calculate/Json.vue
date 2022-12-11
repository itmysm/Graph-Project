<template>
  <div class="instagram--temp"></div>
</template>

<script setup>
import { get } from 'idb-keyval'
import { sortMessages } from '~~/src/scripts/calculations/sortMessages'
import { countMessages } from '~~/src/scripts/calculations/countMessages'
import { getDates } from '~~/src/scripts/calculations/dateMessagesSent'
import { whichTimeOfDay } from '~~/src/scripts/calculations/time/timeOfDay'
import { whichHoursOfDay } from '~~/src/scripts/calculations/time/hoursOfDay'

const startTime = performance.now()
const emit = defineEmits(['status'])

let dataChat = reactive({})
const result = reactive({ time: {} })
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
  whatTimeOfDayMessagesSent()
}

function whatTimeOfDayMessagesSent () {
  result.time.timeOfDay = whichTimeOfDay(dataChat)
  console.log(result.time.timeOfDay)
  whatHoursOfDayMessagesSent()
}

function whatHoursOfDayMessagesSent () {
  result.time.hoursOfDay = whichHoursOfDay(dataChat)
  console.log(result.time.hoursOfDay)
  finish()
}

function finish () {
  localStorage.setItem('result', JSON.stringify(result))
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}
</script>
