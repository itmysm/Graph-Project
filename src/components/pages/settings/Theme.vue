<template>
  <div class="px-5">
    <h3 class="text-2xl flex items-center" :class="theme != 'dark' ? 'text-secondary' : 'text-white'">
       <i class="material-symbols-rounded normal-case ltr:mr-2 rtl:ml-2">Laptop_Mac</i>
       {{ $t('settingsDisplayTitle') }}
    </h3>
    <p class="mt-2 text-neutral font-light">{{ $t('settingsDisplayDescription') }}</p>

    <div class="flex items-center justify-between mt-5">
      <h4 class="capitalize flex items-center">
        <i class="material-symbols-rounded normal-case text-[20px] ltr:mr-2 rtl:ml-2">Dark_Mode</i>
        {{ $t('settingsThemes') }}
      </h4>
      <commonSelectDropdown :items="themes" @newChanges="changeSetting('themes', $event)" />
    </div>

    <div class="flex items-center justify-between mt-5">
      <h4 class="capitalize flex items-center">
        <i class="material-symbols-rounded normal-case text-[20px] ltr:mr-2 rtl:ml-2">Translate</i>
        {{ $t('settingsLanguages') }}
      </h4>

      <commonSelectDropdown :items="languages" @newChanges="changeSetting('languages', $event)"/>
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
