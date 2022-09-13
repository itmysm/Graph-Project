<template>
  <div class="main--content w-full mt-14 px-10">
    <div class="pb-5 border-b-2 border-b border-accent mb-5">
      <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('settings') }}</h3>
      <p class="mt-2 font-light text-neutral">{{ $t("descriptionSetting") }}</p>
    </div>

    <div class="flex flex-col 2xl:grid 2xl:grid-cols-2">
      <settingsTheme class="mt-8 ltr:2xl:border-r" @languagesChange="getChangesFromChildren('languages', $event)" @themesChange="getChangesFromChildren('themes', $event)" />
      <hr class="w-full 2xl:hidden my-8">
      <settingsNotifications class="xl:mt-8 rtr:2xl:border-l" @notifications="getChangesFromChildren('notifications', $event)" />
    </div>

    <div class="absolute flex items-center py-5 px-4 left-2/4 bottom-12 w-fit rounded-2xl drop-shadow-lg" :class="[saveSetting.animation ? 'bounceInUp' : 'bounceOutDown', theme === 'dark' ? 'bg-secondary border border-primary' : 'bg-white']" v-show="saveSetting.visible">
      <p class="mr-5 mb-0" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t("askSave") }}</p>
      <button class="btn btn-sm btn-primary text-white ltr:mr-2 rtl:mr-2 normal-case" @click="applayChanges">{{ $t("save") }}</button>
      <button class="btn btn-sm btn-outline btn-primary rtl:mr-2 normal-case" @click="saveSetting.animation = false">{{ $t("cancel") }}</button>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index.js'
const setting = useMainStore().$state.setting
const saveSetting = reactive({ visible: false, animation: false })
const theme = ref(document.querySelector('body').getAttribute('data-theme'))

onBeforeMount(() => {
  saveSetting.visible = false
})

function getChangesFromChildren (key, changes) {
  saveSetting.visible = true
  saveSetting.animation = true
  setting[key] = changes
}

function applayChanges () {
  localStorage.setItem('settings', JSON.stringify(setting))
  saveSetting.animation = false
}
</script>
