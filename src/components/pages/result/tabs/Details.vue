<template>
  <div class="w-full">
    <PagesResultTemplatesMessagesBox :messages="props.sortedMessages" />
    <div id="test1" class="grid grid-cols-1 xl:grid-cols-1 gap-10 w-full mt-6 mb-6">
      <PagesResultTemplatesChart :title="'resultPageDetailsMessagesBoxChartPerPersonMessage'" :data="messages" :activeCharts="chartTypes.type1" />
      <PagesResultTemplatesChart :title="'resultPageDetailsMessagesBoxChartPerPersonMessage'" :data="messagesInMonths" :activeCharts="chartTypes.type2" />
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
  }
})

console.log(props.sortedMessages)

const chartTypes = {
  type1: ['pie', 'bar', 'horizontalBar'],
  type2: ['pie']
}

</script>
