<template>
  <div class="page-box">
    <Nav :NavValue="currentNav"></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <p class="inner-nav"><a href="/About">{{$t("Nav.about")}}</a><span class="left-arrow"></span>{{$t("AboutNav.certificate")}} </p>
      <div class="page-inner-title">
        <p>{{$t("AboutNav.certificate")}}</p>
        <hr/>
      </div>
      <div class="about-kind">

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
          currentNav:2,
          BannerData:{
            bannerwidth:'big-width',
            slideList: [
              {
                "clickUrl": "#",
                "desc": "nhwc",
                "image": "/static/img/certificatebanner.png"
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

