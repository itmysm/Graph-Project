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
  const countingMessage = {}
  const persons = []

  dataChat.messages.forEach(person => {
    countingMessage[person.name] === undefined ? countingMessage[person.name] = 1 : countingMessage[person.name]++
  })

  Object.keys(countingMessage).forEach(personName => {
    persons.push({name:personName, numOfMessages: countingMessage[personName]})
  })

  result.numberOfMessagesPerPerson = persons
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
