<template>
<div class="page-box">
  <Nav :NavValue="currentNav"></Nav>
  <Banner :Options="BannerData"></Banner>
  <div class="container">
    <div class="page-inner-title">
      <p>{{$t("Nav.case")}}</p>
      <hr/>
    </div>
    <CaseList :Options="CasesData"></CaseList>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
  import Nav from '../components/Nav'
  import Banner from '../components/Banner'
  import CaseList from '../components/CaseList'
  import Footer from '../components/Footer'
    export default {
      data(){
        return{
          currentNav:4,
          BannerData:{
            bannerwidth:'small-width',
            slideList: [
              {
                "clickUrl": "#",
                "desc": "nhwc",
                "image": "/static/img/smallbanner.png"
              },
            ]
          },
          CasesData:{
            num:8,
            data:[
              {imgUrl:'/static/img/case-1.png',caseName:'皮木拼花地板',caseUrl:'#'},
              {imgUrl:'/static/img/case-2.png',caseName:'木皮地板',caseUrl:'#'},
              {imgUrl:'/static/img/case-3.png',caseName:'木皮墙皮',caseUrl:'#'},
              {imgUrl:'/static/img/case-4.png',caseName:'板式贴木皮家具',caseUrl:'#'},
              {imgUrl:'/static/img/case-1.png',caseName:'皮木拼花地板',caseUrl:'#'},
              {imgUrl:'/static/img/case-2.png',caseName:'木皮地板',caseUrl:'#'},
              {imgUrl:'/static/img/case-3.png',caseName:'木皮墙皮',caseUrl:'#'},
              {imgUrl:'/static/img/case-4.png',caseName:'板式贴木皮家具',caseUrl:'#'},
            ]
          },
        }
        },
      components:{
        Nav,
        Banner,
        CaseList,
        Footer,
      }
    }
</script>

<style scoped>

</style>
