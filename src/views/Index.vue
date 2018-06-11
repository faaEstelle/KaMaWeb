<template>
<div class="page-box">
  <a id="top"></a>
  <Nav :NavValue="currentNav"></Nav>
  <Banner :Options="BannerData"></Banner>
  <AsideBtn></AsideBtn>
  <div class="index-center">
    <div class="index-about padding-bo-60">
      <PartTitle :Title="PartTitles[0]"></PartTitle>
      <div class="container">
        <div class="index-about-text">
          <p class="font-size-20">{{$t("Introduce")}}</p>
          <a class="more-btn">{{$t("MoreBtn.read")}}</a>
        </div>
        <div class=" index-about-video">
          <video></video>
        </div>
      </div>
    </div>
  </div>
  <div class="index-map">
    <p>{{$t("doorMarket.distribution")}}</p>
    <div class="china-map">
      <div class="distribution chengdu">
        <router-link to="/Mark/chengdu">{{$t("doorMarket.chengdu")}}</router-link>
        <span></span>
      </div>
      <div class="distribution shanghai">
        <router-link to="/Mark/shanghai">{{$t("doorMarket.shanghai")}}</router-link>
        <span></span>
      </div>
      <div class="distribution dongguan">
        <span></span>
        <router-link to="/Mark/dongguan">{{$t("doorMarket.dongguan")}}</router-link>
      </div>
      <div class="distribution jiashan">
        <span></span>
        <router-link to="/Mark/jiashan">{{$t("doorMarket.jiashan")}}</router-link>
      </div>
    </div>
  </div>
  <div class="index-product padding-bo-60">
    <PartTitle :Title="PartTitles[1]"></PartTitle>
    <div class="container">
      <ProductList :Options="ProductsData"></ProductList>
    </div>
    <div class="container">
      <a href="#" class="more-btn">{{$t("MoreBtn.product")}}</a>
    </div>
  </div>
  <div class="index-case padding-bo-60">
    <PartTitle :Title="PartTitles[2]"></PartTitle>
    <div class="container">
      <CaseList :Options="CasesData"></CaseList>
    </div>
    <div class="container">
      <a href="#" class="more-btn">{{$t("MoreBtn.case")}}</a>
    </div>
  </div>
  <div class="index-news padding-bo-60">
    <PartTitle :Title="PartTitles[3]"></PartTitle>
    <div class="container">
      <NewsList :Options="NewsData"></NewsList>
    </div>
    <div class="container">
      <a href="#" class="more-btn">{{$t("MoreBtn.news")}}</a>
    </div>
  </div>
  <div class="index-partner padding-bo-60">
    <div class="container">
      <p class="title">{{$t("Partner.title")}}</p>
      <p class="description">{{$t("Partner.description")}}</p>
      <ul class="partner-list">
        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6 partner-1"></li>
        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6 partner-2"></li>
        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6 partner-3"></li>
        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6 partner-4"></li>
        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6 partner-5"></li>
        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6 partner-6"></li>
        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6 partner-7"></li>
        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6 partner-8"></li>
      </ul>
    </div>
  </div>
  <Footer></Footer>

</div>
</template>

