<template>
<button class="group flex items-center justify-center transition-all duration-300 min-w-[100px] w-fit focus:outline-none px-5 py-2" :class="btnActive ? 'scale-[.9]' : 'scale-100'" 
  @mousedown="btnActive = true" @mouseup="btnActive = false" @mouseleave="btnActive = false">
  <p class="w-fit">{{props.name}}</p>
  <vue-feather v-if="true" class="relative transition duration-300 group-hover:translate-x-1" :type="props.icon" size="20" aria-hidden="true" :class="props.name ? 'ml-2' : 'ml-0'" />
</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  name: {
    require: true,
    default: 'test',
    type: String
  },

  icon: {
    require: false,
    type: String
  }
})

const btnActive = ref(false)
</script>