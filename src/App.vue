<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <EchartsComponent />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import EchartsComponent from './components/Echarts.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    EchartsComponent
  },
  mounted() {
    console.log('hello world');
  },

  methods: {
  },
};
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
