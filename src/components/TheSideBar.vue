<template>
  <div class="sidebar border-accent ltr:border-r rtl:border-l bg-base-1 w-[80px] xl:w-[220px] h-[100vh] transition-all duration-500 relative" :class="isOpen ? '!w-[220px]' : '!w-[80px]'">

    <a class="w-6 h-6 flex justify-center items-center bg-primary rounded-full absolute ltr:right-[-13px] rtl:left-[-13px] mt-14 cursor-pointer" @click="sidebar">
      <i class="material-symbols-rounded text-white transition-all rtl:rotate-180" :class="isOpen ? 'rotate-180' : 'false'">chevron_right</i>
    </a>

    <div class="w-full flex flex-col items-center py-5">
      <ul class="px-0">
        <li>
          <NuxtLink to="/">Logo</NuxtLink>
        </li>
      </ul>

      <ul class="w-full mt-10" :class="isOpen ? 'px-5' : 'px-[1.1rem]'">
        <li class="w-full overflow-hidden" v-for="(item, i) in menuItems" :key="i" @click="selected = i">
          <NuxtLink class="group w-full flex items-center hover:bg-primary py-4 px-2 rounded-lg transition-all duration-300 mb-2" :class="[selected === i ? 'bg-primary' : false, isOpen ? 'justify-start' : 'justify-center py-2']" to="/">
            <i class="material-symbols-rounded text-neutral group-hover:text-white transition-all duration-300" :class="selected == i ? '!text-white' : ''">{{item.icon}}</i>
            <p class="xl:block ml-3 text-neutral group-hover:text-white transition-all duration-300" :class="selected === i ? '!text-white' : false" v-show="isOpen">{{item.name}}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
definePageMeta({
  layout: 'start'
})

const selected = ref()
const isOpen = ref()
const menuItems = reactive([{ name: 'Home', icon: 'dashboard', path: '/' }, { name: 'History', icon: 'history', path: '/history' }, { name: 'Setting', icon: 'settings', path: '/setting' }, { name: 'Home', icon: 'home', path: '/' }, { name: 'Home', icon: 'home', path: '/' }])

onMounted(() => {
  // eslint-disable-next-line no-unneeded-ternary
  isOpen.value = window.innerWidth > 1200 ? true : false
  // selected.value = 0
})

function sidebar () {
  isOpen.value = !isOpen.value
}

</script>

<style lang="scss" scoped>
.sidebar {}
</style>
