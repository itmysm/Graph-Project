<template>
  <v-chart class="max-w-[500px]" :option="options" />
</template>

<script setup>
const props = defineProps({
  data: {
    required: true
  }
})

const options = {
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
      data: props.data.map(val => {
        return { value: val.numOfMessages, name: val.name }
      })
    }
  ]
}
</script>
