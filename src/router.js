import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Customers from './views/Customers.vue'
import AddCustomer from './views/AddCustomer.vue'
import EditCustomer from './views/EditCustomer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/customers/:id',
      name: 'edit-customer',
      component: EditCustomer
    },
    {
      path: '/add',
      name: 'add-customer',
      component: AddCustomer
    }
  ]
})
