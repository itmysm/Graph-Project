<template>
  <div class="w-full">
    <PagesResultTemplatesFileInfo />
    <PagesResultTemplatesMessages :messages="props.messages" />
  </div>
</template>

<script setup>
const props = defineProps({
  messages: {
    required: true
  }
})
</script>
