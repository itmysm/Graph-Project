<template>
  <section class="w-full pt-8">
    <ul class="grid grid-cols-3 gap-10">
      <li class="flex flex-col items-start border border-accent px-4 py-3 w-full rounded-md" v-for="(person, i) in messages" :key="i">
        <div class="flex items-center justify-center w-[50px] h-[50px] bg-warning/50 rounded-full mt-2">
          <span class="flex items-center justify-center bg-warning/75 w-[40px] h-[40px] rounded-full"><i class="material-symbols-rounded text-[23px] text-base-100">{{i == 'all' ? 'Group' : 'Person'}}</i></span>
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

onMounted(() => {
  console.log(props)
})

</script>
