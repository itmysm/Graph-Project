<template>
  <section class="flex justify-center border-y border-black/10 py-20">
    <div class="flex flex-col items-center max-w-[1200px]">
      <h2 class="text-2xl font-semibold text-def/80 mb-16">How to create a video online</h2>

      <div class="grid grid-cols-2 gap-x-10 px-10">
        <ul>
          <li class="flex px-5 rounded-md py-3 lg:py-7 mb-5" v-for="(step, index) in steps" :key="index"
            @click="currentIndex = index"
            :class="currentIndex !== index ? 'bg-[#f6f6f7] cursor-pointer items-center' : 'border border-black/20 items-start'">
            <div class="text-sm lg:text-md mr-5 lg:mr-7 shrink-0 text-warning/70 text-[#0c8]">{{ step.step }}</div>

            <div class="flex flex-col">
              <h3 class="text-md" :class="currentIndex == index ? 'text-def mb-2 lg:mb-3' : 'text-def/70'">{{
                step.title
              }}</h3>
              <p class="text-sm" :class="currentIndex == index ? 'block text-def/70' : 'hidden'">
                {{ step.description }}
              </p>
            </div>
          </li>
        </ul>

        <img class="rounded-md" :src="steps[currentIndex == -1 ? 0 : currentIndex].image" alt="step">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentIndex = ref(0)

const steps = [
  { step: 'Step 1', title: "Get started", description: "Upload all the pics, videos and audio you want to the editor. You can choose them from your device, Google Drive and Dropbox storage account. If you want to make a video from scratch, just proceed to the next step.", image: 'https://static.clideo.com/assets/images/editor/how-to-desktop-1.avif' },
  { step: 'Step 2', title: "Create a video", description: "Upload all the pics, videos and audio you want to the editor. You can choose them from your device, Google Drive and Dropbox storage account. If you want to make a video from scratch, just proceed to the next step.", image: 'https://static.clideo.com/assets/images/editor/how-to-desktop-2.avif' },
  { step: 'Step 3', title: "Save results", description: "Upload all the pics, videos and audio you want to the editor. You can choose them from your device, Google Drive and Dropbox storage account. If you want to make a video from scratch, just proceed to the next step.", image: 'https://static.clideo.com/assets/images/editor/how-to-desktop-3.avif' },
  { step: 'Step 4', title: "Get a feedback", description: "Upload all the pics, videos and audio you want to the editor. You can choose them from your device, Google Drive and Dropbox storage account. If you want to make a video from scratch, just proceed to the next step.", image: 'https://static.clideo.com/assets/images/editor/how-to-desktop-3.avif' },
]
</script>