<template>
  <div class="px-5">
    <h3 class="text-2xl text-secondary flex items-center">
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
      <select class="select select-bordered w-full max-w-xs">
        <option :disabled="i == 0" :selected="i == 0" v-for="(theme, i) in themes" :key="i">
          {{theme.type}}
        </option>
      </select>
    </div>

    <div class="flex items-center justify-between mt-5">
      <h4 class="capitalize flex items-center">
        <i class="material-symbols-rounded normal-case text-[20px] mr-2">Translate</i>
        Languages
      </h4>
      <select class="select select-bordered w-full max-w-xs">
        <option :disabled="i == 0" :selected="i == 0" v-for="(language, i) in languages" :key="i">{{language.flag}} {{language.name}}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
const themes = reactive([{ type: 'Dark', icon: 'Dark_Mode' }, { type: 'Light', icon: 'Light_Mode' }, { type: 'Default', icon: 'Computer' }])
const languages = reactive([{ name: 'English', flag: '🇬🇧' }, { name: 'Persian', flag: '🇮🇷' }])

</script>
