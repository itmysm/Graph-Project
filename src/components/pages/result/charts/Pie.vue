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
    trigger: 'item'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '70%',

      data: Object.keys(props.data).map(val => {
        if (val !== 'all') {
          return { value: props.data[val].length, name: val }
        } // This value(all) includes all the messages and does not create an interesting view for this graph, so we leave this value out of the loop.
      }),

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

onMounted(() => {
  setTimeout(() => {
    active.value = true
  }, 500)
  console.log(Object.keys(props.data).map(val => {
    return { value: props.data[val], name: val }
  }))
})
</script>
