<template>
  <div class="page-box">
    <Nav :NavValue="currentNav"></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <p class="inner-nav"><a href="/About">{{$t("Nav.about")}}</a><span class="left-arrow"></span>{{$t("AboutNav.culture")}} </p>
      <div class="page-inner-title">
        <p>{{$t("AboutNav.culture")}}</p>
        <hr/>
      </div>
      <div class="culture-content">
        <div class="spirit">
          <p class="item-title">{{$t("Culture.part1.title")}}</p>
          <p class="item-content">{{$t("Culture.part1.content")}}</p>
        </div>
        <div class="values">
          <p class="item-title">{{$t("Culture.part2.title")}}</p>
          <p class="item-content">{{$t("Culture.part2.content")}}</p>
        </div>
        <div class="corporate-culture">
          <p class="item-title">{{$t("AboutNav.culture")}}</p>
        </div>
        <div class="management">
          <p class="item-title">{{$t("Culture.part3.title")}}</p>
          <p class="item-content">{{$t("Culture.part3.content")}}</p>
        </div>
        <div class="administration">
          <p class="item-title">{{$t("Culture.part4.title")}}</p>
          <p class="item-content">{{$t("Culture.part4.content")}}</p>
        </div>
        <div class="service">
          <p class="item-title">{{$t("Culture.part5.title")}}</p>
          <p class="item-content">{{$t("Culture.part5.content")}}</p>
          <p class="item-content">{{$t("Culture.part5.content2")}}</p>
        </div>
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
