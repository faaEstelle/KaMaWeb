<template>
  <div class="page-box">
    <Nav :NavValue="currentNav"></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <div class="page-inner-title">
        <p>{{$t("Nav.contact")}}</p>
        <hr/>
      </div>
      <div class="contact-us">
        <div class="contact-box">
          <div class="content-info">
            <p class="company-name">{{$t("ContactInfo.company")}}</p>
            <p>{{$t("ContactInfo.phone")}}</p>
            <p>{{$t("ContactInfo.fax")}}</p>
            <p>{{$t("ContactInfo.name")}}</p>
            <p>{{$t("ContactInfo.name2")}}</p>
            <p>{{$t("ContactInfo.email")}}</p>
            <p>{{$t("ContactInfo.address")}}</p>
            <p>{{$t("ContactInfo.website")}}</p>
            <p>{{$t("ContactInfo.internetShop")}}</p>
          </div>
        </div>
        <div class="contact-tab">
          <p class="leave-msg">{{$t("ContactInfo.leavingMsg")}}</p>
          <p><label>{{$t("ProductDetail.contacts")}}：</label><input type="text"/></p>
          <p><label>{{$t("ProductDetail.call")}}</label><input type="tel"/></p>
          <p><label>{{$t("ProductDetail.mail")}}</label><input type="email"/></p>
          <p><label>{{$t("ContactInfo.content")}}</label><textarea></textarea></p>
          <p><label>{{$t("ProductDetail.identifying")}}</label><input type="text"/></p>
          <div class="order-btn">
            <button class="submit">{{$t("ProductDetail.submit")}}</button>
            <button class="reset">{{$t("ProductDetail.reset")}}</button>
          </div>
        </div>
      </div>
      <div class="contact-map"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Nav from '../components/Nav'
  import Banner from '../components/Banner'

  import Footer from '../components/Footer'
  export default {
    data(){
      return{
        currentNav:6,
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
      }
    },
    components:{
      Nav,
      Banner,

      Footer
    },
  }
</script>

<style scoped>

</style>
