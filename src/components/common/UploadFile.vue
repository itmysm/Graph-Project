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
      :class="uploadFileCompeleted ? '' : 'upload-box'"
    >
      <input
        id="dropbox"
        type="file"
        accept=".html,.json"
        class="opacity-[0] absolute w-[inherit] h-[inherit]"
        @change="fileUploadedFromBrowse"
        :disabled="uploadFileCompeleted ? true : false"
        :class="uploadFileCompeleted ? '' : 'cursor-pointer'"
      />
      <div
        class="flex flex-col text-lg items-center text-secondary"
        v-if="!uploadFileCompeleted"
      >
        <i class="material-symbols-rounded text-6xl mb-4">home_storage</i>
        <p>
          {{ $t("dropBox") }}
          <a class="text-primary" href="#">{{ $t("browse") }}</a>
        </p>
        <p class="text-xs mt-1 font-semibold">
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
import { useAlerts } from '~/stores/alerts.js'
import { useIndexStore } from '~/stores/index.js'
const storeAlerts = useAlerts()
const indexStore = useIndexStore()

console.log(indexStore)
const allowedFileExtentions = ['html', 'htm', 'json']
const userIsInDropZone = ref(false)
const uploadFileCompeleted = ref(false)
function dropHandler (ev) {
  ev.preventDefault()
  userIsInDropZone.value = false
  const item = ev.dataTransfer.items[0]
  if (item) {
    if (item.kind === 'file') {
      const file = item.getAsFile()
      checkFile(file)
    }
  }
}

function fileUploadedFromBrowse () {
  const file = document.getElementById('dropbox').files[0]
  checkFile(file)
}

function dragOverHandler (ev) {
  userIsInDropZone.value = true
  ev.preventDefault()
}

function checkFile (file) {
  const fileName = file.name
  allowedFileExtentions.map(x => fileName.slice((x.length + 1) - fileName.length) === x ? console.log('true') : console.log('false')) // file extention check
  // eslint-disable-next-line no-constant-condition
  if (true) {
    changeContentInUploadBox(fileName)
    storeAlerts.addNewAlert({ title: 'Your file was upload!', description: 'Your file was successfully upload. You can start righ now', type: 'success', button: false, destruction: 5000 })
  }
}

function changeContentInUploadBox () {
  uploadFileCompeleted.value = true
  setTimeout(() => {
    useRouter().push('/desk')
  }, 2000)
}

</script>

<style lang="scss" scoped>
.upload-box {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23F2EFEF' stroke-width='3' stroke-dasharray='20%2c 20' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
}
</style>
