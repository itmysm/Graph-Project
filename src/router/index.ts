import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',  component: Home}
  ]
})

export default router
