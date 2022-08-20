<template>
  <div class="w-full flex flex-col items-center">

    <div class="w-full mb-8">
      <h3 class="text-2xl text-secondary">Upload File</h3>
    </div>

    <div id="drop_zone" class="upload-box bg-[#e7e9ee] w-full flex justify-center items-center 2xl:w-[900px] h-[300px] overflow-hidden relative" @drop="dropHandler" @dragover="dragOverHandler">
      <input type="file" class="opacity-[0] absolute w-[inherit] h-[inherit]">
      <div class="flex flex-col items-center text-secondary">
        <i class="material-symbols-rounded text-4xl">home_storage</i>
        <p>Drop your file here or <a class="text-primary" href="#">Browse</a></p>
        <p>Ex: html, json</p>
      </div>
    </div>
  </div>
</template>

<script setup>

function dropHandler (ev) {
  console.log('File(s) dropped')
  ev.preventDefault()

  if (ev.dataTransfer.items) {
    [...ev.dataTransfer.items].forEach((item, i) => {
      if (item.kind === 'file') {
        const file = item.getAsFile()
        console.log(`… file[${i}].name = ${file.name}`)
      }
    })
  } else {
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`)
    })
  }
}

function dragOverHandler (ev) {
  console.log('File(s) in drop zone')

  ev.preventDefault()
}
</script>

<style scoped>
  .upload-box {
    background-color: #FFFFFF;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23DBDCDEFF' stroke-width='3' stroke-dasharray='20%2c 20' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 8px;
  }
</style>
