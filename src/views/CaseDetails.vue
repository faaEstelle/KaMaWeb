<template>
  <div class="page-box">
    <Nav :NavValue="currentNav"></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <p class="inner-nav">
        <a href="/About">{{$t("Nav.case")}}</a>
        <span class="left-arrow"></span>{{$route.params.CaseName}}
      </p>
      <div class="page-inner-title">
        <p>{{$route.params.CaseName}}</p>
      </div>
      <div class="case-details">
        <hr/>
        <img :src="CaseMsg.imgUrl"/>
        <p>{{language=='cn'?CaseMsg.cnCaseInfo:CaseMsg.enCaseInfo}}</p>
        <hr/>
        <div class="case-operate">
          <div class="case-btn">
            <p>{{$t("CaseDetail.last")}}
              <router-link :to="'/Cases/Details/'+CaseMsg.cnLastCase">{{language=='cn'?CaseMsg.cnLastCase:CaseMsg.enLastCase}}</router-link></p>
            <p>{{$t("CaseDetail.next")}}
              <router-link :to="'/Cases/Details/'+CaseMsg.cnNextCase">{{language=='cn'?CaseMsg.cnNextCase:CaseMsg.enNextCase}}</router-link></p>
          </div>
          <div class="case-share">
            <p class="product-share">
              <span>{{$t("CaseDetail.share")}}：</span>
              <a class="weChat"></a>
              <a class="weChat-circle "></a>
              <a class="qq"></a>
              <a class="qq-circle"></a>
              <a class="micro-blog"></a>
              <a class="share"></a>
            </p>
          </div>
        </div>
      </div>
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
          language:this.$i18n.locale,
          currentNav:4,
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
          CaseMsg:{
            imgUrl:'/static/img/case-1.png',
            caseName:'皮木拼花地板',
            cnCaseInfo:'卡玛原木采购运用了最先进的软件，对采购及销售的每一根原木信息进行整理及记录，为客户提供准确无误的文件及信息，确保没一柜原木文件准备齐全，方便客户在目的地收货及迅速完成报关流程。',
            enCaseInfo:'',
            cnLastCase:'工艺品',
            enLastCase:'',
            lastCaseId:'',
            cnNextCase:'游艇',
            enNextCase:'',
            nextCaseId:''
          },
        }
      },
      components:{
        Nav,
        Banner,
        Footer
      }
    }
</script>

<style scoped>

</style>
