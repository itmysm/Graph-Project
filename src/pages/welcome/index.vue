<template>
  <div
    class="
      min-w-[100vw] min-h-screen
      flex
      justify-between
      items-center
      pt-24
      px-16
      bg-base-100!
    "
  >
    <div class="d-flex flex-column relative bottom-16">
      <h1 class="text text-4xl xl:text-6xl text-primary-focus capitalize font-bold pb-1">
        the graph project
      </h1>
      <p class="text-lg text-neutral w-2/3 font-normal mt-4">
        Graph is the must powerful tools for checking activities based on
        messages sent in social media.
        <a class="link text-info hover:text-info-content">Click here</a>
        to see the full list of features.
      </p>

      <button class="btn btn-primary border px-5 py-3 mt-10 text-white" @click="useRouter().push('/')">
        let's start
      </button>
    </div>
    <img v-if="theme === 'light'" class="max-w-[400px] xl:max-w-[490px] 2xl:max-w-fit" src="~/assets/media/banners/s-9f7685ac9540833d5.jpg" alt="Welcome to graph">
    <img
      v-else
      src="~/assets/media/banners/309c2dee518ba070f5f88ce6811fcd05.png"
      alt="Welcome to graph"
    />
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
definePageMeta({
  layout: 'start'
})
const theme = ref('')
onMounted(() => {
  theme.value = document.querySelector('body').getAttribute('data-theme')
})

</script>

<style lang="scss" scoped>
.text {
  background: linear-gradient(-45deg, #db8dd1, #a290f3, #e7ccad, #ffbd71);
  background-size: 300%;
  letter-spacing: -5px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animated_text 10s ease-in-out infinite;
  -moz-animation: animated_text 10s ease-in-out infinite;
  -webkit-animation: animated_text 10s ease-in-out infinite;
  letter-spacing: 0.1rem;
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
