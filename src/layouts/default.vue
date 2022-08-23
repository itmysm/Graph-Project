<template>
  <div class="layout">
    <main class="flex" v-if="isUserDeviceSupported">
      <TheSideBar @sidebarIsOpen="sideBar = $event" :sideBarInfo="sideBarInfo" />
      <slot />
      <TheSideBarInfo  @sideBarInfoUpdated="sideBarInfo = $event" :sideBar="sideBar" />
    </main>
    <TheUnsupported v-if="!isUserDeviceSupported" />
  </div>
</template>

<script setup>
import { inject } from 'vue'
const loading = ref(true)
const isUserDeviceSupported = inject('isUserDeviceSupported')
const sideBar = ref(true)
const sideBarInfo = ref(false)
</script>
