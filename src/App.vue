<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script setup>
import { defineComponent } from "vue";
const App = defineComponent({
  name: 'App'
});
</script>
<style lang="scss">
@import 'bulma/css/bulma.min.css';
@import 'assets/css/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0;
  margin: 0;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.slice-0 {  
  left: 50%;
  background-color: blue;
}

.slice-1 {
  background-color: red;
  transform: rotate(36deg);
}
.slice-2 {
  background-color: orange;
  transform: rotate(72deg);
}
.slice-3 {
  background-color: white;
  transform: rotate(108deg);
}
.slice-4{
  background-color: #FF00FF;
  transform: rotate(144deg);
}
.slice-5 {
  background-color: gold;
  transform: rotate(180deg);
}
.slice-6 {
  background-color: hotpink;
  transform: rotate(216deg);
}
.slice-7 {
  background-color: green;
  transform: rotate(252deg);
}
.slice-8 {
  background-color: cyan;
  transform: rotate(288deg);
}
.slice-9 {
  background-color: indigo;
  transform: rotate(324deg);
}
.slice-10 {
  background-color: #FFE4C4	;
  transform: rotate(360deg);
}
</style>
