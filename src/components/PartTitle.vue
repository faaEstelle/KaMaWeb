<template>
    <div class="container part-title">
      <img class="part-title-icon" :src="imgUrl">
      <p class="part-title-text"><span>|</span>{{text}}</p>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          imgUrl:'/static/img/parttitle-1.png',
          text:'关于我们'
        }
      }
    }
</script>
