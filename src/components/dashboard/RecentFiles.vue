<template>
  <div class="">
    <h3 class="text-2xl text-secondary">Recently Files</h3>
    <div class="flex">
      <ul class="mt-6">
        <li class="w-52 mb-4 group cursor-pointer" @click="openFile(i)">
          <div class="overflow-hidden rounded-md relative">
            <img class="group-hover:blur-[2px] transition-all duration-500" src="~/assets/media/banners/socials/s-bf3594e61940024a1b16bffcada0c4a0.png" alt="">
            <NuxtLink class="absolute top-[40%] left-[29%] rounded-full"></NuxtLink>
          </div>
          <p class="text-secondary mt-2 group-hover:text-primary transition-all duration-500">Whatsapp.html</p>
          <p class="text-xs text-red group-hover:text-primary transition-all duration-500">add 30days ago</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// getting data from local or...
// const data = reactive([])
// function openFile(index){}
</script>
