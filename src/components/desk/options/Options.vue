<template>
  <div class="w-fit min-w-[500px] max-w-[550px] h-[700px] flex flex-col justify-between rounded-md shadow-md px-10 py-4">

    <div class="w-full flex justify-between mb-5">
      <div>
        <h1 class="font-bold text-xl">Choose what you want!</h1>
        <p class="text-info text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ullam veniam</p>
      </div>
      <span class="flex text-nutral text-sm"><p>1</p> / <p>2</p></span>
    </div>

    <div class="form-control">
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

    <div class="flex mt-5">
      <input type="range" min="10" max="100" value="50" class="range range-xs range-primary" />
      <p class="min-w-fit text-xs ml-4">100 OPM</p>
    </div>

    <div class="w-full flex justify-end mt-8">
      <button class="btn btn-md btn-primary text-sm text-white disabled">Prev</button>
      <button class="btn btn-md btn-primary ml-3 text-sm text-white">Next</button>
    </div>
  </div>
</template>

<script setup>
  const range = ref(40)
</script>
