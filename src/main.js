// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
// import VueI18n from 'vue-i18n'
// import messages from './languages/index'

Vue.config.productionTip = false

// function lang() {
//   let t = localStorage.getItem('language')
//   if(t){return t}
//   else{return 'cn'}
// }
// const language = lang()
//
// const i18n = new VueI18n({
//   locale:language,
//   messages
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
