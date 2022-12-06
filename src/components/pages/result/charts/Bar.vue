<template>
<v-chart class="w-full h-[400px]" :option="option" v-if="active" />
</template>

<script setup>
const props = defineProps({
  data: {
    required: true
  }
})

const active = ref(false)

const option = {
  xAxis: {
    type: 'category',
    data: Object.keys(props.data).map((key) => key.length > 5 ? key.slice(0, 5) : key)
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: Object.keys(props.data).map((key) => props.data[key].length),
      type: 'bar'
    }
  ],

  grid: {
    right: '10px',
    left: '10px',
    width: '100%'

  }
}

onMounted(() => {
  setTimeout(() => {
    console.log(Object.keys(props.data).map((key) => props.data[key].length))
    active.value = true
  }, 500)
})

</script>
