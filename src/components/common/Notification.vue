<template>
  <div class="w-[400px] h-20 relative rounded-lg py-5 px-4 h-fit ltr:font-sans rtl:font-persian" :class="theme === 'dark' ? 'border-accent' : 'bg-secondary'">
    <button class="btn btn-xs border-none bg-transparent hover:bg-transparent absolute top-2 right-2"
      @click.once="$emit('close', true)">
      <i class="material-symbols-rounded text-[20px] text-accent" :class="close ? '' : 'animate-wiggle'">Close</i>
    </button>
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-1 flex justify-center items-center pb-4">
        <img :src="'../../assets/media/icons/' + notification.type + '.png'" :alt="notification.type" width="33">
      </div>
      <div class="col-span-6">
        <div>
          <h4 class="text-lg text-base-100 mb-1">{{ notification.title }}</h4>
          <p class="text-sm text-accent">{{ notification.description }}</p>
        </div>

        <div class="flex mt-5" v-if="notification.type === 'success' && notification.button != false">
          <button class="btn bg-[#2d3657] border-none text-accent btn-sm text-xs capitalize ml-7 mr-5 rounded px-4"
            @click.once="$emit('result', true)">{{ notification.button === undefined ? 'Ok' : notification.button }}</button>
          <button class="btn bg-[#2d3657] border-none text-accent btn-sm text-xs capitalize rounded px-4"
            @click.once="$emit('result', false)">Cancel</button>
        </div>

        <div class="flex items-center mt-5" v-else-if="notification.type === 'upload'">
          <div class="relative">
            <p class="text-xs mb-0 top-[-8px] absolute right-4 text-accent">{{ progressBar }}<span>%</span></p>
            <progress class="progress progress-primary w-48 h-[.3rem] mr-5 rounded" :value="progressBar"
              max="100"></progress>

          </div>
          <button class="btn bg-[#2d3657] border-none text-accent btn-sm text-xs capitalize rounded px-4"
            @click.once="$emit('result', false)">
            Cancel
          </button>
        </div>
      </div>
    </div>

    <audio autoplay :src="'../../assets/media/audios/' + notification.type + '.mp3'"></audio>
  </div>
</template>

<script setup>

const props = defineProps({
  notification: {
    required: true
  }
})

// eslint-disable-next-line vue/no-setup-props-destructure
const notification = props.notification
const theme = ref(document.querySelector('body').getAttribute('data-theme'))
const close = ref('false')
const progressBar = ref(0)

onMounted(() => {
  const timerInterVal = ref(100)
  setInterval(() => {
    progressBar.value < 100 ? progressBar.value++ : timerInterVal.value = false
  }, timerInterVal)
})

</script>
