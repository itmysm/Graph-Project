<template>
  <div class="hideJustScrollBar w-full flex justify-center items-center">
    <TheLoading class="opacity-75 bg-white" v-show="false"/>
    <div class="flex flex-col items-center justify-center h-full relative" v-if="!isFileExists">
      <img class="group-hover:blur-[2px] transition-all duration-500" :src=" theme === 'dark' ? '../../assets/media/banners/symbols/empty-folder-light.webp' : '../../assets/media/banners/symbols/empty-folder.webp'" alt="" width="100">
      <h3 class="text-center mt-2" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{$t('infoSidebarNoFile')}}</h3>
    </div>
    <pagesDeskProgress v-if="isFileExists" />
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index.js'
const mainStore = useMainStore()
const theme = ref(document.querySelector('body').getAttribute('data-theme'))
const isFileExists = ref(false)

onMounted(() => {
  isFileExists.value = mainStore.fileStatus.isFileUploaded
})
</script>
