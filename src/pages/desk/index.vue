<template>
  <div class="w-full flex justify-center items-center">
    <TheLoading class="opacity-75 bg-white" v-show="false"/>
    <div class="flex flex-col items-center justify-center h-full relative" v-if="!isFileExists">
      <img class="group-hover:blur-[2px] transition-all duration-500" src="~/assets/media/banners/symbols/empty-folder.png" alt="" width="100">
      <h3 class="text-secondary text-center mt-2">{{$t('infoSidebarNoFile')}}</h3>
    </div>
    <DeskOptions v-else/>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index.js'
const mainStore = useMainStore()
const isFileExists = ref(false)

onMounted(() => {
  isFileExists.value = mainStore.fileStatus.isFileUploaded
})
</script>
