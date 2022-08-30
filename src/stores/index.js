import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    file: {
      isFileUploaded: false,
      fileName: '',
      fileSize: '',
      fileType: '',
      app: '',
      fileLines: ''
    },

    options: {
      telegram: { messagesEachPerson: true },
      whatsapp: { messagesEachPerson: true },
      instagram: { messagesEachPerson: true }
    } // each app have diffrent options
  }),

  getters: {
    fileStatus: (state) => state.file
  },

  actions: {
    fileUpdate (status) {
      this.file.isFileUploaded = status
    }
  }
})
