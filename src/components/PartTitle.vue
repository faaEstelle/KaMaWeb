<template>
    <div class="container part-title">
      <img class="part-title-icon" :src="Title.imgUrl">
      <p class="part-title-text"><span>|</span>{{language=='cn'?Title.cnTitle:Title.enTitle}}</p>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          language:this.$i18n.locale
        }
      },
      props:{
        Title:{cnTitle:'',enTitle:'',imgUrl:''}
      }
    }
</script>
