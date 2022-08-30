<template>
  <div class="w-full flex justify-center items-center">
    <TheLoading class="opacity-75 bg-white" v-show="false"/>
    <DeskOptions/>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index.js'
const mainStore = useMainStore()
const isFileExists = ref(false)

onMounted(() => {
  isFileExists.value = mainStore.fileStatus.isFileUploaded
})
</script>
