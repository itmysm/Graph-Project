<!-- This file extracts the information from the html file and converts it into an object -->

<template>
  <div class="instagram--temp"></div>
</template>

<script setup>
import { get, set } from 'idb-keyval'
const startTime = performance.now()
const emit = defineEmits(['status'])

let dataChat = reactive({})
const result = reactive({})
const fileInfo = JSON.parse(localStorage.getItem('temporaryInfoFile'))
const minLimit = 4

onMounted(async () => {
  dataChat = await get('file').then((val) => JSON.parse(val))
  countMessages()
})

function countMessages () {
  let numberOfMessages = 0
  console.log(dataChat)
  dataChat.messages.forEach(element => {
    numberOfMessages++
  })
  result.numberOfMessages = numberOfMessages
  numberOfMessagesPerPerson()
}

function numberOfMessagesPerPerson () {
  const persons = {}
  dataChat.messages.forEach(person => {
    persons[person.name] === undefined ? persons[person.name] = 1 : persons[person.name]++
  })

  result.numberOfMessagesPerPerson = persons
  console.log(result)
  finish()
}

function exportDataFromDOM () {
  finish()
}

function finish () {
  localStorage.setItem('result', JSON.stringify(result))
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}
</script>
