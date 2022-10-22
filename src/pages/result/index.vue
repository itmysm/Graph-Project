<template>
  <div class="hideJustScrollBar max-w-[100%] w-full overflow-x-hidden mt-14 px-10">
    <h3 class="text-2xl relative flex items-center" :class="theme === 'dark' ? 'text-white' : 'text-secondary'"> <i class="material-symbols-rounded">Flash_On</i> {{ $t('ResultPageTitle') }}</h3>

    <div class="tabs mt-5 border-b border-accent">
      <a class="tab tab-bordered flex items-center px-0 mr-5 text-center border-b-[1px] pb-2 h-fit transition-all duration-300" :class="activeTabIndex === index ? 'border-primary text-primary' : 'border-[transparent]'" v-for="(tab, index) in tabs" :key="index" @click="activeTabIndex = index">
        <i class="material-symbols-rounded !text-[18px] mr-[5px]">{{tab.icon}}</i>
        <p class="my-0 mr-2">{{tab.name}}</p>
      </a>
    </div>
    <!-- <section class="" v-if="result === null"></section>

    <section class="w-full" v-else>
      <div class="max-w-full">
        <div class="w-full flex items-center mb-5 justify-between">
          <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('BaseDataTitle') }}</h3>
        </div>
        <PagesResultTopList />
      </div>

      <div class="max-w-full mt-14">
        <div class="w-full flex items-center mb-5 justify-between">
          <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('professionalDataTitle') }}</h3>
        </div>

        <div class="grid grid-cols-2 2xl:grid-cols-3 gap-4 min-h-80">
          <div class="flex col-span-1 justify-center bg-accent rounded-lg h-80">
            <PagesResultChartsBar :data="result.numberOfMessagesPerPerson" v-if="isDOMReady && windowResized" />
          </div>

          <div class="flex col-span-1 justify-center bg-accent rounded-lg h-80">
            <PagesResultChartsPie :data="result.numberOfMessagesPerPerson" v-if="isDOMReady && windowResized"  />
          </div>

          <div class="flex justify-center bg-accent rounded-lg h-80">
            <PagesResultChartsPie :data="result.numberOfMessagesPerPerson" v-if="isDOMReady && windowResized" />
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
// const result = JSON.parse(localStorage.getItem('result'))
const theme = ref(document.querySelector('body').getAttribute('data-theme'))
// const isDOMReady = ref(false)
// const windowResized = ref('false')

const tabs = [{ name: 'Details', icon: 'List' }, { name: 'Members', icon: 'Groups_3' }, { name: 'Person', icon: 'Person_Filled' }, { name: 'Dates', icon: 'Calendar_Month' }, { name: 'Times', icon: 'Timer' }]
const activeTabIndex = ref(0)
</script>

<style lang="scss">
 canvas {
   max-width: 300px;
   max-height: 300px;
 }
</style>
