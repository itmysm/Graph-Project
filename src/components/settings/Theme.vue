<template>
  <div class="px-5">
    <h3 class="text-2xl flex items-center" :class="theme ? 'text-white' : 'text-secondary'">
       <i class="material-symbols-rounded normal-case mr-2">Laptop_Mac</i>
      Display
    </h3>
    <p class="mt-2 text-neutral font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, vel
      natus. Impedit maxime ipsam doloremque</p>

    <div class="flex items-center justify-between mt-5">
      <h4 class="capitalize flex items-center">
        <i class="material-symbols-rounded normal-case text-[20px] mr-2">Dark_Mode</i>
        Themes
      </h4>
      <commonSelectDrodown :items="themes" @newChanges="changeSetting('themes', $event)" />
    </div>

    <div class="flex items-center justify-between mt-5">
      <h4 class="capitalize flex items-center">
        <i class="material-symbols-rounded normal-case text-[20px] mr-2">Translate</i>
        Languages
      </h4>

      <commonSelectDrodown :items="languages" @newChanges="changeSetting('languages', $event)"/>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index.js'
const emit = defineEmits(['themesChange', 'languagesChange'])
const theme = ref(document.querySelector('body').getAttribute('data-theme'))

const languages = useMainStore().$state.setting.language
const themes = useMainStore().$state.setting.themes

function changeSetting (key, changes) {
  key === 'themes' ? emit('themesChange', changes) : emit('languagesChange', changes)
}
</script>
