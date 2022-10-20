<template>
  <button class="w-64 flex flex-col h-48 btn bg-[#edf1fc] hover:bg-[#edf1fc] border-none flex flex-col normal-case font-bold relative overflow-hidden">
    <p class="text-5xl h-14 w-24 flex justify-center items-center text-primary">{{ props.data.numOfMessages }}</p>
    <p class="text-sm mt-2 capitalize text-secondary">{{ props.data.name === 'undefined' ? $t('resultPageBaseDataUnknown') : props.data.name }}</p>
  
    <div v-if="randomIndex == 1" class="shapes-1 w-full h-full absolute">
      <div class="first-child bg-primary opacity-25 absolute top-[-15px] w-16 h-16 right-[-20px]"></div>
      <div class="second-child bg-warning opacity-25 absolute bottom-[-10px] w-20 h-20 left-[-40px]"></div>
    </div>

    <div v-if="randomIndex === 2"  class="shapes-2 w-full h-full absolute">
      <div class="first-child bg-primary opacity-25 absolute top-2 w-10 h-10 left-2"></div>
      <div class="second-child bg-warning opacity-25 absolute bottom-[-10px] w-20 h-20 right-[-40px]"></div>
    </div>

    <div v-if="randomIndex == 3" class="shapes-3 w-full h-full absolute">
      <div class="first-child bg-primary opacity-25 absolute top-[-15px] w-20 h-20 left-[-40px]"></div>
      <div class="second-child bg-warning opacity-25 absolute bottom-[-10px] w-20 h-20 right-[-40px]"></div>
    </div>

    <div v-if="randomIndex == 4" class="shapes-4 w-full h-full absolute">
      <div class="first-child bg-primary opacity-25 absolute top-[-15px] w-20 h-20 left-[-20px]"></div>
      <div class="second-child bg-warning opacity-25 absolute bottom-[-10px] w-20 h-20 right-[-10px]"></div>
    </div>

    <div v-if="randomIndex == 5" class="shapes-4 w-full h-full absolute">
      <div class="first-child bg-primary opacity-25 absolute bottom-[-15px] w-24 h-20 left-[-40px]"></div>
      <div class="second-child bg-warning opacity-25 absolute top-[-20px] w-24 h-24 right-[-30px]"></div>
    </div> 
  </button>
</template>

<script setup>
const props = defineProps({
  data: {
    required: true
  }
})

const randomIndex = Math.floor(Math.random() * 5) + 1
</script>

<style lang="scss">
.shapes-1 {
  .first-child {
    border-radius: 64% 36% 41% 59% / 66% 46% 54% 34%;
  }

 .second-child {
    border-radius: 47% 53% 28% 72% / 62% 27% 73% 38%
  }
}

.shapes-2 {
  .first-child {
    border-radius: 49% 51% 57% 43% / 53% 53% 47% 47%
  }

 .second-child {
    border-radius: 37% 63% 42% 58% / 62% 72% 28% 38%
  }
}

.shapes-3 {
  .first-child {
    border-radius: 0% 100% 42% 58% / 100% 22% 78% 0%
  }

 .second-child {
    border-radius: 100% 0% 42% 58% / 62% 73% 27% 38%
  }
}

.shapes-4 {
  .first-child {
    border-radius: 43% 57% 16% 84% / 55% 22% 78% 45%
  }

 .second-child {
    border-radius: 87% 13% 16% 84% / 55% 22% 78% 45%
  }
}

.shapes-5 {
  .first-child {
    border-radius: 87% 13% 76% 24% / 26% 22% 78% 74%
  }

 .second-child {
    border-radius: 87% 13% 76% 24% / 26% 72% 28% 74%
  }
}
</style>
