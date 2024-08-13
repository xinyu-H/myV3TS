<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  color: #333;
}
::-webkit-scrollbar {
  display: none;
}
.introjs-tooltip-header {
  .introjs-tooltip-title,
  .introjs-skipbutton {
    font-size: 32px;
  }
  .introjs-skipbutton {
    right: 20px;
  }
}
</style>
