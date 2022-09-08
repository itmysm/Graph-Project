<!-- This file extracts the information from the html file and converts it into an object -->

<template>
  <div class="instagram--temp"></div>
</template>

<script setup>
import { get, set } from 'idb-keyval'

const startTime = performance.now()
const emit = defineEmits(['status'])

const fileInfo = JSON.parse(localStorage.getItem('temporaryInfoFile'))
const minLimit = fileInfo.application === 'instagram' ? 5 : 1

let content = reactive([])
const date = new Date()
let temp = reactive({})
const data = {
  chatName: '',
  type: '',
  messages: []
}

onMounted(async () => {
  if (fileInfo.application === 'instagram') {
    temp = document.querySelector('.instagram--temp')
    content = await get('file').then((val) => JSON.parse(val))
    injectionIntoDOM()
  }
})

function injectionIntoDOM () {
  content = content.replaceAll('src=', 'alt=') // prevent to load files doesn't exist
  temp.innerHTML = content
  exportDataFromDOM()
}

function exportDataFromDOM () {
  const messages = [...temp.querySelectorAll('.pam')] // every message have a .pam class
  data.chatName = temp.querySelector('._a70e').innerText
  data.type = document.querySelectorAll('._a6-h')[0].innerText.split(' ')[0] === 'Participants:' ? 'group' : 'private'

  // find & push exported items to data var
  // eslint-disable-next-line array-callback-return
  messages.map((msg) => {
    if (msg.querySelector('._a6-o').innerText !== '') {
      data.messages.push({ name: msg.querySelector('._2pim')?.innerText, date: date.getTime(msg.querySelector('._a6-o')?.innerText), message: msg.querySelector('._a6-p div :nth-child(2)')?.innerText }) // stable for english lang not another
    }
  })

  cleanDOM()
}

function cleanDOM () {
  temp.innerHTML = ''
  set('file', JSON.stringify(data))
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}
</script>
