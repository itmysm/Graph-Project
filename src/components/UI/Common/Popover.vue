<template>
  <Popover class="relative transition-colors" v-slot="{ open }">
    <PopoverButton
      :class="[open ? 'text-info-active' : 'text-def-/50', 'group inline-flex items-center bg-main text-sm hover:text-info-active focus:outline-none']">
      <p class="relative bottom-[2px]">{{ props.name }}</p>
      <vue-feather class="relative bottom-[2px] ml-1" type="chevron-down" size="16" aria-hidden="true" />
    </PopoverButton>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      
      <PopoverPanel
        class="absolute z-10 -ml-4 mt-3 w-fit drop-shadow-lg transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">

        <div class="overflow-hidden rounded-lg shadow-lg w-fit">
          <div class="relative w-fit min-w-[200px] grid bg-white py-2">
            <a v-for="item in props.items" :key="item.name" :href="item.path"
              class="flex items-center py-2 px-2 my-1 hover:bg-def/10 transition-colors">
              <vue-feather :type="item.icon" class="ml-1 flex-shrink-0" size="16" aria-hidden="true" />

              <div class="ml-2">
                <p class="text-sm text-def">{{ item.name }}</p>
              </div>
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const props = defineProps({
  name: {
    type: String,
    require: true,
    default: 'TEST'
  }, 

  items: {
    type: Object,
    require: true,
  }
})
</script>