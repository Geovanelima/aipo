import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'vue-material-design-icons/styles.css'
// import '../src/assets/bootstrap.min.css'
// import '../src/assets/bootstrap.bundle'

// .scss - Resolve in vue.config.js'
import '../src/scss/custom.scss'

// Url dos Icons: http://materialdesignicons.com/
// icons - Resolve in vue.config.js
import AccountTie from 'icons/AccountTie'
import MenuIcon from 'icons/Menu.vue'
import FlowerTulip from 'icons/FlowerTulip'
import AccountLockOutline from 'icons/AccountLockOutline'
import ViewDashboard from 'icons/ViewDashboard'
import AccountCash from 'icons/AccountCash'
import TruckDeliveryOutline from 'icons/TruckDeliveryOutline'
import FoodAppleOutline from 'icons/FoodAppleOutline'
import AccountMultiple from 'icons/AccountMultiple'
import TextBoxOutline from 'icons/TextBoxOutline'
import AccountCheck from 'icons/AccountCheck'
import Check from 'icons/Check'
import PencilPlus from 'icons/PencilPlus'
import Delete from 'icons/Delete'
import Pencil from 'icons/Pencil'


Vue.component('account-tie', AccountTie)
Vue.component('menu-icon', MenuIcon)
Vue.component('flower-tulip', FlowerTulip)
Vue.component('account-lock-outline', AccountLockOutline)
Vue.component('account-check', AccountCheck)
Vue.component('view-dashboard', ViewDashboard)
Vue.component('account-cash', AccountCash)
Vue.component('truck-delivery-outline', TruckDeliveryOutline)
Vue.component('food-apple-outline', FoodAppleOutline)
Vue.component('account-multiple', AccountMultiple)
Vue.component('text-box-outline',TextBoxOutline)
Vue.component('check-icon', Check)
Vue.component('pencil-plus', PencilPlus)
Vue.component('delete-icon', Delete)
Vue.component('pencil-icon', Pencil)

import store from './store'
 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
