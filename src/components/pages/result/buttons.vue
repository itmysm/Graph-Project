<template>
  <button class="w-full btn btn-primary flex flex-col h-fit py-10 normal-case text-white font-bold">
    <p class="text-xl">{{ props.data.value }}</p>
    <p class="text-sm mt-2 capitalize">{{ props.data.name }}</p>
  </button>
</template>

<script setup>
const props = defineProps({
  data: {
    required: true
  }
})
</script>
