<template>
  <section class="bg-gradient flex flex-col items-center justify-center py-20">
    <h2 class="text-xl lg:text-2xl font-semibold text-def/80">Ready to make your own video?</h2>
    <p class="text-md lg:text-lg font-light mt-2 text-def/70">Let's do it with our online video editor!</p>

    <Button
      class="bg-info-active/90 hover:bg-info-active text-main mt-6 rounded-md md:w-[200px] py-[10px] md:py-[13px] text-md md:text-lg shadow-[0_20px_25px_-5px_rgba(130,96,244,0.3)]"
      :name="'Get Started'" :icon="'chevron-right'" />
  </section>
</template>


<script setup lang="ts">
import Button from "../../UI/Common/Button.vue"
</script>


<style>
.bg-gradient {
  background: rgb(0, 0, 0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(226, 226, 226, 0.2354516806722689) 100%)
}
</style>