<template>
  <div class="flex justify-center items-center w-[100vw] h-[100vh] top-0 left-0 backdrop-blur-md absolute z-[10]" v-if="isActive">
      <div id="telegramChatsListBox" class="w-96 bg-base-100 h-[600px] border border-accent rounded-md bounceIn overflow-hidden">
        <h2 class="text-xl font-semibold h-[60px] flex items-center px-4">{{$t('telegramChatListTitleBox') }}</h2>
        <ul class="list overflow-y-scroll overflow-x-hidden h-[calc(100%-60px)]">
          <li class="flex mb-1 hover:bg-accent py-3 px-4 cursor-pointer select-none" v-for="(chat, i) in typeof chatList === 'string' ? JSON.parse(chatList).chats.list : chatList.chats.list" :key="i" @click="closePopUp(i)">
            <img  class="bg-secondary rounded-full p-[1px]" :src="'https://avatars.dicebear.com/api/human/' + Math.floor(Math.random() * 999) + '.svg?background=%23ffff'" width="55" height="55" />
            <div class="flex flex-col justify-between px-5 py-1">
              <p class="text-md h-6 overflow-hidden">{{chatNameFixer(chat.name, chat.type)}}</p>
              <p class="pb-0 text-sm">{{ chat.messages.length }} {{$t('telegramChatListMessage')}}</p>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script setup>
import { get } from 'idb-keyval'
import { useAlerts } from '~/stores/alerts/alerts.js'
import { useI18n } from 'vue-i18n'
const storeAlerts = useAlerts()
const emit = defineEmits(['deactivateComponent'])
const isActive = ref(false)
const chatList = ref({})
const i18n = useI18n()

onMounted(() => {
  storeAlerts.addNewAlert({ title: i18n.t('alertSelectChatTitle'), description: i18n.t('alertSelectChat'), type: 'info', button: false, duration: 4000, alertType: 0 })
})

getChatsListFromIndexDB()
async function getChatsListFromIndexDB () {
  chatList.value = await get('currentUploadedFile').then((val) => JSON.parse(val))
  isActive.value = true
}

function chatNameFixer (name, chatType) {
  if (name === undefined) {
    return chatType
  } else if (name === 11) {
    return 'Oops'
  } else {
    return name
  }
}

function closePopUp (selectedItemIndex) {
  document.querySelector('#telegramChatsListBox').classList.replace('bounceIn', 'bounceOut')
  localStorage.setItem('telegramSelectedChatIndex', selectedItemIndex + '')

  setTimeout(() => {
    isActive.value = false
    emit('deactivateComponent', false)
  }, 1000)
}
</script>

<styles lang="scss">

.list {
  scrollbar-width: thin;
  scrollbar-color: blue transparent;

  /* Works on Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bda6a6;
    border-radius: 20px;
    border: 3px solid transparent;
  }
}

// animations
.bounceIn {
  animation-duration: 1s;
  animation-name: bounceIn;
  animation-fill-mode: both;
}

.bounceOut {
  animation-duration: 1S;
  animation-name: bounceOut;
  animation-fill-mode: both;
}

@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes bounceOut {
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
</styles>
