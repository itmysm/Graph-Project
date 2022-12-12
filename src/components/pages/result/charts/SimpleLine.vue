<template>
    <v-chart class="w-full h-[400px]" :option="option" dir="ltr" />
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
  xAxis: {
    type: 'category',
    data: Object.keys(props.data).map(key => key)
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: Object.keys(props.data).map(key => props.data[key]),
      type: 'line'
    }
  ]
}
</script>
