<template>
  <div class="page-box About">
    <Nav></Nav>
    <div class="about-summary">
      <img src="/static/img/survey.jpg"/>
      <div class="about-title survey">
        <p>{{$t("AboutNav.survey")}}</p>
        <a>{{$t("MoreBtn.more")}}</a>
      </div>
    </div>
    <div class="about-summary">
      <img src="/static/img/develop.jpg"/>
      <div class="about-title develop">
        <p>{{$t("AboutNav.develop")}}</p>
        <a href="/About/Develop">{{$t("MoreBtn.more")}}</a>
      </div>
    </div>
    <div class="about-summary">
      <img src="/static/img/cultrue.jpg"/>
      <div class="about-title culture">
        <p>{{$t("AboutNav.culture")}}</p>
        <a>{{$t("MoreBtn.more")}}</a>
      </div>
    </div>
    <div class="about-summary">
      <img src="/static/img/service.jpg"/>
      <div class="about-title service">
        <p>{{$t("AboutNav.service")}}</p>
        <a>{{$t("MoreBtn.more")}}</a>
      </div>
    </div>
    <div class="about-summary no-bottom">
      <img src="/static/img/certificate.jpg"/>
      <div class="about-title certificate">
        <p>{{$t("AboutNav.certificate")}}</p>
        <a>{{$t("MoreBtn.more")}}</a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Nav from '../components/Nav'
  import Footer from '../components/Footer'
  export default {
    data(){
      return {

      }
    },
    components:{
      Nav,
      Footer
    }
  }
</script>

