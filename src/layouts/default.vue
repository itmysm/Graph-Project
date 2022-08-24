<template>
  <div class="layout">
    <main class="main flex" v-if="isUserDeviceSupported">
      <TheSideBar @sidebarIsOpen="sideBar = $event" :sideBarInfo="sideBarInfo" />
      <slot />
      <TheSideBarInfo @sideBarInfoUpdated="sideBarInfo = $event" :sideBar="sideBar" />
    </main>
    <TheUnsupported v-if="!isUserDeviceSupported" />
        <commonNotifications />
  </div>
</template>

<script setup>
import { inject } from 'vue'
// const loading = ref(true)
const isUserDeviceSupported = inject('isUserDeviceSupported')
const sideBar = ref(true)
const sideBarInfo = ref(false)
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
