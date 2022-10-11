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
      alert.key = new Date().getTime() + Math.random()
      this.alerts.push(alert)
    }
  }
})
