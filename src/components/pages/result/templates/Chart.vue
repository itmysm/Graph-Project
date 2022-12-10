<template>
  <div>
    <ul class="flex">
      <li class="flex items-start border border-accent border-b-0 rounded-t-md px-3 py-1 pt-2 rtl:ml-[1px] mr-[1px] cursor-pointer text-neutral"
        :class="[activeIndex === index ? '!text-info' : '']"
        v-for="(chart, index) in props.activeCharts" :key="index"
        @click="activeIndex = index"
        :="chartTypes[chart].status = true">

        <span class=""><i class="material-symbols-rounded text-[20px]">{{chartTypes[chart].icon}}</i></span>
        <p class="text-sm ltr:ml-1 rtl:mr-1">{{chartTypes[chart].name}}</p>

      </li>
    </ul>
    <section class="w-full border border-accent rounded-b-md px-10">
      <h1 class="flex items-center mt-6 text-sm xl:text-lg">
          <span class="flex items-center justify-center bg-primary/75 w-[30px] h-[30px] rounded-full ltr:mr-2 rtl:ml-2"><i class="material-symbols-rounded text-[20px] text-white">Info</i></span>
          {{$t(props.title)}}
      </h1>

        <div v-if="active">
          <PagesResultChartsBar v-if="chartTypes.bar.status && activeIndex === returnIndexOfSpecifiedChart('bar')" :data="props.data" />
          <PagesResultChartsPie v-if="chartTypes.pie.status && activeIndex === returnIndexOfSpecifiedChart('pie')" :data="props.data" />
          <PagesResultChartsHorizontalBar v-if="chartTypes.horizontalBar.status && activeIndex === returnIndexOfSpecifiedChart('horizontalBar')" :data="props.data" />
          <PagesResultChartsSimpleLine v-if="chartTypes.simpleLine.status && activeIndex === returnIndexOfSpecifiedChart('simpleLine')" :data="props.data" />
        </div>

        <AnimationsMainLoading class="w-full h-[400px] bg-primary" v-if="!active" />

    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    require: true
  },
  data: {
    require: true
  },
  activeCharts: {
    require: true
  }
})

const chartTypes = {
  line: { name: 'Line', icon: 'Stacked_Line_Chart', status: false },
  bar: { name: 'Bar', icon: 'Bar_Chart', status: false },
  pie: { name: 'Pie', icon: 'Pie_Chart', status: false },
  horizontalBar: { name: 'Horizontal Bar', icon: 'Align_Horizontal_Right', status: false },
  simpleLine: { name: 'Line', icon: 'Line_Axis', status: false }
}
const activeIndex = ref(0)
const active = ref(false)

function returnIndexOfSpecifiedChart (specifiedChart) {
  let i = 0
  props.activeCharts.forEach((chart, index) => {
    if (specifiedChart === chart) i = index
  })

  return i
}

watch(() => activeIndex.value, () => {
  active.value = false
  setTimeout(() => {
    active.value = true
  }, (Math.floor(Math.random() * 5) + 1) * 1000)
})

onMounted(() => {
  setTimeout(() => {
    active.value = true
    console.log(props.data)
    // eslint-disable-next-line array-callback-return
    Object.keys(props.data).map(val => {
      console.log(props.data[val], val)
    })
  }, 300)
})
</script>
