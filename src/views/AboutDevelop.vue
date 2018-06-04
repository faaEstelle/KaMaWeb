<template>
  <div class="page-box">
    <Nav></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <p class="inner-nav"><a href="/About">{{$t("Nav.about")}}</a>>发展历程 </p>
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
              "image": "/static/img/developbanner.jpg"
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

<style scoped>

</style>
