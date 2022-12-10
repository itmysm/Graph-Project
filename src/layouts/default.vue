<template>
  <div class="layout">
    <main class="main flex ltr:font-sans rtl:font-persian" v-if="isUserDeviceSupported && !loading">
      <TheSideBar @sidebarIsOpen="sideBar = $event" :sideBarInfo="sideBarInfo" />
      <slot :screenCode="screenResizedCode" />
    </main>
    <TheUnsupported v-if="!isUserDeviceSupported" />
    <commonNotifications />
    <TheLoading />
  </div>
</template>

<script setup>
import { inject } from 'vue'
const loading = ref(true)
const isUserDeviceSupported = inject('isUserDeviceSupported')
const sideBar = ref(true)
const sideBarInfo = ref(false)
const screenResized = ref(0)
const screenResizedCode = ref('This value is directly related to the screenWidthChanged() func')

function screenWidthChanged () {
  screenResized.value++
  setTimeout(() => {
    screenResized.value = 0
  }, 3000)
  if (screenResized.value === 1) screenResizedCode.value = (Math.random(1, 9999) * 1000) + ''
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)

  window.addEventListener('resize', screenWidthChanged())
})

watch(() => sideBar.value, () => {
  screenWidthChanged()
})
</script>

<style lang="scss">
//
.main {
 max-height: 100vh;
 overflow-y: hidden;
  overflow-x: hidden;
}
.main--content {
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
