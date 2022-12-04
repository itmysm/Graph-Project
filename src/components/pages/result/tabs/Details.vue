<template>
  <div class="w-full">
    <PagesResultTemplatesFileInfo />
    <h4 class="mt-10 mb-3">Chat List</h4>
    <!-- <PagesResultTemplatesMessages :messages="props.messages" /> -->

    <h4 class="mt-10 mb-3">Chat List</h4>
    <div class="grid grid-cols-2 gap-4">
      <div class="...">01</div>
      <!-- <PagesResultChartsBar :messages="props.messages" /> -->
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
