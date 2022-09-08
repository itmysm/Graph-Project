<template>
  <div class="w-[100vw] absolute top-0 left-0 flex justify-center items-center min-h-full bg-[#12181e] z-[10]">
    <ul class="w-fit">
      <li class="flex items-center mb-5 relative transition-all duration-500"
        :class="[step.complete ? 'complete' : '', step.process ? 'in-Process' : 'in-queue']"
        v-for="(step, i) in stepsQueue" :key="i">
        <p class="title min-w-[420px]">{{ step.name}}</p>
        <AnimationsLoading v-show="step.process && !step.complete" />
        <i class="material-symbols-rounded text-[20px]" v-show="step.complete || step.process == false">{{
        step.complete ? 'Done' :
        'Hourglass_Empty' }}</i>
      </li>
    </ul>

    <pagesDeskDetect @status="stepsRunner($event)" v-if="activeIndex" />
    <pagesDeskTransitionsInstagramHtmlToJson @status="stepsRunner($event)" v-if="activeIndex === 2" />
  </div>
</template>

<script setup>
import { useAlerts } from '~/stores/alerts/alerts.js'
const storeAlerts = useAlerts()
storeAlerts.addNewAlert({ title: 'Attention!', description: 'Please do not leave this page until the results are fully displayed', type: 'warning', button: false, destruction: 12000 })

const stepsQueue = reactive([{ name: 'Detecting data type', process: true, complete: false }, { name: 'Transition data to standard format', process: false, complete: false }, { name: 'Calculating...', process: false, complete: false }, { name: 'Preparing results...', process: false, complete: false }])
const activeIndex = ref(0)

stepsRunner()
function stepsRunner (dataComponent = { limit: 2, time: 2 }) {
  const minLimit = dataComponent.limit
  const timeSpend = dataComponent.time

  setTimeout(() => {
    if (activeIndex.value > 0) {
      stepsQueue[activeIndex.value - 1].process = false
      stepsQueue[activeIndex.value - 1].complete = true
    }

    stepsQueue[activeIndex.value].process = true

    if (activeIndex.value < stepsQueue.length) activeIndex.value++
    console.log(activeIndex.value)
  }, (minLimit - timeSpend) * 1000)
}

</script>

<style lang="scss">
.complete {
  opacity: .3;
  transform: scale(.98) translate(0px, 0px);

  .title {
    color: #fecd72;
  }

  i {
    color: #fecd72;
  }
}

.in-Process {
  .title {
    color: #eaeaea;
  }

  i {
    color: #eaeaea;
  }
}

.in-queue {
  opacity: .3;
  transform: scale(.98) translate(0px, 0px);
}

@keyframes progressToComplete {
  0% {
    transform: scale(1) translate(0px, 0px);
  }

  100% {
    transform: scale(.98) translate(0px, -10px);
  }
}

@keyframes queueToProgress {
  0% {
    transform: scale(.98) translate(0px, 0px);
  }

  100% {
    transform: scale(1) translate(0px, 10px);
  }
}
</style>
