<template>
  <div class="main--content hideJustScrollBar w-full mt-14 px-10">
    <div class="pb-5 border-b-2 border-b border-accent mb-5">
      <h3 class="flex items-center text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">
        <i class="material-symbols-rounded text-[26px] ltr:mr-2 rtl:ml-2">Settings</i>
        {{ $t('settings') }}
      </h3>
      <p class="mt-2 font-light text-neutral">{{ $t("descriptionSetting") }}</p>
    </div>

    <div class="grid grid-cols-1 2xl:grid-cols-2 gap-10">
      <PagesSettingsTheme class="mt-8" @languagesChange="getChangesFromChildren('languages', $event)" @themesChange="getChangesFromChildren('themes', $event)" />
      <PagesSettingsNotifications class="mt-8 pl-16" @notifications="getChangesFromChildren('notifications', $event)" />
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

  setTimeout(() => {
    location.reload()
  }, 700)
}
</script>
