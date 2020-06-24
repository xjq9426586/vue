<template>
  <div id="app">
    <!--<Demo></Demo>-->
    <CloudMusic></CloudMusic>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Demo from "@/components/Demo";
import CloudMusic from "@/components/CloudMusic";


export default {
  name: 'App',
  components: {
    CloudMusic
  }
}
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
