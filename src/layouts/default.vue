<template>
  <div class="layout">
    <main class="flex">
      <TheSideBar @sidebarIsOpen="sideBar = $event" :sideBarInfo="sideBarInfo" />
      <slot v-if="true" />
      <TheSideBarInfo  @sideBarInfoUpdated="sideBarInfo = $event" :sideBar="sideBar" />
    </main>
    <TheUnsupported v-if="false" class="absolute top-0  min-w-full" />
  </div>
</template>

<script setup>
const sideBar = ref(true)
const sideBarInfo = ref(false)
</script>
