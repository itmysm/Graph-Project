<template>
  <section class="w-full overflow-hidden" >
    <div class="max-w-full mt-14 px-10 overflow-hidden">
      <div class="w-full flex items-center mb-5 justify-between">
        <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('BaseDataTitle') }}</h3>
      </div>
      <PagesResultTopList />
    </div>
    <!-- <div class="max-w-full mt-14 px-10 overflow-hidden">
      <div class="w-full flex items-center mb-5 justify-between">
        <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('professionalDataTitle') }}</h3>
      </div>

      <div class="grid grid-cols-2 gap-4 h-80">
        <div class="flex justify-center">
          <v-chart class="max-w-[500px]" :option="option" v-if="isDOMReady" />
        </div>

        <div class="flex justify-center">
          <v-chart class="max-w-[500px]" :option="pieOptions" v-if="isDOMReady" />
        </div>
      </div>
    </div> -->
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
      data: result.numberOfMessagesPerPerson.map(person => person.name),
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
      data: result.numberOfMessagesPerPerson.map(person => person.numOfMessages)
    }
  ]
})

const pieOptions = {
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Messages',
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
      data: result.numberOfMessagesPerPerson.map(val => {
        return {value: val.numOfMessages, name: val.name}
      })
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
