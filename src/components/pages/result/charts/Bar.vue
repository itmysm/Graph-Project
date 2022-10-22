<template>
  <v-chart class="max-w-[500px]" :option="option" />
</template>

<script setup>
const props = defineProps({
  data: {
    required: true
  }
})

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
      data: props.data.map(person => person.name),
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
      data: props.data.map(person => person.numOfMessages)
    }
  ]
})

onMounted(() => {
  console.log('test')
})

</script>
