<template>
  <section class="flex justify-center border-y border-black/10 py-16 md:py-20">
    <div class="flex flex-col items-center max-w-[1200px]">
      <h2 class="text-2xl font-semibold text-def/80 mb-10 md:mb-16">Resources</h2>

      <ul class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 lg:px-10">
        <li class="flex flex-col items-center"
          v-for="(resource, index) in resources" :key="index">
          <router-link class="group px-5 pt-3 pb-7 rounded-md bg-main transition-shadow hover:shadow-lg" to="#">
            <img class="lg:max-w-[200px] xl:max-w-[240px]"
              src="https://static.clideo.com/files/content/300/how-to-make-side-by-side-video.png" alt="">

            <div class="w-full lg:max-w-[200px] xl:max-w-[240px] mt-3">
              <h3 class="text-def/80 font-semibold group-hover:text-primary-active">How Export My Chat From whatsapp?</h3>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentIndex = ref(0)

const resources = [
  { step: 'Step 1', title: "Get started", description: "Upload all the pics, videos and audio you want to the editor. You can choose them from your device, Google Drive and Dropbox storage account. If you want to make a video from scratch, just proceed to the next step.", image: 'https://static.clideo.com/assets/images/editor/how-to-desktop-1.avif' },
  { step: 'Step 2', title: "Create a video", description: "Upload all the pics, videos and audio you want to the editor. You can choose them from your device, Google Drive and Dropbox storage account. If you want to make a video from scratch, just proceed to the next step.", image: 'https://static.clideo.com/assets/images/editor/how-to-desktop-2.avif' },
  { step: 'Step 3', title: "Save results", description: "Upload all the pics, videos and audio you want to the editor. You can choose them from your device, Google Drive and Dropbox storage account. If you want to make a video from scratch, just proceed to the next step.", image: 'https://static.clideo.com/assets/images/editor/how-to-desktop-3.avif' },
  { step: 'Step 3', title: "Save results", description: "Upload all the pics, videos and audio you want to the editor. You can choose them from your device, Google Drive and Dropbox storage account. If you want to make a video from scratch, just proceed to the next step.", image: 'https://static.clideo.com/assets/images/editor/how-to-desktop-3.avif' },
]
</script>