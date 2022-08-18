<template>
  <div class="min-w-full min-h-screen bg-[#12181e] flex flex-col justify-center items-center">
    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.6 23.0357H14.9333V27.8571H9.6V30H22.4V27.8571H17.0667V23.0357H30.4C30.8242 23.0352 31.2309 22.8657 31.5308 22.5644C31.8308 22.2632 31.9995 21.8547 32 21.4286V1.60714C31.9995 1.18105 31.8308 0.772559 31.5308 0.471269C31.2309 0.169979 30.8242 0.000496235 30.4 0H1.6C1.17581 0.000496235 0.769126 0.169979 0.469175 0.471269C0.169224 0.772559 0.00049403 1.18105 0 1.60714V21.4286C0.00049403 21.8547 0.169224 22.2632 0.469175 22.5644C0.769126 22.8657 1.17581 23.0352 1.6 23.0357V23.0357ZM2.13333 2.14286H29.8667V20.8929H2.13333V2.14286Z"
        fill="#00FFC2" />
    </svg>

    <h1 class="text-white text-center text-sm mt-5">
      This app is optimized for desktop resolutions 992px and up.
      <br>
      Please try on a larger resolution
    </h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'start'
})
</script>

<style lang="scss" scoped>
</style>
