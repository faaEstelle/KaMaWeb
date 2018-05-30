<template>
<div class="page-box">
  <Nav></Nav>
  <Banner></Banner>
  <PartTitle></PartTitle>
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
