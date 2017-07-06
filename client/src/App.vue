<template>
  <div id="app" class="container">
    <img src="./assets/htwsaar_Logo_LA.png" width="150px">
    <training></training>
    <answers></answers>
  </div>
</template>

<script>
import answers from './components/Answers'
import training from './components/Training'

export default {
  name: 'app',
  components: {
    answers,
    training
  }
}
</script>

<style>
#app {
  font-family: 'Lucida Grande', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
