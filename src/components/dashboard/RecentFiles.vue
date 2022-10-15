<template>
  <div class="">
    <h3 class="text-2xl" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{$t('recentFiles')}}</h3>
    <div class="flex">
      <ul class="flex mt-6">
        <li class="w-52 mb-4 group cursor-pointer rtl:ml-5 ltr:mr-5" @click="openFile(index)" v-for="(file, index) in recentFiles"
          :key="index">
          <div class="overflow-hidden rounded-md relative">
            <img class="group-hover:blur-[2px] transition-all duration-500"
              :src=" useMediaBaseApi().value + imgApps[file.application]" alt="">
            <NuxtLink class="absolute top-[40%] left-[29%] rounded-full"></NuxtLink>
          </div>
          <p class="mt-2 group-hover:text-primary transition-all duration-500">
            {{textShortener(file.name.toLowerCase(), 16)}}
          </p>
          <!-- <p class="text-xs text-neutral group-hover:text-primary transition-all duration-500"> {{ fromNow(file.lastModified).split(' ')[0] }} {{ $t(fromNow(file.lastModified).split(' ')[1]) }}</p> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { get, set } from 'idb-keyval'
// import { fromNow } from '~/scripts/fromNow'
import { textShortener } from '~/scripts/textShortener'
import { useMainStore } from '~/stores/index.js'

const mainStore = useMainStore()
const recentFiles = ref()
const imgApps = {
  whatsapp: 'banners/whatsapp.webp',
  telegram: 'banners/telegram.webp',
  instagram: 'banners/instagram.webp'
}

onMounted(async () => {
  try {
    recentFiles.value = await get('allUploadedFiles').then(val => Object.values(JSON.parse(val)))
  } catch (error) {
    useRouter().push('/_privateTab')
  }
})

function openFile (index) {
  const fileInfo = recentFiles.value[index]
  fileInfo.available = true
  fileInfo.isRecentFile = true
  mainStore.fileUpdate(fileInfo)
  set('currentUploadedFile', JSON.stringify(fileInfo.content)) // set inside indexD

  goToDesk()
}

function goToDesk () {
  setTimeout(() => {
    useRouter().push('/desk')
  }, 500)
}

const theme = ref(document.querySelector('body').getAttribute('data-theme'))
</script>
