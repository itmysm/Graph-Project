<template>
  <div class="sidebar border-accent ltr:border-r rtl:border-l bg-base-1 h-[100vh] transition-all duration-500 relative"
    :class="isSidebarOpen ? '!w-52' : '!w-20'">
    <a class="w-5 h-5 flex justify-center border-none items-center bg-primary rounded-full absolute ltr:right-[-11px] rtl:left-[-11px] mt-14 cursor-pointer select-none"
      @click="sidebar(true)">
      <i class="material-symbols-rounded text-white transition-all rtl:rotate-180 text-[20px]">chevron_right</i>
    </a>

    <div class="w-[inherit] flex flex-col items-center py-5">
      <ul class="px-0">
        <li>
          <NuxtLink to="/">Logo</NuxtLink>
        </li>
      </ul>

      <ul class="w-full mt-10">
        <li class="w-full overflow-hidden" :class="isSidebarOpen ? 'px-2' : 'px-4 py-2'" v-for="(item, i) in menuItems"
          :key="i" @click="selectedItem = i">
          <NuxtLink :to="item.path"
            class="group w-full flex items-center hover:bg-primary rounded-lg transition-all duration-300 mb-2"
            :class="[selectedItem === i ? 'bg-primary' : false, isSidebarOpen ? 'justify-start py-4 px-2' : 'justify-center py-2 px-4']">
            <i class="material-symbols-rounded text-neutral group-hover:text-white transition-all duration-300"
              :class="selectedItem == i ? '!text-white' : ''">{{ item.icon }}</i>
            <p class="xl:block ml-3 text-neutral group-hover:text-white transition-all duration-300"
              :class="selectedItem === i ? '!text-white' : false" v-if="isSidebarOpen">{{ item.name }}</p>
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
const i18n = useI18n()

const menuItems = reactive([
  { name: i18n.t('menuDashboard'), icon: 'dashboard', path: '/' },
  { name: i18n.t('menuDesk'), icon: 'Bar_Chart', path: '/desk' },
  { name: i18n.t('menuHistory'), icon: 'history', path: '/history' },
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
  // eslint-disable-next-line no-return-assign
  menuItems.map((item, index) => item.path === newPath ? selectedItem.value = index : false)
})

</script>

<style lang="scss" scoped>
</style>
