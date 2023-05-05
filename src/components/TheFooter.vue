<template>
  <footer
    class="flex flex-col-reverse lg:flex-row lg:justify-between md:items-center pt-6 md:py-3 px-4 md:px-6 lg:px-10 border-t border-def/10">
    <h6 class="text-sm font-normal my-8 md:my-4">© 2022–{{ new Date().getFullYear() }} Softo ltd. All rights reserved.
    </h6>

    <ul class="flex flex-col md:flex-row-reverse md:items-center justify-center">
      <Dropdown class="w-fit mb-6 md:mb-0" :name="[$i18n.locale, 'globe']" :items="languages"
        @selected-item="changeAppLanguage" />

      <p class="hidden md:block w-[1px] h-[30px] bg-def/10 mr-4"></p>

      <li class="mb-3 md:mb-0 transition-colors md:mx-4" v-for="(item, index) in itmes" :key="index">
        <a class="text-sm hover:text-info-active" :href="item.path">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSettersStore } from '@/stores/setters'
import Dropdown from '@/components/UI/Common/Dropdown.vue'

const languages = ref([])

onMounted(() => {
  languages.value = JSON.parse(localStorage.getItem('available') || '{}').languages.map((lang: { name: String }) => lang?.name)
})

function changeAppLanguage(key: string) {  
  useSettersStore().changeLanguage(key)
}

const itmes = [{ name: 'Terms of Use', path: '/' }, { name: 'Privacy Policy', path: '/' }, { name: 'Report', path: '/' }, { name: 'Github', path: '/' }]
</script>