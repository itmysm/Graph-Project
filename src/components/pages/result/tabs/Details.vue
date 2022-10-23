<template>
  <div class="w-full">
    <section class="grid grid-cols-3 gap-4 xl:gap-8">
      <div class="bg-neutral/25 rounded-md py-5" v-for="(item, index) in props.messagesPerPerson" :key="index">
        <div class="flex items-center justify-between px-4">
          <p class="text-sm my-0">{{item.name}}</p>

          <span class="flex items-center justify-center w-5 h-5 rounded-full bg-white">
            <!-- <i class="material-symbols-rounded text-primary-content">Chat_Bubble_Outline</i> -->
          </span>
        </div>

        <div class="flex items-center px-4 mt-3">
          <p class="w-[35px] text-center"><count-up class="font-bold text-white" :end-val="item.numOfMessages"></count-up></p>
          <p class="mx-1 text-sm">messages</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  messagesPerPerson: {
    required: true
  }
})
</script>
