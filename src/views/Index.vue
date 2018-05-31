<template>
<div class="page-box">
  <Nav></Nav>
  <Banner></Banner>
  <div class="container index-center">
    <PartTitle></PartTitle>
    <div class="index-about">
      <div class="index-about-text">
        <p>{{$t("Introduce")}}</p>
        <a class="more-btn">{{$t("MoreBtn.read")}}</a>
      </div>
      <div class="index-about-video">
        <video></video>
      </div>
    </div>
  </div>
  <div class="index-map">
    <img src="../../static/img/ditu.png"/>
  </div>
  <div class="index-product">
    <PartTitle></PartTitle>
    <div class="container">
      <ProductList></ProductList>
      <a href="#" class="more-btn">{{$t("MoreBtn.product")}}</a>
    </div>
  </div>
  <div class="index-case">
    <PartTitle></PartTitle>
    <div class="container">
      <CaseList></CaseList>
      <a href="#" class="more-btn">{{$t("MoreBtn.case")}}</a>
    </div>
  </div>
  <div class="index-news">
    <PartTitle></PartTitle>
    <div class="container">
      <NewsList></NewsList>
      <a href="#" class="more-btn">{{$t("MoreBtn.news")}}</a>
    </div>
  </div>
  <div class="index-partner">
    <div class="container">
      <p class="title">{{$t("Partner.title")}}</p>
      <p class="description">{{$t("Partner.description")}}</p>
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

<style scoped>

</style>
