<template>
  <div class="sidebar border-accent ltr:border-r-2 rtl:border-l-2 bg-base-1 w-[80px] xl:w-[220px] h-[100vh] transition-all duration-500 relative" :class="isOpen ? '!w-[80px]' : '!w-[220px]'">

    <button class="btn btn-primary btn-xs btn-circle absolute ltr:right-[-13px] rtl:left-[-13px] mt-14" @click="sidebar">
      <i class="material-icons-outlined text-white transition-all rtl:rotate-180" :class="isOpen ? 'rotate-180' : 'false'">chevron_right</i>
    </button>

    <div class="w-full flex flex-col items-center py-5">
      <ul class="px-0">
        <li>
          <NuxtLink to="/">Logo</NuxtLink>
        </li>
      </ul>

      <ul class="w-full px-5 mt-10">
        <li class="w-full">
          <NuxtLink class="group w-full flex items-center hover:bg-primary py-4 px-2 rounded-md" to="/">
            <i class="material-icons-outlined text-neutral group-hover:text-white">home</i>
            <p class="hidden xl:block ml-2 group-hover:text-white">Home</p>
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

const isOpen = ref()

onMounted(() => {
  // eslint-disable-next-line no-unneeded-ternary
  isOpen.value = window.innerWidth > 279 ? true : false
})

function sidebar () {
  isOpen.value = !isOpen.value
}

</script>

<style lang="scss" scoped>
.sidebar {}
</style>
