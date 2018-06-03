<template>
<div class="page-box">
  <Nav></Nav>
  <Banner></Banner>
  <div class="index-center">
    <div class="index-about padding-bo-60">
      <PartTitle></PartTitle>
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
    <img src="../../static/img/ditu.png"/>
  </div>
  <div class="index-product padding-bo-60">
    <PartTitle></PartTitle>
    <div class="container">
      <ProductList></ProductList>
    </div>
    <div class="container">
      <a href="#" class="more-btn">{{$t("MoreBtn.product")}}</a>
    </div>
  </div>
  <div class="index-case padding-bo-60">
    <PartTitle></PartTitle>
    <div class="container">
      <CaseList></CaseList>
    </div>
    <div class="container">
      <a href="#" class="more-btn">{{$t("MoreBtn.case")}}</a>
    </div>
  </div>
  <div class="index-news padding-bo-60">
    <PartTitle></PartTitle>
    <div class="container">
      <NewsList></NewsList>
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
    export default {
       components:{
         Nav,
         Banner,
         PartTitle,
         ProductList,
         CaseList,
         NewsList,
         Footer
       }
    }
</script>

