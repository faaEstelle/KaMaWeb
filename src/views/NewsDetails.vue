<template>
  <div class="page-box">
    <Nav :NavValue="currentNav"></Nav>
    <Banner :Options="BannerData"></Banner>
    <div class="container">
      <p class="inner-nav">
        <a href="/About">{{$t("Nav.news")}}</a>
        <span class="left-arrow"></span>{{$route.params.NewsName}}
      </p>
      <div class="page-inner-title">
        <p>{{$route.params.NewsName}}</p>
      </div>
      <div class="case-details news-details">
        <hr/>
        <p v-html="language=='cn'?NewsMsg.cnNewsInfo:NewsMsg.enNewsInfo">{{language=='cn'?NewsMsg.cnNewsInfo:NewsMsg.enNewsInfo}}</p>
        <hr/>
        <div class="case-operate">
          <div class="case-btn">
            <p>{{$t("CaseDetail.last")}}
              <router-link :to="'/News/Details/'+NewsMsg.cnLastNews">{{language=='cn'?NewsMsg.cnLastNews:CaseMsg.enLastNews}}</router-link></p>
            <p>{{$t("CaseDetail.next")}}
              <router-link :to="'/News/Details/'+NewsMsg.cnNextNews">{{language=='cn'?NewsMsg.cnNextNews:CaseMsg.enNextNews}}</router-link></p>
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
            currentNav:5,
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
            NewsMsg:{
              imgUrl:'/static/img/case-1.png',
              newsName:'卡玛励志--高端精品木皮优质供应商',
              cnNewsInfo:'<p>原资料源强势 性价比优势尽显</p><p>目前，卡玛公司遍及全球的原木采购供应链保障了资源供应的优势。为企业持续发展做好充足的后续资源保证；与五大洲同行保持着良好的贸易往来，提供北美材、欧洲材与非洲材的供应保障</p><img src="/static/img/news-img.png"><p>卡玛原木采购运用了最先进的软件，对采购及销售的每一根原木信息进行整理及记录，为客户提供准确无误的文件及信息，确保没一柜原木文件准备齐全，方便客户在目的地收货及迅速完成报关流程</p><img src="/static/img/news-img2.png">',
              enNewsInfo:'',
              cnLastNews:'卡玛励志--高端精品木皮优质供应商',
              enLastNews:'',
              lastNewsId:'',
              cnNextNews:'卡皮励志--高端精品木皮优质供应商',
              enNextNews:'',
              nextNewsId:''
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
