<template>
  <div class="w-full" id="test">
    <section class="" v-if="result === null"></section>
    <section class="w-full overflow-hidden" v-else>
      <div class="max-w-full mt-14 px-10 overflow-hidden">
        <div class="w-full flex items-center mb-5 justify-between">
          <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('BaseDataTitle') }}</h3>
        </div>
        <PagesResultTopList />
      </div>
      <div class="max-w-full mt-14 px-10 overflow-hidden">
        <div class="w-full flex items-center mb-5 justify-between">
          <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('professionalDataTitle') }}</h3>
        </div>

        <div class="grid grid-cols-3 gap-4 h-80">
          <div class="flex justify-center bg-accent rounded-lg">
            <PagesResultChartsBar :data="result.numberOfMessagesPerPerson" v-if="isDOMReady" />
          </div>

          <div class="flex justify-center bg-accent rounded-lg">
            <PagesResultChartsPie :data="result.numberOfMessagesPerPerson" v-if="isDOMReady" />
          </div>

          <div class="flex justify-center bg-accent rounded-lg">
            <PagesResultChartsPie :data="result.numberOfMessagesPerPerson" v-if="isDOMReady" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const result = JSON.parse(localStorage.getItem('result'))
const theme = ref(document.querySelector('body').getAttribute('data-theme'))
const isDOMReady = ref(false)

onMounted(() => {
  setTimeout(() => {
    isDOMReady.value = true
  }, 1000)

  document.querySelector('#test').addEventListener('resize', () => {
    console.log('test2')
  })
})
</script>

<style lang="scss">
 canvas {
   max-width: 300px;
   max-height: 300px;
 }
</style>
