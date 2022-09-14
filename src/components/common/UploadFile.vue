<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-full mb-8">
      <h3 class="text-2xl text-secondary">{{ $t("uploadFile") }}</h3>
    </div>

    <div
      id="drop_zone"
      class="
        shadow-md
        group
        w-full
        flex
        justify-center
        items-center
        2xl:w-[900px]
        h-[300px]
        overflow-hidden
        relative
        z-10
      "
      @drop="dropHandler"
      @dragover="dragOverHandler"
      @dragleave="userIsInDropZone = false"
      :class="[uploadFileCompeleted ? '' : theme === 'dark' ? 'upload-box-dark' : 'upload-box', theme === 'dark' ? 'border-primary !bg-secondary' : '', ]"
    >
      <input
        id="dropbox"
        type="file"
        accept=".html,.json,.htm,.txt"
        class="opacity-[0] absolute w-[inherit] h-[inherit]"
        @change="fileUploadedFromBrowse"
        :disabled="uploadFileCompeleted ? true : false"
        :class="uploadFileCompeleted ? '' : 'cursor-pointer'"
      />
      <div
        class="flex flex-col text-lg items-center text-secondary"
        v-if="!uploadFileCompeleted"
      >
        <i class="material-symbols-rounded text-6xl mb-4" :class="theme === 'dark' ? 'text-white' : 'text-secondary'">home_storage</i>
        <p :class="theme === 'dark' ? 'text-white' : 'text-secondary'">
          {{ $t("dropBox") }}
          <a class="text-primary" :class="theme === 'dark' ? 'text-info' : 'text-primary'" href="#">{{ $t("browse") }}</a>
        </p>
        <p class="text-xs mt-1 font-semibold" :class="theme === 'dark' ? 'text-neutral' : 'text-secondary'">
          {{ $t("extensions") }} {{ $t("extensionsFileTypes") }}
        </p>
      </div>

      <div
        class="bg-light w-full h-full flex flex-col justify-center items-center"
        v-else
      >
        <animationsSuccessfully />
        Your File Uploaded Completely
      </div>
    </div>

    <div
      class="
        min-w-[100vw] min-h-[100vh]
        absolute
        bg-secondary/[.4]
        top-0
        left-0
      "
      v-show="userIsInDropZone"
    ></div>
  </div>
</template>

<script setup>
import { get, set } from 'idb-keyval'
import { useMainStore } from '../../stores/index.js'
import { useAlerts } from '~/stores/alerts/alerts.js'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
const storeAlerts = useAlerts()
const mainStore = useMainStore()
const theme = ref(document.querySelector('body').getAttribute('data-theme'))

let file = reactive([])
const allowedFileExtentions = ['html', 'txt', 'htm', 'json']
const regexFileExtension = /[^\\.]+$/

const uploadFileCompeleted = ref(false)
const userIsInDropZone = ref(false)

function dropHandler (ev) {
  ev.preventDefault()
  userIsInDropZone.value = false
  const item = ev.dataTransfer.items[0]
  if (item) {
    if (item.kind === 'file') {
      file = item.getAsFile()
      checkFile(file)
    }
  }
}

function fileUploadedFromBrowse () {
  file = document.getElementById('dropbox').files[0]
  checkFile(file)
}

function dragOverHandler (ev) {
  userIsInDropZone.value = true
  ev.preventDefault()
}

function checkFile (file) {
  const isFileAllowed = ref(false)
  const fileName = file.name
  // eslint-disable-next-line no-return-assign
  allowedFileExtentions.map(x => fileName.match(regexFileExtension)[0] === x ? isFileAllowed.value = true : false)
  if (isFileAllowed.value) {
    changeContentInUploadBox(fileName)
    storeAlerts.addNewAlert({ title: i18n.t('alertUploadSuccessTitle'), description: i18n.t('alertUploadSuccessDescription'), type: 'success', button: false, destruction: 5000 })
    file.available = true
    updateFileStatus(file)
  } else {
    storeAlerts.addNewAlert({ title: i18n.t('alertUploadErrorTitle'), description: 'alertUploadErrorDescription', type: 'error', button: false, destruction: 5000 })
  }
}

async function updateFileStatus () {
  // prevent to update file when user upload repetive file
  if (mainStore.$state.file.fileSize !== file.size) {
    mainStore.fileUpdate(file)

    setUploadedFileInIndexDB()
  }
}

function changeContentInUploadBox () {
  uploadFileCompeleted.value = true
  setTimeout(() => {
    useRouter().push('/desk')
  }, 2000)
}

/* IndexDB section */
async function setUploadedFileInIndexDB () {
  const newFile = await file.text()
  set('currentUploadedFile', JSON.stringify(newFile)) // set inside indexDB
  storeUploadedFileInIndexDB(newFile)
}

async function storeUploadedFileInIndexDB (fileContent) {
  const files = await get('allUploadedFiles').then(val => JSON.parse(val))
  files[useFileNameSplitter(file.name, 'name').value] = fileContent
  set('allUploadedFiles', JSON.stringify(files))
}

</script>

<style lang="scss" scoped>
.upload-box {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23F2EFEF' stroke-width='3' stroke-dasharray='20%2c 20' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
}

.upload-box-dark {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%236c5dd3' stroke-width='3' stroke-dasharray='20%2c 20' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
}
</style>
