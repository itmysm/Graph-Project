<template>
  <div
    class="w-fit min-w-[500px] max-w-[550px] max-fit flex flex-col justify-between rounded-md shadow-md px-10 py-4 transition-all durtion-500">

    <div class="w-full flex justify-between mb-5">
      <div>
        <h1 class="font-bold text-xl" v-show="pageOption.currentPage == 1">Select Options!</h1>
        <p class="text-neutral text-sm" v-show="pageOption.currentPage == 1">Select the options you would like to be shown in the results</p>

        <h1 class="font-bold text-xl" v-show="pageOption.currentPage == 2">Additional items</h1>
        <p class="text-neutral text-sm" v-show="pageOption.currentPage == 2">Tip: Choose OPM based on your computer's capabilities.</p>

        <h1 class="font-bold text-xl" v-show="pageOption.currentPage == 3">Great.</h1>
        <p class="text-neutral text-sm" v-show="pageOption.currentPage == 3">Click on the start button to start the analysis</p>
      </div>
      <span class="flex text-neutral text-sm">
        <p class="select-none">{{pageOption.currentPage}}</p> / <p>{{pageOption.pages}}</p>
      </span>
    </div>

    <div class="form-control" v-show="pageOption.currentPage == 1">
      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">Claculate number of messages</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">Calculate number of messages for each person</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">calculate imojies</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">Claculate number of messages</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">Calculate number of messages for each person</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">calculate imojies</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">Claculate number of messages</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">Calculate number of messages for each person</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">calculate imojies</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">Claculate number of messages</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">Calculate number of messages for each person</span>
      </label>

      <label class="flex justify-start label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
        <span class="label-text text-[16px] ml-3">calculate imojies</span>
      </label>
    </div>

    <div class="flex mt-5" v-show="pageOption.currentPage == 2">
      <input type="range" min="900" max="10000" value="2022" class="range range-xs range-primary" @input="getRangeValue" />
      <div class="tooltip min-w-fit text-xs ml-1 cursor-default" data-tip="OPM: Operation in 1 miniute">
        <p class=""> <span class="text-center inline-block w-[47px]">{{ range }}</span>OPM</p>
      </div>
    </div>

    <div class="w-full flex justify-end mt-8">
      <button class="btn btn-md btn-primary text-sm text-white px-6" :class="pageOption.currentPage - 1 < 1 ? 'btn-disabled' : ''" @click="pageOption.currentPage--">Prev</button>
      <button class="btn btn-md btn-primary ml-3 text-sm text-white px-6" :class="pageOption.currentPage >= pageOption.pages ? 'btn-disabled' : ''" @click="pageOption.currentPage++" v-if="pageOption.currentPage < pageOption.pages">Next</button>
      <button class="btn btn-md btn-primary ml-3 text-sm text-white px-6" v-if="pageOption.currentPage == pageOption.pages">Start</button>
    </div>
  </div>
</template>

<script setup>
const range = ref(2022)
const pageOption = reactive({ currentPage: 1, pages: 3 })

function getRangeValue () {
  range.value = document.querySelector('.range').value
}

</script>
