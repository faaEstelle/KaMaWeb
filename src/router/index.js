import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import About from '../views/About'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path:'/About',
      name:'关于我们',
      component:About
    }
  ]
})
