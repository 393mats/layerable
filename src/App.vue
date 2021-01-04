<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <vDraw>
      <vd-rect></vd-rect>
    </vDraw>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import vdraw from './index';

Vue.use(vdraw);

export default Vue.extend({
  name: 'App',
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
