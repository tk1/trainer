import Vue from 'vue'
import App from './App'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.filter('formatDateTime', function(timestamp) {
    return new Date(timestamp).toLocaleString()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})

export const bus = new Vue()
