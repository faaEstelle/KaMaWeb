<template>
  <div class="container">
    <span class="logo"></span>
    <ul class="login-register">
      <li><a href="#">中</a></li>
      <li>/</li>
      <li><a href="#">English</a></li>
    </ul>
    <ul class="ch-en">
      <li><a href="#">中</a></li>
      <li>/</li>
      <li><a href="#">English</a></li>
    </ul>
    <ul class="nav">
      <li><a href="#">首页</a></li>
      <li><a href="#">关于我们</a></li>
      <li><a href="#">产品展示</a></li>
      <li><a href="#">产品案例</a></li>
      <li><a href="#">新闻资讯</a></li>
      <li><a href="#">联系我们</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed:{
      User(){
        return this.$store.getters.GetUser
      }
    },
    methods:{
      Regist(){
        this.$store.dispatch('AddUser',this.User)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
