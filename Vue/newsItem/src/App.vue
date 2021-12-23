<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <newItem news='item'></newItem>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #bdc2c7;
  width: 600px;
  height: 400px;
  display:flex;
}
</style>
