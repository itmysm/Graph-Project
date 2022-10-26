<template>
  <div class="">
    <h3 class="text-2xl" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{$t('recentFiles')}}</h3>
    <div class="flex drag-items overflow-x-scroll hideJustScrollBar select-none" @mousedown="mouseDownHandler">
      <ul class="flex mt-6">
        <li class="w-52 mb-4 group cursor-pointer rtl:ml-5 ltr:mr-5" @click="openFile(index)" v-for="(file, index) in recentFiles"
          :key="index">
          <div class="overflow-hidden btn px-0 py-0 h-fit bg-transparent hover:bg-transparent border-none rounded-md relative">
            <img class="group-hover:blur-[2px] h-[156px] transition-all duration-500"
              :src=" useMediaBaseApi().value + imgApps[file.application]" alt="">
            <NuxtLink class="absolute top-[40%] left-[29%] rounded-full"></NuxtLink>
          </div>
          <p class="px-1 mt-2 group-hover:text-primary transition-all duration-500">
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
  instagram: 'banners/instagram.jpg'
}
const theme = ref(document.querySelector('body').getAttribute('data-theme'))
let pos = reactive({ top: 0, left: 0, x: 0, y: 0 })

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


function mouseDownHandler (e) {
  const ele = document.querySelector('.drag-items');
  pos.left = ele.scrollLeft
  pos.top = ele.scrollTop
  pos.x = e.clientX
  pos.y = e.clientY

  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
};

function mouseUpHandler (e) {
  const ele = document.querySelector('.drag-items');
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler)

  ele.style.cursor = 'grab';
  ele.style.removeProperty('user-select');
};

function mouseMoveHandler (e) {
  const ele = document.querySelector('.drag-items');

  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
}
</script>
