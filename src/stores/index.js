import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  state: () => ({

  }),

  getters: {
    returnIcons: (state) => state.icons
  }
})
