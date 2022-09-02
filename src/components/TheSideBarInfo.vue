<template>
  <div class="w-[400px] border border-accent ltr:border-r rtl:border-l bg-base-1 h-screen transition-all duration-500 relative" :class="sidebarInfoIsOpen ? 'w-96 px-5' : 'w-[1px] px-0'">
    <a class="w-5 h-10 flex justify-center border-none items-center ltr:rounded-l-lg rtl:rounded-r-lg bg-primary absolute ltr:left-[-21px] rtl:right-[-21px] mt-14 cursor-pointer select-none" @click="sidebar(true)">
      <i class="material-symbols-rounded text-white transition-all rtl:rotate-180 text-[20px] text-2xl" :class="sidebarInfoIsOpen ? 'rotate-180' : 'rotate-360'">arrow_left</i>
    </a>
    <div class="flex flex-col items-center justify-center h-full relative" :class="[sidebarInfoIsOpen ?'show--content': '', isFileExists ? 'animate--up' : '' ]" v-if="false">
      <img class="group-hover:blur-[2px] transition-all duration-500" src="~/assets/media/banners/symbols/empty-folder.png" alt="" width="100">
      <h3 class="text-secondary text-center mt-2">{{$t('infoSidebarNoFile')}}</h3>
    </div>

    <div class="h-full flex flex-col justify-end py-4" v-if="sidebarInfoIsOpen">
      <div class="mb-10">
        <p class="text-xs font-bold">File name:</p>
        <h6 class="text-sm">myChats.json</h6>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2"><h5 class="text-md font-medium">File information</h5></div>

        <div class="w-full flex flex-col items-center py-3 shadow-sm rounded-lg border-r cursor-default">
          <span class="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-primary"><i class="material-symbols-rounded text-[25px] text-white">Description</i></span>
          <h5 class="text-[13px] text-secondary fw-bold mt-1">File name</h5>
          <p class="text-[12px] text-neutral">Telegram</p>
        </div>

        <div class="w-full flex flex-col items-center py-3 shadow-sm rounded-lg border-l cursor-default">
          <span class="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-primary"><i class="material-symbols-rounded text-[25px] text-white">Downloading</i></span>
          <h5 class="text-[13px] text-secondary fw-bold mt-1">File size</h5>
          <p class="text-[12px] text-neutral">500kb</p>
        </div>

        <div class="w-full flex flex-col items-center py-3 shadow-sm rounded-lg border-r cursor-default">
          <span class="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-primary"><i class="material-symbols-rounded text-[25px] text-white">Extension</i></span>
          <h5 class="text-[13px] text-secondary fw-bold mt-1">Social media</h5>
          <p class="text-[12px] text-neutral">Telegram</p>
        </div>

        <div class="w-full flex flex-col items-center py-3 shadow-sm rounded-lg border-l cursor-default">
          <span class="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-primary"><i class="material-symbols-rounded text-[25px] text-white">Schedule</i></span>
          <h5 class="text-[13px] text-secondary fw-bold mt-1">Last Modified</h5>
          <p class="text-[12px] text-neutral">2021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index.js'
const mainStore = useMainStore()
const isFileExists = ref(false)

const props = defineProps(['sideBar'])
const emit = defineEmits(['sideBarInfoUpdated'])
const sidebarInfoIsOpen = ref(false)

onUpdated(() => {
  isFileExists.value = mainStore.fileStatus.isFileUploaded
})

function sidebar (redeclare) {
  if (redeclare) sidebarInfoIsOpen.value = !sidebarInfoIsOpen.value
  emit('sideBarInfoUpdated', sidebarInfoIsOpen.value)
}

watch(() => props.sideBar, (newValue) => {
  if (window.innerWidth < 1400) sidebarInfoIsOpen.value = !newValue
  sidebar(false)
})

</script>

<style lang="scss" scoped>

.animate--up {
  animation: toUp 1s ease-in-out 1s both;
}

@keyframes toUp {
  0% {
    opacity: 1;
    top: 0;
  }
  100% {
    opacity: 0.1;
    top: -900px;
  }
}

</style>
