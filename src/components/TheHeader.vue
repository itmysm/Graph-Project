<template>
  <Popover class="relative bg-white">
    <div class="px-4 md:px-10 border-b border-def/10">
      <div class="flex items-center justify-between py-3 md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a class="flex items-center" href="/">
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <span class="text-def text-2xl font-bold ml-3">Graph</span>
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center rounded-md bg-main p-2 text-def hover:text-info-active focus:outline-none">
            <span class="sr-only">Open menu</span>
            <vue-feather class="h-6 w-6" type="menu" aria-hidden="true" />
          </PopoverButton>
        </div>

        <PopoverGroup as="nav" class="hidden space-x-6 md:flex">
          <PopoverComponent :name="toolsName" :items="tools" />
          <a href="/" class="text-sm font-medium text-def/75 hover:text-info-active">Pricing</a>
          <a href="/" class="text-sm font-medium text-def/75 hover:text-info-active">Docs</a>

        </PopoverGroup>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-[100]">
        <div class="divide-y divide-def/10 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <a class="flex items-center" href="/">
                <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                <span class="text-def font-medium ml-3">Graph</span>
              </a>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-main p-2 text-def hover:text-info-active focus:outline-none">
                  <span class="sr-only">Close menu</span>
                  <vue-feather type="x" class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="item in resources" :key="item.name" :href="item.path" class="-m-3 flex items-center rounded-md py-3 px-4 hover:bg-def/10">
                  <!-- <vue-feather class="relative bottom-[2px] mr-2" :type="item.icon" size="20" aria-hidden="true" /> -->
                  <span class="text-base font-medium text-def">{{ item.name }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a v-for="(item, index) in tools" :key="index" :href="item.path" class="text-base font-medium text-def hover:text-info-active">{{ item.name }}</a>
            </div>
            <div>
              <a :href="largeBtnMenuMobile.path" class="flex w-full items-center justify-center rounded-md border border-transparent bg-info px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-info-active">
                <vue-feather class="relative bottom-[2px] mr-2" :type="largeBtnMenuMobile.icon" size="24" aria-hidden="true" />
                {{ largeBtnMenuMobile.name }}
              </a>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import PopoverComponent from './UI/Common/Popover.vue'


const largeBtnMenuMobile = {
  name: 'Github Repo',
  path: 'https://github.com/itmysm/graph-project',
  icon: 'github'
}

const toolsName = 'Tools'
const tools = [
  {
    name: 'Graph Project',
    path: 'https://google.com',
    icon: 'cloud-drizzle',
  },
  {
    name: 'Todo App',
    path: '/',
    icon: 'book',
  },
  {
    name: 'Story Downloader',
    path: '/',
    icon: 'instagram',
  },
  {
    name: 'Spotify Downloader',
    path: '/',
    icon: 'music',
  },
]

const resources = [
  {
    name: 'Documents',
    path: '/'
  },
  {
    name: 'Terms of Use',
    path: '/'
  },
  {
    name: 'Report',
    path: '/'
  },
  {
    name: 'Privacy and Policy',
    path: '/'
  },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]
</script>