import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  state: () => ({
    notifications: []
  }),

  getters: {
    returnIcons: (state) => state.icons
  }
})
