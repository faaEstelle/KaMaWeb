<template>
  <ul class="product-list" >
    <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="item in productList">
      <div>
        <a class="item-mask">
          <span>{{$t("ProductMask.title")}}</span>
          <span>{{$t("ProductMask.more")}}+</span>
        </a>
        <img :src="item.imgUrl">
        <p class="font-size-16">{{item.productName}}</p>
        <a class="product-buy" :href="item.buyUrl">购买</a>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        data(){
          return{
            productList:[
              {imgUrl:'/static/img/product-1.png',productName:'美国东部的红橡',buyUrl:'#'},
              {imgUrl:'/static/img/product-2.png',productName:'黑白檀',buyUrl:'#'},
              {imgUrl:'/static/img/product-3.png',productName:'黑胡桃',buyUrl:'#'},
              {imgUrl:'/static/img/product-4.png',productName:'尼斯',buyUrl:'#'},
              {imgUrl:'/static/img/product-5.png',productName:'乌木',buyUrl:'#'},
              {imgUrl:'/static/img/product-6.png',productName:'沙比利',buyUrl:'#'},
              {imgUrl:'/static/img/product-7.png',productName:'酸枝',buyUrl:'#'},
              {imgUrl:'/static/img/product-8.png',productName:'树溜染色',buyUrl:'#'},
            ]
          }
        }
    }
</script>

<style scoped>

</style>
