<template>
  <section class="w-full" >
    <div class="max-w-full mt-14 px-10 overflow-hidden">
      <div class="w-full flex items-center mb-5 justify-between">
        <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('BaseDataTitle') }}</h3>
      </div>
      <section class="flex hideJustScrollBar">
        <div class="mr-10"><PagesResultButtons :data="{name: $t('resultPageBaseDataAllMessages'), value: result.numberOfMessages, shapeIndex: 0 }" /></div>
        <div class="mr-10" v-for="(item, i) in result.numberOfMessagesPerPerson" :key="i"><PagesResultButtons :data="{ name: i, value: item, shapeIndex: i} " /></div>
      </section>
    </div>

    <div class="max-w-full mt-14 px-10 overflow-hidden">
      <div class="w-full flex items-center mb-5 justify-between">
        <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('BaseDataTitle') }}</h3>
      </div>

      <div class="grid grid-cols-2 gap-4 h-80">
        <div class="flex justify-center">
          <v-chart class="max-w-[500px]" :option="option" v-if="isDOMReady" />
        </div>

        <div class="flex justify-center">
          <v-chart class="max-w-[500px]" :option="pieOptions" v-if="isDOMReady" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const result = JSON.parse(localStorage.getItem('result'))
const theme = ref(document.querySelector('body').getAttribute('data-theme'))
const isDOMReady = ref(false)
const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
})

const pieOptions = {
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

onMounted(() => {
  console.log(window)
  setTimeout(() => {
    isDOMReady.value = true
  }, 1000)
})
</script>

<style lang="scss">
 canvas {
   max-width: 300px;
   max-height: 300px;
 }
</style>
