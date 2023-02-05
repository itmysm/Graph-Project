<template>
  <Menu as="div" class="relative inline-block text-left">
    <div class="transition-colors">
      <MenuButton class="inline-flex w-full justify-center bg-white py-2 text-sm font-small text-def hover:bg-gray-50 focus:outline-none hover:text-def/50 capitalize">
        <vue-feather class="-ml-1 mr-2 h-5 w-5" :type="props.name[1]" stroke-width="2" aria-hidden="true" />
        {{ props.name[0] }}
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute bottom-10 left-2 lg:-left-28 z-10 mt-2 w-44 origin-top-right rounded-md bg-white drop-shadow-lg focus:outline-none rounded-md">
        <div class="py-2">
          <MenuItem class="transition-colors" v-slot="{ active }" v-for="(item, index) in props.items" :key="index" @click="emits('selectedItem', index)">
            <p class="cursor-pointer " :class="[active ? 'bg-def/10 text-def' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{ item }}</p>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const emits = defineEmits(['selectedItem'])
const props = defineProps({
  name: {
    type: [Array],
    require: true,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: ['test', 'warning']
  },
  items: {
    type: [Array, Object],
    required: true
  }
})
</script>