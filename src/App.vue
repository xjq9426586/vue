<template>
  <div id="app">
    <Demo></Demo>
  <!--  <CloudMusic></CloudMusic>-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<Test></Test>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Demo from "@/components/Demo";
// import CloudMusic from "@/components/CloudMusic";


import test from "@/components/Test";
import {api} from "@/api/request";

export default {
  name: 'App',
  components: {
    Demo
  },
  created: function(){
    localStorage.clear()
    api.login('xyzh0038', '1').then(res => {
      localStorage.setItem('token', res.access_token)
    })
  },
  methods:{

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
