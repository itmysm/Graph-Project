import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    file: {
      isFileUploaded: false,
      fileName: '',
      fileSize: '',
      fileType: '',
      fileLastModified: '',
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
    fileUpdate (file) {
      this.file.isFileUploaded = file.available
      this.file.fileName = file.name
      this.file.fileSize = file.size
      this.file.fileLastModified = file.lastModified
    }
  }
})
