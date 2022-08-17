<template>
  <div class="layout">
    <main class="flex">
      <TheSideBar />
      <slot v-if="true" />
    </main>
    <TheUnsupported v-if="false" class="absolute top-0  min-w-full" />
  </div>
</template>
