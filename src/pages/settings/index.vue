<template>
  <div class="main--content w-full mt-14 px-10">
    <div class="pb-5 border-b-2 border-b border-accent mb-5">
      <h3 class="text-2xl text-secondary relative">{{ $t('Settings') }}</h3>
      <p class="mt-2 text-neutral font-light">Lorem is here. lorlorlorlorem</p>
    </div>

    <div class="flex flex-col 2xl:grid 2xl:grid-cols-2">
      <settingsTheme class="mt-8 2xl:border-r" @languagesChange="getChangesFromChildren('languages', $event)" @themesChange="getChangesFromChildren('themes', $event)" />
      <hr class="w-full 2xl:hidden my-8">
      <settingsNotifications class="xl:mt-8" @notifications="getChangesFromChildren('notifications', $event)" />
    </div>

    <div class="absolute flex items-center py-5 px-4 left-2/4 bottom-12 w-fit bg-white rounded-2xl drop-shadow-lg" :class="saveSetting.animation ? 'bounceInUp' : 'bounceOutDown'" v-show="saveSetting.visible">
      <p class="mr-5 mb-0">Do you want to save the changes?</p>
      <button class="btn btn-sm mr-2 btn-primary text-base-100 normal-case" @click="applayChanges">Save</button>
      <button class="btn btn-sm btn-outline btn-primary text-prmary normal-case" @click="saveSetting.animation = false">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index.js'
const setting = useMainStore().$state.setting
const saveSetting = reactive({ visible: false, animation: false })

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
