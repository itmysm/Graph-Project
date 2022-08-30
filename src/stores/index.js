import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  state: () => ({
    file: {
      isFileUploaded: false,
      fileName: '',
      fileSize: '',
      fileType: '',
      app: '',
      fileLines: ''
    }
  }),

  getters: {
    fileStatus: (state) => state.file.isFileUploaded
  },

  actions: {
    fileUpdate (status) {
      this.file.isFileUploaded = status
    }
  }
})
