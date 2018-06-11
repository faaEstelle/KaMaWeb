<template>
    <div class="page-box">
      <div class="login-top">
        <div class="container">
         <div class="login-logo"></div>
          <p><span>{{$t("LoginRegister.register")}}</span> | <span>{{$t("LoginRegister.login")}}</span></p>
        </div>
      </div>
      <div class="login-center">
        <div class="container">
          <form>
            <label>邮箱：</label><input type="email"/>
            <label>输入密码：</label><input type="password"/>
            <label>输入验证码：</label><input name="identifying" type="text"/><span class="box-border identifying-img"></span>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
