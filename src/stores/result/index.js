// storeAlerts.addNewAlert({ title: i18n.t(''), description: i18n.t(''), type:, button: , duration: , alertType:})
import { defineStore } from 'pinia'

export const useResultStore = defineStore('resultStore', {
  state: () => ({
    sortOptions: [
      { name: 'resultPageSortByName', icon: 'Sort_By_Alpha', default: true },
      { name: 'resultPageSortTheMost', icon: 'Arrows_More_Up', default: false },
      { name: 'resultPageSortTheLeast', icon: 'Arrows_More_Down', default: false }
    ]
  }),

  getters: {
    getSortOptions: (state) => state.sortOptions
  },

  actions: {
  }
})
