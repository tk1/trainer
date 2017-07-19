<template>
  <div id="app" class="container">
    <img src="./assets/htwsaar_Logo_LA.png" width="150px">
  
    <ul class="nav nav-tabs">
      <li role="presentation" :class="isActive('/training')">
        <router-link to="/training">Training</router-link>
      </li>
      <li role="presentation" :class="isActive('/info')">
        <router-link to="/info">Info</router-link>
      </li>
    </ul>
  
    <router-view></router-view>
  </div>
</template>

<script>
import training from './components/Training'
import info from './components/Info'

export default {
  name: 'app',
  components: {
    training,
    info
  },
  methods: {
    isActive(path) {
      return path === this.$route.path ? 'active' : '' // <1>
    }
  }
}
</script>

<style>
#app {
  font-family: 'Lucida Grande', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  margin-top: 20px;
}
</style>
