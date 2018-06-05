<template>
  <div class="page-box">
    <Nav></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <p class="inner-nav"><a href="/About">{{$t("Nav.about")}}</a><span class="left-arrow"></span>{{$t("AboutNav.culture")}} </p>
      <div class="page-inner-title">
        <p>{{$t("AboutNav.culture")}}</p>
        <hr/>
      </div>
      <div class="culture-content">
        <div class="spirit"></div>
        <div class="values"></div>
        <div class="corporate-culture"></div>
        <div class="management"></div>
        <div class="administration"></div>
        <div class="service"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Nav from '../components/Nav'
  import Banner from '../components/Banner'
  import Footer from '../components/Footer'
  export default {
    data(){
      return{
        BannerData:{
          bannerwidth:'big-width',
          slideList: [
            {
              "clickUrl": "#",
              "desc": "nhwc",
              "image": "/static/img/culturebanner.png"
            },
          ],
        }
      }
    },
    components:{
      Nav,
      Banner,
      Footer
    }
  }
</script>
