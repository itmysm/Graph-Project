<!-- This file extracts the information from the html file and converts it into an object -->

<template>
  <div class="instagram--temp"></div>
</template>

<script setup>
const startTime = performance.now()
const emit = defineEmits(['status'])

const minLimit = 4
finish()

function finish () {
  const endTime = performance.now()
  emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
}
</script>
