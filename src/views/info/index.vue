<template>
  <section class="h-full">
    <TheHeader />

    <div class="flex justify-center mt-20">
      <h1 class="text-[44px] md:text-[64px] font-bold mr-2">Graph Project</h1>
      <p class="text-neutral text-md mt-3 md:mt-6">(Beta)</p>
    </div>

    <div class="flex flex-col items-center justify-center mt-2 md:mt-4">
      <p class="text-lg md:text-xl text-center">
        Analyze your own chats in social media and
        <br>
        discover important and interesting information
      </p>

      <Button class="bg-info-active/90 hover:bg-info-active text-main mt-6 rounded-md md:w-[200px] py-[10px] md:py-[13px] text-md md:text-lg" :name="'Get Started'" :icon="'chevron-right'" />
    </div>

    <TheFooter />
  </section>
</template>


<script setup lang="ts">
import TheHeader from "../../components/TheHeader.vue"
import TheFooter from "../../components/TheFooter.vue"
import Button from "../../components/UI/Common/Button.vue"
</script>