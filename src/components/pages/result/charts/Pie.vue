<template>
  <v-chart class="w-full h-[400px]" :option="option" />
</template>

<script setup>
const props = defineProps({
  data: {
    required: true
  }
})

const option = {
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '70%',

      // eslint-disable-next-line array-callback-return
      data: Object.keys(props.data).map(val => {
        if (val !== 'all') {
          return { value: props.data[val].length, name: val }
        } // This value(all) includes all the messages and does not create an interesting view for this graph, so we leave this value out of the loop.
      }),

      label: {
        color: document.querySelector('body').getAttribute('data-theme') === 'dark' ? '#fff' : '#11142d'
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
</script>
