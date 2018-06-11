<template>
<div class="page-box">
  <a id="top"></a>
  <Nav :NavValue="currentNav"></Nav>
  <Banner :Options="BannerData"></Banner>
  <AsideBtn></AsideBtn>
  <div class="container">
    <p class="inner-nav"><a href="/">{{$t("Nav.index")}}</a><span class="left-arrow"></span>{{cnMarkType[markType]}}<span class="left-arrow"></span>{{cnRecruitType[recruitType]}}</p>
    <div class="recruit-content">
      <div class="recruit-info" v-for="i in 3">
        <p class="recruit-position">岗位名称：运营专员</p>
        <p class="recruit-des"><span></span>岗位职责：</p>
        <ul>
          <li>1、理解产品</li>
          <li>2、文案、创意、内容运营（程序抓取网页内容、自己编辑内容输送、设置激励机制让用户自动提交内容）、用户运营、推广运营</li>
          <li>3、数据分析</li>
        </ul>
        <p class="recruit-des"><span></span>岗位要求：</p>
        <ul>
          <li>1、本科以上学历</li>
          <li>2、有互联网运营经验或互联网从业经验</li>
          <li>3、熟练使用OFFICE软件</li>
          <li>4、有PS功底（加分项）</li>
        </ul>
        <p v-if="i !==3" class="recruit-line"></p>
      </div>
      <div class="recruit-mail">
        <span class="recruit-mail-icon"></span>
        <span>请投简历至</span>
        <span>kamamupi@163.com</span>
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
  import AsideBtn from '../components/AsideBtn'
    export default {
      data(){
          return{
            language:this.$i18n.locale,
            markType:this.$route.params.Mark,
            recruitType:this.$route.params.RecruitType,
            currentNav:1,
            BannerData:{
              bannerwidth:'big-width',
              slideList: [
                {
                  "clickUrl": "#",
                  "desc": "nhwc",
                  "image": "/static/img/banner-2.jpg"
                },
                {
                  "clickUrl": "#",
                  "desc": "hxrj",
                  "image": "/static/img/banner-2.jpg"
                },
                {
                  "clickUrl": "#",
                  "desc": "rsdh",
                  "image": "/static/img/banner-2.jpg"
                }
              ],
            },
            cnMarkType:{
              chengdu:'成都卡玛皮木',
              shanghai:'上海卡玛皮木',
              dongguan:'东莞卡玛皮木',
              jiashan:'嘉善卡玛皮木'
            },
            enMarkType:{
              chengdu:'成都卡玛皮木',
              shanghai:'上海卡玛皮木',
              dongguan:'东莞卡玛皮木',
              jiashan:'嘉善卡玛皮木'
            },
            cnRecruitType:{
              1:'运营',
              2:'销售',
              3:'设计',
              4:'程序'
            },
            enRecruitType:{
              1:'运营',
              2:'销售',
              3:'设计',
              4:'程序'
            },

          }
        },
      components:{
        Nav,
        Banner,
        Footer,
        AsideBtn
      }
    }
</script>

<style scoped>

</style>
