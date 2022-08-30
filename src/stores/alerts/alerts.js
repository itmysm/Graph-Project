import { defineStore } from 'pinia'

export const useAlerts = defineStore('index', {
  state: () => ({
    alerts: []
  }),

  getters: {
    getAlerts: (state) => state.alerts
  },

  actions: {
    addNewAlert (alert) {
      this.alerts.push(alert)
      console.log(alert)
    }
  }
})
