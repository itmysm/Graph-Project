<template>
  <div class="flex flex-col justify-end absolute right-6 z-[10] bottom-0 max-w-[400px] max-h-fit transition-all duration-500">
    <commonNotification class="alert animate-alertCame mb-2" v-for="(notification, i) in notificationsInStore" :key="i"
      :notification="notification" @result="resultCameFromNotification($event, i)" @close=(destruction(i))
      :data-notification-loaded="destruction(i, false)" />
  </div>
</template>

<script setup>
const notificationsInStore = reactive(
  [{ title: 'Just a minute...', description: 'Your file is uploading right now. just give us a second to finish your.', type: 'upload', destruction: 15000 },
    { title: 'Your file was upload!', description: 'Your file was successfully upload. You can start righ now', type: 'success', button: false, destruction: 12000 }
  ])

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
      notificationsInStore.splice(this.index, 1)
    }, 3000)
  }
}

function destruction (index, isForce = true) {
  const ds = new DestructionNotification(notificationsInStore[index], index)
  isForce ? ds.destructionByClick() : ds.destructionByTime()
}

</script>
