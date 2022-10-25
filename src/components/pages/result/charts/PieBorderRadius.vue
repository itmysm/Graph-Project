<template>
  <v-chart class="max-w-[500px]" :option="options" />
</template>

<script setup>
/* const props = defineProps({
  data: {
    required: true
  }
}) */

const options = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
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
        { value: 1455, name: '3:00 to 9:00' },
        { value: 735, name: '21:00 to 3:00' },
        { value: 580, name: '15:00 to 21:00' },
        { value: 12, name: '9:00 to 15:00' }
      ]
    }
  ]
}
</script>
