<template>
  <div class="px-5">
    <h3 class="text-2xl flex items-center" :class="theme ? 'text-white' : 'text-secondary'">
       <i class="material-symbols-rounded normal-case mr-2">Notifications</i>
      Notifications
    </h3>
    <p class="mt-2 text-neutral font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, vel
      natus. Impedit maxime ipsam doloremque</p>

    <ul class="mt-7">
      <li class="flex justify-between" :class="i == 0 ? '' : 'mt-7'" v-for="(notification, i) in notifications" :key="i">
        <h4 class="capitalize flex items-center">
           <i class="material-symbols-rounded normal-case text-[20px] mr-2">{{ notification.icon }}</i>
          {{ notification.serviceName }}
        </h4>

        <div class="flex">
          <input type="checkbox" class="toggle toggle-primary" :checked="notification.default" @click="changeSetting(i)"/>
          <p class="ml-2 select-none w-5 text-center">{{ notification.default ? 'On' : 'Off' }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index.js'
const emit = defineEmits(['notifications'])
const theme = ref(document.querySelector('body').getAttribute('data-theme'))
const notifications = useMainStore().$state.setting.notifications

function changeSetting (index) {
  notifications[index].default = !notifications[index].default
  emit('notifications', notifications)
}
</script>
