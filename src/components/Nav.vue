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
          <li><a class="active" href="/">{{$t("Nav.index")}}</a></li>
          <li><a href="/About" data-type="about">{{$t("Nav.about")}}</a>
          </li>
          <li><a href="#">{{$t("Nav.product")}}</a></li>
          <li><a href="#">{{$t("Nav.case")}}</a></li>
          <li><a href="#">{{$t("Nav.news")}}</a></li>
          <li><a href="#">{{$t("Nav.contact")}}</a></li>
        </ul>
      </div>
    </div>
    <div class="deep-background dropdown-nav" data-vuale="about">
      <ul class="container  about-nav">
        <li><a>{{$t("AboutNav.survey")}}</a></li>
        <li><a>{{$t("AboutNav.develop")}}</a></li>
        <li><a>{{$t("AboutNav.culture")}}</a></li>
        <li><a>{{$t("AboutNav.service")}}</a></li>
        <li><a>{{$t("AboutNav.certificate")}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed:{
      // User(){
      //   return this.$store.getters.GetUser
      // }
    },
    methods:{
      langLocale(type){
      this.$i18n.locale=type
      }
    }
  }
</script>

