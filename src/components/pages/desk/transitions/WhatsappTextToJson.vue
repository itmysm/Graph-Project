<!-- This file extracts the information from the text file and converts it into an object/json -->

<template>
  <div class="whatsapp--temp"></div>
</template>

<script setup>
import { get, set } from 'idb-keyval'

const startTime = performance.now()
const emit = defineEmits(['status'])

const fileInfo = JSON.parse(localStorage.getItem('temporaryInfoFile'))
const minLimit = fileInfo.application === 'whatsapp' ? 5 : 1

let content = reactive([])

// eslint-disable-next-line no-useless-escape
const regxDate = /([0-9]{1,2}[\/][0-9]{1,2}[\/][0-9]{1,4})/
const regxTime = /([0-9]{1,2}:[0-9]{1,2}) \w\w/
// eslint-disable-next-line no-useless-escape
const regexDateAndTime = /([0-9]{1,2}[\/][0-9]{1,2}[\/][0-9]{1,4}), ([0-9]{1,2}:[0-9]{1,2}) \w\w - /
const regexName = /([a-z0-9 \S]+?:)/
// eslint-disable-next-line no-useless-escape
const regexDateAndTimeAndName = /([0-9]{1,2}[\/][0-9]{1,2}[\/][0-9]{1,4}), ([0-9]{1,2}:[0-9]{1,2}) \w\w - ([a-z0-9 \S]+?:) /
const regexMessage = /([a-z0-9 \S]+)/

const data = reactive({
  chatName: '',
  type: '',
  messages: []
})

onMounted(async () => {
  if (fileInfo.application === 'whatsapp') {
    content = await get('currentUploadedFile').then((val) => JSON.parse(val))
    content = content.split('\n')
    turnToJson(content)
  }
})

function turnToJson (content) {
  for (let index = 0; index < content.length; index++) {
    data.messages.push({
      date: content[index].match(regxDate)?.[0],
      time: content[index].match(regxTime)?.[0],
      name: content[index].replace(regexDateAndTime, '').match(regexName)?.[0].replace(':', ''),
      message: content[index].replace(regexDateAndTimeAndName, '').match(regexMessage)?.[0]
    })
  }

  // eslint-disable-next-line no-unused-expressions
  content ? data.chatName = 'mysm' : 'test'
  // eslint-disable-next-line no-unused-expressions
  content ? data.type = 'private' : 'group'
  cleanerResult()
  // finish()
}

function cleanerResult () {
  data.messages.forEach((el, index) => {
    if (el.date === undefined && el.time === undefined) {
      data.messages.splice(index, 1)
    }
  })

  finish()
}

function finish () {
  set('file', JSON.stringify(data))
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}
</script>
