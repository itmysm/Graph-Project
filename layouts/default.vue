<template>
  <div class="layout">
    <slot v-if="true"/>
    <TheUnsupported v-if="false"/>
  </div>
</template>
