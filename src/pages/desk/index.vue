<template>
  <div class="w-full flex justify-center items-center">
    <TheLoading class="opacity-75 bg-white" v-show="false"/>
    <div class="flex flex-col items-center justify-center h-full relative" v-if="!isFileExists">
      <img class="group-hover:blur-[2px] transition-all duration-500" src="~/assets/media/banners/symbols/empty-folder.png" alt="" width="100">
      <h3 class="text-secondary text-center mt-2">{{$t('infoSidebarNoFile')}}</h3>
    </div>
    <pagesDeskOptions v-else-if="isFileExists && step == 1" @next="step++"/>
    <pagesDeskTransitionsInstagramHtmlToJson v-else-if="fileType === 'html' && step == 2" @next="step++"/>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index.js'
const step = ref(1)
const mainStore = useMainStore()
const isFileExists = ref(false)
const fileType = ref(mainStore.$state.file.fileType.toLocaleLowerCase())

onMounted(() => {
  isFileExists.value = mainStore.fileStatus.isFileUploaded
})
</script>
