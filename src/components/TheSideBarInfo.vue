<template>
  <div class="w-[400px] border border-accent ltr:border-r rtl:border-l bg-base-1 h-screen transition-all duration-500 relative" :class="sidebarInfoIsOpen ? 'w-96 px-5' : 'w-[1px] px-0'">
    <a class="w-5 h-10 flex justify-center border-none items-center ltr:rounded-l-lg rtl:rounded-r-lg bg-primary absolute ltr:left-[-21px] rtl:right-[-21px] mt-14 cursor-pointer select-none" @click="sidebar(true)">
      <i class="material-symbols-rounded text-white transition-all rtl:rotate-180 text-[20px] text-2xl" :class="sidebarInfoIsOpen ? 'rotate-180' : 'rotate-360'">arrow_left</i>
    </a>
    <div class="flex flex-col items-center justify-center h-full relative" :class="[sidebarInfoIsOpen ?'show--content': '', isFileExists ? 'animate--up' : '' ]" v-if="false">
      <img class="group-hover:blur-[2px] transition-all duration-500" src="~/assets/media/banners/symbols/empty-folder.webp" alt="" width="100">
      <h3 class="text-secondary text-center mt-2">{{$t('infoSidebarNoFile')}}</h3>
    </div>

    <div class="h-full flex flex-col justify-end py-4" v-if="sidebarInfoIsOpen">
      <div class="mb-10">
        <p class="text-xs font-bold">{{ $t('fileName') }}:</p>
        <h6 class="text-sm"> {{ file.fileName}} </h6>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2"><h5 class="text-md font-medium">{{ $t('fileInformation') }}</h5></div>

        <div class="w-full flex flex-col items-center py-3 shadow-[0_35px_35px_-15px_rgba(100,100,100,0.1)] rounded-lg ltr:border-r rtl:border-l cursor-default" :class="theme === 'dark' ? 'border-primary text-white' : 'border-light text-secondary'">
          <span class="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-primary"><i class="material-symbols-rounded text-[25px] text-white">Description</i></span>
          <h5 class="text-[13px] fw-bold mt-1">{{ $t('fileName') }}</h5>
          <p class="text-[12px] text-neutral">{{file.fileName}}</p>
        </div>

        <div class="w-full flex flex-col items-center py-3 shadow-[0_35px_35px_-15px_rgba(100,100,100,0.1)] rounded-lg ltr:border-l rtl:border-r cursor-default" :class="theme === 'dark' ? 'border-primary text-whit' : 'border-light text-secondary'">
          <span class="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-primary"><i class="material-symbols-rounded text-[25px] text-white">Downloading</i></span>
          <h5 class="text-[13px] fw-bold mt-1">{{ $t('fileSize') }}</h5>
          <p class="text-[12px] text-neutral">{{ getSize() }}</p>
        </div>

        <div class="w-full flex flex-col items-center py-3 shadow-[0_35px_35px_-15px_rgba(100,100,100,0.1)] rounded-lg ltr:border-r rtl:border-l cursor-default" :class="theme === 'dark' ? 'border-primary text-whit' : 'border-light text-secondary'">
          <span class="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-primary"><i class="material-symbols-rounded text-[25px] text-white">Extension</i></span>
          <h5 class="text-[13px] fw-bold mt-1">{{ $t('socialMedia') }}</h5>
          <p class="text-[12px] text-neutral">Telegram</p>
        </div>

        <div class="w-full flex flex-col items-center py-3 shadow-[0_35px_35px_-15px_rgba(100,100,100,0.1)] rounded-lg ltr:border-l rtl:border-r cursor-default" :class="theme === 'dark' ? 'border-primary text-whit' : 'border-light text-secondary'">
          <span class="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-primary"><i class="material-symbols-rounded text-[25px] text-white">Schedule</i></span>
          <h5 class="text-[13px] fw-bold mt-1">{{ $t('lastModified') }}</h5>
          <!-- <p class="text-[12px] text-neutral"> {{ fromNow(file.fileLastModified).split(' ')[0] }} {{ $t(fromNow(file.fileLastModified).split(' ')[1]) }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index.js'
import { fromNow } from '~/scripts/fromNow'
const mainStore = useMainStore()
const file = mainStore.$state.file
const isFileExists = ref(false)

const props = defineProps(['sideBar'])
const emit = defineEmits(['sideBarInfoUpdated'])
const sidebarInfoIsOpen = ref(false)
const theme = ref(document.querySelector('body').getAttribute('data-theme'))

onUpdated(() => {
  isFileExists.value = mainStore.fileStatus.isFileUploaded
  console.log(mainStore.$state.file)
})

function sidebar (redeclare) {
  if (redeclare) sidebarInfoIsOpen.value = !sidebarInfoIsOpen.value
  emit('sideBarInfoUpdated', sidebarInfoIsOpen.value)
}

function getSize () {
  const bytes = file.fileSize
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 Byte'
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
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
