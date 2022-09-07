import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    file: {
      isFileUploaded: false,
      fileName: '',
      fileSize: '',
      fileType: '',
      fileLastModified: '',
      fileLines: '',
      content: null,
      dateUploaded: null
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
    async fileUpdate (file) {
      this.file.fileType = file.name.match(/[^\\.]+$/)[0]
      this.file.content = null
      this.file.isFileUploaded = file.available
      this.file.fileName = file.name
      this.file.fileSize = file.size
      this.file.fileLastModified = file.lastModified
      this.file.dateUploaded = new Date().getTime()
    }
  }
})
