<template>
  <section id="msgBox" class="w-full pt-8 relative pb-16 openUp">
    <ul class="collapsible grid grid-cols-3 gap-10">
      <li class="flex flex-col items-start border border-accent px-4 py-3 w-full rounded-md" v-for="(person, i) in messages" :key="i" v-show="checkRules(person[0])">
        <div class="flex items-center justify-center w-[50px] h-[50px] bg-warning/50 rounded-full mt-2">
          <span class="flex items-center justify-center bg-warning/75 w-[40px] h-[40px] rounded-full">
            <i class="material-symbols-rounded text-[23px] text-base-100">
              {{ i == 'all' ? 'group' : iconFinder(person[0])}}
            </i>
          </span>
        </div>

        <div class="w-full mt-6">
          <h5 class="text-neutral">{{ i == 'all' ? $t('resultPageDetailsMessagesBoxAllMessages') : nameFixer(person[0]) }} </h5>

          <div class="flex justify-between mt-1">
            <p class="text-2xl font-semibold">{{person.length}} <span class="text-[18px] font-normal">{{$t('resultPageDetailsMessagesBoxMessage')}}</span> </p>
            <div class="tooltip" :data-tip="$t('resultPageDetailsMessagesBoxPercentageTotalMessages')">
              <p class="text-sm font-semibold bg-warning rounded-full px-2 py-[4px] max-h-[26px] text-base-100"> {{ i == 'all' ? '100' : ((person.length * 100) / messages.all.length).toFixed(1) }} %</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="collapse-control flex flex-col items-center justify-center w-full absolute bottom-[-20px]" v-if="(Object.keys(messages).length > 5)">
      <span class="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full z-[12]" @click="buttonClicked">
        <i class="material-symbols-rounded text-[26px] text-base-100">Keyboard_Arrow_Down</i>
      </span>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

const props = defineProps({
  messages: {
    required: true
  }
})

const app = JSON.parse(localStorage.getItem('temporaryInfoFile'))

function nameFixer (chat) {
  if (app.application === 'telegram') {
    return chat.from === undefined ? i18n.t('resultPageDetailsMessagesBoxNameUndefined') : chat.from
  } else if (app.application === 'whatsapp') {
    console.log(chat.name)
    return chat.name === undefined ? i18n.t('resultPageDetailsMessagesBoxNameUndefined') : chat.name
  }
}

function iconFinder (chat) {
  if (app.application === 'telegram') {
    return chat.from === undefined ? 'Verified' : 'Person'
  } else if (app.application === 'whatsapp') {
    return chat.name === undefined ? 'Verified' : 'Person'
  }
}

function checkRules (chat) {
  if (chat.date === undefined) {
    if (app.application === 'whatsapp') return false
  } else {
    return true
  }
}

onMounted(() => {
  console.log(props.messages.length)
})

function collapseSection (element) {
  const sectionHeight = element.scrollHeight

  const elementTransition = element.style.transition
  element.style.transition = ''

  requestAnimationFrame(() => {
    element.style.height = sectionHeight + 'px'
    element.style.transition = elementTransition

    requestAnimationFrame(function () {
      element.style.height = 200 + 'px'
      document.querySelector('.collapse-control').style.height = 190 + 'px'
    })
  })

  element.setAttribute('data-collapsed', 'true')
}

function expandSection (element) {
  const sectionHeight = element.scrollHeight

  element.style.height = sectionHeight + 'px'
  document.querySelector('.collapse-control').style.height = 90 + 'px'
  element.addEventListener('transitionend', function (e) {
    // eslint-disable-next-line no-caller
    element.removeEventListener('transitionend', arguments.callee)
    element.style.height = null
  })

  element.setAttribute('data-collapsed', 'false')
}

function buttonClicked () {
  const section = document.querySelector('.collapsible')
  const isCollapsed = section.getAttribute('data-collapsed') === 'true'

  if (isCollapsed) {
    expandSection(section)
    section.setAttribute('data-collapsed', 'false')
  } else {
    collapseSection(section)
  }
}

</script>

<style lang="scss">

#msgBox, .collapsible {
  overflow:hidden;
  transition:height 0.3s ease-out;
  height:auto;
}

.close {
  max-height: 400px !important;
  overflow: hidden;
}

.collapse-control {
  height: 90px;
  background: rgb(255,255,255);
  background: linear-gradient(360deg, theme('colors.base-100') 60%, rgba(255,255,255,0) 100%);
}
</style>
