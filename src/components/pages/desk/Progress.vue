<template>
  <div class="w-[100vw] absolute top-0 left-0 flex justify-center items-center min-h-full bg-[#12181e] z-[10]">
    <ul class="w-fit">

      <li class="flex items-center mb-5 relative transition-all duration-500"
        :class="[step.isComplete ? 'complete' : '', step.isActive ? 'in-Process' : 'in-queue']"
        v-for="(step, i) in steps" :key="i">
        <p class="title min-w-[420px]">{{ step.name}}</p>
        <AnimationsLoading v-show="step.isActive && !step.isComplete" />
        <i class="material-symbols-rounded text-[20px]" v-show="step.isComplete || step.isActive == false">{{
        step.isComplete ? 'Done' :
        'Hourglass_Empty' }}</i>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAlerts } from '~/stores/alerts/alerts.js'
const storeAlerts = useAlerts()
storeAlerts.addNewAlert({ title: 'Attention!', description: 'Please do not leave this page until the results are fully displayed', type: 'warning', button: false, destruction: 12000 })

const steps = reactive([{ name: 'Detecting data type', duration: 1000, isActive: true, isComplete: false }, { name: 'Transition data to standard format', duration: 7000, isActive: false, isComplete: false }, { name: 'Calculating...', duration: 22000, isActive: false, isComplete: false }, { name: 'Preparing results...', duration: 7000, isActive: false, isComplete: false }])

for (let index = 0; index < steps.length + 1; index++) {
  let duration = 0
  if (index > 0 && index < steps.length) duration = steps[index - 1].duration
  else if (index === steps.length) duration = steps[index - 1].duration

  setTimeout(() => {
    if (index > 0) {
      const prevIndex = index - 1
      steps[prevIndex].isActive = false
      steps[prevIndex].isComplete = true
      // eslint-disable-next-line no-unused-expressions
      steps[index] ? steps[index].isActive = true : null
    }
  }, duration * index)
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
