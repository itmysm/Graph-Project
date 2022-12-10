<template>
  <div class="w-full">
    <PagesResultTemplatesMessagesBox :messages="props.messages" />
    <div id="test1" class="grid grid-cols-1 xl:grid-cols-1 gap-10 w-full mt-6 mb-6">
      <div class="w-full border border-accent rounded-md px-10">
        <h1 class="flex items-center mt-6 text-sm xl:text-lg">
          <span class="flex items-center justify-center bg-primary/75 w-[30px] h-[30px] rounded-full ltr:mr-2 rtl:ml-2"><i class="material-symbols-rounded text-[20px] text-white">Info</i></span>
          {{$t('resultPageDetailsMessagesBoxChartPerPersonMessage')}}
        </h1>
        <PagesResultChartsBar :data="messages"/>
      </div>

      <div class="w-full border border-accent rounded-md px-10">
        <h1 class="flex items-center mt-6 text-sm xl:text-lg">
          <span class="flex items-center justify-center bg-primary/75 w-[30px] h-[30px] rounded-full ltr:mr-2 rtl:ml-2"><i class="material-symbols-rounded text-[20px] text-white">Info</i></span>
          {{$t('resultPageDetailsMessagesBoxChartPerPersonMessage')}}
        </h1>
        <PagesResultChartsSimpleLine :data="messagesInMonths"/>
      </div>

      <PagesResultTemplatesChart :title="'resultPageDetailsMessagesBoxChartPerPersonMessage'" :data="messages" :activeCharts="chartTypes.type1" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  messages: {
    required: true
  },
  messagesInMonths: {
    required: true
  }
})

const chartTypes = {
  type1: ['pie', 'bar', 'horizontalBar'],
  type2: ['pie', 'bar', 'line']
}

</script>
