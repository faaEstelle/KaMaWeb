<template>
  <div class="page-box">
    <Nav :NavValue="currentNav"></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <ProductList :Options="ProductsData"></ProductList>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
  import Nav from '../components/Nav'
  import Banner from '../components/Banner'
  import ProductList from '../components/ProductList'
  import Footer from '../components/Footer'
    export default {
      data(){
        return{
          currentNav:3,
          BannerData:{
            bannerwidth:'small-width',
            slideList: [
              {
                "clickUrl": "#",
                "desc": "nhwc",
                "image": "/static/img/smallbanner.png"
              },
            ]
          },
          ProductsData:{
            num:8,
            nameStyle:'font-size-20 center-position',
            btnText:{cnText:'立即预定',enText:'Reservation'},
            btnBg:'product-order',
            lineState: true,
            data:[
              {imgUrl:'/static/img/hongxiang.jpg',productName:'红橡',enName:'',buyUrl:'#'},
              {imgUrl:'/static/img/baixiang.jpg',productName:'白象',enName:'',buyUrl:'#'},
              {imgUrl:'/static/img/fengmu.jpg',productName:'枫木',enName:'',buyUrl:'#'},
              {imgUrl:'/static/img/baishuan.jpg',productName:'白栓',enName:'',buyUrl:'#'},
            ]
          },
        }
      },
      components:{
        Nav,
        Banner,
        ProductList,
        Footer,
      }

    }
</script>

<style scoped>

</style>
