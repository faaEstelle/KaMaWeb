<template>
  <div class="page-box">
    <Nav></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <p class="inner-nav"><a href="/About">{{$t("Nav.about")}}</a><span class="left-arrow"></span>{{$t("AboutNav.develop")}}</p>
      <div class="page-inner-title">
        <p>{{$t("AboutNav.develop")}}</p>
        <hr/>
      </div>
      <div class="about-kind develop-time-line">
        <div class="develop-left">
          <div class="time-2017">
            <p class="time-line">2017</p>
            <p class="time-mileage">{{$t("Develop.step8")}}</p>
          </div>
          <div class="time-2013">
            <p class="time-line">2013</p>
            <p class="time-mileage">{{$t("Develop.step6")}}</p>
          </div>
          <div class="time-2010">
            <p class="time-line">2010</p>
            <p class="time-mileage">{{$t("Develop.step4")}}</p>
          </div>
          <div class="time-2006">
            <p class="time-line">2006</p>
            <p class="time-mileage">{{$t("Develop.step2")}}</p>
          </div>
        </div>
        <div class="develop-line">
          <div class="spot-line"></div>
          <ul class="line-spot">
            <li  v-for="i in 8" ></li>
          </ul>
        </div>
        <div class="develop-right">
          <div class="time-2015">
            <p class="time-line">2015</p>
            <p class="time-mileage">{{$t("Develop.step7")}}</p>
          </div>
          <div class="time-2011">
            <p class="time-line">2011</p>
            <p class="time-mileage">{{$t("Develop.step5")}}</p>
          </div>
         <div class="time-2008">
           <p class="time-line">2008</p>
           <p class="time-mileage">{{$t("Develop.step3")}}</p>
         </div>
         <div class="time-2003">
           <p class="time-line">2003</p>
           <p class="time-mileage">{{$t("Develop.step1")}}</p>
         </div>
        </div>
      </div>
      <p class="about-footer">
        一串串珍贵的历史足迹，回顾往昔/激情无限，展望未来、奋勇前行，我们就是这样接受挑战、趁势而上，在磨砺中逐步成长，在服务中日渐成熟，在感悟中走向成功。
      </p>
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
