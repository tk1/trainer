import Vue from 'vue'
import VueRouter from 'vue-router'

import Training from './components/Training.vue'
import Info from './components/Info.vue'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/training', component: Training },
    { path: '/info', component: Info }
]

export const router = new VueRouter({
    routes // short for routes: routes
})
