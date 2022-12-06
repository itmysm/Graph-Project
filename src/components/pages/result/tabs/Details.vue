<template>
  <div class="w-full">
    <PagesResultTemplatesMessagesBox :messages="props.messages" />
    <div id="test1" class="grid grid-cols-2 xl:grid-cols-3 gap-10 w-full mt-6 mb-6">
      <div class="w-full border border-accent rounded-md px-10">
        <h1 class="mt-6 text-xl">{{$t('resultPageDetailsMessagesBoxAllMessages')}}</h1>
        <PagesResultChartsBar :data="messages"/>
      </div>

      <div class="w-full border border-accent rounded-md px-10">
        <h1 class="mt-6 text-xl">{{$t('resultPageDetailsMessagesBoxAllMessages')}}</h1>
        <PagesResultChartsBar :data="messages"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  messages: {
    required: true
  }
})

</script>
