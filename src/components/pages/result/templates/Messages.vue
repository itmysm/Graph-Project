<template>
  <section class="grid grid-cols-3 gap-4 xl:gap-8 border border-accent mt-8 px-4 py-4 rounded-md drop-shadow-md" :class="Object.keys(props.messages).length > 3 ? 'xl:grid-cols-4' : ''">
    <div class="bg-neutral/25 rounded-md py-5" v-for="(item, index) in Object.keys(props.messages)" :key="index">
      <div class="flex items-center justify-between px-4">
        <p class="text-sm my-0">{{ item == 'all' ? 'All Messages' : item }}</p>

        <span class="flex items-center justify-center w-5 h-5 rounded-full bg-white">
          <!-- <i class="material-symbols-rounded text-primary-content">Chat_Bubble_Outline</i>  -->
        </span>
      </div>

      <div class="flex items-center px-4 mt-3">
        <p class="w-[35px] text-center"><count-up class="font-bold text-white" :end-val="props.messages[item].length"></count-up></p>
        <p class="mx-1 text-sm">messages</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  messages: {
    required: true
  }
})
</script>
