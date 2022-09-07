<template>
  <div class="flex flex-col justify-end absolute right-6 z-[99] bottom-0 max-w-[400px] max-h-fit transition-all duration-500">
    <commonNotification class="alert animate-alertCame mb-2" v-for="(notification, i) in notifications" :key="i"
      :notification="notification" @result="resultCameFromNotification($event, i)" @close=(destruction(i))
      :data-notification-loaded="destruction(i, false)" />
  </div>
</template>

<script setup>
import { useAlerts } from '~/stores/alerts/alerts.js'

const storeAlert = useAlerts()
const notifications = reactive(storeAlert.getAlerts)

function resultCameFromNotification (result, notificationId) {
  !result ? destruction(notificationId) : console.log('do something')
}

class DestructionNotification {
  constructor (notification, index) {
    this.notification = notification
    this.index = index
  }

  destructionByTime () {
    setTimeout(() => {
      this.applyAnimationBeforeRemove()
    }, this.notification.destruction)
  }

  destructionByClick () {
    this.applyAnimationBeforeRemove()
  }

  applyAnimationBeforeRemove () {
    document.querySelectorAll('.alert')[this.index]?.classList?.replace('animate-alertCame', 'animate-alertOut')
    this.removeFromList()
  }

  removeFromList () {
    setTimeout(() => {
      notifications.splice(this.index, 1)
    }, 3000)
  }
}

function destruction (index, isForce = true) {
  const ds = new DestructionNotification(notifications[index], index)
  isForce ? ds.destructionByClick() : ds.destructionByTime()
}

</script>
