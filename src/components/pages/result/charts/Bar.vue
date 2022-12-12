<template>
<v-chart class="w-full h-[400px]" :option="option" dir="rtl"/>
</template>

<script setup>
const props = defineProps({
  data: {
    required: true
  }
})

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    right: '10px',
    left: '10px',
    width: '100%',
    tooltip: {
      show: true,
      direction: 'ltr'
    }
  },
  xAxis: [
    {
      type: 'category',
      data: Object.keys(props.data).map((key) => key.length > 5 ? key.slice(0, 5) : key),
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
      name: 'value',
      type: 'bar',
      barWidth: '60%',
      data: Object.keys(props.data).map((key) => props.data[key])
    }
  ]
}
</script>
