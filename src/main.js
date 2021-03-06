import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bulma/bulma.sass'
import Icon from 'vue-awesome/icons'

Vue.config.productionTip = false
Vue.component('icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
