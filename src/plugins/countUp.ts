import CountUp from 'vue-countup-v3'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('count-up', CountUp )
})
