<template>
  <span class="loader"></span>
</template>

<style>
.loader {
  width: 17px;
  height: 17px;
  border: 2px dotted #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
