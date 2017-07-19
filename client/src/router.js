import Vue from 'vue'
import VueRouter from 'vue-router'

import Training from './components/Training.vue'
import Info from './components/Info.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/training', component: Training },
    { path: '/info', component: Info }
]

export const router = new VueRouter({
    routes // short for routes: routes
})
