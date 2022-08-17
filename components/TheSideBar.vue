<template>
  <div
    class="sidebar border-r border-neutral bg-base-1 w-[80px] xl:w-[220px] h-[100vh] transition-all duration-500">
    <div class="w-full flex justify-center">
      <ul class="px-0">
        <li>
            <NuxtLink to="/">Lorem</NuxtLink>
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
</script>

<style lang="scss" scoped>
.sidebar {}
</style>
