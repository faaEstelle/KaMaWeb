<template>
  <div class="deep-background">
    <div class="container header">
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
    <ul class="nav">
      <li class="active">{{$t("Nav.index")}}</li>
      <li>{{$t("Nav.about")}}</li>
      <li>{{$t("Nav.product")}}</li>
      <li>{{$t("Nav.case")}}</li>
      <li>{{$t("Nav.news")}}</li>
      <li>{{$t("Nav.contact")}}</li>
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

