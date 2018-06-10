import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import About from '../views/About'
import AboutDevelop from '../views/AboutDevelop'
import AboutSurvey from '../views/AboutSurvey'
import AboutCulture from '../views/AboutCulture'
import AboutService from '../views/AboutService'
import AboutCertificate from '../views/AboutCertificate'
import Products from '../views/Products'
import ProductDetails from '../views/ProductDetails'
import Cases from '../views/Cases'
import CaseDetails from '../views/CaseDetails'
import News from '../views/News'
import NewsDetail from '../views/NewsDetails'
import ContactUs from '../views/ContactUs'


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
    },
    {
      path:'/About/AboutCertificate',
      name:'认证证书',
      component:AboutCertificate
    },
    {
      path:'/Products',
      name:'产品列表',
      component:Products
    },
    {
      path:'/Products/Details/:productName',
      name:'产品详情',
      component:ProductDetails
    },
    {
      path:'/Cases',
      name:'产品案例',
      component:Cases
    },
    {
      path:'/Cases/Details/:CaseName',
      name:'案例详情',
      component:CaseDetails
    },
    {
      path:'/News',
      name:'企业新闻',
      component:News
    },
    {
      path:'/News/Details/:NewsName',
      name:'新闻详情',
      component:NewsDetail
    },
    {
      path:'/ContactUs',
      name:'联系我们',
      component:ContactUs
    }



  ]
})
