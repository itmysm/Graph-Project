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
    :style="theme === 'dark' ? 'background-color:#101425;' : ''"
  >
    <div class="d-flex flex-column relative bottom-16">
      <h1 class="text text-4xl xl:text-6xl text-primary-focus capitalize font-bold pb-1">
        the graph project
      </h1>
      <p class="text-lg text-neutral w-2/3 font-normal mt-4">
        A powerful web app for analyzing messages sent in social media and drawing different graphs based on it
      </p>

      <button class="btn btn-primary border px-5 py-3 mt-10 text-white" @click="useRouter().push('/')">
        let's start
      </button>
    </div>
    <img v-if="theme === 'dark'" class="max-w-[490px] xl:max-w-[520px] 2xl:max-w-fit" :src="useMediaBaseApi().value + 'banners/welcome%20page/dark.webp'" alt="Welcome to graph">
    <img
      v-else
      :src="useMediaBaseApi().value + 'banners/welcome%20page/light.webp'"
      alt="Welcome to graph"
    />
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
definePageMeta({
  layout: 'start'
})

const theme = ref()
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
