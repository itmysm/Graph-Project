<template>
  <v-chart class="w-full h-[400px]" :option="option" v-if="active" />
  <div class="flex justify-center items-center h-40" v-if="!active">
    <AnimationsLoading class="w-full bg-primary" />
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    required: true
  }
})
const active = ref(false)
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    // eslint-disable-next-line array-callback-return
    data: Object.keys(props.data).map(val => {
      if (val !== 'all') {
        return val
      } // This value(all) includes all the messages and does not create an interesting view for this graph, so we leave this value out of the loop.
    })
  },
  series: [
    {
      type: 'bar',
      // eslint-disable-next-line array-callback-return
      data: Object.keys(props.data).map(val => {
        if (val !== 'all') {
          return props.data[val].length
        } // This value(all) includes all the messages and does not create an interesting view for this graph, so we leave this value out of the loop.
      })
    }
  ]
}

onMounted(() => {
  setTimeout(() => {
    active.value = true
  }, 500)
  console.log(Object.keys(props.data).map(val => {
    return { value: props.data[val], name: val }
  }))
})
</script>
