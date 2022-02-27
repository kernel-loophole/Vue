<template>
<link rel="stylesheet" href="./style.css">
  <img alt="Vue logo" src="./assets/logo.png">
  <create_event/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// eslint-disable-next-line camelcase
import create_event from './components/base_compoent.vue'
// eslint-disable-next-line camelcase
import base_From from './components/baseFrom.vue'
export default {
  name: 'App',
  components: {
    [HelloWorld.name]: HelloWorld,
    [create_event.name]: create_event,
    [base_From.name]: base_From

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
