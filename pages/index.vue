<template>
  <div class="min-w-[100vw] min-h-screen flex justify-between items-center pt-24 px-16 bg-[#0f0f0f]">
    <div class="d-flex flex-column relative bottom-16">
      <h1 class="text-6xl text-white">the graph project</h1>
      <p class="text-base w-2/3 font-semibold mt-4 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo non explicabo excepturi quam rem esse eum distinctio laboriosam maxime, facilis corporis nam suscipit fuga numquam aperiam tenetur modi quaerat error.</p>

      <button class="border px-5 py-3 mt-10 text-white">let's start</button>
    </div>
    <!-- <img src="~/assets/media/banners/s-9f7685ac9540833d5.jpg" alt="Welcome to graph"> -->
    <img src="~/assets/media/banners/309c2dee518ba070f5f88ce6811fcd05.png" alt="Welcome to graph" />
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss" scoped>
.text {
  background: linear-gradient(-45deg, #6355a4, #6355a4, #e89a3e, #e89a3e);
  background-size: 300%;
  letter-spacing: -5px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animated_text 10s ease-in-out infinite;
  -moz-animation: animated_text 10s ease-in-out infinite;
  -webkit-animation: animated_text 10s ease-in-out infinite;
  letter-spacing: .1rem;
}

@keyframes animated_text {
  0% {
    background-position: 0px 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0px 50%;
  }
}
</style>
