<template>
  <div class="deep-background">
    <div class="deep-background header">
      <div class="container">
        <span class="logo"></span>
        <ul class="login-register">
          <li>{{$t("LoginRegister.login")}}</li>
          <li>|</li>
          <li>{{$t("LoginRegister.register")}}</li>
        </ul>
        <ul class="ch-en">
          <li @click="langLocale('cn')">中</li>
          <li>/</li>
          <li @click="langLocale('en')">English</li>
        </ul>
        <ul class="nav nav-tabs">
          <li><a :class="NavValue==1?'active':''" href="/">{{$t("Nav.index")}}</a></li>
          <li><a @mouseover="overShow('about')" @mouseout="outHide" :class="NavValue==2?'active':''" href="/About" data-type="about">{{$t("Nav.about")}}</a>
          </li>
          <li><a :class="NavValue==3?'active':''" href="/Products">{{$t("Nav.product")}}</a></li>
          <li><a :class="NavValue==4?'active':''" href="#">{{$t("Nav.case")}}</a></li>
          <li><a :class="NavValue==5?'active':''" href="#">{{$t("Nav.news")}}</a></li>
          <li><a :class="NavValue==6?'active':''" href="#">{{$t("Nav.contact")}}</a></li>
        </ul>
      </div>
    </div>
    <div class="deep-background dropdown-nav" :class="dropNav=='about'?'visible':'no-visible'">
      <ul class="container  about-nav">
        <li><a href="/About/Survey">{{$t("AboutNav.survey")}}</a></li>
        <li><a href="/About/Develop">{{$t("AboutNav.develop")}}</a></li>
        <li><a href="/About/Culture">{{$t("AboutNav.culture")}}</a></li>
        <li><a href="/About/Service">{{$t("AboutNav.service")}}</a></li>
        <li><a href="/About/AboutCertificate">{{$t("AboutNav.certificate")}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          dropNav:''
      }
    },
    props:{
      NavValue:0
    },
    computed:{
      // User(){
      //   return this.$store.getters.GetUser
      // }
    },
    methods:{
      langLocale(type){
      this.$i18n.locale=type
      },
      overShow(type){
        this.dropNav = type
      },
      outHide(){
        this.dropNav = 'no-visible'
      }
    }
  }
</script>