<script>
  import Nav from '../components/Nav'
  import Banner from '../components/Banner'
  import PartTitle from '../components/PartTitle'
  import ProductList from '../components/ProductList'
  import CaseList from '../components/CaseList'
  import NewsList from '../components/NewsList'
  import Footer from '../components/Footer'
  import AsideBtn from '../components/AsideBtn'
    export default {
       data(){
         return{
           currentNav:1,
           BannerData:{
             bannerwidth:'big-width',
             slideList: [
               {
                 "clickUrl": "#",
                 "desc": "nhwc",
                 "image": "/static/img/banner-1.png"
               },
               {
                 "clickUrl": "#",
                 "desc": "hxrj",
                 "image": "/static/img/banner-2.jpg"
               },
               {
                 "clickUrl": "#",
                 "desc": "rsdh",
                 "image": "/static/img/banner-1.png"
               }
             ],
           },
           PartTitles:[
             {cnTitle:'关于我们',enTitle:'',imgUrl:'/static/img/parttitle-1.png'},
             {cnTitle:'产品展示',enTitle:'',imgUrl:'/static/img/parttitle-2.png'},
             {cnTitle:'产品案例',enTitle:'',imgUrl:'/static/img/parttitle-3.png'},
             {cnTitle:'新闻资讯',enTitle:'',imgUrl:'/static/img/parttitle-4.png'},
           ],
           ProductsData:{
             num:8,
             nameStyle:'font-size-16 left-position',
             btnText:{cnText:'购买',enText:'Buy'},
             btnBg:'product-buy',
             lineState:false,
             data:[
               {imgUrl:'/static/img/product-1.png',productName:'美国东部的红橡',enName:'',buyUrl:'#'},
               {imgUrl:'/static/img/product-2.png',productName:'黑白檀',enName:'',buyUrl:'#'},
               {imgUrl:'/static/img/product-3.png',productName:'黑胡桃',enName:'',buyUrl:'#'},
               {imgUrl:'/static/img/product-4.png',productName:'尼斯',enName:'',buyUrl:'#'},
               {imgUrl:'/static/img/product-5.png',productName:'乌木',enName:'',buyUrl:'#'},
               {imgUrl:'/static/img/product-6.png',productName:'沙比利',enName:'',buyUrl:'#'},
               {imgUrl:'/static/img/product-7.png',productName:'酸枝',enName:'',buyUrl:'#'},
               {imgUrl:'/static/img/product-8.png',productName:'树溜染色',enName:'',buyUrl:'#'},
             ]
           },
           CasesData:{
             num:4,
             data:[
               {imgUrl:'/static/img/case-1.png',caseName:'皮木拼花地板',caseUrl:'#'},
               {imgUrl:'/static/img/case-2.png',caseName:'木皮地板',caseUrl:'#'},
               {imgUrl:'/static/img/case-3.png',caseName:'木皮墙皮',caseUrl:'#'},
               {imgUrl:'/static/img/case-4.png',caseName:'板式贴木皮家具',caseUrl:'#'},
             ]
           },
           NewsData:{
             num:3,
             data:[
               {date:'05/10',year:'2018',title:'红橡山AAA级',imgUrl:'/static/img/news-1.png',content:' 东莞市卡玛木业供应大量北美木材，现供应红橡山纹AAA级，品质保证，价格实惠，欢迎新老客户前来咨询、洽谈，我们卡玛木业将以最优惠的价格供你考虑，也可来本店亲自挑选你所需要的产品，卡玛木业一直是以专注。真诚为核心的销售理念，为未来品牌打造良好的开端，欢迎有意向者的朋友前来购买'},
               {date:'05/10',year:'2018',title:'红橡山AAA级',imgUrl:'/static/img/news-2.png',content:' 东莞市卡玛木业供应大量北美木材，现供应红橡山纹AAA级，品质保证，价格实惠，欢迎新老客户前来咨询、洽谈，我们卡玛木业将以最优惠的价格供你考虑，也可来本店亲自挑选你所需要的产品，卡玛木业一直是以专注。真诚为核心的销售理念，为未来品牌打造良好的开端，欢迎有意向者的朋友前来购买'},
               {date:'05/10',year:'2018',title:'红橡山AAA级',imgUrl:'/static/img/news-3.png',content:' 东莞市卡玛木业供应大量北美木材，现供应红橡山纹AAA级，品质保证，价格实惠，欢迎新老客户前来咨询、洽谈，我们卡玛木业将以最优惠的价格供你考虑，也可来本店亲自挑选你所需要的产品，卡玛木业一直是以专注。真诚为核心的销售理念，为未来品牌打造良好的开端，欢迎有意向者的朋友前来购买'},
             ]
           }
         }
       },
       components:{
         Nav,
         Banner,
         PartTitle,
         ProductList,
         CaseList,
         NewsList,
         Footer,
         AsideBtn
       }
    }
</script>

