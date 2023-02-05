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
        discover interesting and funny information
      </p>

      <Button
        class="bg-info-active/90 hover:bg-info-active text-main mt-6 rounded-md md:w-[200px] py-[10px] md:py-[13px] text-md md:text-lg shadow-[0_20px_25px_-5px_rgba(130,96,244,0.3)]"
        :name="'Get Started'" :icon="'chevron-right'" />
    </div>
    <Abilities class="mt-16 hidden md:flex" />
    <How class="mt-16 flex" />
    <Features class="mt-16" />
    <GetStarted />
    <Resources />

    <TheFooter />
  </section>
</template>


<script setup lang="ts">
import TheHeader from "../../components/TheHeader.vue"
import TheFooter from "../../components/TheFooter.vue"
import Button from "../../components/UI/Common/Button.vue"
import Features from '@/components/Views/Info/Features.vue'
import How from "@/components/Views/Info/How.vue";
import GetStarted from "@/components/Views/Info/GetStarted.vue";
import Resources from "@/components/Views/Info/Resources.vue";
import Abilities from "@/components/Views/Info/Abilities.vue";
</script>