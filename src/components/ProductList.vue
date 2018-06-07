<template>
  <ul class="product-list" >
    <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="(item,index) in Options.data" v-if="index < Options.num">
      <div>
        <a class="item-mask">
          <span>{{$t("ProductMask.title")}}</span>
          <span>{{$t("ProductMask.more")}}+</span>
        </a>
        <img :src="item.imgUrl">
        <router-link :to="'/Products/Details/'+item.productName"><p :class="Options.nameStyle">{{item.productName}}</p></router-link>
        <p class="pro-line" v-if="Options.lineState"></p>
        <a class="pro-btn" :class="Options.btnBg" :href="item.buyUrl">{{language === 'cn'?Options.btnText.cnText:Options.btnText.enText}}</a>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        data(){
          return{
            language:this.$i18n.locale
          }
        },
      props:{
          Options:{
            num:0,
            nameStyle:'',
            btnText:{cnText:'',enText:''},
            btnBg:'',
            lineState: false,
            data:[]
          }
      },

    }
</script>

<style scoped>

</style>
