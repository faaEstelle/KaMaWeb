<template>
  <ul class="product-list" >
    <li v-for="item in productList">
      <a class="item-mask">
        <span>{{$t("ProductMask.title")}}</span>
        <span>{{$t("ProductMask.more")}}+</span>
      </a>
      <img :src="item.imgUrl">
      <p>{{item.productName}}</p>
      <a class="product-buy" :href="item.buyUrl">购买</a>
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
