<script setup lang="ts">
import { onMounted } from 'vue'
import { useMainStore } from './stores/main'
import { setLocation } from '@/utils/getUserLocation'

onMounted(async () => {
  useMainStore().registerUser()
  await setLocation() // get IP and user location =>
  useMainStore().setAssetsBaseURL() // set BASE_URL for assets base on user location for better experience.
  useMainStore().setLanguage()
  useMainStore().setTheme()
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style>
  @import './assets/styles/main.css';
</style>
