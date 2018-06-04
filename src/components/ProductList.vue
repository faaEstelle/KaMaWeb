<template>
  <ul class="product-list" >
    <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="(item,index) in Options.data" v-if="index < Options.num">
      <div>
        <a class="item-mask">
          <span>{{$t("ProductMask.title")}}</span>
          <span>{{$t("ProductMask.more")}}+</span>
        </a>
        <img :src="item.imgUrl">
        <p class="font-size-16">{{item.productName}}</p>
        <a class="product-buy" :href="item.buyUrl">{{language === 'cn'?'购买':'Buy'}}</a>
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
            data:[]
          }
      },

    }
</script>

<style scoped>

</style>
