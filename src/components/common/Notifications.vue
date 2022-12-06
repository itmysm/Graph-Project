<template>
  <div class="flex flex-col justify-end absolute ltr:right-6 rtl:left-6 z-[99] bottom-0 max-w-[400px] max-h-fit transition-all duration-500">
    <commonNotification class="alert ltr:animate-alertCame rtl:animate-alertCameRtl mb-2" v-for="(notification, i) in notifications" :key="notification.key" :data-key="notification.key"
     :="createInstance(notification, i)" :notification="notification" @result="alertActions($event, i)" @close=(removeAlert(i)) />
  </div>
</template>

<script setup>
import { useAlerts } from '~/stores/alerts/alerts.js'

const storeAlert = useAlerts()
const notifications = reactive(storeAlert.getAlerts)
let direction

class DestroyAlert {
  constructor (alert, index) {
    this.alert = alert
    this.index = index
  }

  byTime () {
    setTimeout(() => {
      this.applyAnimation()
    }, this.alert.duration)
  }

  applyAnimation () {
    const indexResult = this.findIndex(this.alert.key)
    direction = document.querySelector('html').getAttribute('dir')
    /* I create some different animations for rtl, ltr directions and in this line I get direction from html.
    and in the following line I used the condition to check and apply the animations */
    if (direction === 'rtl') {
      document.getElementsByClassName('alert')[indexResult].classList.replace('rtl:animate-alertCameRtl', 'animate-alertOutRtl')
    } else {
      document.getElementsByClassName('alert')[indexResult].classList.replace('ltr:animate-alertCameRtl', 'animate-alertOutRtl')
    }
  }

  findIndex (mainKey) {
    let indexResult;
    // eslint-disable-next-line array-callback-return
    [...document.querySelectorAll('div[data-key]')].map((alert, index) => {
      if (+alert.getAttribute('data-key') === mainKey) indexResult = index
    })

    return indexResult
  }

  removeFromList () {
  }
}

// eslint-disable-next-line no-unused-vars
function createInstance (alert, index) {
  const instance = new DestroyAlert(alert, index)
  instance.byTime()
}

onMounted(() => {
  direction = document.querySelector('body').getAttribute('dir')
  // document.querySelector('.alert').classList.add(direction === 'rtl' ? 'animate-alertCame' : 'animate-alertCameRtl')
})
</script>
