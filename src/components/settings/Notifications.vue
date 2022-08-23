<template>
  <div class="shadow-lg mt-5 py-5 px-5">
    <h3 class="text-2xl text-secondary">Notifications Settings</h3>
    <p class="mt-2 text-neutral font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, vel
      natus. Impedit maxime ipsam doloremque</p>

    <ul class="mt-5">
      <li class="flex justify-between mb-5" v-for="(notification, i) in notifications" :key="i">
        <h4 class="capitalize flex items-center">
           <i class="material-symbols-rounded normal-case text-[20px] mr-2">{{ notification.icon }}</i>
          {{ notification.serviceName }}
        </h4>

        <div class="flex">
          <input type="checkbox" class="toggle toggle-primary" :checked="notification.default" @click="notification.default = !notification.default"/>
          <p class="ml-2 select-none w-5 text-center">{{ notification.default ? 'On' : 'Off' }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const notifications = reactive([
  { serviceName: 'Apps Contents notification', icon: 'Grid_View', default: true },
  { serviceName: 'Updates and content notifications', icon: 'Electric_Bolt', default: true },
  { serviceName: 'Network notifications', icon: 'Wifi', default: true }
])
</script>
