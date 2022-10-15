// storeAlerts.addNewAlert({ title: i18n.t(''), description: i18n.t(''), type:, button: , duration: , alertType:})
import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    setting: {
      language: [
        { name: 'english', lang: 'en', direction: 'ltr', flag: '🇬🇧', default: true },
        { name: 'persian', lang: 'fa', direction: 'rtl', flag: '🇮🇷', default: false }
      ],

      themes: [
        { name: 'darkMode', icon: 'Dark_Mode', default: false },
        { name: 'lightMode', icon: 'Light_Mode', default: false },
        { name: 'defaultMode', icon: 'Computer', default: true }
      ],
      notifications: [
        { serviceName: 'settingsNotificationsInternal', icon: 'Grid_View', default: true },
        { serviceName: 'settingsNotificationsUpdate', icon: 'Electric_Bolt', default: true },
        { serviceName: 'settingsNotificationsNetwork', icon: 'Wifi', default: true }
      ],
      sounds: true
    },

    file: {
      isFileUploaded: false,
      isFileExistInRecents: false,
      fileName: 'undefined',
      fileSize: 0,
      fileType: 'none',
      fileLastModified: 'September 1, 2002 23:54:00',
      fileLines: '0',
      content: null,
      dateUploaded: null
    },

    options: {
      telegram: { messagesEachPerson: true },
      whatsapp: { messagesEachPerson: true },
      instagram: { messagesEachPerson: true }
    } // each app have diffrent steps
  }),

  getters: {
    fileStatus: (state) => state.file
  },

  actions: {
    async fileUpdate (file) {
      this.file.fileType = file.name.match(/[^\\.]+$/)[0]
      this.file.isFileExistInRecents = file.isRecentFile
      this.file.content = null
      this.file.isFileUploaded = file.available
      this.file.fileName = file.name
      this.file.fileSize = file.size
      this.file.fileLastModified = file.lastModified
      this.file.dateUploaded = new Date().getTime()
    },
    setDefaultSettingOnLocaleStorage () {
      localStorage.setItem('settings', JSON.stringify(this.setting))
    },
    setSettingsOnState () {
      this.setting = JSON.parse(localStorage.getItem('settings'))
    },

    // this func reset all data's in file object values
    resetFileValues () {
      this.file.isFileUploaded = false
      this.file.isFileExistInRecents = false
      this.file.fileName = 'undefined'
      this.file.fileSize = 0
      this.file.fileType = 'none'
      this.file.fileLastModified = 'September 1, 2002 23:54:00'
      this.file.fileLines = '0'
      this.file.content = null
      this.file.dateUploaded = null
    }
  }
})
