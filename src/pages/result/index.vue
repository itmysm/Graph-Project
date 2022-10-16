<template>
  <section class="w-full" v-if="result">
    <div class="max-w-full mt-14 px-10 overflow-hidden">
      <div class="w-full flex items-center mb-5 justify-between">
        <h3 class="text-2xl relative" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">{{ $t('BaseDataTitle') }}</h3>
      </div>
      <section class="flex hideJustScrollBar">
        <div class="mr-10"><PagesResultButtons :data="{name: $t('resultPageBaseDataAllMessages'), value: result.numberOfMessages, shapeIndex: 0 }" /></div>
        <div class="mr-10" v-for="(item, i) in result.numberOfMessagesPerPerson" :key="i"><PagesResultButtons :data="{ name: i, value: item, shapeIndex: i} " /></div>
      </section>
    </div>
  </section>
  <section class="w-full" v-else>
    Not Yet
  </section>
</template>

<script setup>
const result = JSON.parse(localStorage.getItem('result'))
const theme = ref(document.querySelector('body').getAttribute('data-theme'))
</script>
