<template>
  <div class="">
    <h3 class="text-2xl text-secondary">{{$t('recentFiles')}}</h3>
    <div class="flex">
      <ul class="flex mt-6">
        <li class="w-52 mb-4 group cursor-pointer rtl:ml-5 ltr:mr-5" @click="openFile(i)" v-for="data in examples" :key="data">
          <div class="overflow-hidden rounded-md relative">
            <img class="group-hover:blur-[2px] transition-all duration-500" src="~/assets/media/banners/socials/s-bf3594e61940024a1b16bffcada0c4a0.png" alt="">
            <NuxtLink class="absolute top-[40%] left-[29%] rounded-full"></NuxtLink>
          </div>
          <p class="text-secondary mt-2 group-hover:text-primary transition-all duration-500">{{data.title}}.{{data._extension}}</p>
          <p class="text-xs text-neutral group-hover:text-primary transition-all duration-500">add 30days ago</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data: examples } = await useAsyncData('examples', () => queryContent('/examples').find())
</script>
