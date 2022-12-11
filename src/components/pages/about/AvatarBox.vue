<template>
  <div class="border border-neutral w-48 rounded-md overflow-hidden">
    <a :href="props.profile" target="_blank">
      <img :src="props.url" :alt="alt" />
    </a>
  </div>
</template>

<script setup>
const props = defineProps(['url', 'alt', 'profile'])
</script>
