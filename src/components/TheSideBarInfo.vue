<template>
  <div class="w-[400px] border border-accent ltr:border-r rtl:border-l bg-base-1 h-screen transition-all duration-500 relative" :class="sidebarInfoIsOpen ? 'w-96 px-5' : 'w-[1px] px-0'">
    <a class="w-5 h-10 flex justify-center border-none items-center rounded-l-lg bg-primary absolute ltr:left-[-22px] mt-14 cursor-pointer select-none" @click="sidebar(true)">
      <i class="material-symbols-rounded text-white transition-all rtl:rotate-180 text-[20px] text-2xl" :class="sidebarInfoIsOpen ? 'rotate-180' : 'rotate-360'">arrow_left</i>
    </a>
    <div class="flex flex-col items-center justify-center h-full" :class="sidebarInfoIsOpen ?'show--content': ''" v-if="sidebarInfoIsOpen">
      <img class="group-hover:blur-[2px] transition-all duration-500" src="~/assets/media/banners/symbols/empty-folder.png" alt="" width="100">
      <h3 class="text-secondary text-center mt-2">No files found. Upload a file to get started.</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['sideBar'])
const emit = defineEmits(['sideBarInfoUpdated'])
const sidebarInfoIsOpen = ref(false)

onMounted(() => {
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
</style>
