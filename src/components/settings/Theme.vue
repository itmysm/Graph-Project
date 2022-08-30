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
      <commonSelectDrodown :items="themes" :defaultItem="defaultTheme" @return-value="changeSetting(themes[$event])" />
    </div>

    <div class="flex items-center justify-between mt-5">
      <h4 class="capitalize flex items-center">
        <i class="material-symbols-rounded normal-case text-[20px] mr-2">Translate</i>
        Languages
      </h4>

      <commonSelectDrodown :items="languages" :defaultItem="defaultLanguages" />
    </div>
  </div>
</template>

<script setup>
const registerData = JSON.parse(localStorage.getItem('register'))
const themes = reactive([{ name: 'Dark', icon: 'Dark_Mode' }, { name: 'Light', icon: 'Light_Mode' }, { name: 'Default', icon: 'Computer' }])
const defaultTheme = registerData.userTheme

const languages = reactive([{ name: 'English', icon: '🇬🇧' }, { name: 'Persian', icon: '🇮🇷' }])
const defaultLanguages = 'English'

function changeSetting (item) {
  console.log(item)
}

</script>
