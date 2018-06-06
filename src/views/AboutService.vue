<template>
  <div class="page-box">
    <Nav :NavValue="currentNav"></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <p class="inner-nav"><a href="/About">{{$t("Nav.about")}}</a><span class="left-arrow"></span>{{$t("AboutNav.service")}} </p>
      <div class="page-inner-title">
        <p>{{$t("AboutNav.service")}}</p>
        <hr/>
      </div>
      <div class="service-content">
        <div>
          <p class="service-title">{{$t("Service.service1.title")}}</p>
          <ul>
            <li>{{$t("Service.service1.item1")}}</li>
            <li>{{$t("Service.service1.item2")}}</li>
          </ul>
        </div>
        <div>
          <p class="service-title">{{$t("Service.service2.title")}}</p>
          <ul>
            <li>{{$t("Service.service2.item1")}}</li>
            <li>{{$t("Service.service2.item2")}}</li>
            <li>{{$t("Service.service2.item3")}}</li>
            <li>{{$t("Service.service2.item4")}}</li>
          </ul>
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
              "image": "/static/img/servicebanner.png"
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
