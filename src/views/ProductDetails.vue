<template>
<div class="page-box">
  <Nav :NavValue="currentNav"></Nav>
  <div class="container">
    <p class="inner-nav">
      <a href="/About">{{$t("Nav.product")}}</a>
      <span class="left-arrow"></span>{{$t("ProductKind.main")}}
      <span class="left-arrow"></span>
    </p>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
  import Nav from '../components/Nav'
  import Footer from  '../components/Footer'
    export default {
      data(){
        return{
          currentNav:3,
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
        }
      },
      components:{
        Nav,
        Footer
      }
    }
</script>

<style scoped>

</style>
