import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import About from '../views/About'
import AboutDevelop from '../views/AboutDevelop'

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
    },
    {
      path:'/About/Develop',
      name:'发展历程',
      component:AboutDevelop
    },

  ]
})
