<script setup lang="ts">
import { onMounted } from 'vue'
import { useSettersStore } from '@/stores/setters'
import { setLocation } from '@/utils/getUserLocation'

onMounted(async () => {
  useSettersStore().registerUser()
  await setLocation() // get IP and user location =>
  useSettersStore().setAssetsBaseURL() // set BASE_URL for assets base on user location for better experience.
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
