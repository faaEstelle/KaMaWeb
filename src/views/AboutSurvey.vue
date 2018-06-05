<template>
  <div class="page-box">
    <Nav></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <p class="inner-nav"><a href="/About">{{$t("Nav.about")}}</a><span class="left-arrow"></span>{{$t("AboutNav.survey")}} </p>
      <div class="page-inner-title">
        <p>{{$t("AboutNav.survey")}}</p>
        <hr/>
      </div>
      <div class="about-kind">
          <p class="survey-content">{{$t("Survey.part1")}}</p>
          <img src="/static/img/survey-1.png">
          <p class="survey-content">{{$t("Survey.part2")}}</p>
          <img src="/static/img/survey-2.png">
          <p class="survey-content">{{$t("Survey.part3")}}</p>
          <p class="survey-content">{{$t("Survey.part4")}}</p>
          <p class="survey-content">{{$t("Survey.part5")}}</p>
          <p class="survey-content">{{$t("Survey.part6")}}</p>
          <p class="survey-content">{{$t("Survey.part7")}}</p>
          <p class="survey-content">{{$t("Survey.part8")}}</p>
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
                "image": "/static/img/surveybanner.png"
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

