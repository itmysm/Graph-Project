<template>
  <div class="sidebar border-accent ltr:border-r rtl:border-l bg-base-1 h-[100vh] transition-all duration-500 relative"
    :class="isSidebarOpen ? '!w-52' : '!w-20'">
    <a class="w-5 h-5 flex justify-center border-none items-center bg-primary rounded-full absolute ltr:right-[-11px] rtl:left-[-11px] mt-14 cursor-pointer select-none"
      @click="sidebar(true)">
      <i class="material-symbols-rounded text-white transition-all rtl:rotate-180 text-[20px]">chevron_right</i>
    </a>

    <div class="w-[inherit] flex flex-col items-center py-5">
      <ul class="px-0 mt-2">
        <li class="overflow-hideen">
          <NuxtLink class="transition-all duration-300" to="/">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              fill="#6e5fd3"
              :width="isSidebarOpen ? '40px' : '30px'" :height="isSidebarOpen ? '40px' : '30px'" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
            <path id="XMLID_1157_" d="M6,82c-0.9,0-1.8-0.2-2.6-0.7c-2.4-1.4-3.1-4.5-1.7-6.9L13.9,54c0.9-1.4,2.4-2.4,4.1-2.4
              c1.7-0.1,3.3,0.7,4.3,2.1l5.2,7.2l11-18.8c0.8-1.4,2.4-2.4,4-2.5c1.7-0.1,3.3,0.7,4.3,2l9.6,12.9l25.3-42c1.4-2.4,4.5-3.1,6.9-1.7
              c2.4,1.4,3.1,4.5,1.7,6.9L61.2,66c-0.9,1.4-2.4,2.3-4,2.4c-1.7,0.1-3.3-0.7-4.3-2l-9.6-12.8L32.2,72.4c-0.9,1.5-2.4,2.4-4.1,2.5
              c-1.7,0.1-3.3-0.7-4.3-2.1l-5.2-7.2l-8.3,13.9C9.4,81.1,7.7,82,6,82z"/>
            </svg>
          </NuxtLink>
        </li>
      </ul>

      <ul class="w-full mt-10">
        <li class="w-full overflow-hidden" :class="isSidebarOpen ? 'px-2' : 'px-4 py-2'" v-for="(item, i) in menuItems"
          :key="i" @click="selectedItem = i">
          <NuxtLink :to="item.path"
            class="group w-full flex items-center hover:bg-primary rounded-lg transition-all duration-300 mb-2"
            :class="[selectedItem === i ? 'bg-primary' : 'bg-transparent', isSidebarOpen ? 'justify-start py-4 px-2' : 'justify-center py-2 px-4']">
            <i class="material-symbols-rounded text-neutral group-hover:!text-white transition-all duration-300"
              :class="selectedItem == i ? '!text-white' : '!text-neutral'">{{ item.icon }}</i>
            <p class="xl:block ltr:ml-3 rtl:mr-3 text-neutral group-hover:!text-white transition-all duration-300"
              :class="selectedItem === i ? '!text-white' : '!text-neutral'" v-if="isSidebarOpen">{{ item.name }}</p>
          </NuxtLink>
        </li>
      </ul>

      <ul class="px-0 absolute bottom-0 w-full h-fit hidden">
        <li class="w-full overflow-hidden" :class="isSidebarOpen ? 'px-2' : 'px-4'">
          <NuxtLink to="/about"
            :class="[isSidebarOpen ? 'justify-start py-4 px-2' : 'justify-center py-[10px] px-4', path === '/about' ? 'bg-primary' : '']"
            class="group w-full flex items-center hover:bg-primary rounded-lg transition-all duration-300 mb-2 py-4">
            <i class="material-symbols-rounded text-neutral group-hover:text-white transition-all duration-300"
              :class="path === '/about' ? '!text-white' : ''">Code</i>
            <p class="xl:block ltr:ml-3 rtl:mr-3 text-neutral group-hover:text-white transition-all duration-300"
              v-if="isSidebarOpen" :class="path === '/about' ? '!text-white' : ''">{{ $t('menuAbout') }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['sidebarIsOpen'])
// eslint-disable-next-line no-undef
definePageMeta({
  layout: 'start'
})

const props = defineProps(['sideBarInfo'])
const isSidebarOpen = ref(true)
const selectedItem = ref(0)
const path = ref('')
const i18n = useI18n()

const menuItems = reactive([
  { name: i18n.t('menuDashboard'), icon: 'dashboard', path: '/' },
  { name: i18n.t('menuDesk'), icon: 'Bar_Chart', path: '/desk' },
  { name: i18n.t('menuResult'), icon: 'Flash_On', path: '/result' },
  { name: i18n.t('menuSetting'), icon: 'settings', path: '/settings' }
])

function sidebar (redeclare) {
  if (redeclare) isSidebarOpen.value = !isSidebarOpen.value
  emit('sidebarIsOpen', isSidebarOpen.value)
}
watch(() => props.sideBarInfo, (newValue) => {
  if (window.innerWidth < 1400) isSidebarOpen.value = !newValue
  sidebar(false)
})

watch(() => useRoute().path, (newPath) => {
  const IndexFound = ref(false)
  menuItems.forEach((element, index) => {
    if (element.path === newPath) {
      IndexFound.value = true
      selectedItem.value = index
    }
  })

  if (IndexFound.value === false) selectedItem.value = -1

  path.value = newPath
})

</script>

<style lang="scss" scoped>
</style>
