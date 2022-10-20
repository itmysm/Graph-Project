<template>
  <div class="w-full flex drag-items overflow-x-scroll hideJustScrollBar select-none" @mousedown="mouseDownHandler">
    <div class="mr-14"><PagesResultButtons :data="{name: $t('resultPageBaseDataAllMessages'), numOfMessages: result.numberOfMessages, shapeIndex: 0 }" /></div>
    <div class="mr-14" v-for="(item, i) in result.numberOfMessagesPerPerson" :key="i"><PagesResultButtons :data="item" /></div>
  </div>
</template>

<script setup>
const result = JSON.parse(localStorage.getItem('result'))
let pos = reactive({ top: 0, left: 0, x: 0, y: 0 })

function mouseDownHandler (e) {
  const ele = document.querySelector('.drag-items');
  pos.left = ele.scrollLeft
  pos.top = ele.scrollTop
  pos.x = e.clientX
  pos.y = e.clientY

  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
};

function mouseUpHandler (e) {
  const ele = document.querySelector('.drag-items');
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler)

  ele.style.cursor = 'grab';
  ele.style.removeProperty('user-select');
};

function mouseMoveHandler (e) {
  const ele = document.querySelector('.drag-items');

  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
}

</script>