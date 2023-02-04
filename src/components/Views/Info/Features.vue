<template>
  <section class="flex justify-center">
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px]">
      <li class="flex flex-col items-center px-5 md:px-10 mb-16" v-for="(feature, index) in features" :key="index">
        <vue-feather class="relative bottom-[2px] mr-2" :type="feature.icon" size="40" stroke-width="1.2" aria-hidden="true" />
        <h2 class="font-semibold my-3">{{ feature.title }}</h2>
        <p class="font-light text-center">{{ feature.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea, labore, magni ullam consequatur ab assumenda exercitationem optio.'
const features = [
  { title: 'Work On All Devices', description, icon: 'monitor' },
  { title: 'Customizable', description, icon: 'pen-tool' },
  { title: 'Online', description, icon: 'globe' },
  { title: 'Free', description, icon: 'dollar-sign' },
  { title: 'Safe & Secure', description, icon: 'lock' },
  { title: 'Support All Formats', description, icon: 'file-text' },
]
</script>
