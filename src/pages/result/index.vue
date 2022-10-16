<template>
  <section class="w-full" v-if="result">
    <div class="max-w-full mt-14 px-10 overflow-hidden">
      <div class="w-full flex items-center mb-5 justify-between">
        <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('BaseDataTitle') }}</h3>
      </div>
      <section class="flex hideJustScrollBar">
        <div class="mr-10"><PagesResultButtons :data="{name: $t('resultPageBaseDataAllMessages'), value: result.numberOfMessages, shapeIndex: 0 }" /></div>
        <div class="mr-10" v-for="(item, i) in result.numberOfMessagesPerPerson" :key="i"><PagesResultButtons :data="{ name: i, value: item, shapeIndex: i} " /></div>
      </section>
      <v-chart class="chart" :option="option" />
    </div>
  </section>
  <section class="w-full" v-else>
    <v-chart />
  </section>
</template>

<script setup>
const result = JSON.parse(localStorage.getItem('result'))
const theme = ref(document.querySelector('body').getAttribute('data-theme'))

const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines']
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})
</script>
