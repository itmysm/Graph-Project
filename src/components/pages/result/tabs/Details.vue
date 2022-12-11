<template>
  <div class="w-full">
    <PagesResultTemplatesMessagesBox :messages="props.sortedMessages" />
    <div id="test1" class="grid grid-cols-1 xl:grid-cols-1 gap-10 w-full mt-6 mb-6">
      <PagesResultTemplatesChart :title="'resultPageDetailsMessagesBoxChartPerPersonMessage'" :data="messages" :activeCharts="chartTypes.type2" />
      <PagesResultTemplatesChart :title="'resultPageDetailsMessagesBoxChartPerMonth'" :data="messagesInMonths" :activeCharts="chartTypes.type3" />
      <PagesResultTemplatesChart :title="'resultPageDetailsMessagesBoxChartTimeOfDay'" :data="timeMessages.timeOfDay" :activeCharts="chartTypes.type2" />
      <PagesResultTemplatesChart :title="'resultPageDetailsMessagesBoxChartHoursOfDay'" :data="timeMessages.hoursOfDay" :activeCharts="chartTypes.type0" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  messages: {
    required: true
  },
  sortedMessages: {
    required: true
  },
  messagesInMonths: {
    required: true
  },
  timeMessages: {
    required: true
  }
})

console.log(props.timeMessages)

const chartTypes = {
  type0: ['bar'],
  type1: ['pie', 'bar'],
  type2: ['pie', 'bar', 'horizontalBar'],
  type3: ['pie', 'horizontalBar', 'simpleLine']
}

</script>
