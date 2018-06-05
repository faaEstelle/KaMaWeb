import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import About from '../views/About'
import AboutDevelop from '../views/AboutDevelop'
import AboutSurvey from '../views/AboutSurvey'
import AboutCulture from '../views/AboutCulture'
import AboutService from '../views/AboutService'

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
    {
      path:'/About/Survey',
      name:'公司概况',
      component:AboutSurvey
    },
    {
      path:'/About/Culture',
      name:'企业文化',
      component:AboutCulture
    },
    {
      path:'/About/Service',
      name:'优质服务',
      component:AboutService
    }


  ]
})
