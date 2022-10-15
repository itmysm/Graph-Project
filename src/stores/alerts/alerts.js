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
      const alertsStatus = JSON.parse(localStorage.getItem('settings')).notifications
      if (alertsStatus[alert.alertType].default) {
        alert.key = new Date().getTime() + Math.random()
        this.alerts.push(alert)
      }
    }
  }
})
