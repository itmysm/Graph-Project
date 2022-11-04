
<template v-if="showTemplate">
  <div class="telegram px-10 py-10 bg-transparent absolute top-0 left-0">
    1
    <section class="">
    </section>
    <!-- <CommonTable :list="chats"/> -->
  </div>
</template>

<script setup>
import { get, set } from 'idb-keyval'

const startTime = performance.now()
const emit = defineEmits(['status'])

// if uploaded file is telegram file continue
const fileInfo = JSON.parse(localStorage.getItem('temporaryInfoFile'))
const minLimit = fileInfo.application === 'telegram' ? 5 : 1

onMounted(async () => {
})

// emit('status', { limit: minLimit, time: Math.round((endTime - startTime) / 1000) })
</script>