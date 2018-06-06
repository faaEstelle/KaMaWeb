import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import i18n from './languages'
import $ from 'jquery'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  $,
  i18n,
  components: {App},
  template: '<App/>'
})
