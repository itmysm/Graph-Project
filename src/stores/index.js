import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    setting: {
      language: [
        { name: 'English', lang: 'en', direction: 'ltr', icon: '🇬🇧', default: true },
        { name: 'Persian', lang: 'fa', direction: 'rtl', icon: '🇮🇷', default: false }
      ],

      themes: [
        { name: 'Dark', icon: 'Dark_Mode', default: false },
        { name: 'Light', icon: 'Light_Mode', default: false },
        { name: 'Default', icon: 'Computer', default: true }
      ],
      notifications: [
        { serviceName: 'Graph internal Notifications', icon: 'Grid_View', default: true },
        { serviceName: 'Updates and features', icon: 'Electric_Bolt', default: true },
        { serviceName: 'Conections and network', icon: 'Wifi', default: true }
      ],
      sounds: true
    },

    file: {
      isFileUploaded: false,
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
    }
  }
})
