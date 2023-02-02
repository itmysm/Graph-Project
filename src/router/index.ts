import { createRouter, createWebHistory } from 'vue-router'

import Info from '@/views/info/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/info',  component: Info}
  ]
})

export default router
