<template>
<div class="w-full grid grid-flow-row-dense grid-cols-3 xl:grid-cols-4 gap-4 2xl:grid-cols-5 grid-rows-3 px-10 py-10">
  <div><PagesResultButtons :data="{name: 'Number of message', value: result.numberOfMessages}" /></div>
  <div v-for="(item, i) in result.numberOfMessagesPerPerson" :key="i"><PagesResultButtons :data="{ name: i, value: item}" /></div>
</div>
</template>

<script setup>
const result = JSON.parse(localStorage.getItem('result'))
console.log(result)
</script>
