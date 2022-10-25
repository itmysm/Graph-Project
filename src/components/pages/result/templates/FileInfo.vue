<template>
  <section class="grid grid-cols-12 gap-4 xl:gap-10 pt-8">
    <div class="col-span-2">
      <img class="w-60 rounded-md" :src="useMediaBaseApi().value + imgApps[fileInfo.application]" alt="">
    </div>
    <ul class="w-full flex col-span-10 border border-accent px-5 py-5 rounded-md drop-shadow-md">
    </ul>
  </section>
</template>

<script setup>
const fileInfo = JSON.parse(localStorage.getItem('temporaryInfoFile'))
const imgApps = {
  whatsapp: 'banners/whatsapp.webp',
  telegram: 'banners/telegram.webp',
  instagram: 'banners/instagram.jpg'
}
</script>
