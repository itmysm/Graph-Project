<template>
  <div class="w-full flex flex-col items-center">

    <div class="w-full mb-8">
      <h3 class="text-2xl text-secondary">{{$t('uploadFile')}}</h3>
    </div>

    <div id="drop_zone" class="upload-box shadow-md group w-full flex justify-center items-center 2xl:w-[900px] h-[300px] overflow-hidden relative z-10" @drop="dropHandler" @dragover="dragOverHandler" @dragleave="userIsInDropZone = false">
      <input id="dropbox" type="file" accept=".html,.json" class="opacity-[0] absolute w-[inherit] h-[inherit] cursor-pointer" @change="fileUploadedFromBrowse">
      <div class="flex flex-col text-lg items-center text-secondary">
        <i class="material-symbols-rounded text-6xl mb-4">home_storage</i>
        <p>{{$t('dropBox')}} <a class="text-primary" href="#">{{$t('browse')}}</a></p>
        <p class="text-xs mt-1 font-semibold">{{ $t('extensions') }} {{$t('extensionsFileTypes')}}</p>

      </div>
    </div>

    <div class="min-w-[100vw] min-h-[100vh] absolute bg-secondary/[.4] top-0 left-0" v-show="userIsInDropZone"></div>
  </div>
</template>

<script setup>
const allowedFileExtentions = ['html', 'htm', 'json']
const userIsInDropZone = ref(false)
function dropHandler (ev) {
  ev.preventDefault()
  userIsInDropZone.value = false
  const item = ev.dataTransfer.items[0]
  if (item) {
    if (item.kind === 'file') {
      const file = item.getAsFile()
      console.log(file)
    }
  }
}

function fileUploadedFromBrowse () {
  const file = document.getElementById('dropbox').files[0]
  checkFile(file)
}

function checkFile (file) {
  const fileName = file.name
  allowedFileExtentions.map(x => fileName.slice((x.length + 1) - fileName.length) === x ? console.log('true') : console.log('false')) // file extention check
}

function dragOverHandler (ev) {
  userIsInDropZone.value = true
  ev.preventDefault()
}
</script>

<style lang="scss" scoped>
  .upload-box {
    background-color: #FFFFFF;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23F2EFEF' stroke-width='3' stroke-dasharray='20%2c 20' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 8px;
  }
</style>
