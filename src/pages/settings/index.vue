<template>
  <div class="main--content w-full mt-14 px-10">
    <div class="pb-5 border-b-2 border-b border-accent mb-5">
      <h3 class="text-2xl text-secondary">{{ $t('Settings') }}</h3>
      <p class="mt-2 text-neutral font-light">this is a test form mysm and he want know whats hapning</p>
    </div>

    <div class="flex flex-col 2xl:grid 2xl:grid-cols-2">
      <settingsTheme class="mt-8 2xl:border-r" />
      <hr class="w-full 2xl:hidden my-8">
      <settingsNotifications class="xl:mt-8" />
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>
