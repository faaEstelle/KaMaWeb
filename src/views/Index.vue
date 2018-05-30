<template>
<div class="page-box">
  <Nav></Nav>
  <Banner></Banner>
  <div class="container index-center">
    <PartTitle></PartTitle>
    <div class="index-about">
      <div class="index-about-text">
        <p>{{$t("Introduce")}}</p>
        <a>{{$t("ReadMore")}}</a>
      </div>
      <div class="index-about-video">
        <video></video>
      </div>
    </div>
  </div>
  <div class="index-map">
  </div>
  <div class="index-product">
    <PartTitle></PartTitle>
  </div>
  <Footer></Footer>

</div>
</template>

<script>
  import Nav from '../components/Nav'
  import Banner from '../components/Banner'
  import PartTitle from '../components/PartTitle'
  import Footer from '../components/Footer'
    export default {
       components:{
         Nav,
         Banner,
         PartTitle,
         Footer
       }
    }
</script>

<style scoped>

</style>
