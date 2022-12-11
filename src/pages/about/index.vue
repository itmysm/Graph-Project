<template>
  <div class="hideJustScrollBar w-full flex flex-col justify-center items-center px-10">
    <div class="flex flex-col justify-center items-center">
      <PagesAboutAvatarBox :url="'https://avatars.githubusercontent.com/u/75526205?v=4'" :alt="'Meysam Kiani'" :profile="'https://github.com/itmysm'"/>
      <h1 class="font-bold text-xl mt-3">Meysam Kiani(Creator)</h1>
      <h3 class="text-lg">Front-end developer</h3>
    </div>

    <div class="flex flex-col w-full mt-10">
      <h1 class="text-2xl font-bold">Contributors</h1>

      <div class="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5 backdrop-blur-md">
        <div class="flex flex-col items-center mt-10" v-for="i in 4" :key="i">
          <PagesAboutAvatarBox :url="'https://avatars.dicebear.com/api/pixel-art-neutral/' + Math.floor(Math.random() * 999) + '.svg?background=%232222'" :alt="'no one'" :profile="''"/>
          <h1 class="font-bold text-xl mt-3">Contributor</h1>
          <h3 class="text-lg">Contribute now!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
