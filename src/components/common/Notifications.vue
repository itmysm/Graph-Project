<template>
  <div class="flex flex-col justify-end absolute right-6 z-[99] bottom-0 max-w-[400px] max-h-fit transition-all duration-500">
    <commonNotification class="alert animate-alertCame mb-2" v-for="(notification, i) in notifications" :key="notification.key" :data-key="notification.key"
     :="createInstance(notification, i)" :notification="notification" @result="alertActions($event, i)" @close=(removeAlert(i)) />
  </div>
</template>

<script setup>
import { useAlerts } from '~/stores/alerts/alerts.js'

const storeAlert = useAlerts()
const notifications = reactive(storeAlert.getAlerts)

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
    document.querySelectorAll('.alert')[indexResult]?.classList?.replace('animate-alertCame', 'animate-alertOut')
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

function createInstance (alert, index) {
  const instance = new DestroyAlert(alert, index)
  instance.byTime()
}
</script>
