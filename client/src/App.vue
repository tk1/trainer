<template>
  <div id="app" class="container">
    <img src="./assets/htwsaar_Logo_LA.png" width="150px">
    <p>{{answerCount.correct}} correct, {{answerCount.wrong}} wrong answers given</p>
  
    <ul class="nav nav-tabs">
      <li role="presentation" :class="isActive('/training')">
        <router-link v-if="session.authenticated" to="/training">Training</router-link>
      </li>
      <li role="presentation" :class="isActive('/info')">
        <router-link to="/info">Info</router-link>
      </li>
      <li role="presentation" :class="isActive('/login')">
        <router-link v-if="!session.authenticated" to="/login">Log In</router-link>
      </li>
      <li role="presentation" :class="isActive('/logout')">
        <router-link v-if="session.authenticated" to="/logout">Log Out</router-link>
      </li>
      <li role="presentation" :class="isActive('/signup')">
        <router-link v-if="!session.authenticated" to="/signup">Sign Up</router-link>
      </li>
    </ul>
  
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/Login'
import logout from './components/Logout'
import signup from './components/Signup'
import training from './components/Training'
import info from './components/Info'
import store from './store'

export default {
  name: 'app',
  components: {
    login,
    logout,
    signup,
    training,
    info
  },
  computed: {
    answerCount() {
      return store.state.answerCount
    },
    session() {
      return store.state.session
    }
  },
  methods: {
    isActive(path) {
      return path === this.$route.path ? 'active' : ''
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

img {
  margin-bottom: 20px;
}

.nav {
  margin-top: 20px;
}
</style>
