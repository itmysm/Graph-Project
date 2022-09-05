<!-- This file extracts the information from the html file and converts it into an object -->

<template>
  <div class="instagram--temp hidden">{{content}}</div>
</template>

<script setup>
import { useMainStore } from '~~/src/stores/index.js'

const mainStore = useMainStore()

let content = mainStore.$state.file.content
const date = new Date()
let temp = ({})
const data = {
  chatName: '',
  type: '',
  messages: []
}

onMounted(() => {
  temp = document.querySelector('.instagram--temp')
  injectionIntoDOM()
})

function injectionIntoDOM () {
  content = content.replaceAll('src', 'alt') // prevent to load files dosent exist && errors on console
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
  console.log(mainStore.$state.file.content)
  mainStore.$state.file.content = data
  console.log(mainStore.$state.file.content)
}
</script>
