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

const regex = {
  getMonth: /((?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Sept|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?))/,
  getDay: /\d?\d/,
  getYear: /\b(19|20)\d\d\b/,
  getHour: /([01]?[0-9]|2[0-3]):[0-5][0-9]/
}

onMounted(async () => {
  if (fileInfo.application === 'instagram') {
    temp = document.querySelector('.instagram--temp')
    content = await get('currentUploadedFile').then((val) => JSON.parse(val))
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
      data.messages.push({ name: msg.querySelector('._2pim')?.innerText, date: convertDate(msg.querySelector('._a6-o')?.innerText), time: msg.querySelector('._a6-o')?.innerText.match(regex.getHour)[0] , message: msg.querySelector('._a6-p div :nth-child(2)')?.innerText }) // stable for english lang not another
    }
  })

  cleanDOM()
}


function convertDate (date) {
  let month = getMonthFromString(date.match(regex.getMonth)[0])
  let day = date.match(regex.getDay)[0]
  let year = date.match(regex.getYear)[0]
  let hour = date.match(regex.getHour)[0]
  return toTimestamp(`${month}/${day}/${year} ${hour}:30`)
}

function getMonthFromString(mon){
   return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
}

function toTimestamp(strDate){
  return Date.parse(strDate) / 1000
}

function cleanDOM () {
  temp.innerHTML = ''
  set('file', JSON.stringify(data))
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}
</script>
