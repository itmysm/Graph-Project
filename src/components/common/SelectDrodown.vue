<template>
  <div class="flex flex-col items-center relative w-80">
    <div class="w-72 h-12 rounded-lg border bg-base-100 px-3 text-sm font-semibold cursor-pointer flex justify-between items-center" :class="!showList ? 'animate' : ''" @click="showList = !showList">
      <span class="flex items-center">
        <i class="material-symbols-rounded text-[18px]">{{selectedItem.icon}}</i>
        <p class="ml-1">{{selectedItem.name}}</p>
      </span>
      <i class="material-symbols-rounded text-[22px]">Keyboard_Arrow_Down</i>
    </div>

    <ul class="border w-72 rounded-sm bg-base-100 text-sm h-fit mt-2 rounded-b-lg absolute top-12 z-10" v-show="showList">
      <li class="h-8 flex items-center hover:bg-accent px-3 cursor-pointer" v-for="(item, i) in items" :key="i" @click="dropDownChange(i), selectedItem = item">
        <i class="material-symbols-rounded text-[18px]">{{item.icon}}</i>
        <p class="ml-2">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['newChanges'])

const showList = ref(false)
let selectedItem = reactive()

// eslint-disable-next-line array-callback-return
props.items.map(item => {
  if (item.default) selectedItem = item
}) // find default item

function dropDownChange (index) {
  showList.value = !showList.value
  // eslint-disable-next-line no-return-assign
  props.items.map(item => item.default = false)
  // eslint-disable-next-line vue/no-mutating-props
  props.items[index].default = true
  emit('newChanges', props.items)
}
</script>

<style lang="scss" scoped>
select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  &::-ms-expand {
    display: none;
  }
}

.animate {
  animation: itemSelected .4s linear both;
}

@keyframes itemSelected {
  0% {
    width: 288px;
    height: 48px;
  }50% {
    width: 320px;

  }100%{
    width: 288px;
    height: 48px;
  }
}

@keyframes hideItems {
  0% {
    width: 288px;
  }50% {
    width: 320px;

  }100%{
    width: 288px;
    height: 48px;
  }
}
</style>
